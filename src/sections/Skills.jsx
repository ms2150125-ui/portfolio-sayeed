import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
export default function Skills() { return <section className="section section--surface" id="skills" data-rgb-tooltip="Skills in progress"><div className="container"><SectionTitle index="02" eyebrow="Skills" title="Tools I’m learning and using." description="A practical set of foundations developed through coursework and projects." /><div className="skill-grid">{skills.map((skill) => <SkillCard skill={skill} key={skill.name} />)}</div></div></section> }