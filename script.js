(function(){
  const btnSuccess = document.getElementById('btn-success');
  const btnFail = document.getElementById('btn-fail');
  const stage = document.getElementById('stage');
  const overlay = document.getElementById('overlay');
  const todayEl = document.getElementById('today');
  const madeDateEl = document.getElementById('made-date');
  const madeTimeEl = document.getElementById('made-time');
  const eventInfo = document.getElementById('event-info');

  // 오늘 날짜 표시
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'long' }).format(now);
  if (madeDateEl) madeDateEl.textContent = formattedDate;
  if (madeTimeEl) madeTimeEl.textContent = '약 3시 30분 ~ 5시 발표 전까지';
  if (todayEl) todayEl.remove();

  // 소개 문구는 사용자 요청에 따라 비웁니다
  if (eventInfo) eventInfo.innerHTML = '';

  // 상태 관리
  let mode = null; // 'success' | 'fail'
  let stepIndex = -1; // -1: 시작 전, 0..3
  let effectActive = false;

  // 버전 상태
  let isV2 = false;

  function getSuccessSteps() {
    return isV2 ? [
      { type: 'effect', name: 'clap' },
      { type: 'character', img: './image/버전2/이미지1 지피터스.png', name: '지피터스', text: '하이호님 베스트 발표 잘 들었습니다~~' },
      { type: 'character', img: './image/버전2/이미지2 블로그.png', name: '블로그 스터디', text: '캬 블로그뽕 취한닷,,,' },
      { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '5252 믿고 있었다고요~\n젠장!!!', wide: true },
    ] : [
      { type: 'effect', name: 'clap' },
      { type: 'character', img: './image/이미지1 관계자-배경 제거.png', name: '관계자', text: '캬~ 3시 넘어 왔는데 완성하다니~\n초대박바리박박슨입니다.' },
      { type: 'character', img: './image/이미지2 커서맛피아-배경 제거.png', name: '커서맛피아', text: '(누군신지 모르지만) 하영킁!\n대단핑 대단핑 최고최최고입니다~~~!!' },
      { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '5252 믿고 있었다고요~\n젠장!!!', wide: true },
    ];
  }

  function getFailSteps() {
    return isV2 ? [
      { type: 'effect', name: 'sad' },
      { type: 'character', img: './image/버전2/이미지1 지피터스.png', name: '지피터스', text: '지피터스 하산하지 마시고 무한 뺑뻉이 치십시오!!' },
      { type: 'character', img: './image/버전2/이미지2 블로그.png', name: '블로그 스터디', text: '하이호님,,, 실망 또는 바늘망입니다 ㅎ' },
      { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '발표가 너무 길어지고 있어요^^;;', wide: true },
    ] : [
      { type: 'effect', name: 'sad' },
      { type: 'character', img: './image/이미지1 관계자-배경 제거.png', name: '관계자', text: '참가에 의의를 두시는 걸로 ^^;;' },
      { type: 'character', img: './image/이미지2 커서맛피아-배경 제거.png', name: '커서맛피아', text: '(누군신지 모르지만) 하영킁,\n실망 또는 바늘망입니다 ㅎㅎ' },
      { type: 'character', img: './image/이미지3 여러분-배경 제거.png', name: '여러분', text: '발표가 너무 길어지고 있어요^^;;', wide: true },
    ];
  }

  function resetStage() {
    stage.innerHTML = '';
    stepIndex = -1;
  }

  function showOverlay() { overlay.classList.remove('hidden'); overlay.setAttribute('aria-hidden','false'); }
  function hideOverlay() { overlay.classList.add('hidden'); overlay.setAttribute('aria-hidden','true'); overlay.innerHTML=''; }

  function runEffect(name) {
    // 요구사항: 클릭하면 즉시 다음으로 진행되도록 효과는 비차단형으로 재생
    showOverlay();
    overlay.innerHTML = '';
    const durationMs = name === 'clap' ? 3800 : 3200;
    const count = 140;
    if (name === 'clap') {
      // confetti 파티클 생성
      for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.top = -10 + 'px';
        piece.style.background = `hsl(${Math.floor(Math.random()*360)}, 90%, 60%)`;
        piece.style.transform = `rotate(${Math.random()*360}deg)`;
        piece.style.opacity = '1';
        overlay.appendChild(piece);
        const fall = piece.animate([
          { transform: `translateY(-10px) rotate(0deg)`, opacity: 1 },
          { transform: `translateY(${window.innerHeight + 60}px) rotate(${Math.random()*720-360}deg)`, opacity: 1 }
        ], { duration: durationMs, easing: 'cubic-bezier(.2,.8,.2,1)', delay: Math.random()*400 });
        fall.onfinish = () => piece.remove();
      }
    } else {
      // sad rain
      for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.top = Math.random() * -200 + 'px';
        overlay.appendChild(drop);
        const fall = drop.animate([
          { transform: 'translateY(0)' },
          { transform: `translateY(${window.innerHeight + 100}px)` }
        ], { duration: 1200 + Math.random()*1200, easing: 'linear', delay: Math.random()*400, iterations: 1 });
        fall.onfinish = () => drop.remove();
      }
    }
    // 효과 종료 타이머
    // 비차단: 오버레이는 자동으로 사라짐
    setTimeout(() => { hideOverlay(); }, durationMs + 50);
  }

  function renderCharacter({ img, name, text, wide }) {
    stage.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'character' + (wide ? ' wide' : '');

    // 스파클 배경 추가
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
    const steps = mode === 'success' ? getSuccessSteps() : getFailSteps();
    stepIndex++;
    if (stepIndex >= steps.length) {
      // 끝: 초기화
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

  // 버튼 핸들러
  btnSuccess.addEventListener('click', () => {
    mode = 'success';
    resetStage();
    nextStep(); // 효과 시작
  });
  btnFail.addEventListener('click', () => {
    mode = 'fail';
    resetStage();
    nextStep();
  });

  // 스테이지 클릭으로 순차 진행
  stage.addEventListener('click', () => {
    if (!mode) return; // 모드 없으면 무시

    const steps = mode === 'success' ? getSuccessSteps() : getFailSteps();
    const current = steps[stepIndex];
    // 캐릭터가 보여진 상태에서 클릭하면 지우고 다음으로
    if (current && current.type === 'character') {
      stage.innerHTML = '';
      nextStep();
      return;
    }
    nextStep();
  });

  // 버전 토글 기능 추가
  function switchToV2() {
    isV2 = true;
    document.querySelector('h1').textContent = '하이호는 발표를 잘 준비했나요?';
    btnSuccess.textContent = '네~!';
    btnFail.textContent = '아뇹,,';
    updateSectionContent();
    resetStage();
    mode = null;
  }

  function switchToV1() {
    isV2 = false;
    document.querySelector('h1').textContent = '하영이는 할 일을 완료했나요?';
    btnSuccess.textContent = '완료';
    btnFail.textContent = '실패';
    updateSectionContent();
    resetStage();
    mode = null;
  }

  function updateSectionContent() {
    const creatorDesc = document.querySelector('.creator-desc');
    const aboutList = document.querySelector('.about-list');
    const madeTimeEl = document.getElementById('made-time');

    if (isV2) {
      // 버전2 내용
      creatorDesc.textContent = '블로그와 개발에 열정을 가진 하이호. 지피터스 베스트 발표를 위해 특별히 준비된 버전입니다.';
      if (madeTimeEl) madeTimeEl.textContent = '8시 51분 ~ 발표 전까지';
      aboutList.innerHTML = `
        <li>2025년 9월 22일 지피터스 베스트 발표용 데모</li>
        <li>핵심 아이디어: 클릭으로 진행되는 축하/낙담 시퀀스</li>
      `;
    } else {
      // 버전1 내용
      creatorDesc.textContent = '분석적이고 실험을 즐기는 제작자. 작은 인터랙션으로 발표 경험을 더 즐겁게 만듭니다.';
      if (madeTimeEl) madeTimeEl.textContent = '약 3시 30분 ~ 5시 발표 전까지';
      aboutList.innerHTML = `
        <li>2025년 9월 22일 패스트캠퍼스+커서맛피아 해커톤 데모</li>
        <li>핵심 아이디어: 클릭으로 진행되는 축하/낙담 시퀀스</li>
        <li>타임라인: 14시 합류 → 안경 이슈 귀가 → 15:30 재시작 → 완성</li>
      `;
    }
  }

  // 버전 토글 버튼 생성
  const versionToggle = document.createElement('div');
  versionToggle.className = 'version-toggle';
  versionToggle.innerHTML = `
    <button id="btn-v1" class="version-btn active">버전1</button>
    <button id="btn-v2" class="version-btn">버전2</button>
  `;
  document.body.appendChild(versionToggle);

  document.getElementById('btn-v1').addEventListener('click', () => {
    document.getElementById('btn-v1').classList.add('active');
    document.getElementById('btn-v2').classList.remove('active');
    switchToV1();
  });

  document.getElementById('btn-v2').addEventListener('click', () => {
    document.getElementById('btn-v2').classList.add('active');
    document.getElementById('btn-v1').classList.remove('active');
    switchToV2();
  });

  // 페이지 로드시 기본값으로 버전1 내용 설정
  updateSectionContent();

})();


