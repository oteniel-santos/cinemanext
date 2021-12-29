import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {info.title}
        </h1>
        <p>Nota: {info.vote_average}</p>

        <p>{info.overview}</p>
        <Image 
          src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} 
          alt="Imagem Fime" 
          width={400}
          height={600}  />
        <Link href="/busca">Buscar</Link>
         
           

      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context){
  const id = context.params.id
  const res = await fetch(`http://localhost:3000/api/movie/${id}`)
  const json = await res.json()
  return{
    props: {
      info: json.info
    }     
  }
}
