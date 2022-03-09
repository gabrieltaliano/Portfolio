import type { NextPage } from "next";
import Head from "next/head";
import Container from "../Components/Container";
import Hero from "../Components/Landing";

import Quote from "../Components/Quote";
import Contact from "../Components/Contact";
import { ScrollProvider } from "../Contexts/scrollContext";
import MyWork from "../Components/MyWork";
import Profile from "../Components/Profile";
import { useEffect } from "react";
import Social from "../Components/Social";

const hello = () => {
  if (!process.env.debug) {
    console.clear();
  }
  console.log(
    "\n\n\n%cAjoy curious visitor!\n\nYou can see this project in:" +
      "%c\nhttps://github.com/gabrieltaliano/Portfolio %c✨" +
      "\n\n%cHave a nice day %c😊\n\n\n" +
      "\n\n%cGabriel Taliano\n\n\n",
    "background: #222; color: #b7e719",
    "background: #222; color: #2ed1bb",
    "background: #222; font-size: 1.2rem;",
    "background: #222; color: #b7e719",
    "background: #222; font-size: 1.2rem;",
    "background: #222; color: #b7e719 ; font-weight: bold"
  );
};

const Home: NextPage = () => {
  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="h-screen overflow-auto w-full">
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
          <Profile>
            <Contact />
            <Social />
            <span className="text-teal-600 font-IBM-Plex-Mono leading-3 text-sm m-1 mb-0">
              Gabriel Taliano
            </span>
          </Profile>
        </Container>
      </ScrollProvider>
    </div>
  );
};

export default Home;
