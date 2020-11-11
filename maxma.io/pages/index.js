import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'reactstrap';
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

      <div className={styles.bio}>
        <img 
          src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600"
          alt="avatar" 
          width= {100}
          height= {100}
          />
        <h5>Max Maio</h5>
        <p>Software Engineer</p>
        <p>Resume available <a href="https://drive.google.com/file/d/1EXnTgOMuRYa5Xa8UpjPSSWmgXxhwjYzU/view?usp=sharing" target="_blank">here</a></p>
      </div>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <DynamicComponent />
      </main>

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
    </div>
  )
}
