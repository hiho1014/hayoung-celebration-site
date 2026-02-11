(function () {
  // --- CONFIGURATION ---
  const CONFIG = {
    v1: {
      title: '하영이는 할 일을 완료했나요?',
      btnSuccess: '완료',
      btnFail: '실패',
      madeTime: '약 3시 30분 ~ 5시 발표 전까지',
      creatorDesc: '분석적이고 실험을 즐기는 제작자. 작은 인터랙션으로 발표 경험을 더 즐겁게 만듭니다.',
      aboutList: `
        <li>2025년 9월 22일 패스트캠퍼스+커서맛피아 해커톤 데모</li>
        <li>핵심 아이디어: 클릭으로 진행되는 축하/낙담 시퀀스</li>
        <li>타임라인: 14시 합류 → 안경 이슈 귀가 → 15:30 재시작 → 완성</li>
      `,
      // 버전 메타데이터
      versionName: '버전 1',
      date: '2025-09-22',
      event: '패스트캠퍼스 해커톤',
      description: '첫 번째 버전. 해커톤 데모용',
      successSteps: [
        { type: 'effect', name: 'clap' },
        { type: 'character', img: './image/이미지1 관계자-배경 제거.png', name: '관계자', text: '캬~ 3시 넘어 왔는데 완성하다니~\n초대박바리박박슨입니다.' },
        { type: 'character', img: './image/이미지2 커서맛피아-배경 제거.png', name: '커서맛피아', text: '(누군신지 모르지만) 하영킁!\n대단핑 대단핑 최고최최고입니다~~~!!' },
        { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '5252 믿고 있었다고요~\n젠장!!!', wide: true },
      ],
      failSteps: [
        { type: 'effect', name: 'sad' },
        { type: 'character', img: './image/이미지1 관계자-배경 제거.png', name: '관계자', text: '참가에 의의를 두시는 걸로 ^^;;' },
        { type: 'character', img: './image/이미지2 커서맛피아-배경 제거.png', name: '커서맛피아', text: '(누군신지 모르지만) 하영킁,\n실망 또는 바늘망입니다 ㅎㅎ' },
        { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '발표가 너무 길어지고 있어요^^;;', wide: true },
      ]
    },
    v2: {
      title: '하이호는 발표를 잘 준비했나요?',
      btnSuccess: '네~!',
      btnFail: '아뇹,,',
      madeTime: '8시 51분 ~ 발표 전까지',
      creatorDesc: '블로그와 개발에 열정을 가진 하이호. 지피터스 베스트 발표를 위해 특별히 준비된 버전입니다.',
      aboutList: `
        <li>2025년 9월 22일 지피터스 베스트 발표용 데모</li>
        <li>핵심 아이디어: 클릭으로 진행되는 축하/낙담 시퀀스</li>
      `,
      // 버전 메타데이터
      versionName: '버전 2',
      date: '2025-09-22',
      event: '지피터스 베스트 발표',
      description: '블로그 스터디 버전',
      successSteps: [
        { type: 'effect', name: 'clap' },
        { type: 'character', img: './image/버전2/이미지1 지피터스.png', name: '지피터스', text: '하이호님 베스트 발표 잘 들었습니다~~' },
        { type: 'character', img: './image/버전2/이미지2 블로그.png', name: '블로그 스터디', text: '캬 블로그뽕 취한닷,,,' },
        { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '5252 믿고 있었다고요~\n젠장!!!', wide: true },
      ],
      failSteps: [
        { type: 'effect', name: 'sad' },
        { type: 'character', img: './image/버전2/이미지1 지피터스.png', name: '지피터스', text: '지피터스 하산하지 마시고 무한 뺑뻉이 치십시오!!' },
        { type: 'character', img: './image/버전2/이미지2 블로그.png', name: '블로그 스터디', text: '하이호님,,, 실망 또는 바늘망입니다 ㅎ' },
        { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '발표가 너무 길어지고 있어요^^;;', wide: true },
      ]
    },
    v3: {
      title: '하이호는 발표를 잘 준비했나요?',
      btnSuccess: '네~!',
      btnFail: '아뇹,,',
      madeTime: '8시 51분 ~ 발표 전까지',
      creatorDesc: '블로그와 개발에 열정을 가진 하이호. 지피터스 베스트 발표를 위해 특별히 준비된 버전입니다.',
      aboutList: `
        <li>2025년 9월 22일 지피터스 베스트 발표용 데모</li>
        <li>핵심 아이디어: 클릭으로 진행되는 축하/낙담 시퀀스</li>
      `,
      // 버전 메타데이터
      versionName: '버전 3',
      date: '2026-02-02',
      event: '안드로이드 스터디 발표',
      description: '안드로이드 스터디 버전',
      successSteps: [
        { type: 'effect', name: 'clap' },
        { type: 'character', img: './image/버전2/이미지1 지피터스.png', name: '지피터스', text: '하이호님 베스트 발표 잘 들었습니다~~' },
        { type: 'character', img: './image/버전3/android_study.png', name: '안드로이드 스터디', text: '캬 안드로이드뽕 취한닷,,,', wide: true },
        { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '5252 믿고 있었다고요~\n젠장!!!', wide: true },
      ],
      failSteps: [
        { type: 'effect', name: 'sad' },
        { type: 'character', img: './image/버전2/이미지1 지피터스.png', name: '지피터스', text: '지피터스 하산하지 마시고 무한 뺑뻉이 치십시오!!' },
        { type: 'character', img: './image/버전3/android_study.png', name: '안드로이드 스터디', text: '하이호님,,, 실망 또는 바늘망입니다 ㅎ', wide: true },
        { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '발표가 너무 길어지고 있어요^^;;', wide: true },
      ]
    },
    effects: {
      clap: { duration: 3800, particleCount: 140 },
      sad: { duration: 3200, particleCount: 140 },
      confetti: { duration: 4000, particleCount: 200 } // V3용 강화 이펙트
    }
  };

  // --- ELEMENTS ---
  const btnSuccess = document.getElementById('btn-success');
  const btnFail = document.getElementById('btn-fail');
  const stage = document.getElementById('stage');
  const overlay = document.getElementById('overlay');
  const todayEl = document.getElementById('today');
  const madeDateEl = document.getElementById('made-date');
  const madeTimeEl = document.getElementById('made-time');
  const eventInfo = document.getElementById('event-info');
  const titleEl = document.querySelector('h1');
  const creatorDescEl = document.querySelector('.creator-desc');
  const aboutListEl = document.querySelector('.about-list');

  // --- STATE ---
  let mode = null; // 'success' | 'fail'
  let stepIndex = -1; // -1: Not started, 0..3
  let effectActive = false;
  let currentVersion = 'v3'; // Default to V3 as requested

  // --- INITIALIZATION ---
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }).format(now);
  if (madeDateEl) madeDateEl.textContent = formattedDate;
  if (todayEl) todayEl.remove();
  if (eventInfo) eventInfo.innerHTML = '';

  // --- FUNCTIONS ---

  function getSteps() {
    const config = CONFIG[currentVersion];
    return mode === 'success' ? config.successSteps : config.failSteps;
  }

  function resetStage() {
    stage.innerHTML = '';
    stepIndex = -1;
  }

  function showOverlay() { overlay.classList.remove('hidden'); overlay.setAttribute('aria-hidden', 'false'); }
  function hideOverlay() { overlay.classList.add('hidden'); overlay.setAttribute('aria-hidden', 'true'); overlay.innerHTML = ''; }

  function runEffect(name) {
    showOverlay();
    overlay.innerHTML = '';

    // Default to clap if unknown
    const settings = CONFIG.effects[name] || CONFIG.effects.clap;
    const durationMs = settings.duration;
    const count = settings.particleCount;

    // Confetti / Clap logic (Shared)
    if (name === 'clap' || name === 'confetti') {
      for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.top = -10 + 'px';
        piece.style.background = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.opacity = '1';
        overlay.appendChild(piece);

        const fall = piece.animate([
          { transform: `translateY(-10px) rotate(0deg)`, opacity: 1 },
          { transform: `translateY(${window.innerHeight + 60}px) rotate(${Math.random() * 720 - 360}deg)`, opacity: 1 }
        ], { duration: durationMs, easing: 'cubic-bezier(.2,.8,.2,1)', delay: Math.random() * 400 });

        fall.onfinish = () => piece.remove();
      }
    } else {
      // Sad rain logic
      for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.top = Math.random() * -200 + 'px';
        overlay.appendChild(drop);

        const fall = drop.animate([
          { transform: 'translateY(0)' },
          { transform: `translateY(${window.innerHeight + 100}px)` }
        ], { duration: 1200 + Math.random() * 1200, easing: 'linear', delay: Math.random() * 400, iterations: 1 });

        fall.onfinish = () => drop.remove();
      }
    }

    // Auto-hide overlay after duration
    setTimeout(() => { hideOverlay(); }, durationMs + 50);
  }

  function renderCharacter({ img, name, text, wide }) {
    stage.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'character' + (wide ? ' wide' : '');

    // Sparkle effect
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;

    const image = document.createElement('img');
    image.alt = name;
    image.src = img;

    const plate = document.createElement('div');
    plate.className = 'nameplate';
    plate.textContent = `[${name}]`;

    stage.appendChild(sparkle);
    wrap.appendChild(bubble);
    wrap.appendChild(image);
    wrap.appendChild(plate);
    stage.appendChild(wrap);
  }

  function nextStep() {
    if (!mode || effectActive) return;

    const steps = getSteps();
    stepIndex++;

    if (stepIndex >= steps.length) {
      resetStage();
      mode = null;
      return;
    }

    const step = steps[stepIndex];
    if (step.type === 'effect') {
      runEffect(step.name);
    } else if (step.type === 'character') {
      renderCharacter(step);
    }
  }

  function switchVersion(version) {
    currentVersion = version;
    const config = CONFIG[version];

    // Update UI Texts
    if (titleEl) titleEl.textContent = config.title;
    if (btnSuccess) btnSuccess.textContent = config.btnSuccess;
    if (btnFail) btnFail.textContent = config.btnFail;
    if (creatorDescEl) creatorDescEl.textContent = config.creatorDesc;
    if (aboutListEl) aboutListEl.innerHTML = config.aboutList;
    if (madeTimeEl) madeTimeEl.textContent = config.madeTime;

    // Reset State
    resetStage();
    mode = null;

    // Update Toggle Buttons UI
    document.querySelectorAll('.version-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${version}`).classList.add('active');
  }

  // --- EVENT LISTENERS ---

  btnSuccess.addEventListener('click', () => {
    mode = 'success';
    resetStage();
    nextStep();
  });

  btnFail.addEventListener('click', () => {
    mode = 'fail';
    resetStage();
    nextStep();
  });

  stage.addEventListener('click', () => {
    if (!mode) return;

    const steps = getSteps();
    const current = steps[stepIndex];

    // If showing character, clear immediately on click
    if (current && current.type === 'character') {
      stage.innerHTML = '';
      nextStep();
      return;
    }
    nextStep();
  });

  // Create Floating Button
  const floatBtn = document.createElement('button');
  floatBtn.className = 'version-float-btn';
  floatBtn.innerHTML = '💬';
  floatBtn.setAttribute('aria-label', '버전 선택');

  // Create Version List Container
  const listContainer = document.createElement('div');
  listContainer.className = 'version-list-container';

  const versionList = document.createElement('ul');
  versionList.className = 'version-list';

  // Generate version list items
  Object.keys(CONFIG).forEach(key => {
    if (key === 'effects') return; // Skip effects config

    const version = CONFIG[key];
    const item = document.createElement('li');
    item.className = 'version-item';
    if (key === currentVersion) item.classList.add('active');
    item.dataset.version = key;

    item.innerHTML = `
      <div class="version-item-title">${version.versionName}</div>
      <div class="version-item-meta">${version.date} · ${version.event}</div>
      <div class="version-item-desc">${version.description}</div>
    `;

    versionList.appendChild(item);
  });

  listContainer.appendChild(versionList);

  // Create Overlay
  const versionOverlay = document.createElement('div');
  versionOverlay.className = 'version-overlay';

  // Remove old elements if exists
  const oldFloat = document.querySelector('.version-float-btn');
  const oldList = document.querySelector('.version-list-container');
  const oldOverlay = document.querySelector('.version-overlay');
  if (oldFloat) oldFloat.remove();
  if (oldList) oldList.remove();
  if (oldOverlay) oldOverlay.remove();

  document.body.appendChild(floatBtn);
  document.body.appendChild(listContainer);
  document.body.appendChild(versionOverlay);

  // Toggle list
  let isListOpen = false;
  function toggleList() {
    isListOpen = !isListOpen;
    listContainer.classList.toggle('open', isListOpen);
    versionOverlay.classList.toggle('visible', isListOpen);
  }

  function closeList() {
    isListOpen = false;
    listContainer.classList.remove('open');
    versionOverlay.classList.remove('visible');
  }

  // Event Listeners
  floatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleList();
  });

  versionOverlay.addEventListener('click', closeList);

  versionList.addEventListener('click', (e) => {
    const item = e.target.closest('.version-item');
    if (!item) return;

    const version = item.dataset.version;
    switchVersion(version);
    closeList();

    // Update active state
    document.querySelectorAll('.version-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isListOpen) {
      closeList();
    }
  });

  // Initialize view: V3 default
  switchVersion(currentVersion);

})();
