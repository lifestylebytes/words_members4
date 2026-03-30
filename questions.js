// questions.js

const QUESTIONS = [
  {
    "answer": "guiding principle",
    "prefix": "Speed is a ",
    "suffix": " for this sprint.",
    "meaning": "판단 기준이 되는 원칙",
    "translation": "이번 스프린트의 판단 기준(원칙)은 속도예요.",
    "category": "유의어",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "North Star",
    "prefix": "Let’s align on our ",
    "suffix": " for this project.",
    "meaning": "최종 목표/방향성(팀이 흔들릴 때 돌아갈 기준)",
    "translation": "이 프로젝트의 핵심 방향(최종 기준)을 먼저 맞춰봅시다.",
    "category": "기본",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "sync up on",
    "prefix": "Can we ",
    "suffix": " the rollout plan later today?",
    "meaning": "~에 대해 빠르게 맞추다/짧게 싱크하다",
    "translation": "오늘 늦게 배포 계획 잠깐 짧게 맞출 수 있을까요?",
    "category": "유의어",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "kick off",
    "prefix": "We’ll ",
    "suffix": " the project with a short meeting.",
    "meaning": "(프로젝트/미팅을) 시작하다",
    "translation": "짧은 킥오프 미팅으로 프로젝트를 시작할게요.",
    "category": "기본",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "get started",
    "prefix": "Let’s ",
    "suffix": " with a quick round of introductions.",
    "meaning": "시작하다/착수하다",
    "translation": "간단히 자기소개부터 시작하죠.",
    "category": "유의어",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "launch",
    "prefix": "We’re planning to ",
    "suffix": " the new feature in April.",
    "meaning": "(제품/프로젝트를) 론칭하다, 출시하다",
    "translation": "4월에 새 기능을 출시할 예정입니다.",
    "category": "유의어",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "true north",
    "prefix": "This metric is our ",
    "suffix": " for decision-making.",
    "meaning": "진짜 방향/핵심 방향",
    "translation": "이 지표가 의사결정의 핵심 기준입니다.",
    "category": "유의어",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "align on",
    "prefix": "Before we start, let’s ",
    "suffix": " the timeline and scope.",
    "meaning": "(기준/이해/방향을) 맞추다, 정렬하다",
    "translation": "시작하기 전에 일정과 범위를 먼저 맞춰봅시다.",
    "category": "기본",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "get on the same page",
    "prefix": "Let’s ",
    "suffix": " about who owns what.",
    "meaning": "같은 이해를 갖다/의견을 맞추다",
    "translation": "누가 무엇을 맡는지에 대해 같은 이해를 갖고 갑시다.",
    "category": "유의어",
    "day": 1,
    "addedDate": "2026-03-23"
  },
  {
    "answer": "If I understood correctly,",
    "prefix": "",
    "suffix": " the deadline is flexible.",
    "meaning": "제가 맞게 이해했다면",
    "translation": "제가 맞게 이해했다면, 마감은 유동적이네요.",
    "category": "유의어",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "highlighting the risk around",
    "prefix": "You’re ",
    "suffix": " resource constraints.",
    "meaning": "~ 관련 리스크를 짚고 계시네요",
    "translation": "리소스 제약 관련 리스크를 짚고 계시네요.",
    "category": "유의어",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "Bottom line,",
    "prefix": "",
    "suffix": " we can’t commit by Friday.",
    "meaning": "결론적으로 / 핵심만 말하면",
    "translation": "결론적으로 금요일까지 확답(커밋)하기 어려워요.",
    "category": "유의어",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "at the core",
    "prefix": "",
    "suffix": ", we need clarity on scope and ownership.",
    "meaning": "핵심은 / 본질적으로 (요지는)",
    "translation": "핵심은 스코프와 담당(오너)을 명확히 하는 거예요.",
    "category": "기본",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "differing views on",
    "prefix": "We have ",
    "suffix": " whether we should ship now.",
    "meaning": "~에 대해 의견이 달라요",
    "translation": "지금 출시할지에 대해 의견이 갈려요.",
    "category": "유의어",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "two main perspectives",
    "prefix": "There seem to be ",
    "suffix": " here: speed vs. risk.",
    "meaning": "(크게) 두 가지 주요 관점",
    "translation": "크게 두 관점이 있어요: 속도 vs 리스크.",
    "category": "기본",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "The key point is,",
    "prefix": "",
    "suffix": " we need a single decision-maker.",
    "meaning": "핵심 포인트는",
    "translation": "핵심은 의사결정자가 1명 필요하다는 거예요",
    "category": "유의어",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "So you’re saying…",
    "prefix": "",
    "suffix": " we should prioritize quality over speed.",
    "meaning": "그러니까 ~라는 말씀이죠?",
    "translation": "그러니까 속도보다 품질을 우선하자는 말씀이죠.",
    "category": "유의어",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "just to clarify",
    "prefix": "",
    "suffix": ", are you suggesting we delay the launch by a week?",
    "meaning": "확인차 여쭤보는데 / 정확히 확인하자면",
    "translation": "확인차 여쭤보는데, 출시를 1주 미루자는 말씀이세요?",
    "category": "기본",
    "day": 2,
    "addedDate": "2026-03-24"
  },
  {
    "answer": "switched gears to",
    "prefix": "Would you mind if we ",
    "suffix": " the budget discussion?",
    "meaning": "~로 화제를(기어를) 전환하다",
    "translation": "예산 논의로 화제를 전환해도 될까요?",
    "category": "기본",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "I’d like to shift to",
    "prefix": "If it’s okay, ",
    "suffix": " next steps.",
    "meaning": "~로 넘어가고 싶어요",
    "translation": "괜찮으시면 다음 단계로 넘어가고 싶어요.",
    "category": "유의어",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "Just in case",
    "prefix": "",
    "suffix": " you missed it, I sent the deck this morning.",
    "meaning": "혹시 몰라서 / 만약을 대비해서",
    "translation": "혹시 못 보셨을까 봐, 오늘 아침 덱 보냈어요.",
    "category": "유의어",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "ICYMI",
    "prefix": "",
    "suffix": ", we pushed the deadline to Friday.",
    "meaning": "혹시 못 보셨을까 봐 / 놓치셨을까 봐",
    "translation": "혹시 못 보셨을까 봐, 마감일을 금요일로 미뤘어요.",
    "category": "기본",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "Before we move on,",
    "prefix": "",
    "suffix": " can I ask one thing?",
    "meaning": "넘어가기 전에",
    "translation": "넘어가기 전에, 한 가지 여쭤봐도 될까요?",
    "category": "유의어",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "As a heads-up,",
    "prefix": "",
    "suffix": " the deadline has moved to Friday.",
    "meaning": "미리 공유드리자면 / 참고로 알려드리면",
    "translation": "참고로 미리 말씀드리면, 마감일이 금요일로 변경됐어요.",
    "category": "유의어",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "Speaking of which,",
    "prefix": "",
    "suffix": " how’s the timeline looking?",
    "meaning": "그 얘기 나온 김에",
    "translation": "그 얘기 나온 김에, 일정은 어떻게 되어가요?",
    "category": "유의어",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "On that note",
    "prefix": "",
    "suffix": ", could we confirm the owner for this?",
    "meaning": "그 얘기 나온 김에 / 그 맥락에서",
    "translation": "그 얘기 나온 김에, 이 건 담당자(오너) 확인할 수 있을까요?",
    "category": "기본",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "That reminds me,",
    "prefix": "",
    "suffix": " I sent you the draft yesterday.",
    "meaning": "그거 생각나서 말인데",
    "translation": "그거 생각나서 말인데, 어제 초안 보냈어요.",
    "category": "유의어",
    "day": 3,
    "addedDate": "2026-03-25"
  },
  {
    "answer": "I’m not convinced",
    "prefix": "",
    "suffix": " this will scale.",
    "meaning": "확신이 안 들어요.",
    "translation": "이게 확장 가능할지 확신이 안 들어요.",
    "category": "유의어",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "voice a concern",
    "prefix": "She decided to ",
    "suffix": " about the schedule.",
    "meaning": "우려를 말로 꺼내다",
    "translation": "그녀가 일정에 대해 우려를 표현했어요.",
    "category": "유의어",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "have concerns",
    "prefix": "I ",
    "suffix": " about that for compliance reasons.",
    "meaning": "우려/걱정이 든다.",
    "translation": "규정 준수 측면에서 그 부분이 우려돼요.",
    "category": "유의어",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "best approach.",
    "prefix": "I’m not sure that’s the ",
    "suffix": " given our timeline.",
    "meaning": "최선의 방법(접근)",
    "translation": "우리 일정상 그게 최선인지는 확신이 없어요.",
    "category": "기본",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "That makes sense, but",
    "prefix": "",
    "suffix": " it could increase scope.",
    "meaning": "그건 말이 되는데…",
    "translation": "말은 되지만, 범위가 늘어날 수 있어요.",
    "category": "유의어",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "I see where you’re coming from",
    "prefix": "",
    "suffix": ", but I’m worried about the risk.",
    "meaning": "무슨 말인지 이해해요.",
    "translation": "무슨 말인지 이해해요. 다만 그 리스크가 걱정돼요.",
    "category": "기본",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "flag a concern",
    "prefix": "I want to ",
    "suffix": " before we proceed.",
    "meaning": "우려를 표시하다/알리다",
    "translation": "진행하기 전에 우려를 알리고 싶어요.",
    "category": "유의어",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "I get your point, but",
    "prefix": "",
    "suffix": " we may not have enough time.",
    "meaning": "포인트는 이해했는데…",
    "translation": "이해는 했는데, 시간이 부족할 수 있어요.",
    "category": "유의어",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "raise a concern",
    "prefix": "I want to ",
    "suffix": " about the scope.",
    "meaning": "우려를 제기하다",
    "translation": "범위에 대해 우려를 제기하고 싶어요.",
    "category": "기본",
    "day": 4,
    "addedDate": "2026-03-26"
  },
  {
    "answer": "compromise",
    "prefix": "Let’s find a ",
    "suffix": " we can both accept.",
    "meaning": "타협",
    "translation": "서로 받아들일 수 있는 타협안을 찾죠.",
    "category": "유의어",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "bottleneck",
    "prefix": "QA is becoming a ",
    "suffix": " right now.",
    "meaning": "병목(막히는 지점)",
    "translation": "지금 QA가 병목 구간이 되고 있어요.",
    "category": "기본",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "blocker",
    "prefix": "This dependency is a ",
    "suffix": " for us.",
    "meaning": "방해 요소/막는 것",
    "translation": "이 의존성이 우리에겐 막는 요소예요.",
    "category": "유의어",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "give-and-take",
    "prefix": "Negotiation is all about ",
    "suffix": ".",
    "meaning": "주고받기/상호 양보",
    "translation": "협상은 결국 주고받기죠.",
    "category": "유의어",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "constraint",
    "prefix": "Budget is our biggest ",
    "suffix": ".",
    "meaning": "제약 조건",
    "translation": "예산이 가장 큰 제약이에요.",
    "category": "유의어",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "prioritizing",
    "prefix": "We’re ",
    "suffix": " the items that unblock the team.",
    "meaning": "우선순위를 정하다",
    "translation": "팀을 막는 요소를 풀어주는 항목을 우선순위로 두고 있어요.",
    "category": "기본",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "ranking",
    "prefix": "We’re ",
    "suffix": " tasks by impact.",
    "meaning": "순위를 매기다",
    "translation": "임팩트 기준으로 업무 순위를 매기고 있어요.",
    "category": "유의어",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "trade-off",
    "prefix": "It’s a ",
    "suffix": " between speed and quality.",
    "meaning": "(A를 얻기 위해 B를 포기하는) 트레이드오프",
    "translation": "속도와 퀄리티 사이의 트레이드오프예요.",
    "category": "기본",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "triaging",
    "prefix": "We’re ",
    "suffix": " bugs before the release.",
    "meaning": "(긴급도/중요도 기준으로) 분류하다",
    "translation": "배포 전에 버그를 우선 분류하고 있어요.",
    "category": "유의어",
    "day": 5,
    "addedDate": "2026-03-27"
  },
  {
    "answer": "underway",
    "prefix": "The investigation is ",
    "suffix": ".",
    "meaning": "진행 중(조금 더 포멀)",
    "translation": "조사가 진행 중입니다.",
    "category": "유의어",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "in progress",
    "prefix": "The migration is ",
    "suffix": ".",
    "meaning": "진행 중",
    "translation": "마이그레이션이 진행 중이에요.",
    "category": "유의어",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "path forward",
    "prefix": "",
    "suffix": ": I’ll update the doc, and you’ll review by Friday.",
    "meaning": "앞으로의 진행 방향/다음 단계",
    "translation": "진행 방향: 제가 문서 업데이트하고, 금요일까지 리뷰 부탁드려요.",
    "category": "기본",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "current status is…",
    "prefix": "The ",
    "suffix": " that we’re waiting on approval.",
    "meaning": "현재 상태는…",
    "translation": "현재는 승인 대기 중이에요.",
    "category": "유의어",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "Here’s where we are",
    "prefix": "",
    "suffix": ": the draft is done, and QA starts tomorrow.",
    "meaning": "지금 진행 상황은 이렇습니다",
    "translation": "지금 상황은 이렇습니다: 초안은 끝났고 QA는 내일 시작해요.",
    "category": "기본",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "what we’ll do next",
    "prefix": "Here’s ",
    "suffix": ".",
    "meaning": "다음에 할 것",
    "translation": "다음에 할 일은 이거예요.",
    "category": "유의어",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "in flight",
    "prefix": "The rollout is ",
    "suffix": ", so we’ll avoid major changes today.",
    "meaning": "(업무가) 진행 중인",
    "translation": "배포가 진행 중이라 오늘은 큰 변경은 피할게요.",
    "category": "기본",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "action items",
    "prefix": "I’ll send the ",
    "suffix": " after this call.",
    "meaning": "액션 아이템/할 일",
    "translation": "통화 후 할 일 정리해서 보낼게요.",
    "category": "유의어",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "quick update:",
    "prefix": "",
    "suffix": " the fix is in review.",
    "meaning": "빠른 업데이트:",
    "translation": "빠른 업데이트: 수정사항이 리뷰 중이에요.",
    "category": "유의어",
    "day": 6,
    "addedDate": "2026-03-30"
  },
  {
    "answer": "concern",
    "prefix": "My main ",
    "suffix": " is the timeline.",
    "meaning": "우려",
    "translation": "가장 큰 우려는 일정이에요.",
    "category": "유의어",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "potential issue",
    "prefix": "One ",
    "suffix": " is the dependency on the vendor.",
    "meaning": "잠재 이슈",
    "translation": "잠재 이슈는 벤더 의존성이에요.",
    "category": "유의어",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "down the line",
    "prefix": "We can revisit the broader improvements ",
    "suffix": ", but for now let’s ship the smaller scope.",
    "meaning": "나중에/추후에",
    "translation": "큰 개선은 나중에 다시 보고, 일단 지금은 범위를 줄여서 배포하죠.",
    "category": "기본",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "sound the alarm",
    "prefix": "We should ",
    "suffix": " if the metric drops again.",
    "meaning": "경고를 울리다",
    "translation": "지표가 또 떨어지면 경고해야 해요.",
    "category": "유의어",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "reduce",
    "prefix": "We can ",
    "suffix": " risk by adding a checklist.",
    "meaning": "줄이다",
    "translation": "체크리스트로 리스크를 줄일 수 있어요.",
    "category": "유의어",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "downside risk",
    "prefix": "There’s ",
    "suffix": " we’ll miss the deadline if QA slips.",
    "meaning": "하방 리스크/안 좋은 쪽으로 갈 가능성",
    "translation": "QA가 밀리면 데드라인을 놓칠 리스크가 있어요.",
    "category": "기본",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "minimize",
    "prefix": "Let’s ",
    "suffix": " changes during the rollout.",
    "meaning": "최소화하다",
    "translation": "배포 중 변경을 최소화하죠.",
    "category": "유의어",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "raise a red flag",
    "prefix": "I want to ",
    "suffix": " about the vendor’s timeline.",
    "meaning": "경고 신호를 보내다/리스크를 알리다",
    "translation": "벤더 일정에 대해 리스크를 공유하고 싶어요.",
    "category": "기본",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "flag an issue",
    "prefix": "I want to ",
    "suffix": " before we proceed.",
    "meaning": "이슈를 표시하다/알리다",
    "translation": "진행 전에 이슈를 공유하고 싶어요.",
    "category": "유의어",
    "day": 7,
    "addedDate": "2026-03-31"
  },
  {
    "answer": "push back",
    "prefix": "Can we ",
    "suffix": " the deadline by two days?",
    "meaning": "마감일을 미루다/연기하다",
    "translation": "마감일을 이틀 미룰 수 있을까요?",
    "category": "기본",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "extend",
    "prefix": "Can we ",
    "suffix": " the deadline?",
    "meaning": "(기한을) 연장하다",
    "translation": "기한을 연장할 수 있을까요?",
    "category": "유의어",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "down the line",
    "prefix": "We can revisit this ",
    "suffix": " once the current sprint is stable.",
    "meaning": "나중에/추후에",
    "translation": "이번 스프린트가 안정되면 나중에 다시 보죠.",
    "category": "기본",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "add slack",
    "prefix": "We should ",
    "suffix": " to the schedule.",
    "meaning": "여유 시간을 추가하다",
    "translation": "일정에 여유를 추가해야 해요.",
    "category": "유의어",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "swamped",
    "prefix": "I’m ",
    "suffix": " this morning—can we sync in the afternoon?",
    "meaning": "일이 몰려서 엄청 바쁜",
    "translation": "오전에 일이 몰려 있어서요—오후에 싱크할 수 있을까요?",
    "category": "기본",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "overloaded",
    "prefix": "I’m a bit ",
    "suffix": " this week.",
    "meaning": "과부하인",
    "translation": "이번 주 업무가 좀 과부하예요.",
    "category": "유의어",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "postpone",
    "prefix": "We may need to ",
    "suffix": " the meeting.",
    "meaning": "연기하다",
    "translation": "미팅을 연기해야 할 수도 있어요.",
    "category": "유의어",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "leave wiggle room",
    "prefix": "Let’s ",
    "suffix": " for unexpected issues.",
    "meaning": "여지를 남기다",
    "translation": "예상치 못한 이슈에 대비해 여지를 남겨요.",
    "category": "유의어",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "slammed",
    "prefix": "I’m ",
    "suffix": " today.",
    "meaning": "엄청 바쁜(구어체)",
    "translation": "오늘 완전 바빠요.",
    "category": "유의어",
    "day": 8,
    "addedDate": "2026-04-01"
  },
  {
    "answer": "I’ve included…",
    "prefix": "",
    "suffix": " the notes in the doc.",
    "meaning": "포함했습니다",
    "translation": "문서에 노트를 포함해뒀어요.",
    "category": "유의어",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "please find attached",
    "prefix": "",
    "suffix": " the updated proposal.",
    "meaning": "첨부 파일 확인 부탁드립니다",
    "translation": "업데이트된 제안서를 첨부드립니다.",
    "category": "기본",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "For visibility",
    "prefix": "",
    "suffix": ", I added the latest numbers to the sheet.",
    "meaning": "참고로 공유드립니다(상황 공유 목적)",
    "translation": "참고로, 최신 숫자를 시트에 업데이트해뒀어요.",
    "category": "기본",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "just so you know",
    "prefix": "",
    "suffix": ", I’ll be OOO tomorrow.",
    "meaning": "참고로(캐주얼)",
    "translation": "참고로 내일 부재(OOO)입니다.",
    "category": "유의어",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "attached is…",
    "prefix": "",
    "suffix": " the latest deck.",
    "meaning": "첨부는 …입니다",
    "translation": "최신 자료를 첨부했습니다.",
    "category": "유의어",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "for your reference",
    "prefix": "",
    "suffix": ", here’s the link.",
    "meaning": "참고용으로",
    "translation": "참고용으로 링크 공유드립니다.",
    "category": "유의어",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "TL;DR",
    "prefix": "",
    "suffix": ": We need approval by Thursday to stay on schedule.",
    "meaning": "요약하자면",
    "translation": "요약: 일정 지키려면 목요일까지 승인이 필요해요.",
    "category": "기본",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "in short",
    "prefix": "",
    "suffix": ", we need more time.",
    "meaning": "요컨대",
    "translation": "요컨대 시간이 더 필요해요.",
    "category": "유의어",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "quick summary",
    "prefix": "",
    "suffix": ": we’re on track.",
    "meaning": "빠른 요약",
    "translation": "빠른 요약: 일정대로 가고 있어요.",
    "category": "유의어",
    "day": 9,
    "addedDate": "2026-04-02"
  },
  {
    "answer": "get back to you",
    "prefix": "I’ll ",
    "suffix": " by EOD.",
    "meaning": "다시 답 드리다",
    "translation": "오늘 중으로 다시 답 드릴게요.",
    "category": "유의어",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "checking in",
    "prefix": "Just ",
    "suffix": " to see if you had any thoughts.",
    "meaning": "확인차 연락드립니다",
    "translation": "혹시 생각 정리되셨는지 확인차 연락드려요.",
    "category": "유의어",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "following up",
    "prefix": "I’m ",
    "suffix": " on the email I sent yesterday.",
    "meaning": "후속으로 연락드립니다",
    "translation": "어제 보낸 이메일 건으로 후속 연락드려요.",
    "category": "유의어",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "circling back",
    "prefix": "Just ",
    "suffix": " on my question about the timeline.",
    "meaning": "다시 연락드립니다/다시 확인드립니다",
    "translation": "일정 관련 질문 건으로 다시 확인드려요.",
    "category": "기본",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "touch base",
    "prefix": "I’ll ",
    "suffix": " with the team and update you.",
    "meaning": "(짧게) 얘기/확인하다",
    "translation": "팀에 짧게 확인하고 업데이트 드릴게요.",
    "category": "유의어",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "quick reminder",
    "prefix": "",
    "suffix": ": the meeting starts in 10 minutes.",
    "meaning": "짧은 리마인드",
    "translation": "리마인드: 미팅 10분 뒤 시작이에요.",
    "category": "유의어",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "friendly reminder",
    "prefix": "",
    "suffix": "—please review when you get a chance.",
    "meaning": "친절한 리마인드",
    "translation": "시간 되실 때 리뷰 부탁드려요.",
    "category": "유의어",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "just a gentle reminder",
    "prefix": "",
    "suffix": " that the deadline is tomorrow.",
    "meaning": "부드럽게 리마인드 드립니다",
    "translation": "데드라인이 내일이라 부드럽게 리마인드 드려요.",
    "category": "기본",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "close the loop",
    "prefix": "I’ll ",
    "suffix": " with a short summary after the meeting.",
    "meaning": "(건을) 마무리 짓다/후속까지 마감하다",
    "translation": "미팅 후 짧은 요약을 후속으로 공유할게요.",
    "category": "기본",
    "day": 10,
    "addedDate": "2026-04-03"
  },
  {
    "answer": "settle on",
    "prefix": "Let’s ",
    "suffix": " option B.",
    "meaning": "~로 정하다",
    "translation": "B안으로 정하죠.",
    "category": "유의어",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "point person",
    "prefix": "Who’s the ",
    "suffix": " for approvals?",
    "meaning": "대표 담당자",
    "translation": "승인 담당자는 누구인가요?",
    "category": "유의어",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "got stuck",
    "prefix": "We ",
    "suffix": " on the requirements.",
    "meaning": "막혔다",
    "translation": "요구사항에서 막혔어요.",
    "category": "유의어",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "choose",
    "prefix": "We need to ",
    "suffix": " one direction.",
    "meaning": "선택하다",
    "translation": "방향 하나를 선택해야 해요.",
    "category": "유의어",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "DRI",
    "prefix": "Who’s the ",
    "suffix": " for this launch?",
    "meaning": "최종 책임자/오너(직접 책임지는 사람)",
    "translation": "이 런치의 최종 책임자는 누구인가요?",
    "category": "기본",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "stalled out",
    "prefix": "The approval process has ",
    "suffix": ".",
    "meaning": "(진행/결정이) 정체되다",
    "translation": "승인 프로세스가 정체된 상태예요.",
    "category": "기본",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "owner",
    "prefix": "Let’s assign an ",
    "suffix": " for this task.",
    "meaning": "담당자/오너",
    "translation": "이 업무 담당자를 지정하죠.",
    "category": "유의어",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "hit a standstill",
    "prefix": "The discussion ",
    "suffix": ".",
    "meaning": "완전히 멈추다",
    "translation": "논의가 완전히 멈췄어요.",
    "category": "유의어",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "decide on",
    "prefix": "We need to ",
    "suffix": " the final scope by tomorrow.",
    "meaning": "~로 결정하다",
    "translation": "내일까지 최종 범위를 결정해야 해요.",
    "category": "기본",
    "day": 11,
    "addedDate": "2026-04-06"
  },
  {
    "answer": "knowledge transfer",
    "prefix": "Let’s do a quick ",
    "suffix": " so you have full context.",
    "meaning": "(업무) 지식/맥락을 인수인계하다(지식 이전)",
    "translation": "맥락까지 다 잡히도록 짧게 KT(지식 인수인계)하고 갈게요.",
    "category": "기본",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "transfer",
    "prefix": "We’ll ",
    "suffix": " ownership to the next team.",
    "meaning": "이관하다",
    "translation": "다음 팀으로 오너십을 이관할게요.",
    "category": "유의어",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "outputs",
    "prefix": "The main ",
    "suffix": " are ready.",
    "meaning": "결과물",
    "translation": "주요 결과물이 준비됐어요.",
    "category": "유의어",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "hand off",
    "prefix": "",
    "suffix": "I’ll hand this off to you once the doc is finalized.",
    "meaning": "인계하다/넘기다",
    "translation": "문서가 확정되면 이걸 당신에게 인계할게요.",
    "category": "기본",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "transition doc",
    "prefix": "I’ll share a ",
    "suffix": " by tomorrow.",
    "meaning": "전환 문서",
    "translation": "내일까지 전환 문서를 공유할게요.",
    "category": "유의어",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "deliverables",
    "prefix": "The ",
    "suffix": " are the spec and the prototype.",
    "meaning": "산출물/제출해야 하는 결과물",
    "translation": "산출물은 스펙과 프로토타입입니다.",
    "category": "기본",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "pass along",
    "prefix": "",
    "suffix": "I’ll pass this along to the team.",
    "meaning": "전달하다",
    "translation": "팀에 전달할게요.",
    "category": "유의어",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "work products",
    "prefix": "Please share the final ",
    "suffix": ".",
    "meaning": "업무 산출물(조금 더 포멀)",
    "translation": "최종 산출물을 공유해주세요.",
    "category": "유의어",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "handover doc",
    "prefix": "Please check the ",
    "suffix": " for details.",
    "meaning": "인수인계 문서",
    "translation": "자세한 내용은 인수인계 문서를 확인해주세요.",
    "category": "유의어",
    "day": 12,
    "addedDate": "2026-04-07"
  },
  {
    "answer": "align",
    "prefix": "Let’s ",
    "suffix": " on priorities.",
    "meaning": "정렬/합의하다",
    "translation": "우선순위를 맞추죠.",
    "category": "유의어",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "May I add something?",
    "prefix": "",
    "suffix": " about the risk?",
    "meaning": "한마디 추가해도 될까요?",
    "translation": "리스크 관련해서 한마디 추가해도 될까요?",
    "category": "유의어",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "connect",
    "prefix": "Let’s ",
    "suffix": " later today.",
    "meaning": "연결해서 이야기하다",
    "translation": "오늘 이따가 연결해서 얘기해요.",
    "category": "유의어",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "Can I jump in?",
    "prefix": "",
    "suffix": " I think we’re mixing two separate issues.",
    "meaning": "(말 끼어들 때) 잠깐 끼어들어도 될까요?",
    "translation": "잠깐 끼어들어도 될까요? 지금 두 가지 이슈가 섞여 있는 것 같아요.",
    "category": "기본",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "be aligned",
    "prefix": "",
    "suffix": "Are we aligned on next steps?",
    "meaning": "정렬되어 있다/합의되어 있다",
    "translation": "다음 단계에 대해 합의됐나요?",
    "category": "유의어",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "get on the same page",
    "prefix": "Let’s ",
    "suffix": " about who owns what.",
    "meaning": "같은 이해를 갖다/의견을 맞추다",
    "translation": "누가 무엇을 맡는지에 대해 같은 이해를 갖고 갑시다.",
    "category": "기본",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "double-click on",
    "prefix": "Can we ",
    "suffix": " that point for a second?",
    "meaning": "(디테일을) 더 깊게 파고들다/좀 더 자세히 보다",
    "translation": "그 포인트 잠깐만 좀 더 자세히 짚어볼까요?",
    "category": "기본",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "sync up",
    "prefix": "Can we ",
    "suffix": " on this quickly?",
    "meaning": "싱크 맞추다",
    "translation": "이거 잠깐 빠르게 맞출 수 있을까요?",
    "category": "유의어",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "If I may,",
    "prefix": "",
    "suffix": " I’d like to propose an alternative.",
    "meaning": "실례지만/제가 한마디만",
    "translation": "실례지만 대안을 제안하고 싶어요.",
    "category": "유의어",
    "day": 13,
    "addedDate": "2026-04-08"
  },
  {
    "answer": "not included",
    "prefix": "That’s ",
    "suffix": " in our deliverables.",
    "meaning": "포함되지 않은",
    "translation": "그건 산출물에 포함되지 않아요.",
    "category": "유의어",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "scope creep",
    "prefix": "We’re seeing ",
    "suffix": ", so we need to revisit priorities.",
    "meaning": "요구사항/업무 범위가 슬쩍슬쩍 늘어나는 것",
    "translation": "범위가 늘고 있어서 우선순위를 다시 봐야 해요.",
    "category": "기본",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "on my list",
    "prefix": "It’s ",
    "suffix": " for this week.",
    "meaning": "내 리스트에 있다",
    "translation": "이번 주 처리 리스트에 있어요.",
    "category": "유의어",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "in my queue",
    "prefix": "It’s ",
    "suffix": ".",
    "meaning": "대기열에 있다",
    "translation": "제 작업 대기열에 있어요.",
    "category": "유의어",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "on my radar",
    "prefix": "It’s ",
    "suffix": "—I’ll review it today.",
    "meaning": "인지했고, 확인/처리 리스트에 있다",
    "translation": "인지하고 있어요—오늘 확인할게요.",
    "category": "기본",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "out of scope",
    "prefix": "That request is ",
    "suffix": " for this sprint.",
    "meaning": "범위 밖인",
    "translation": "그 요청은 이번 스프린트 범위 밖이에요.",
    "category": "기본",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "beyond scope",
    "prefix": "That’s ",
    "suffix": " for this release.",
    "meaning": "범위를 넘어선",
    "translation": "그건 이번 릴리즈 범위를 넘어가요.",
    "category": "유의어",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "expanding scope",
    "prefix": "This is ",
    "suffix": " beyond the original plan.",
    "meaning": "범위를 확장하는 것",
    "translation": "원래 계획보다 범위가 확장되고 있어요.",
    "category": "유의어",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "requirements creep",
    "prefix": "Let’s watch out for ",
    "suffix": ".",
    "meaning": "요구사항이 늘어나는 현상",
    "translation": "요구사항 증가를 조심합시다.",
    "category": "유의어",
    "day": 14,
    "addedDate": "2026-04-09"
  },
  {
    "answer": "a couple of paths forward",
    "prefix": "There are ",
    "suffix": ": ship now or wait for QA.",
    "meaning": "진행 방향이 몇 가지 있어요.",
    "translation": "선택지는 두 가지예요: 지금 배포하거나 QA를 기다리거나요.",
    "category": "기본",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "improve",
    "prefix": "We can ",
    "suffix": " this in the next version.",
    "meaning": "개선하다",
    "translation": "다음 버전에서 개선할 수 있어요.",
    "category": "유의어",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "advantages and disadvantages",
    "prefix": "What are the ",
    "suffix": " of option A?",
    "meaning": "장점과 단점",
    "translation": "A안의 장단점이 뭐예요?",
    "category": "유의어",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "trade-offs",
    "prefix": "Let’s be clear about the ",
    "suffix": ".",
    "meaning": "트레이드오프/맞바꿈",
    "translation": "트레이드오프를 명확히 합시다.",
    "category": "유의어",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "we can either…",
    "prefix": "",
    "suffix": " ship now or push it to next week.",
    "meaning": "~하거나 ~하거나",
    "translation": "지금 배포하거나 다음 주로 미룰 수 있어요.",
    "category": "유의어",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "refine",
    "prefix": "Let’s ",
    "suffix": " the messaging.",
    "meaning": "다듬다",
    "translation": "메시지를 다듬어봅시다.",
    "category": "유의어",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "iterate",
    "prefix": "Let’s ",
    "suffix": " on the draft based on feedback.",
    "meaning": "개선해서 다음 버전으로 가다",
    "translation": "피드백 반영해서 초안을 개선해봅시다.",
    "category": "기본",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "one option is…",
    "prefix": "",
    "suffix": " to start with a smaller scope.",
    "meaning": "한 가지 옵션은…",
    "translation": "한 가지 옵션은 더 작은 범위로 시작하는 거예요.",
    "category": "유의어",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "pros and cons",
    "prefix": "Let’s list the ",
    "suffix": " before we decide.",
    "meaning": "장단점",
    "translation": "결정하기 전에 장단점을 정리해봅시다.",
    "category": "기본",
    "day": 15,
    "addedDate": "2026-04-10"
  },
  {
    "answer": "finalize",
    "prefix": "Let’s ",
    "suffix": " the plan.",
    "meaning": "최종 확정하다",
    "translation": "계획을 최종 확정하죠.",
    "category": "유의어",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "tentative",
    "prefix": "This schedule is ",
    "suffix": " until we hear back from QA.",
    "meaning": "임시의/확정되지 않은",
    "translation": "QA 답을 받기 전까지 이 일정은 임시예요.",
    "category": "기본",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "by end of day",
    "prefix": "Please send it ",
    "suffix": ".",
    "meaning": "오늘 끝날 때까지",
    "translation": "오늘 끝날 때까지 보내주세요.",
    "category": "유의어",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "confirm",
    "prefix": "Can we ",
    "suffix": " the date today?",
    "meaning": "확인/확정하다",
    "translation": "오늘 날짜 확정할 수 있을까요?",
    "category": "유의어",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "by EOD",
    "prefix": "Can you share the updated draft ",
    "suffix": "?",
    "meaning": "오늘 업무 종료 전까지",
    "translation": "오늘 중으로 업데이트된 초안 공유해주실 수 있나요?",
    "category": "기본",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "provisional",
    "prefix": "This is a ",
    "suffix": " plan.",
    "meaning": "임시의",
    "translation": "이건 임시 계획이에요.",
    "category": "유의어",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "before COB",
    "prefix": "Let’s wrap this up ",
    "suffix": ".",
    "meaning": "업무 종료 전(Close of Business)",
    "translation": "업무 종료 전 마무리하죠.",
    "category": "유의어",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "not final",
    "prefix": "The numbers are ",
    "suffix": " yet.",
    "meaning": "최종이 아닌",
    "translation": "숫자는 아직 최종이 아니에요.",
    "category": "유의어",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "Let’s lock this in.",
    "prefix": "",
    "suffix": " by EOD so we can move forward.",
    "meaning": "이건 확정하자",
    "translation": "진행할 수 있게 오늘 중으로 확정하죠.",
    "category": "기본",
    "day": 16,
    "addedDate": "2026-04-13"
  },
  {
    "answer": "push down the list",
    "prefix": "",
    "suffix": "Let’s push it down the list.",
    "meaning": "리스트 아래로 미루다",
    "translation": "리스트 아래로 미루죠.",
    "category": "유의어",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "table it for now",
    "prefix": "Let’s ",
    "suffix": " and focus on the launch.",
    "meaning": "일단 보류하자",
    "translation": "일단 보류하고 런치에 집중하죠.",
    "category": "기본",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "deprioritize",
    "prefix": "We’ll ",
    "suffix": " this request until next sprint.",
    "meaning": "우선순위를 낮추다",
    "translation": "이 요청은 다음 스프린트까지 우선순위를 낮출게요.",
    "category": "기본",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "open items",
    "prefix": "Before we end, let’s review the ",
    "suffix": ".",
    "meaning": "미해결 항목/남은 할 일",
    "translation": "끝내기 전에 남은 할 일 정리하죠.",
    "category": "기본",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "put it on hold",
    "prefix": "Let’s ",
    "suffix": " until we have data.",
    "meaning": "보류하다",
    "translation": "데이터가 나올 때까지 보류하죠.",
    "category": "유의어",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "pending items",
    "prefix": "These are still ",
    "suffix": ".",
    "meaning": "대기/미처리 항목",
    "translation": "이건 아직 대기 항목이에요.",
    "category": "유의어",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "park it",
    "prefix": "Let’s ",
    "suffix": " and revisit later.",
    "meaning": "(잠깐) 옆에 두다",
    "translation": "잠깐 두고 나중에 다시 봐요.",
    "category": "유의어",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "lower priority",
    "prefix": "",
    "suffix": "We should lower the priority for this.",
    "meaning": "우선순위를 낮추다",
    "translation": "이건 우선순위를 낮춰야 해요.",
    "category": "유의어",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "outstanding items",
    "prefix": "Any ",
    "suffix": " we should address?",
    "meaning": "미해결 항목",
    "translation": "처리해야 할 미해결 항목 있을까요?",
    "category": "유의어",
    "day": 17,
    "addedDate": "2026-04-14"
  },
  {
    "answer": "premise",
    "prefix": "The whole argument is built on a false ",
    "suffix": ".",
    "meaning": "전제",
    "translation": "그 주장은 잘못된 전제 위에 세워졌어요.",
    "category": "유의어",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "per the document",
    "prefix": "",
    "suffix": ", this is out of scope.",
    "meaning": "문서에 따라(조금 더 포멀)",
    "translation": "문서에 따르면 이건 범위 밖이에요.",
    "category": "유의어",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "figure",
    "prefix": "The latest ",
    "suffix": " is 1.2M.",
    "meaning": "수치",
    "translation": "최신 수치는 120만이에요.",
    "category": "유의어",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "hypothesis",
    "prefix": "Our ",
    "suffix": " is that shorter emails get faster replies.",
    "meaning": "가설",
    "translation": "짧은 메일이 더 빨리 답을 받는다는 가설이 있어요.",
    "category": "유의어",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "assumption",
    "prefix": "That plan is based on the ",
    "suffix": " that the vendor can deliver on time.",
    "meaning": "전제/가정",
    "translation": "그 계획은 벤더가 제때 납품한다는 전제에 기반해요.",
    "category": "기본",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "metric",
    "prefix": "Our key ",
    "suffix": " is retention.",
    "meaning": "지표",
    "translation": "핵심 지표는 리텐션이에요.",
    "category": "유의어",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "lay the groundwork for",
    "prefix": "These data points ",
    "suffix": " a decision on whether we ship by Friday.",
    "meaning": "~의 기반을 깔다 / ~를 위한 판을 깔다",
    "translation": "이 데이터들은 금요일 배포 여부를 결정하기 위한 기반을 깔아줘요.",
    "category": "기본",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "based on the doc",
    "prefix": "",
    "suffix": ", the scope is fixed.",
    "meaning": "문서 기준으로",
    "translation": "문서 기준으로 스코프는 확정이에요.",
    "category": "유의어",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "data point",
    "prefix": "One ",
    "suffix": " is that churn increased by 2% last week.",
    "meaning": "근거가 되는 데이터 한 가지(지표/수치)",
    "translation": "지난주 이탈률이 2% 증가했다는 데이터가 하나 있어요.",
    "category": "기본",
    "day": 18,
    "addedDate": "2026-04-15"
  },
  {
    "answer": "focus on trivial details",
    "prefix": "Let’s not ",
    "suffix": ".",
    "meaning": "사소한 디테일에 집착하다",
    "translation": "사소한 디테일에 너무 집중하진 말죠.",
    "category": "유의어",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "nitpick",
    "prefix": "Feel free to ",
    "suffix": "—this is still a draft.",
    "meaning": "사소한 것까지 꼼꼼히 지적하다",
    "translation": "초안이라 사소한 것도 편하게 지적해 주세요.",
    "category": "기본",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "key message",
    "prefix": "The ",
    "suffix": " is “ship small, learn fast.”",
    "meaning": "핵심 메시지",
    "translation": "핵심 메시지는 “작게 배포하고, 빠르게 학습하자”예요.",
    "category": "유의어",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "main point",
    "prefix": "My ",
    "suffix": " is we should simplify the scope.",
    "meaning": "핵심 포인트",
    "translation": "제 핵심은 스코프를 단순화하자는 거예요.",
    "category": "유의어",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "double-check",
    "prefix": "Can you ",
    "suffix": " the numbers?",
    "meaning": "다시 확인하다",
    "translation": "숫자 다시 확인해주실래요?",
    "category": "유의어",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "key takeaway",
    "prefix": "The ",
    "suffix": " is that we need approval by Thursday.",
    "meaning": "핵심 요점/핵심 메시지",
    "translation": "핵심은 목요일까지 승인이 필요하다는 거예요.",
    "category": "기본",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "a second pair of eyes",
    "prefix": "Could you be ",
    "suffix": " on this before I send it?",
    "meaning": "(추가로) 한 번 더 봐줄 사람/더블 체크",
    "translation": "보내기 전에 이거 한 번만 더 봐주실 수 있을까요?",
    "category": "기본",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "be overly picky",
    "prefix": "I don’t want to ",
    "suffix": ", but…",
    "meaning": "지나치게 까다롭다",
    "translation": "너무 까다롭게 굴고 싶진 않지만…",
    "category": "유의어",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "a quick review",
    "prefix": "Can you do ",
    "suffix": "?",
    "meaning": "빠른 리뷰",
    "translation": "빠르게 리뷰해주실 수 있나요?",
    "category": "유의어",
    "day": 19,
    "addedDate": "2026-04-16"
  },
  {
    "answer": "watch closely",
    "prefix": "Let’s ",
    "suffix": " for any issues.",
    "meaning": "면밀히 지켜보다",
    "translation": "이슈가 있는지 면밀히 봅시다.",
    "category": "유의어",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "to-dos",
    "prefix": "I’ll add it to my ",
    "suffix": ".",
    "meaning": "할 일 목록",
    "translation": "제 할 일 목록에 넣을게요.",
    "category": "유의어",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "tasks",
    "prefix": "These are the key ",
    "suffix": " for this week.",
    "meaning": "업무/할 일",
    "translation": "이번 주 핵심 할 일이에요.",
    "category": "유의어",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "commitments",
    "prefix": "I’ll send the ",
    "suffix": " right after this meeting.",
    "meaning": "(회의에서 합의한) 각자 실행 약속/커밋 사항",
    "translation": "이 미팅 끝나자마자 커밋 사항을 공유할게요.",
    "category": "기본",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "knock out",
    "prefix": "Let’s ",
    "suffix": " these deliverables before EOD.",
    "meaning": "(할 일/산출물을) 빠르게 해치우다/끝내다",
    "translation": "오늘 업무 종료 전까지 이 산출물들 후딱 끝내죠.",
    "category": "기본",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "To recap",
    "prefix": "",
    "suffix": ", we’ll ship Tuesday and follow up on Thursday.",
    "meaning": "정리하자면",
    "translation": "정리하면, 화요일 배포하고 목요일에 후속 공유하겠습니다.",
    "category": "기본",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "monitor",
    "prefix": "We’ll ",
    "suffix": " performance for 24 hours.",
    "meaning": "모니터링하다",
    "translation": "24시간 동안 성능을 모니터링할게요.",
    "category": "유의어",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "to summarize",
    "prefix": "",
    "suffix": ", we agreed on option A.",
    "meaning": "요약하자면",
    "translation": "요약하면 A안으로 합의했어요.",
    "category": "유의어",
    "day": 20,
    "addedDate": "2026-04-17"
  },
  {
    "answer": "in summary",
    "prefix": "",
    "suffix": ", we need one owner.",
    "meaning": "요약하면",
    "translation": "요약하면 오너가 한 명 필요해요.",
    "category": "유의어",
    "day": 20,
    "addedDate": "2026-04-17"
  }
];
