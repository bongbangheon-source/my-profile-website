# 개인 프로필 웹사이트

Node.js 18 이상에서 프로젝트 폴더의 터미널로 다음 명령을 실행하세요. 외부 패키지 설치나 빌드는 필요하지 않습니다.

```powershell
npm start
```

브라우저에서 `http://127.0.0.1:3000`을 여세요. `npm run dev`도 같은 서버를 실행합니다. 파일을 수정한 뒤 브라우저를 새로고침하면 반영됩니다. 종료하려면 터미널에서 `Ctrl+C`를 누르세요.

포트가 사용 중이면 PowerShell에서 다른 포트로 실행하세요.

```powershell
$env:PORT = '3001'
npm start
```

폴더 구조:

```text
myprofile/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/images/ # 원본 Stitch 이미지를 로컬에 저장
├── stitch_export/     # Stitch 원본 (배포 대상 아님)
├── server.js          # Node.js 기본 모듈로 구현한 로컬 서버
├── package.json      # 실행 명령, 외부 의존성 없음
├── vercel.json       # public 폴더를 정적 배포
├── .gitignore
└── README.md
```

기존 HTML, CSS, JavaScript는 내용 변경 없이 `public`으로 이동했습니다. 이후 웹사이트 수정은 이 폴더에서 진행하세요. `public/index.html`을 직접 브라우저에서 열 수도 있습니다.

- `public/index.html`: Stitch 디자인을 활용한 프로필, 소개, 프로젝트, 연락처
- `public/styles.css`: 로컬 스타일과 모바일 반응형 레이아웃
- `public/script.js`: 모바일 메뉴, 현재 섹션 표시, 프로젝트 이동, 이메일 복사, 메일 작성

Vercel 배포 시 이 프로젝트의 저장소를 연결하고 Root Directory를 프로젝트 루트로 지정하세요. `vercel.json`이 Framework를 Other, Build/Install Command를 빈 값, Output Directory를 `public`으로 설정합니다. 별도 빌드 없이 정적 파일만 배포하며 `server.js`는 로컬 실행용입니다. 지금은 배포를 실행하지 않았습니다. 설정 참고: [Vercel 공식 문서](https://vercel.com/docs/project-configuration/vercel-json).

김택헌의 소개, 전문 분야, 프로젝트 제목과 이메일을 반영했습니다. 사진, 학력, 경력, 성과 수치 및 프로젝트 상세 내용은 예시입니다. 프로젝트 링크는 관련 참고 사이트인 Chart.js, HuggingChat, 호날두 소개 페이지로 연결됩니다. 실제 프로젝트 주소가 생기면 카드의 `data-url`과 카드 안의 `href`를 함께 변경하세요.

이메일을 바꿀 때는 HTML의 이메일 링크 및 표시 내용과 JavaScript의 `mailto:` 주소도 변경하세요. 문의 폼은 메일 앱을 열며 실제 발송은 사용자가 메일 앱에서 진행합니다.

원본 이미지는 `public/assets/images/`에 저장되어 로컬에서도 표시됩니다. Google Fonts는 인터넷 연결이 필요하며, 연결되지 않으면 기본 글꼴로 표시됩니다. 이메일 작성은 기기에 설정된 메일 앱을 사용합니다. 이메일 복사는 브라우저 권한에 따라 제한될 수 있으며, 실패하면 직접 복사 안내가 표시됩니다.

`stitch_export`의 원본 파일은 보존했습니다. React, Next.js, Tailwind 런타임을 사용하지 않습니다.

