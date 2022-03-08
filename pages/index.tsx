import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../Components/Container'
import Hero from '../Components/Hero'
import MyWork from '../Components/MyWork'
import Quote from '../Components/Quote'
import Contact from '../Components/Contact'
import { ScrollProvider } from '../Contexts/scrollContext'

const Home: NextPage = () => {



  return (
    <div className='h-screen overflow-auto w-full'>

      <Head>
        <title>Gabriel Taliano</title>
        <meta name="description" content="FullStack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <span className='absolute top-0 left-0 bg-black text-green-400 text-sm whitespace-pre z-50 border-[1px] border-slate-500'>{JSON.stringify({ containerData }, null, 2)}</span> */}
      <ScrollProvider>
        <Container>
          <Hero />
          <Quote />
          <MyWork />
          <Contact />
        </Container>
      </ScrollProvider>
    </div>


  )
}

export default Home
