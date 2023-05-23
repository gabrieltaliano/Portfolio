import { useEffect } from "react";
import type { NextPage } from "next";
import { ScrollProvider } from "../Contexts/scrollContext";
import { db } from "../lib/firebase";
import { query, getDocs, collection, DocumentData } from "firebase/firestore";

import Head from "next/head";
import Container from "../Components/Container";
import Landing from "../Components/Landing";
import Quote from "../Components/Quote";
import Contact from "../Components/Contact";
import MyWork from "../Components/MyWork";
import Social from "../Components/Social";
import Positions from "../Components/Positions";
import ObservableContainer from "../Components/ObservableContainer";
import AboutMe from "../Components/AboutMe";

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

const Home: NextPage = ({ stack }: any) => {
  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="h-screen overflow-auto w-full">
      <Head>
        <title>Gabriel Taliano</title>
        <meta name="description" content="FullStack Developer" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/gabrieltaliano-dev.appspot.com/o/GabrielTaliano.jpg?alt=media&token=8472e5c1-4fae-41ff-ad1e-c893f72cfb27"
          key="ogimage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollProvider>
        <Container>
          <Landing stack={stack} />
          <Quote />
          <MyWork />
          <ObservableContainer
            className="bg-gradient-to-b from-slate-900  via-[#00040e] to-[#030e0d]"
          >
            <AboutMe />
            <Positions />
            <Contact />
            <Social />
          </ObservableContainer>
        </Container>
      </ScrollProvider>
    </div>
  );
};

export default Home;

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
    },
  };
}
