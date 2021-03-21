
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/projects.module.css'
import { Nav, NavItem, NavLink } from 'reactstrap';
export default function projects() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.bio}>
                    <Image
                        src="/gravatar.jpeg"
                        alt="avatar"
                        width={100}
                        height={100}
                    />
                    <h4>Max Maio</h4>
                    <p>Software Engineer in CA</p>


                </div>
                <div >
                        <Nav className={styles.nav}>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/MaxMaio_Resume.pdf" target="_blank">Resume</NavLink>
                            </NavItem>
                        </Nav>
                    </div>

            </div>
            <div className={styles.main}>
                <h5>Web Visualizations</h5>
                <p><a href="/art1">Viz1</a> - Visualization that draws lines from a single point outwards. No lines can collide and their direction is randomly generated.</p>
                <p><a href="/art2">Viz2</a> - A variation of Viz1, except the lines are drawn following a cosine and sine formula.</p>
                <p><a href="linesdemo">Lines Graphic</a> - Interactive graphics visualization featured on the <a href="/">home page</a>. Built with <a href="https://threejs.org/" target="_blank">Three.js</a>.</p>
                <h5>Cool Projects</h5>
                <p><a href="https://github.com/maxmaio/mips-compiler" target="_blank">Mips-Compiler</a> - A compiler that compiles a subset of the C language to MIPS assembly code. Written in Java.</p>
                <p><a href="https://github.com/maxmaio/Fantasy-football-stat-api" target="_blank">Fantasy Football Stat API</a> - Python program that retrieves league specific Yahoo fantasy football data and outputs into csv.</p>
                <p><a href="https://www.notion.so/maxmaio/Surfline-Hack-afbfdb60aeaa4373b2aa85dd2b5a8492" target="_blank">Surf Hack</a> - Script that edits surfline's code and removes ads from live cams.</p>
            </div>
        </div>
    )
}