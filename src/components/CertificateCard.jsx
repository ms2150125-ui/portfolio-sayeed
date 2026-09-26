import { Award, Download, Eye } from 'lucide-react'

export default function CertificateCard({ certificate, onView, onDownload }) {
  return (
    <article className="certificate-card" data-rgb-tooltip={`Certificate · ${certificate.title}`}>
      <div className="certificate-card__media">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate preview`}
          className="certificate-card__image"
          loading="lazy"
        />
      </div>

      <div className="certificate-card__body">
        <div className="certificate-card__meta">
          <span>{certificate.date}</span>
          <span className="certificate-card__issuer">{certificate.issuer}</span>
        </div>

        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>

        <div className="certificate-card__skills" aria-label="Certificate skills">
          {certificate.skills.map((skill) => (
            <span key={skill} className="certificate-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="certificate-card__actions">
        <button type="button" className="button button--card" onClick={() => onView(certificate)}>
          <Eye size={16} />
          View Certificate
        </button>

        <a
          href={certificate.pdf}
          className="button button--outline button--card"
          download={certificate.downloadName}
          onClick={(event) => {
            event.preventDefault()
            onDownload(certificate)
          }}
          aria-label={`Download ${certificate.title} PDF`}
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="certificate-card__badge" aria-hidden="true">
        <Award size={16} />
      </div>
    </article>
  )
}