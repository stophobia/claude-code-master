// 스킬 마크다운 콘텐츠
export const skillContents: Record<string, string> = {
  'coding-standards': `---
name: coding-standards
description: TypeScript, JavaScript, React, Node.js 개발을 위한 범용 코딩 표준
---

# 코딩 표준

TypeScript, JavaScript, React, Node.js 개발을 위한 범용 코딩 표준과 모범 사례입니다.

## 코드 품질 원칙

### 1. 가독성 우선
- 명확한 변수와 함수 이름
- 주석보다 자기 문서화 코드 선호
- 일관된 포맷팅

### 2. KISS (Keep It Simple, Stupid)
- 작동하는 가장 단순한 해결책
- 과도한 엔지니어링 피하기
- 조기 최적화 금지

### 3. DRY (Don't Repeat Yourself)
- 공통 로직을 함수로 추출
- 재사용 가능한 컴포넌트 생성

### 4. YAGNI (You Aren't Gonna Need It)
- 필요하기 전에 기능을 만들지 않기
- 단순하게 시작하고 필요시 리팩토링

## TypeScript/JavaScript 표준

### 변수 명명
\`\`\`typescript
// 좋음: 설명적인 이름
const marketSearchQuery = 'election'
const isUserAuthenticated = true

// 나쁨: 불명확한 이름
const q = 'election'
const flag = true
\`\`\`

### 함수 명명
\`\`\`typescript
// 좋음: 동사-명사 패턴
async function fetchMarketData(marketId: string) { }
function calculateSimilarity(a: number[], b: number[]) { }
function isValidEmail(email: string): boolean { }
\`\`\`

### 불변성 패턴
\`\`\`typescript
// 항상 스프레드 연산자 사용
const updatedUser = { ...user, name: 'New Name' }
const updatedArray = [...items, newItem]

// 절대 직접 변경하지 않기
user.name = 'New Name'  // 나쁨
items.push(newItem)     // 나쁨
\`\`\`

### 오류 처리
\`\`\`typescript
async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`)
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch failed:', error)
    throw new Error('데이터 조회 실패')
  }
}
\`\`\`

## React 모범 사례

### 컴포넌트 구조
\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary'
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={\`btn btn-\${variant}\`}>
      {children}
    </button>
  )
}
\`\`\`

## 코드 스멜 감지

### 긴 함수
- 50줄 초과 함수는 작은 함수로 분리

### 깊은 중첩
- 조기 반환 사용으로 중첩 줄이기

### 매직 넘버
- 명명된 상수 사용

**코드 품질은 협상 불가입니다.**
`,

  'backend-patterns': `---
name: backend-patterns
description: 확장 가능한 서버 사이드 애플리케이션을 위한 백엔드 아키텍처 패턴
---

# 백엔드 패턴

확장 가능한 서버 사이드 애플리케이션을 위한 백엔드 아키텍처 패턴과 모범 사례입니다.

## API 설계 패턴

### RESTful API 구조
\`\`\`
GET    /api/markets                 # 리소스 목록
GET    /api/markets/:id             # 단일 리소스 조회
POST   /api/markets                 # 리소스 생성
PUT    /api/markets/:id             # 리소스 교체
PATCH  /api/markets/:id             # 리소스 업데이트
DELETE /api/markets/:id             # 리소스 삭제
\`\`\`

### 레포지토리 패턴
\`\`\`typescript
interface MarketRepository {
  findAll(filters?: MarketFilters): Promise<Market[]>
  findById(id: string): Promise<Market | null>
  create(data: CreateMarketDto): Promise<Market>
  update(id: string, data: UpdateMarketDto): Promise<Market>
  delete(id: string): Promise<void>
}
\`\`\`

### 서비스 레이어 패턴
- 비즈니스 로직을 데이터 접근과 분리

### 미들웨어 패턴
- 요청/응답 처리 파이프라인

## 데이터베이스 패턴

### 쿼리 최적화
- 필요한 컬럼만 선택
- 인덱스 활용

### N+1 쿼리 방지
- 배치 조회 사용

### 트랜잭션 패턴
- 원자성 보장

## 캐싱 전략

### Redis 캐싱 레이어
\`\`\`typescript
async findById(id: string): Promise<Market | null> {
  const cached = await this.redis.get(\`market:\${id}\`)
  if (cached) return JSON.parse(cached)

  const market = await this.baseRepo.findById(id)
  if (market) {
    await this.redis.setex(\`market:\${id}\`, 300, JSON.stringify(market))
  }
  return market
}
\`\`\`

## 오류 처리 패턴

### 중앙집중식 오류 핸들러
### 지수 백오프 재시도

## 인증 & 인가

### JWT 토큰 검증
### 역할 기반 접근 제어

## 레이트 리미팅
- 윈도우 기반 요청 제한

**복잡도 수준에 맞는 패턴을 선택하세요.**
`,

  'frontend-patterns': `---
name: frontend-patterns
description: React, Next.js, 그리고 성능 좋은 사용자 인터페이스를 위한 현대적인 프론트엔드 패턴
---

# 프론트엔드 패턴

React, Next.js, 그리고 성능 좋은 사용자 인터페이스를 위한 현대적인 프론트엔드 패턴입니다.

## 컴포넌트 패턴

### 상속보다 합성
\`\`\`typescript
export function Card({ children, variant = 'default' }: CardProps) {
  return <div className={\`card card-\${variant}\`}>{children}</div>
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>
}
\`\`\`

### 복합 컴포넌트
- Context를 활용한 상태 공유

### Render Props 패턴
- 유연한 렌더링 위임

## 커스텀 훅 패턴

### 상태 관리 훅
\`\`\`typescript
export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => setValue(v => !v), [])
  return [value, toggle]
}
\`\`\`

### 비동기 데이터 페칭 훅
### 디바운스 훅

## 상태 관리 패턴

### Context + Reducer 패턴
\`\`\`typescript
type Action =
  | { type: 'SET_MARKETS'; payload: Market[] }
  | { type: 'SELECT_MARKET'; payload: Market }
  | { type: 'SET_LOADING'; payload: boolean }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MARKETS':
      return { ...state, markets: action.payload }
    // ...
  }
}
\`\`\`

## 성능 최적화

### 메모이제이션
- useMemo, useCallback, React.memo 활용

### 코드 스플리팅 & 지연 로딩
\`\`\`typescript
const HeavyChart = lazy(() => import('./HeavyChart'))

<Suspense fallback={<ChartSkeleton />}>
  <HeavyChart data={data} />
</Suspense>
\`\`\`

### 긴 목록 가상화
- @tanstack/react-virtual 활용

## 폼 처리 패턴

### 검증이 포함된 제어 컴포넌트 폼

## Error Boundary 패턴

## 접근성 패턴

### 키보드 내비게이션

**프로젝트 복잡도에 맞는 패턴을 선택하세요.**
`,

  'tdd-workflow': `---
name: tdd-workflow
description: 테스트 주도 개발 방법론. 모든 코드 개발이 TDD 원칙을 따르도록 보장.
---

# TDD 워크플로우

테스트 주도 개발 방법론입니다. 모든 코드 개발이 TDD 원칙과 포괄적인 테스트 커버리지를 따르도록 보장합니다.

## 활성화 시점

- 새 기능이나 기능성 작성
- 버그나 이슈 수정
- 기존 코드 리팩토링
- API 엔드포인트 추가
- 새 컴포넌트 생성

## 핵심 원칙

### 1. 코드 전에 테스트
항상 테스트를 먼저 작성한 다음, 테스트를 통과시키는 코드를 구현합니다.

### 2. 커버리지 요구사항
- 최소 커버리지: 80% (단위 + 통합 + E2E)
- 엣지 케이스: 모두 커버
- 오류 시나리오: 테스트 필수

### 3. 테스트 타입
- **단위 테스트**: 개별 함수, 컴포넌트 로직
- **통합 테스트**: API 엔드포인트, 데이터베이스 작업
- **E2E 테스트**: 중요 사용자 흐름

## TDD 워크플로우 단계

1. 사용자 여정 작성
2. 테스트 케이스 생성
3. 테스트 실행 (실패해야 함)
4. 코드 구현
5. 테스트 다시 실행
6. 리팩토링
7. 커버리지 검증

## 테스팅 패턴

### 단위 테스트 패턴 (Jest/Vitest)
\`\`\`typescript
describe('Button 컴포넌트', () => {
  it('올바른 텍스트로 렌더링', () => {
    render(<Button>클릭하세요</Button>)
    expect(screen.getByText('클릭하세요')).toBeInTheDocument()
  })
})
\`\`\`

### API 통합 테스트 패턴
### E2E 테스트 패턴 (Playwright)

## 모범 사례

1. 테스트 먼저 작성 - 항상 TDD
2. 테스트당 하나의 어설션
3. 설명적인 테스트 이름
4. Arrange-Act-Assert 패턴
5. 외부 의존성 모킹
6. 엣지 케이스 테스트

**테스트는 선택사항이 아닙니다.**
`,

  'security-review': `---
name: security-review
description: 모든 코드가 보안 모범 사례를 따르고 잠재적 취약점을 식별
---

# 보안 리뷰

모든 코드가 보안 모범 사례를 따르고 잠재적 취약점을 식별하도록 보장합니다.

## 활성화 시점

- 인증 또는 인가 구현
- 사용자 입력 또는 파일 업로드 처리
- 새 API 엔드포인트 생성
- 시크릿 또는 자격 증명 작업
- 결제 기능 구현

## 보안 체크리스트

### 1. 시크릿 관리
\`\`\`typescript
// 좋음
const apiKey = process.env.OPENAI_API_KEY

// 나쁨
const apiKey = "sk-proj-xxxxx"  // 하드코딩된 시크릿
\`\`\`

### 2. 입력 검증
\`\`\`typescript
import { z } from 'zod'

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
})
\`\`\`

### 3. SQL 인젝션 방지
- 절대 SQL을 연결하지 마세요!
- 파라미터화된 쿼리 사용

### 4. 인증 & 인가
- JWT 토큰은 httpOnly 쿠키에 저장
- Row Level Security 활성화

### 5. XSS 방지
- HTML 새니타이즈
- Content Security Policy 설정

### 6. CSRF 보호
- CSRF 토큰 검증

### 7. 레이트 리미팅
- 모든 엔드포인트에 적용

### 8. 민감한 데이터 노출
- 로그에 민감한 데이터 없음
- 일반적인 오류 메시지 사용

## 배포 전 보안 체크리스트

- [ ] 하드코딩된 시크릿 없음
- [ ] 모든 사용자 입력 검증됨
- [ ] 모든 쿼리 파라미터화됨
- [ ] 사용자 컨텐츠 새니타이즈됨
- [ ] HTTPS 프로덕션에서 강제됨
- [ ] 의존성 최신 상태, 취약점 없음

**보안은 선택사항이 아닙니다.**
`,

  'clickhouse': `---
name: clickhouse
description: 고성능 분석과 데이터 엔지니어링을 위한 ClickHouse 전용 패턴
---

# ClickHouse

고성능 분석과 데이터 엔지니어링을 위한 ClickHouse 전용 패턴입니다.

## 개요

ClickHouse는 온라인 분석 처리(OLAP)를 위한 컬럼 지향 데이터베이스입니다.

**주요 기능:**
- 컬럼 지향 저장소
- 데이터 압축
- 병렬 쿼리 실행
- 분산 쿼리
- 실시간 분석

## 테이블 설계 패턴

### MergeTree 엔진
\`\`\`sql
CREATE TABLE markets_analytics (
    date Date,
    market_id String,
    volume UInt64,
    trades UInt32
) ENGINE = MergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (date, market_id);
\`\`\`

### ReplacingMergeTree (중복 제거)
### AggregatingMergeTree (사전 집계)

## 쿼리 최적화 패턴

### 효율적인 필터링
- 인덱스된 컬럼 먼저 사용

### 집계
\`\`\`sql
SELECT
    toStartOfDay(created_at) AS day,
    sum(volume) AS total_volume,
    uniq(trader_id) AS unique_traders
FROM trades
WHERE created_at >= today() - INTERVAL 7 DAY
GROUP BY day;
\`\`\`

## 데이터 삽입 패턴

### 벌크 삽입 (권장)
- 개별 삽입을 루프에서 사용하지 마세요!
- 항상 배치 삽입을 사용하세요.

## 구체화된 뷰

### 실시간 집계
\`\`\`sql
CREATE MATERIALIZED VIEW market_stats_hourly_mv
TO market_stats_hourly
AS SELECT
    toStartOfHour(timestamp) AS hour,
    sumState(amount) AS total_volume
FROM trades
GROUP BY hour;
\`\`\`

## 모범 사례

### 1. 파티셔닝 전략
- 시간별 파티션 (보통 월 또는 일)

### 2. 정렬 키
- 가장 자주 필터링되는 컬럼을 먼저

### 3. 데이터 타입
- 가장 작은 적절한 타입 사용

### 4. 피해야 할 것
- SELECT * 대신 필요한 컬럼만 선택
- 작은 빈번한 삽입 대신 배치 삽입

**쿼리 패턴에 맞게 테이블을 설계하세요.**
`,

  'project-guidelines': `---
name: project-guidelines
description: 프로젝트별 스킬의 예시. 자신의 프로젝트를 위한 템플릿으로 사용.
---

# 프로젝트 가이드라인

프로젝트별 스킬의 예시입니다. 자신의 프로젝트를 위한 템플릿으로 사용하세요.

## 사용 시점

이 스킬이 설계된 특정 프로젝트에서 작업할 때 참조하세요.

**프로젝트 스킬에 포함된 내용:**
- 아키텍처 개요
- 파일 구조
- 코드 패턴
- 테스트 요구사항
- 배포 워크플로우

## 아키텍처 개요

**기술 스택:**
| 레이어 | 기술 |
|--------|------|
| 프론트엔드 | Next.js 15, TypeScript, React |
| 백엔드 | FastAPI (Python), Pydantic |
| 데이터베이스 | Supabase (PostgreSQL) |
| AI | Claude API |
| 배포 | Google Cloud Run |

## 파일 구조

\`\`\`
project/
├── frontend/
│   └── src/
│       ├── app/              # Next.js app router
│       ├── components/       # React 컴포넌트
│       ├── hooks/            # 커스텀 훅
│       └── lib/              # 유틸리티
├── backend/
│   ├── routers/              # FastAPI 라우트
│   ├── models.py             # Pydantic 모델
│   └── services/             # 비즈니스 로직
└── deploy/                   # 배포 설정
\`\`\`

## 코드 패턴

### API 응답 형식
\`\`\`python
class ApiResponse(BaseModel, Generic[T]):
    success: bool
    data: Optional[T] = None
    error: Optional[str] = None
\`\`\`

## 테스트 요구사항

### 백엔드 (pytest)
\`\`\`bash
poetry run pytest tests/ --cov=. --cov-report=html
\`\`\`

### 프론트엔드
\`\`\`bash
npm run test
npm run test:e2e
\`\`\`

## 배포 워크플로우

### 배포 전 체크리스트
- [ ] 모든 테스트 통과
- [ ] 빌드 성공
- [ ] 하드코딩된 시크릿 없음
- [ ] 환경 변수 문서화됨

## 중요 규칙

| 규칙 | 설명 |
|------|------|
| 이모지 금지 | 코드, 주석, 문서에서 |
| 불변성 | 객체나 배열 절대 변경하지 않기 |
| TDD | 구현 전 테스트 작성 |
| 80% 커버리지 | 최소 요구사항 |
| 파일 크기 | 최대 800줄 |
`
}
