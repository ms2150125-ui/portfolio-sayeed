import { Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const photos = [
  { src: '/photography/pic-03.jpg', alt: 'Cup photography by MD. Sayeed' },
  { src: '/photography/pic-01.jpg', alt: 'Photography by MD. Sayeed, image one' },
  { src: '/photography/pic-02.jpg', alt: 'Photography by MD. Sayeed, image two' },
  { src: '/photography/pic-04.jpg', alt: 'Road photography by MD. Sayeed' },
]

export default function Photography() { return <section className="section photography" id="gallery"><div className="container"><SectionTitle index="06" eyebrow="Gallery" title="Beyond work." description="A personal lens on life outside the screen: light, motion, and the details worth noticing." /><div className="photo-grid">{photos.map((photo, index) => <motion.figure className={`photo-card photo-card--${index + 1}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ delay: index * .08 }} whileHover={{ y: -6 }} key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><Camera size={14} /> 0{index + 1}</figcaption></motion.figure>)}</div></div></section> }