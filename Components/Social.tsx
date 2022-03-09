import Image from "next/image";
import px500 from "../public/images/logos/500px.svg";
import LinkedIn from "../public/images/logos/LinkedIn.svg";
import GitHub from "../public/images/logos/github.svg";
import { event } from "../lib/analitics";

const socialLinks = [
  { name: "500px", url: "https://500px.com/gabrieltaliano", img: px500 },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-taliano-23640962/",
    img: LinkedIn,
  },
  { name: "GitHub", url: "https://github.com/gabrieltaliano", img: GitHub },
];

export default function Social() {
  const handleClick = (name = "") => {
    event({
      action: "social link clicked",
      params: {
        socialNetwork: name,
      },
    });
  };

  return (
    <div className="flex gap-12 mt-16">
      {socialLinks.map((sl) => (
        <a
          href={sl.url}
          target="_blank"
          rel="noreferrer"
          key={sl.name}
          className="hover:scale-110 duration-200 h-8 w-8 relative m-1"
          onClick={() => {
            handleClick(sl.name);
          }}
        >
          {/* <Image src={sl.img} alt={sl.name} height={35} width={35} /> */}
          <Image src={sl.img} alt={sl.name} layout="fill" objectFit="contain" />
        </a>
      ))}
    </div>
  );
}
