import React from 'react'
import Link from 'next/link'
import { Bot, Zap, Ruler, Target, Anchor, Plug, ChevronDown, Github } from 'lucide-react'

const features = [
  { href: '/agents', Icon: Bot, title: '에이전트', desc: '서브에이전트로 위임된 작업을 효율적으로 처리합니다. 코드 리뷰, TDD, 리팩토링 등 다양한 전문 에이전트를 제공합니다.' },
  { href: '/commands', Icon: Zap, title: '커맨드', desc: '슬래시 커맨드로 복잡한 워크플로우를 단순화합니다. /tdd, /code-review, /build-fix 등을 즉시 사용하세요.' },
  { href: '/rules', Icon: Ruler, title: '규칙', desc: '일관된 코딩 스타일과 보안 가이드라인을 유지합니다. 팀 전체에 적용할 수 있는 표준화된 규칙을 설정하세요.' },
  { href: '/skills', Icon: Target, title: '스킬', desc: '도메인별 전문 지식을 정의하고 공유합니다. 프론트엔드, 백엔드, 보안 등 다양한 스킬셋을 활용하세요.' },
  { href: '/advanced/hooks', Icon: Anchor, title: '훅', desc: '이벤트 기반 자동화로 워크플로우를 강화합니다. 파일 저장, 커밋 등 다양한 이벤트에 훅을 설정하세요.' },
  { href: '/advanced/mcp-servers', Icon: Plug, title: 'MCP 서버', desc: '외부 도구와 서비스를 Claude Code에 연결합니다. 데이터베이스, API, 클라우드 서비스를 통합하세요.' },
]

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>
      {/* Hero Section */}
      <div className="landing-hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        marginTop: '-1.5rem',
        marginLeft: '-4rem',
        marginRight: '-4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} className="animate-float" />

        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} className="animate-float delay-300" />

        <div style={{
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px'
        }}>
          <h1 className="animate-fade-in" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: 'white',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            lineHeight: 1.2
          }}>
            Claude Code 마스터
          </h1>

          <p className="animate-fade-in delay-200" style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            opacity: 0.95,
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            color: 'white'
          }}>
            에이전트, 스킬, 훅, 커맨드, 규칙, MCP 설정을<br />
            체계적으로 정리한 완벽한 한글 가이드
          </p>

          <div className="animate-fade-in delay-300" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/getting-started/introduction" className="btn-gradient" style={{
              textDecoration: 'none',
              fontSize: '1.1rem',
              color: 'white'
            }}>
              시작하기
            </Link>
            <a href="https://github.com/revfactory/claude-code-master" className="btn-outline" style={{
              textDecoration: 'none',
              fontSize: '1.1rem',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <div className="animate-bounce" style={{
          position: 'absolute',
          bottom: '2rem',
          color: 'white',
          opacity: 0.7
        }}>
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #f8f9fa 0%, white 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              강력한 기능들
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Claude Code를 더 효율적으로 사용하기 위한 모든 것
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <Link key={index} href={feature.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ padding: '2rem', height: '100%' }}>
                  <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                    <feature.Icon size={28} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#333' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.7 }}>
                    {feature.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="gradient-text" style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            지금 시작하세요
          </h2>

          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Claude Code의 잠재력을 최대한 활용하고<br />
            개발 생산성을 한 단계 높여보세요.
          </p>

          <Link href="/getting-started/introduction" className="btn-gradient" style={{
            textDecoration: 'none',
            fontSize: '1.1rem',
            color: 'white'
          }}>
            문서 읽기
          </Link>

          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #ddd',
            color: '#888',
            fontSize: '0.9rem'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <a href="https://github.com/revfactory/claude-code-master" style={{
                color: '#667eea',
                textDecoration: 'none'
              }}>
                GitHub
              </a>
              {' · '}
              <a href="https://docs.anthropic.com/claude-code" style={{
                color: '#667eea',
                textDecoration: 'none'
              }}>
                Claude Code 공식 문서
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
