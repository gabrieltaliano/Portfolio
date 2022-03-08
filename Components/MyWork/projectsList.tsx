import { work } from "./interfaces";
import mw from "../../public/images/mitsushiowelding.jpg";
import yb_pc from "../../public/images/yb-pc.jpg";
import yb_mobile from "../../public/images/yb-mobile.jpg";
import tb from "../../public/images/tb.jpg";
import rk from "../../public/images/rk-b.jpg";
import {
  algolia,
  bootstrap,
  emailJS,
  firebaseAuth,
  firebaseFirestore,
  formik,
  i18n,
  komoju,
  next_tech,
  node_tech,
  postcss,
  reactNative,
  react_tech,
  redis,
  redux,
  restApi,
  stripe,
  svg,
  tailwind,
  typeScript,
  vercel,
} from "./technologies";

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
      vercel,
      postcss,
      svg
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
      typeScript,
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
      react_tech,
      typeScript,
      firebaseAuth,
      { ...reactNative, note: "(in progress)" },
      redux,
      { ...redis, note: "(migrating)" },
      postcss,
    ],
  },
];

export default projects;