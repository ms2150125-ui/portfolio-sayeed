import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import LegalPage from './pages/LegalPage'

function getInitialTheme() {
	try {
		const savedTheme = window.localStorage.getItem('portfolio-theme')
		if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
	} catch {}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
	const path = window.location.pathname.replace(/\/$/, '')
	const pageType = path === '/privacy-policy' ? 'privacy' : path === '/terms' ? 'terms' : null
	const [theme, setTheme] = useState(getInitialTheme)

	useEffect(() => {
		document.documentElement.dataset.theme = theme
		document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171916' : '#f3eee5')
		try {
			window.localStorage.setItem('portfolio-theme', theme)
		} catch {}
	}, [theme])

	useEffect(() => {
		const title = pageType === 'privacy' ? 'Privacy policy | MD. Sayeed' : pageType === 'terms' ? 'Terms of use | MD. Sayeed' : 'MD. Sayeed | Software Engineering Portfolio'
		const canonicalUrl = new URL(path || '/', window.location.origin).href
		document.title = title
		document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
		document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
		document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', canonicalUrl)
		document.querySelector('meta[property="og:image"]')?.setAttribute('content', new URL('/profile/md-sayeed.jpg', window.location.origin).href)
		document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', new URL('/profile/md-sayeed.jpg', window.location.origin).href)
	}, [pageType, path])

	if (pageType) return <LegalPage type={pageType} theme={theme} setTheme={setTheme} />
	return <MainLayout theme={theme} setTheme={setTheme} />
}