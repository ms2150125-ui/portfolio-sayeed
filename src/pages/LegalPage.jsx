import { ArrowLeft, Moon, Sun } from 'lucide-react'
import Footer from '../components/Footer'

const documents = {
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: September 26, 2026',
    sections: [
      ['Information this site handles', 'This portfolio does not ask you to create an account and does not intentionally collect or store personal information on its own servers. The contact form opens your email application with the details you enter; the message is sent only if you choose to send it. Your email provider then handles that message under its own privacy practices.'],
      ['Hosting and external links', 'The site is hosted by its deployment provider, which may process basic technical data such as IP address, browser information, and request logs to deliver and secure the site. Links to GitHub, LinkedIn, Facebook, and other third-party websites are governed by those services’ own policies.'],
      ['Cookies and analytics', 'This portfolio does not currently use advertising cookies or analytics tools. Hosting infrastructure or linked services may use their own technical storage or cookies.'],
      ['Your choices and contact', 'You can browse without submitting any information. To ask about this policy or request removal of an email you have sent, contact ms2150125@gmail.com.'],
    ],
  },
  terms: {
    title: 'Terms of use',
    updated: 'Last updated: September 26, 2026',
    sections: [
      ['Using this site', 'This website shares information about my studies, skills, projects, and photography. You may browse and link to public pages. Do not misuse the site, interfere with its operation, or use its content in a way that violates applicable law.'],
      ['Accuracy and availability', 'I make reasonable efforts to keep the information current, but project details and learning progress may change. The site and its materials are provided as-is and may be updated, moved, or taken offline without notice.'],
      ['Content and third-party material', 'Unless otherwise noted, the portfolio text, design, and original photographs are presented by MD. Sayeed. Project repositories, linked services, and third-party materials remain subject to their respective owners’ terms and licenses.'],
      ['External links and contact', 'Links to external websites are provided for convenience; I do not control or guarantee their content. Questions about these terms can be sent to ms2150125@gmail.com.'],
    ],
  },
}

export default function LegalPage({ type, theme, setTheme }) {
  const document = documents[type]
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <a className="wordmark" href="/">MD<span>.</span> SAYEED</a>
        <div className="legal-header__actions">
          <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button>
          <a className="legal-back" href="/"><ArrowLeft size={16} aria-hidden="true" /> Portfolio</a>
        </div>
      </header>
      <main className="legal-content">
        <p className="eyebrow">Site information</p>
        <h1>{document.title}</h1>
        <p className="legal-updated">{document.updated}</p>
        {document.sections.map(([heading, content]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{content}</p>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}