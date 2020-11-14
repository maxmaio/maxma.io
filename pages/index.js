import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import {Nav,  NavItem, NavLink} from 'reactstrap';
import dynamic from 'next/dynamic'


const DynamicComponent = dynamic(() => import('../components/lines'))

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>        

      <div className={styles.center}>
      <div className={styles.bio}>
        <Image 
          src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600"
          alt="avatar" 
          width= {100}
          height= {100}
          />
        <h5>Max Maio</h5>
        <p>Software Engineer in CA</p>
      </div>
      <div >
        <Nav className={styles.nav}>
          <NavItem>
            <NavLink href="/" active= {true}>Home</NavLink>
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



      <DynamicComponent />
      </main>
    </div>
  )
}
