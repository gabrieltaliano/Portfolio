import Image from "next/image";
import mw from "../public/images/mitsushiowelding.jpg";
import yb_pc from "../public/images/yb-pc.jpg";
import yb_mobile from "../public/images/yb-mobile.jpg";
import tb from "../public/images/tb.png";
import rk from "../public/images/rk-b.png";

import firestore_logo from "../public/images/logos/firestore.svg";
import ts_logo from "../public/images/logos/ts.svg";
import nextjs_logo from "../public/images/logos/next.svg";

import tailwindcss_logo from "../public/images/logos/tailwindcss.svg";
import emailJS_logo from "../public/images/logos/EmailJS.svg";
import rest_logo from "../public/images/logos/rest.svg";
import typeScript_logo from "../public/images/logos/ts.svg";
import restApi_logo from "../public/images/logos/rest.svg";
import firebaseFirestore_logo from "../public/images/logos/firestore.svg";
import firebaseAuth_logo from "../public/images/logos/firebase_auth.png";
import vercel_logo from "../public/images/logos/vercel.svg";
import react_logo from "../public/images/logos/react.svg";
import reactNative_logo from "../public/images/logos/react-native.png";
import bootstrap_logo from "../public/images/logos/Bootstrap.svg";
import formik_logo from "../public/images/logos/formik.png";
import node_logo from "../public/images/logos/node.svg";
import i18n_logo from "../public/images/logos/i18next.png";
import komoju_logo from "../public/images/logos/komoju.svg";
import algolia_logo from "../public/images/logos/algolia.svg";
import stripe_logo from "../public/images/logos/stripe.svg";
import redux_logo from "../public/images/logos/redux.svg";
import redis_logo from "../public/images/logos/redis.svg";
import { ElementType, ReactNode } from "react";

interface tech {
  name: string;
  logo: any;
  note?: string;
}
interface images {
  src: any;
  orientation: "h" | "v";
}
interface work {
  name: string;
  description?: string;
  img: images[];
  stack: tech[];
  title?: string;
  url?: string;
}

const reactNative: tech = { name: "React Native", logo: reactNative_logo };
const komoju: tech = { name: "Komoju", logo: komoju_logo };
const redux: tech = { name: "Redux", logo: redux_logo };
const redis: tech = { name: "Redis", logo: redis_logo };
const react_tech: tech = { name: "React", logo: react_logo };
const stripe: tech = { name: "Stripe", logo: stripe_logo };
const algolia: tech = { name: "Algolia", logo: algolia_logo };
const next_tech: tech = { name: "Next.Js", logo: nextjs_logo };
const i18n: tech = { name: "i18n", logo: i18n_logo };
const node_tech: tech = { name: "Node", logo: node_logo };
const formik: tech = { name: "Formik", logo: formik_logo };
const emailJS: tech = { name: "EmailJS", logo: emailJS_logo };
const bootstrap: tech = { name: "Bootstrap", logo: bootstrap_logo };
const typeScript: tech = { name: "TypeScript", logo: typeScript_logo };
const tailwind: tech = { name: "Tailwind", logo: tailwindcss_logo };
const restApi: tech = { name: "Rest API", logo: restApi_logo };
const postcss: tech = { name: "Post CSS", logo: restApi_logo };
const firebaseFirestore: tech = {
  name: "Firebase Firestore",
  logo: firebaseFirestore_logo,
};
const firebaseAuth: tech = { name: "Firebase Auth", logo: firebaseAuth_logo };
const vercel: tech = { name: "Firebase Auth", logo: vercel_logo };

