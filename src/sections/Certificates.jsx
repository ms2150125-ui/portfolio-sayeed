import { useEffect, useState } from 'react'
import { Download, Eye, X, ZoomIn } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import CertificateCard from '../components/CertificateCard'
import { certificateCategories, certificates } from '../data/certificates'

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isZoomed, setIsZoomed] = useState(false)

  const filteredCertificates =
    activeFilter === 'All'
      ? certificates
      : certificates.filter((certificate) => certificate.category === activeFilter)

  useEffect(() => {
    if (!selectedCertificate) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
        setIsZoomed(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCertificate])

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate)
    setIsZoomed(false)
  }

  const downloadCertificate = (certificate) => {
    const anchor = document.createElement('a')
    anchor.href = certificate.pdf
    anchor.download = certificate.downloadName
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return (
    <section className="section section--surface" id="certifications">
      <div className="container">
        <SectionTitle
          index="05"
          eyebrow="Achievements & Certifications"
          title="Recognition and growth."
          description="Training, certifications, and practical learning milestones that support my technical foundation."
        />

        <div className="certificate-filter" aria-label="Certificate categories">
          {certificateCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`certificate-filter__button ${activeFilter === category ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="certificate-grid">
          {filteredCertificates.map((certificate) => (
            <CertificateCard
              certificate={certificate}
              key={certificate.id}
              onView={openCertificate}
              onDownload={downloadCertificate}
            />
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={() => {
            setSelectedCertificate(null)
            setIsZoomed(false)
          }}
        >
          <div className="certificate-modal__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="certificate-modal__close"
              onClick={() => {
                setSelectedCertificate(null)
                setIsZoomed(false)
              }}
              aria-label="Close certificate preview"
            >
              <X size={18} />
            </button>

            <div className="certificate-modal__header">
              <div>
                <span className="eyebrow">Certificate</span>
                <h3 id="certificate-modal-title">{selectedCertificate.title}</h3>
              </div>

              <div className="certificate-modal__header-actions">
                <button
                  type="button"
                  className="button button--outline button--small"
                  onClick={() => setIsZoomed((current) => !current)}
                >
                  <ZoomIn size={16} />
                  {isZoomed ? 'Reset View' : 'Zoom'}
                </button>
                <a
                  href={selectedCertificate.pdf}
                  className="button button--small"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Eye size={16} />
                  Open PDF
                </a>
              </div>
            </div>

            <div className={`certificate-modal__preview ${isZoomed ? 'is-zoomed' : ''}`}>
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate preview`}
              />
            </div>

            <div className="certificate-modal__footer">
              <div className="certificate-modal__details">
                <p>{selectedCertificate.issuer}</p>
                <span>{selectedCertificate.date}</span>
              </div>

              <a
                href={selectedCertificate.pdf}
                className="button button--small"
                download={selectedCertificate.downloadName}
                onClick={(event) => {
                  event.preventDefault()
                  downloadCertificate(selectedCertificate)
                }}
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}