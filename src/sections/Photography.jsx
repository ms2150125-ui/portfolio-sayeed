import { Camera } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const photos = [
  { src: '/photography/pic-03.jpg', alt: 'Cup photography by MD. Sayeed' },
  { src: '/photography/pic-01.jpg', alt: 'Photography by MD. Sayeed, image one' },
  { src: '/photography/pic-02.jpg', alt: 'Photography by MD. Sayeed, image two' },
  { src: '/photography/pic-04.jpg', alt: 'Road photography by MD. Sayeed' },
]

export default function Photography() { return <section className="section photography" id="gallery"><div className="container"><SectionTitle index="06" eyebrow="Photography" title="Outside the screen." description="A few details noticed away from coursework and code." /><div className="photo-grid">{photos.map((photo, index) => <figure className={`photo-card photo-card--${index + 1}`} key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><Camera size={14} aria-hidden="true" /> Photograph {index + 1}</figcaption></figure>)}</div></div></section> }