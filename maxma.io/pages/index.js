import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavItem, NavLink} from 'reactstrap';
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/lines'))

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Max Maio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
      <main className={styles.main}>        

      <div className={styles.center}>
      <div className={styles.bio}>
        <img 
          src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600"
          alt="avatar" 
          width= {100}
          height= {100}
          />
        <h5>Max Maio</h5>
        <p>Software Engineer in CA</p>
      </div>
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/art1">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://drive.google.com/file/d/1EXnTgOMuRYa5Xa8UpjPSSWmgXxhwjYzU/view?usp=sharing" target="_blank">Resume</NavLink>
          </NavItem>
        </Nav>
      </div>

        </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>


      <DynamicComponent />
      </main>
    </div>
  )
}