const projects: work[] = [
  {
    name: "Ticket Bundle",
    url: "https://ticket-bundle.vercel.app/",
    img: [{ src: tb.src, orientation: "v" }],
    stack: [
      typeScript,
      restApi,
      firebaseFirestore,
      firebaseAuth,
      tailwind,
      vercel,
    ],
  },
  {
    name: "Mitsushio Welding",
    url: "https://mitsushio-welding.com/",
    img: [{ src: mw.src, orientation: "h" }],
    stack: [bootstrap, emailJS, firebaseFirestore, firebaseAuth, react_tech],
  },
  {
    name: "YB Langueges",
    url: "https://yblanguages.com/",
    img: [
      { src: yb_pc.src, orientation: "h" },
      { src: yb_mobile.src, orientation: "v" },
    ],
    stack: [
      next_tech,
      tailwind,
      i18n,
      firebaseAuth,
      firebaseFirestore,
      formik,
      algolia,
      node_tech,
      komoju,
      stripe,
    ],
  },
  {
    name: "My Random Kana",
    url: "https://myrandomkana.web.app/",
    img: [{ src: rk.src, orientation: "v" }],
    stack: [
      { ...react_tech, note: "(in progress)" },
      typeScript,
      reactNative,
      firebaseAuth,
      redux,
      redis,
      postcss,
    ],
  },
];

export default function MyWork() {
  return (
    <div
      className="grow flex flex-nowrap flex-col justify-center items-center relative snap-start bg-gradient-to-b from-[#05190b] via-[#1a3020] to-slate-900 "
      id="work"
    >
      {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-green-900 to-slate-900 z-0" /> */}

      <div className="min-h-screen w-full flex flex-col justify-evenly items-center z-10 gap-8 lg:gap-16  p-8">
        <h2 className="text-green-400 text-4xl font-IBM-Plex-Mono font m-6">
          My work<span className="cursor">_</span>
        </h2>

        <div className="flex flex-wrap justify-evenly items-center gap-16 w-full px-2 lg:px-16">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Project = ({ project }: { project: work; key: string }) => (
  <div
    className="flex flex-col  items-center max-w-xl m-4"
    style={{ flexBasis: `${40}%` }}
  >
    <Preview img={project.img} />
    <Stack stack={project.stack} project_name={project.name} />
  </div>
);

const Preview = ({ img }: { img: images[] }) => (
  <div>
    {img.length === 1 ? (
      <div
        className={`relative overflow-hidden bg-gray-300 min-w-[10rem] sm:min-w-[10rem] min-h-[12rem] sm:min-h-[12rem] ${
          img[0].orientation === "v"
            ? "aspect-[9/16] w-full mb-8"
            : "aspect-video h-full my-16"
        } rounded-2xl block shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105`}
        style={{ backgroundImage: `url(${img[0].src})` }}
      >
        <div className="absolute w-full h-full border-gray-800 opacity-50 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105"></div>
      </div>
    ) : (
      <div className="grid grid-cols-5 grid-rows-4 h-[40vh] w-[80vmin] max-w-[20rem] m-4">
        <div
          className="bg-gray-300 h-fit aspect-video col-start-1 z-30 col-span-4 row-start-3 row-span-1 rounded-2xl block shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${img[0].src})` }}
        ></div>
        <div
          className="relative overflow-hidden bg-gray-300 min-h-[18rem] h-[20vmax] z-20 col-start-3 col-span-3 aspect-[9/16] rounded-2xl block shadow-xl shadow-gray-900 bg-cover bg-center duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${img[1].src})` }}
        >
          <div className="absolute w-full h-full border-gray-800 opacity-50 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105"></div>
        </div>
      </div>
    )}
  </div>
);

const Stack = ({
  stack,
  project_name,
}: {
  stack: tech[];
  project_name: string;
}) => (
  <ul className="text-green-500 flex  w-full flex-wrap gap-x-2 justify-evenly max-w-[30vw]">
    {stack.map((t) => (
      <div
        key={project_name + t.name}
        className="hover:scale-110 duration-200 flex flex-col items-center group text-center gap-1 "
        style={{
          flexBasis: `${100 / (stack.length - 1)}%`,
        }}
      >
        <div className="relative h-10 w-[6vmax] min-w-[5rem] ">
          <Image src={t.logo} alt={t.name} layout="fill" objectFit="contain" />
        </div>
        <span className="opacity-0 group-hover:opacity-100 duration-300 text-sm text-white font-IBM-Plex-Mono center">
          {t.name}
        </span>
      </div>
    ))}
  </ul>
);
