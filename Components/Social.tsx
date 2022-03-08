import Image from "next/image";
import px500 from "../public/images/logos/500px.svg";
import LinkedIn from "../public/images/logos/LinkedIn.svg";
import GitHub from "../public/images/logos/github.svg";

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
  return (
    <div className="flex gap-12 mt-16">
      {socialLinks.map((sl) => (
        <a
          href={sl.url}
          target="_blank"
          rel="noreferrer"
          key={sl.name}
          className='hover:scale-110 duration-200'
        >
          <Image src={sl.img} alt={sl.name} height={35} width={35} />
        </a>
      ))}
    </div>
  );
}
