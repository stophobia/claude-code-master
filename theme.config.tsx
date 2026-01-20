import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <span style={{
      fontFamily: '"Noto Sans KR", sans-serif',
      fontSize: '1.3rem',
      fontWeight: 700,
      color: '#0000CD'
    }}>
      ✏️ Claude Code 마스터
    </span>
  ),
  project: {
    link: 'https://github.com/revfactory/claude-code-master',
  },
  docsRepositoryBase: 'https://github.com/revfactory/claude-code-master/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Claude Code 마스터'
      }
    }
    return {
      title: 'Claude Code 마스터 - Claude Code 설정 완전 가이드'
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title ? `${title} – Claude Code 마스터` : 'Claude Code 마스터'} />
        <meta property="og:description" content="Claude Code 설정 완전 가이드 - 에이전트, 스킬, 훅, 커맨드, 규칙" />
        <meta name="description" content="Claude Code 설정 완전 가이드 - 에이전트, 스킬, 훅, 커맨드, 규칙" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    titleComponent({ title, type }) {
      return <span style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>{title}</span>
    }
  },
  toc: {
    title: '📝 목차',
    float: true,
  },
  editLink: {
    text: '✍️ 이 페이지 수정하기 →'
  },
  feedback: {
    content: '💬 피드백 보내기 →',
    useLink: () => 'https://github.com/revfactory/claude-code-master/issues/new'
  },
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <span style={{ fontFamily: '"Noto Sans KR", sans-serif', color: '#0000CD' }}>
        ✨ Claude Code 마스터 - MIT License - {new Date().getFullYear()}
      </span>
    )
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    storageKey: 'nextra-theme'
  },
  primaryHue: 230,
  primarySaturation: 100,
  search: {
    placeholder: '🔍 검색...',
  },
  gitTimestamp: ({ timestamp }) => (
    <span style={{ fontFamily: '"Noto Sans KR", sans-serif', fontSize: '0.9rem' }}>
      마지막 수정: {timestamp.toLocaleDateString('ko-KR')}
    </span>
  )
}

export default config
