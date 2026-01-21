// 규칙 마크다운 콘텐츠
export const ruleContents: Record<string, string> = {
  'security': `---
name: security
description: 모든 코드에 적용되는 필수 보안 규칙
---

# 보안

모든 코드에 적용되는 필수 보안 규칙입니다.

## 필수 보안 검사

모든 커밋 전:

- [ ] 하드코딩된 시크릿 없음 (API 키, 비밀번호, 토큰)
- [ ] 모든 사용자 입력 검증됨
- [ ] SQL 인젝션 방지 (파라미터화된 쿼리)
- [ ] XSS 방지 (HTML 새니타이즈)
- [ ] CSRF 보호 활성화
- [ ] 인증/인가 검증됨
- [ ] 모든 엔드포인트에 레이트 리미팅
- [ ] 오류 메시지가 민감한 데이터 노출하지 않음

## 시크릿 관리

\`\`\`typescript
// 절대 금지: 하드코딩된 시크릿
const apiKey = "sk-proj-xxxxx"

// 항상: 환경 변수
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  throw new Error('OPENAI_API_KEY가 설정되지 않았습니다')
}
\`\`\`

## SQL 인젝션 방지

\`\`\`typescript
// 위험: 문자열 연결
const query = \`SELECT * FROM users WHERE id = \${userId}\`

// 안전: 파라미터화된 쿼리
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)
\`\`\`

## XSS 방지

\`\`\`typescript
// 위험: innerHTML 직접 사용
element.innerHTML = userInput

// 안전: textContent 사용
element.textContent = userInput

// 안전: 라이브러리로 새니타이즈
import DOMPurify from 'dompurify'
element.innerHTML = DOMPurify.sanitize(userInput)
\`\`\`

## 보안 등급

| 등급 | 설명 | 조치 |
|------|------|------|
| 치명적 | 시크릿 노출, 인젝션 | 즉시 수정 필수 |
| 높음 | 인증 우회, XSS | 커밋 전 수정 |
| 중간 | 레이트 리미팅 누락 | 가능한 빨리 수정 |
| 낮음 | 정보 노출 가능성 | 검토 후 수정 |

**보안은 선택 사항이 아닙니다.**
`,

  'testing': `---
name: testing
description: 테스트 주도 개발과 커버리지 요구사항
---

# 테스트

테스트 주도 개발과 커버리지 요구사항입니다.

## 최소 테스트 커버리지: 80%

모든 새 코드는 **80% 이상**의 테스트 커버리지를 가져야 합니다.

## 테스트 타입 (모두 필수)

| 타입 | 범위 | 예시 |
|------|------|------|
| **단위 테스트** | 개별 함수, 유틸리티, 컴포넌트 | calculatePrice.test.ts |
| **통합 테스트** | API 엔드포인트, 데이터베이스 작업 | api/users.test.ts |
| **E2E 테스트** | 중요 사용자 흐름 (Playwright) | e2e/checkout.spec.ts |

## 테스트 주도 개발 (TDD)

필수 워크플로우:

\`\`\`
1. 테스트 먼저 작성 (RED)
2. 테스트 실행 - 실패해야 함
3. 최소한의 구현 작성 (GREEN)
4. 테스트 실행 - 통과해야 함
5. 리팩토링 (IMPROVE)
6. 커버리지 확인 (80%+)
\`\`\`

## TDD 예시

\`\`\`typescript
// 1단계: 테스트 먼저 작성 (RED)
describe('calculateTotal', () => {
  it('should return sum of prices', () => {
    const items = [{ price: 100 }, { price: 200 }]
    expect(calculateTotal(items)).toBe(300)
  })
})

// 3단계: 최소한의 구현 (GREEN)
function calculateTotal(items: { price: number }[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}
\`\`\`

## 커버리지 요구사항

\`\`\`bash
# 커버리지와 함께 테스트 실행
npm test --coverage

# 임계값
- 브랜치: 80%
- 함수: 80%
- 라인: 80%
- 문장: 80%
\`\`\`

## 100% 커버리지 필수 영역

- 금융 계산
- 인증 로직
- 보안에 중요한 코드
- 핵심 비즈니스 로직
`,

  'git-workflow': `---
name: git-workflow
description: Git 커밋 및 PR 프로세스 규칙
---

# Git 워크플로우

Git 커밋 및 PR 프로세스 규칙입니다.

## 커밋 메시지 형식

\`\`\`
<타입>: <설명>

<선택적 본문>
\`\`\`

### 타입

| 타입 | 설명 | 예시 |
|------|------|------|
| feat | 새 기능 | feat: 사용자 인증 추가 |
| fix | 버그 수정 | fix: 로그인 오류 해결 |
| refactor | 리팩토링 | refactor: API 클라이언트 구조 개선 |
| docs | 문서 | docs: README 업데이트 |
| test | 테스트 | test: 유틸리티 함수 테스트 추가 |
| chore | 유지보수 | chore: 의존성 업데이트 |
| perf | 성능 | perf: 쿼리 최적화 |
| ci | CI/CD | ci: GitHub Actions 설정 |

## Pull Request 워크플로우

PR 생성 시:

1. 전체 커밋 히스토리 분석
2. git diff로 모든 변경사항 확인
3. 포괄적인 PR 요약 작성
4. TODO가 포함된 테스트 계획 포함
5. 새 브랜치인 경우 -u 플래그로 푸시

## 브랜치 전략

\`\`\`
main
├── feature/user-auth
├── feature/payment
├── fix/login-bug
└── refactor/api-client
\`\`\`

### 브랜치 명명 규칙

- feature/ - 새 기능
- fix/ - 버그 수정
- refactor/ - 리팩토링
- docs/ - 문서
- test/ - 테스트

## 머지 전 체크리스트

- [ ] 모든 테스트 통과
- [ ] 코드 리뷰 완료
- [ ] 보안 검사 통과
- [ ] 문서 업데이트 (필요시)
`,

  'agents': `---
name: agents
description: 에이전트를 효과적으로 사용하는 규칙
---

# 에이전트 오케스트레이션

에이전트를 효과적으로 사용하는 규칙입니다.

## 사용 가능한 에이전트

~/.claude/agents/에 위치:

| 에이전트 | 목적 | 사용 시점 |
|----------|------|-----------|
| planner | 구현 계획 | 복잡한 기능, 리팩토링 |
| architect | 시스템 설계 | 아키텍처 결정 |
| tdd-guide | 테스트 주도 개발 | 새 기능, 버그 수정 |
| code-reviewer | 코드 리뷰 | 코드 작성 후 |
| security-reviewer | 보안 분석 | 커밋 전 |
| build-error-resolver | 빌드 오류 수정 | 빌드 실패 시 |
| e2e-runner | E2E 테스트 | 중요 사용자 흐름 |
| refactor-cleaner | 불필요한 코드 정리 | 코드 유지보수 |
| doc-updater | 문서화 | 문서 업데이트 |

## 즉시 에이전트 사용

사용자 프롬프트 없이도 다음 상황에서 에이전트를 사용하세요:

| 상황 | 사용할 에이전트 |
|------|----------------|
| 복잡한 기능 요청 | planner |
| 코드 작성/수정 완료 | code-reviewer |
| 버그 수정 또는 새 기능 | tdd-guide |
| 아키텍처 결정 | architect |

## 병렬 작업 실행

독립적인 작업에는 **항상 병렬 Task 실행** 사용!

## 에이전트 사용 우선순위

\`\`\`
1. planner       → 무엇을 할지 계획
2. architect     → 어떻게 할지 설계
3. tdd-guide     → 테스트와 함께 구현
4. code-reviewer → 품질 검토
5. security-reviewer → 보안 검토
\`\`\`
`,

  'patterns': `---
name: patterns
description: 자주 사용되는 코드 패턴
---

# 공통 패턴

자주 사용되는 코드 패턴입니다.

## API 응답 형식

\`\`\`typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: {
    total: number
    page: number
    limit: number
  }
}
\`\`\`

## 커스텀 훅 패턴

### useDebounce

\`\`\`typescript
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
\`\`\`

## 레포지토리 패턴

\`\`\`typescript
interface Repository<T> {
  findAll(filters?: Filters): Promise<T[]>
  findById(id: string): Promise<T | null>
  create(data: CreateDto): Promise<T>
  update(id: string, data: UpdateDto): Promise<T>
  delete(id: string): Promise<void>
}
\`\`\`

## 서비스 레이어 패턴

\`\`\`typescript
class UserService {
  constructor(private readonly repo: UserRepository) {}

  async createUser(input: CreateUserInput): Promise<User> {
    const validated = userSchema.parse(input)
    const hashedPassword = await hash(validated.password)
    return this.repo.create({ ...validated, password: hashedPassword })
  }
}
\`\`\`

## 에러 핸들링 패턴

\`\`\`typescript
class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message)
  }
}

throw new AppError('사용자를 찾을 수 없습니다', 404, 'USER_NOT_FOUND')
\`\`\`
`,

  'performance': `---
name: performance
description: 모델 선택 및 컨텍스트 윈도우 관리 규칙
---

# 성능

모델 선택 및 컨텍스트 윈도우 관리 규칙입니다.

## 모델 선택 전략

| 모델 | 특징 | 사용 시점 |
|------|------|----------|
| Haiku 4.5 | Sonnet 능력의 90%, 비용 3배 절감 | 경량 에이전트, 워커 |
| Sonnet 4.5 | 최고의 코딩 모델 | 메인 개발, 오케스트레이션 |
| Opus 4.5 | 가장 깊은 추론 | 아키텍처 결정, 리서치 |

### Haiku 적합 작업
- 자주 호출되는 경량 에이전트
- 페어 프로그래밍과 코드 생성
- 멀티 에이전트 시스템의 워커 에이전트

### Sonnet 적합 작업
- 메인 개발 작업
- 멀티 에이전트 워크플로우 오케스트레이션

### Opus 적합 작업
- 복잡한 아키텍처 결정
- 리서치 및 분석 작업

## 컨텍스트 윈도우 관리

컨텍스트 윈도우의 **마지막 20%**에서는 복잡한 작업을 피하세요!

### 피해야 할 작업 (마지막 20%)
- 대규모 리팩토링
- 여러 파일에 걸친 기능 구현
- 복잡한 상호작용 디버깅

## MCP 서버 관리

MCP를 너무 많이 활성화하면 컨텍스트 윈도우가 70k로 줄어들 수 있습니다!

| 권장 | 설명 |
|------|------|
| 20-30개 | 설정해둘 MCP 수 |
| 10개 미만 | 프로젝트당 활성화할 MCP |
| 80개 미만 | 활성 도구 수 |
`,

  'hooks': `---
name: hooks
description: Claude Code 훅 시스템 규칙
---

# 훅 시스템

Claude Code 훅 시스템 규칙입니다.

## 훅 타입

| 타입 | 실행 시점 | 용도 |
|------|----------|------|
| PreToolUse | 도구 실행 전 | 검증, 파라미터 수정 |
| PostToolUse | 도구 실행 후 | 자동 포맷, 검사 |
| Stop | 세션 종료 시 | 최종 검증 |

## 현재 훅 예시

~/.claude/settings.json 내 설정:

### PreToolUse 훅
- tmux 리마인더: 장시간 명령에 tmux 제안
- git push 리뷰: 푸시 전 에디터에서 리뷰 열기
- doc 블로커: 불필요한 .md/.txt 파일 생성 차단

### PostToolUse 훅
- PR 생성: PR URL과 GitHub Actions 상태 로깅
- Prettier: 편집 후 JS/TS 파일 자동 포맷
- TypeScript 검사: .ts/.tsx 파일 편집 후 tsc 실행

## 훅 설정 예시

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "tool == \\"Edit\\"",
        "hooks": [{
          "type": "command",
          "command": "echo 'TypeScript 파일 편집 중'"
        }]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "tool == \\"Edit\\"",
        "hooks": [{
          "type": "command",
          "command": "npx prettier --write \\"$file_path\\""
        }]
      }
    ]
  }
}
\`\`\`

## 자동 승인 권한

| 상황 | 권장 |
|------|------|
| 신뢰할 수 있고 잘 정의된 계획 | 활성화 가능 |
| 탐색적 작업 | 비활성화 |
| dangerously-skip-permissions | 절대 사용 금지 |
`,

  'coding-style': `---
name: coding-style
description: 일관된 코드 품질을 위한 코딩 스타일 규칙
---

# 코딩 스타일

일관된 코드 품질을 위한 코딩 스타일 규칙입니다.

## 불변성 (중요)

항상 새 객체 생성, 절대 변경하지 않음!

\`\`\`javascript
// 잘못된 방법: 변경
function updateUser(user, name) {
  user.name = name  // 변경!
  return user
}

// 올바른 방법: 불변성
function updateUser(user, name) {
  return { ...user, name }
}
\`\`\`

### 배열 불변성

\`\`\`javascript
// 잘못된 방법
array.push(item)
array.sort()

// 올바른 방법
const newArray = [...array, item]
const sortedArray = [...array].sort()
\`\`\`

## 파일 구성

적은 대형 파일보다 **많은 작은 파일**:

| 권장 | 설명 |
|------|------|
| 200-400줄 | 일반적인 파일 크기 |
| 최대 800줄 | 파일 크기 상한 |
| 기능/도메인별 | 타입별이 아닌 기능별 구성 |

## 오류 처리

항상 포괄적인 오류 처리:

\`\`\`typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('작업 실패:', error)
  throw new Error('상세한 사용자 친화적 메시지')
}
\`\`\`

## 함수 크기

함수는 50줄 미만으로 작성:

\`\`\`typescript
// 좋음: 작은 함수로 분리
function processData(data) {
  const validated = validateData(data)
  const transformed = transformData(validated)
  return saveData(transformed)
}
\`\`\`

## 중첩 제한

4레벨 이상의 중첩은 피하고, 얼리 리턴 사용:

\`\`\`typescript
// 좋음: 얼리 리턴
if (!a) return
if (!b) return
if (!c) return
// 메인 로직
\`\`\`

## 코드 품질 체크리스트

- [ ] 코드가 읽기 쉽고 이름이 명확함
- [ ] 함수가 작음 (50줄 미만)
- [ ] 파일이 집중됨 (800줄 미만)
- [ ] 깊은 중첩 없음 (4레벨 이하)
- [ ] 적절한 오류 처리
- [ ] console.log 문 없음
- [ ] 하드코딩된 값 없음
- [ ] 변경 없음 (불변 패턴 사용)
`
}
