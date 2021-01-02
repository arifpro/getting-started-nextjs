import Head from 'next/head'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.green}>
        <span className={styles.span}>Red </span>
        Green
      </h1>
      <span className={styles.span}>Red </span>
    </div>
  )
}

export default Home;