import "./icons-list.scss";
import VkIcon from "./icons/icon.svg";
import InstagramIcon from "./icons/instagram.svg";
import TelegramIcon from "./icons/telegram.svg";
import GithubIcon from "./icons/gihub.svg";
import WhatsAppSvg from "./icons/whatsApp.svg";

const desctopList = [
  {
    img: GithubIcon,
    link: "https://github.com/dedottag",
    mobile: true,
  },
  {
    img: WhatsAppSvg,
    link: "https://wa.me/79991272772",
    mobile: true,
  },
  {
    img: TelegramIcon,
    link: "https://t.me/Dedottag",
    mobile: true,
  },
  {
    img: InstagramIcon,
    link: "https://www.instagram.com/dedottag?igsh=MTAyZDFrN3F0aWxwNA%3D%3D&utm_source=qr",
    mobile: true,
  },
  {
    img: VkIcon,
    link: "https://vk.com/dedottag",
    mobile: false,
  },
];

const resultList =
  window.innerWidth > 400
    ? desctopList
    : desctopList.filter((link) => link.mobile);

const IkonsList = () => {
  return (
    <ul>
      {resultList.map((link) => (
        <li key={link.link}>
          <a href={link.link} target="blank">
            <img src={link.img} alt="gitHub" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IkonsList;
