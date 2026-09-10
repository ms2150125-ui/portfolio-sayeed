import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Photography from '../sections/Photography'
import ProblemSolving from '../sections/ProblemSolving'
import Journey from '../sections/Journey'
import Certificates from '../sections/Certificates'
import Education from '../sections/Education'
import Contact from '../sections/Contact'

export default function MainLayout() { return <div className="site-shell"><Navbar /><main><Hero /><About /><Skills /><Projects /><Photography /><ProblemSolving /><Journey /><Certificates /><Education /><Contact /></main><Footer /></div> }