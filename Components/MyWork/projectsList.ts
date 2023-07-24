import { work } from "./interfaces";
import mw from "../../public/images/mitsushiowelding.jpg";
import yb_pc from "../../public/images/yb-pc.jpg";
import yb_mobile from "../../public/images/yb-mobile.jpg";
import tb from "../../public/images/tb.jpg";
import rk from "../../public/images/rk-b.jpg";
import mediafly from "../../public/images/mediafly.jpg";
import pixelPerfect from "../../public/images/pixelPerfect.jpg";
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
    javascript

} from "./technologies";

const projects: work[] = [
    {
        name: "Mediafly",
        url: "https://www.mediafly.com/",
        img: [{ src: mediafly.src, orientation: "h" }],
        description: `I was responsible for improving and creating new reports and visualization features, and developing functional components, mainly using react, angular, MUI, recharts, storybook, jest as well as elasticSearch, mocha and node.
In addition, I collaborated on integrating 3rd party APIs to link the applications with external data sources and services using node.js in a dockerized environment.`,
        stack: [
            javascript,
            restApi,
            redis,
            redux,
            react_tech
        ],
    },
    {
        name: "Perfect Pixel",
        url: "https://perfect-pixel-gabrieltaliano.vercel.app/",
        img: [{ src: pixelPerfect.src, orientation: "h" }],
        description: `Small site to see different CSS units in action and take note of the most common layout scenarios (in progress)`,
        stack: [
            tailwind,
            vercel,
            react_tech,
            next_tech
        ],
    },
    {
        name: "Mitsushio Welding",
        description: `• Web application development to authorize and manage access roles.
    • Internal Web application development to authorize and manage access roles with React, Firebase Functions (node.js) and Firebase Auth.
    • Corporate portal renewal in next.js`,
        // url: "https://mitsushio-welding.com/",
        img: [{ src: mw.src, orientation: "h" }],
        stack: [bootstrap, emailJS, firebaseFirestore, firebaseAuth, react_tech],
    },
    {
        name: "YB Languages",
        url: "https://delfo-yb.web.app/",
        description: `• Website developed in Next.js with focus in internationalization with i18n
• Komoju/Stripe payment gateway with Node backend
• Dashboard to manage shared files and assign roles to users
• Google Cloud Platform hosted storage`,
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
        url: "https://my-random-kana.vercel.app",
        img: [{ src: rk.src, orientation: "v" }],
        description: `Game for memorize japanese alphabet`,
        stack: [
            react_tech,
            typeScript,
            firebaseAuth,
            { ...reactNative, note: "(in progress)" },
            redux,
            postcss,
        ],
    },
    {
        name: "Ticket Bundle",
        // url: "https://ticket-bundle.vercel.app/",
        img: [{ src: tb.src, orientation: "v" }],
        description: `• Web application for creating and monitoring ticket packages for promotions, discounts and/or event tickets.
    • Rest API for status queries
    • Developed in Next.js, with TypeScript, SVG graphics, Firebase Auth and Firestore.`,
        stack: [
            typeScript,
            restApi,
            firebaseFirestore,
            firebaseAuth,
            vercel,
            postcss,
            svg
        ],
    }
];

export default projects;