const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const NOTION_SECRET = (process.env.NOTION_SECRET || '').trim();
const NOTION_DATABASE_ID = (process.env.NOTION_DATABASE_ID || '').replace(/"/g, '').trim();

async function fetchNotionPages() {
  const pages = [];
  const fetch = (...args) => import('node-fetch').then(m => m.default(...args));

  let next_cursor = null;
  do {
    const url = `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`;
    const body = next_cursor ? { start_cursor: next_cursor } : {};
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_SECRET}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Notion API error: ${res.status} ${txt}`);
    }
    const data = await res.json();
    if (Array.isArray(data.results)) {
      pages.push(...data.results);
    }
    next_cursor = data.has_more ? data.next_cursor : null;
  } while (next_cursor);
  return pages;
}

function propText(prop) {
  if (!prop) return '';
  if (prop.title) {
    return prop.title.map(t => t.plain_text).join('');
  }
  if (prop.rich_text) {
    return prop.rich_text.map(t => t.plain_text).join('');
  }
  if (prop.rich_text === undefined && prop.type === 'rich_text' && Array.isArray(prop[prop.type])) {
    return prop[prop.type].map(t => t.plain_text).join('');
  }
  if (prop.select && prop.select.name) return prop.select.name;
  if (prop.number !== undefined && prop.number !== null) return String(prop.number);
  if (prop.formula && prop.formula.string) return prop.formula.string;
  return '';
}

async function main() {
  console.log('Fetching from Notion...');
  const pages = await fetchNotionPages();
  
  const notionData = {};
  pages.forEach(page => {
    const props = page.properties || {};
    
    // Find answer
    let answer = '';
    for (const k of Object.keys(props)) {
      if (/^어휘$|^뜻 \(클릭|^meaning$|^vocab$|^word$/.test(k)) {
        answer = propText(props[k]);
        break;
      }
    }
    
    // Find meaning
    let meaning = '';
    for (const k of Object.keys(props)) {
      if (/^뜻$|^meaning$|^definition$|^설명$/.test(k)) {
        meaning = propText(props[k]);
        break;
      }
    }
    
    if (answer) {
      notionData[answer] = meaning;
    }
  });
  
  // Load current questions.js
  const content = fs.readFileSync('/Users/gyo/Desktop/youbuddywords2026_members3/questions.js', 'utf8');
  const match = content.match(/const QUESTIONS =\s*(\[[\s\S]*?\]);/m);
  const QUESTIONS = JSON.parse(match[1]);
  
  console.log('\n📝 오늘 바뀐 뜻:\n');
  
  let changed = 0;
  QUESTIONS.forEach((q, idx) => {
    const answer = q.answer;
    const currentMeaning = q.meaning;
    const newMeaning = notionData[answer];
    
    if (newMeaning && currentMeaning !== newMeaning) {
      changed++;
      console.log(`${changed}. ${answer}`);
      console.log(`   현재: ${currentMeaning}`);
      console.log(`   Notion: ${newMeaning}`);
      console.log();
    }
  });
  
  if (changed === 0) {
    console.log('변경된 항목이 없습니다.');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
