import styles from '../styles/projects.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavItem, NavLink} from 'reactstrap';
export default function projects() {
    return (
        <div className={styles.container}>

      <div className={styles.bio}>
        <Image 
          src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600"
          alt="avatar" 
          width= {100}
          height= {100}
          />
        <h5>Max Maio</h5>
        <p>Software Engineer in CA</p>

      <div >
        <Nav className={styles.nav}>
        <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://drive.google.com/file/d/1EXnTgOMuRYa5Xa8UpjPSSWmgXxhwjYzU/view?usp=sharing" target="_blank">Resume</NavLink>
          </NavItem>
        </Nav>
      </div>

   
        </div>
        </div>
    )
}