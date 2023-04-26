import type { NextPage } from "next";
import Head from "next/head";
import Container from "../Components/Container";
import Landing from "../Components/Landing";

import Quote from "../Components/Quote";
import Contact from "../Components/Contact";
import { ScrollProvider } from "../Contexts/scrollContext";
import MyWork from "../Components/MyWork";
import Profile from "../Components/Profile";
import { useEffect } from "react";
import Social from "../Components/Social";
import { db } from "../lib/firebase";
import { query, getDocs, collection, DocumentData } from "firebase/firestore";
import { json } from "stream/consumers";

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

const Home: NextPage = ({ time, stack }) => {
  useEffect(() => {
    hello();
    console.log({ time });
  }, [time]);

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
          <Landing stack={stack} />
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

export const revalidate = 10;
export async function getStaticProps() {
  const time = new Date();

  const getStack = async () => {
    const collectionRef = collection(db, "stack");
    const collectionQuery = query(collectionRef);
    const querySnapshot = await getDocs(collectionQuery);

    const res: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      res.push(data.name);
    });
    return res;
  };

  return {
    revalidate: false,
    props: {
      stack: await getStack(),
      time: time.getMilliseconds(),
    }, // will be passed to the page component as props
  };
}
