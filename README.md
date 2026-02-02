# 하이호 완료 축하 사이트

**배포 사이트**: https://hiho1014.github.io/hayoung-celebration-site/

간단한 1페이지 데모로, [네~!]/[아뇹,,] 선택 후 스테이지를 클릭할 때마다 축하/낙담 시퀀스가 순차 재생됩니다. PC/모바일 모두 자연스럽게 동작합니다.

## 🚀 배포 정보

- **GitHub Pages**: https://hiho1014.github.io/hayoung-celebration-site/
- **레포지토리**: https://github.com/hiho1014/hayoung-celebration-site
- **브랜치**: `master` (배포 브랜치)
- **배포 방식**: GitHub Pages 자동 배포

## 📁 프로젝트 구조

```
hayoung-celebration-site/
├── index.html              # 메인 페이지 (v2 버전)
├── styles.css              # 스타일시트
├── script.js               # JavaScript 로직
├── thumbnail.jpg           # 소셜 미디어 썸네일
├── image/                  # 이미지 폴더
│   ├── 이미지1 관계자-배경 제거.png
│   ├── 이미지1 관계자.png
│   ├── 이미지2 커서맛피아-배경 제거.png
│   ├── 이미지2 커서맛피아.png
│   ├── 이미지3 여러분-배경 제거.png
│   ├── 이미지3 여러분.png
│   └── 버전2/              # v2 전용 이미지
│       ├── 이미지1 지피터스.png
│       ├── 이미지2 블로그.png
│       ├── og-image.png
│       └── 버전2 Open Graph 이미지.png
├── docs/                   # 문서 폴더
│   └── REQUESTS.md         # 사용자 요청 프롬프트 모음
├── presentation/           # 발표 자료
│   ├── 신하영 할일 체크 사이트~ 발표 ppt~.pdf
│   └── 신하영 할일 체크 사이트~ 발표 ppt~.pptx
├── 관종 발표.code-workspace # VS Code 워크스페이스
└── README.md              # 프로젝트 문서
```

## 🎯 사용 방법

1. 상단 문구 아래 버튼에서 [네~!] 또는 [아뇹,,]를 선택합니다.
2. 효과는 3~5초 재생되지만 비차단입니다. 스테이지 빈 공간을 클릭하면 다음 장면으로 즉시 넘어갑니다.
3. 이미지와 말풍선은 총 3단계로 순차 노출됩니다.

## 🛠️ 로컬 개발

```bash
# 로컬 미리보기
npx serve . --single

# 또는 Python
python -m http.server 8000
```

## 📋 기능 명세

### 버전 정보
- **현재 버전**: v2 (지피터스 베스트 발표용)
- **이전 버전**: v1 (해커톤 발표용) - 이미지 파일로 보존됨

### 주요 기능
- ✅ 완료/실패 선택 인터랙션
- ✅ 순차적 이미지/말풍선 표시
- ✅ 비차단 이펙트 애니메이션
- ✅ 반응형 디자인 (PC/모바일)
- ✅ 소셜 미디어 메타 태그

### 기술 스택
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **Vanilla JavaScript**: ES6+ 모듈 패턴
- **Google Fonts**: Pretendard 폰트

## 🎨 디자인 특징

- **테마**: 흰 배경 + 무지개 그라데이션
- **색상**: 컨페티 컬러 팔레트 (빨강, 노랑, 초록, 파랑, 보라)
- **타이포그래피**: Pretendard (한글 최적화)
- **애니메이션**: CSS 애니메이션 + Web Animations API

## 📱 반응형 지원

- **데스크톱**: 1100px 최대 너비, 중앙 정렬
- **태블릿**: 640px 이하에서 그리드 1열 변경
- **모바일**: 뷰포트 단위(svh) 사용, 터치 최적화

## 🔧 배포 설정

### GitHub Pages 설정
1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `master` / `root`
4. Custom domain: (선택사항)

### 캐시 무효화
```html
<meta http-equiv="cache-control" content="no-cache">
```

## 📊 성능 최적화

- **폰트**: preconnect로 Google Fonts 최적화
- **이미지**: 배경 제거 PNG, 적절한 크기
- **CSS**: 미디어 쿼리로 모바일 최적화
- **JS**: IIFE 패턴으로 전역 스코프 오염 방지

## 🐛 알려진 이슈

- 한글 파일명 사용 (일부 환경에서 인코딩 이슈 가능)
- IE 지원 안함 (ES6+ 사용)

## 📝 라이선스

이 프로젝트는 개인 발표용 데모입니다. 이미지는 제공받은 배경 제거 파일을 사용합니다.

## 👤 제작자

**하이호** - 블로그와 개발에 열정을 가진 개발자
- **다른 작업**: https://www.mumumi-magic.com
- **제작 날짜**: 2025년 9월 22일