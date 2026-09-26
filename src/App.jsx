import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import LegalPage from './pages/LegalPage'

export default function App() {
	const path = window.location.pathname.replace(/\/$/, '')
	const pageType = path === '/privacy-policy' ? 'privacy' : path === '/terms' ? 'terms' : null

	useEffect(() => {
		document.documentElement.dataset.theme = 'dark'
		document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#171916')
	}, [])

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

	if (pageType) return <LegalPage type={pageType} />
	return <MainLayout />
}