// 커맨드 마크다운 콘텐츠
export const commandContents: Record<string, string> = {
  'plan': `---
name: plan
description: 요구사항 재진술, 위험 평가, 단계별 구현 계획 생성
allowed-tools: Read, Grep, Glob
---

## 이 커맨드가 하는 일

1. **요구사항 재진술** - 무엇을 구축해야 하는지 명확히
2. **위험 식별** - 잠재적 문제와 차단 요소 표면화
3. **단계 계획 생성** - 구현을 단계로 분해
4. **확인 대기** - 진행 전 반드시 사용자 승인 받기

## 사용 시점

- 새 기능 시작
- 중요한 아키텍처 변경
- 복잡한 리팩토링 작업
- 여러 파일/컴포넌트에 영향
- 요구사항이 불명확하거나 모호할 때

## 출력 형식

\`\`\`markdown
# 구현 계획: [기능명]

## 요구사항 재진술
- 요구사항 1
- 요구사항 2

## 구현 단계
### 1단계: [단계명]
- 세부 작업

### 2단계: [단계명]
- 세부 작업

## 위험
- 높음: [위험 설명]
- 중간: [위험 설명]

## 예상 복잡도: [낮음/중간/높음]
\`\`\`

**중요**: planner 에이전트는 명시적으로 계획을 확인할 때까지 코드를 작성하지 않습니다.
`,

  'tdd': `---
name: tdd
description: 테스트 주도 개발 워크플로우 강제. 80%+ 커버리지 보장.
allowed-tools: Read, Write, Edit, Bash, Grep
---

## 이 커맨드가 하는 일

1. **인터페이스 스캐폴딩** - 먼저 타입/인터페이스 정의
2. **테스트 먼저 생성** - 실패하는 테스트 작성 (RED)
3. **최소한의 코드 구현** - 통과할 만큼만 작성 (GREEN)
4. **리팩토링** - 테스트가 그린인 상태로 코드 개선 (REFACTOR)
5. **커버리지 확인** - 80%+ 테스트 커버리지 보장

## TDD 사이클

\`\`\`
RED → GREEN → REFACTOR → REPEAT

RED:      실패하는 테스트 작성
GREEN:    통과할 최소한의 코드 작성
REFACTOR: 코드 개선, 테스트는 통과 유지
REPEAT:   다음 기능/시나리오
\`\`\`

## 모범 사례

**해야 할 것:**
- 구현 전에 테스트를 먼저 작성
- 테스트 실행하고 구현 전에 실패 확인
- 테스트 통과할 최소한의 코드 작성
- 테스트가 그린일 때만 리팩토링
- 엣지 케이스 및 오류 시나리오 추가
- 80%+ 커버리지 목표

**하지 말아야 할 것:**
- 테스트 전에 구현 작성
- 각 변경 후 테스트 실행 건너뛰기
- 한 번에 너무 많은 코드 작성

**필수**: RED 단계를 절대 건너뛰지 마세요.
`,

  'code-review': `---
name: code-review
description: 커밋되지 않은 변경에 대한 포괄적인 보안 및 품질 리뷰
allowed-tools: Read, Grep, Glob, Bash
---

## 이 커맨드가 하는 일

1. 변경된 파일 가져오기: git diff --name-only HEAD
2. 각 변경된 파일에서 보안 및 품질 이슈 검사
3. 심각도별 리포트 생성
4. 치명적 또는 높음 이슈 발견 시 커밋 차단 권고

## 검사 항목

### 보안 이슈 (치명적)
- 하드코딩된 자격 증명, API 키, 토큰
- SQL 인젝션 취약점
- XSS 취약점
- 누락된 입력 검증

### 코드 품질 (높음)
- 50줄 초과 함수
- 800줄 초과 파일
- 4 레벨 초과 중첩
- 누락된 오류 처리
- console.log 문

## 승인 기준

| 결과 | 조건 | 조치 |
|------|------|------|
| 승인 | 치명적/높음 이슈 없음 | 커밋 가능 |
| 경고 | 중간 이슈만 | 주의하여 머지 가능 |
| 차단 | 치명적/높음 이슈 있음 | 수정 필요 |

**중요**: 보안 취약점이 있는 코드는 절대 승인하지 마세요!
`,

  'build-fix': `---
name: build-fix
description: TypeScript 및 빌드 오류를 점진적으로 수정
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

## 이 커맨드가 하는 일

1. 빌드 실행: npm run build 또는 pnpm build
2. 오류 출력 파싱 (파일별 그룹화, 심각도별 정렬)
3. 각 오류에 대해:
   - 오류 컨텍스트 표시 (전후 5줄)
   - 문제 설명
   - 수정 제안
   - 수정 적용
   - 빌드 재실행
   - 오류 해결 확인
4. 요약 표시

## 중지 조건

- 수정이 새 오류를 유발
- 3번 시도 후에도 같은 오류 지속
- 사용자가 중지 요청

## 모범 사례

- 한 번에 하나의 오류만 수정
- 각 수정 후 빌드 재실행
- 최소한의 변경으로 수정
- 관련 없는 코드 리팩토링 금지
- 아키텍처 변경 금지

**안전을 위해 한 번에 하나의 오류만 수정!**
`,

  'e2e': `---
name: e2e
description: Playwright로 end-to-end 테스트를 생성하고 실행
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

## 이 커맨드가 하는 일

1. **테스트 여정 생성** - 사용자 흐름을 위한 Playwright 테스트 생성
2. **E2E 테스트 실행** - 여러 브라우저에서 테스트 실행
3. **아티팩트 캡처** - 실패 시 스크린샷, 비디오, 트레이스
4. **결과 업로드** - HTML 리포트 및 JUnit XML
5. **불안정한 테스트 식별** - 불안정한 테스트 격리

## 빠른 명령어

\`\`\`bash
# 모든 E2E 테스트 실행
npx playwright test

# headed 모드로 실행
npx playwright test --headed

# 테스트 디버그
npx playwright test --debug

# 테스트 코드 생성
npx playwright codegen http://localhost:3000

# 리포트 보기
npx playwright show-report
\`\`\`

## 모범 사례

**해야 할 것:**
- Page Object Model 사용
- data-testid 속성 사용
- 임의의 타임아웃 대신 API 응답 대기

**하지 말아야 할 것:**
- 불안정한 선택자 사용 (CSS 클래스)
- 프로덕션에서 테스트 실행
- 불안정한 테스트 무시

**치명적**: 실제 돈이 관련된 E2E 테스트는 반드시 테스트넷/스테이징에서만 실행!
`,

  'refactor-clean': `---
name: refactor-clean
description: 테스트 검증과 함께 안전하게 불필요한 코드 식별 및 제거
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

## 이 커맨드가 하는 일

1. 불필요한 코드 분석 도구 실행:
   - knip: 사용되지 않는 익스포트와 파일 찾기
   - depcheck: 사용되지 않는 의존성 찾기
   - ts-prune: 사용되지 않는 TypeScript 익스포트 찾기

2. 심각도별 발견 사항 분류:
   - **안전**: 테스트 파일, 사용되지 않는 유틸리티
   - **주의**: API 라우트, 컴포넌트
   - **위험**: 설정 파일, 메인 진입점

3. 안전한 삭제만 제안

4. 각 삭제 전:
   - 전체 테스트 스위트 실행
   - 테스트 통과 확인
   - 변경 적용
   - 테스트 재실행
   - 테스트 실패 시 롤백

## 분석 명령어

\`\`\`bash
# 사용되지 않는 익스포트/파일/의존성
npx knip

# 사용되지 않는 의존성
npx depcheck

# 사용되지 않는 TypeScript 익스포트
npx ts-prune
\`\`\`

**테스트 먼저 실행하지 않고 절대 코드 삭제 금지!**
`,

  'test-coverage': `---
name: test-coverage
description: 테스트 커버리지를 분석하고 누락된 테스트 생성
allowed-tools: Read, Write, Edit, Bash, Grep
---

## 이 커맨드가 하는 일

1. 커버리지와 함께 테스트 실행: npm test --coverage
2. 커버리지 리포트 분석
3. 80% 커버리지 임계값 미만 파일 식별
4. 커버되지 않은 각 파일에 대해:
   - 테스트되지 않은 코드 경로 분석
   - 함수에 대한 단위 테스트 생성
   - API에 대한 통합 테스트 생성
5. 새 테스트 통과 확인
6. 전후 커버리지 지표 표시

## 커버리지 요구사항

| 지표 | 최소 요구 | 목표 |
|------|----------|------|
| 브랜치 | 80% | 90%+ |
| 함수 | 80% | 90%+ |
| 라인 | 80% | 90%+ |
| 문장 | 80% | 90%+ |

## 집중 영역

- **행복한 경로 시나리오** - 정상 흐름
- **오류 처리** - 예외 상황
- **엣지 케이스** - null, undefined, 비어 있음
- **경계 조건** - 최소/최대 값

**팁**: 100% 커버리지가 목표가 아닙니다. 의미 있는 테스트가 중요합니다.
`,

  'update-docs': `---
name: update-docs
description: 진실의 소스에서 문서 동기화
allowed-tools: Read, Write, Edit, Grep, Glob
---

## 이 커맨드가 하는 일

1. package.json scripts 섹션 읽기
   - 스크립트 참조 테이블 생성
   - 주석의 설명 포함

2. .env.example 읽기
   - 모든 환경 변수 추출
   - 목적과 형식 문서화

3. docs/CONTRIB.md 생성:
   - 개발 워크플로우
   - 사용 가능한 스크립트
   - 환경 설정
   - 테스트 절차

4. docs/RUNBOOK.md 생성:
   - 배포 절차
   - 모니터링 및 알림
   - 일반적인 문제와 해결
   - 롤백 절차

5. 오래된 문서 식별:
   - 90일 이상 수정되지 않은 문서 찾기

## 진실의 소스

문서는 다음에서 생성됩니다:
- package.json - 스크립트, 설명
- .env.example - 환경 변수
- 코드 주석 - JSDoc, TSDoc

**원칙**: 단일 진실의 소스. 문서는 항상 코드에서 생성되어야 합니다.
`,

  'update-codemaps': `---
name: update-codemaps
description: 코드베이스 구조를 분석하고 아키텍처 문서 업데이트
allowed-tools: Read, Write, Edit, Grep, Glob
---

## 이 커맨드가 하는 일

1. 모든 소스 파일의 임포트, 익스포트, 의존성 스캔
2. 다음 형식으로 토큰 효율적인 코드맵 생성:
   - codemaps/architecture.md - 전체 아키텍처
   - codemaps/backend.md - 백엔드 구조
   - codemaps/frontend.md - 프론트엔드 구조
   - codemaps/data.md - 데이터 모델 및 스키마
3. 이전 버전과의 차이 비율 계산
4. 변경이 30% 초과 시 업데이트 전 사용자 승인 요청
5. 각 코드맵에 최신 타임스탬프 추가

## 코드맵 구조

\`\`\`
codemaps/
├── architecture.md    # 전체 시스템 아키텍처
├── backend.md         # 백엔드 구조
├── frontend.md        # 프론트엔드 구조
└── data.md           # 데이터 모델
\`\`\`

## 분석 도구

\`\`\`bash
# 의존성 그래프 생성
npx madge --image graph.svg src/

# TypeScript 구조 분석
npx ts-morph
\`\`\`

**원칙**: 구현 세부사항이 아닌 고수준 구조에 집중. 각 코드맵은 500줄 미만 유지.
`
}
