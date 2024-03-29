import "./icons-list.scss";
import VkIcon from "./icons/icon.svg";
import InstagramIcon from "./icons/instagram.svg";
import TelegramIcon from "./icons/telegram.svg";
import GithubIcon from "./icons/gihub.svg";

const IkonsList = ({ dark }) => {
  return (
    <ul>
      <li>
        <a
          className={dark ? "a-dark" : ""}
          href="https://github.com/dedottag"
          target="blank"
        >
          <img src={GithubIcon} alt="gitHub" />
          {/* <span> - Github</span> */}
        </a>
      </li>
      <li>
        <a
          className={dark ? "a-dark" : ""}
          href="https://t.me/Dedottag"
          target="blank"
        >
          <img src={TelegramIcon} alt="telegram" />
          {/* <span> - Telegram</span> */}
        </a>
      </li>
      <li>
        <a
          className={dark ? "a-dark" : ""}
          href="https://www.instagram.com/dedottag?igsh=MTAyZDFrN3F0aWxwNA%3D%3D&utm_source=qr"
          target="blank"
        >
          <img src={InstagramIcon} alt="In" />
          {/* <span> - Instagram</span> */}
        </a>
      </li>
      <li>
        <a
          className={dark ? "a-dark" : ""}
          href="https://vk.com/dedottag"
          target="blank"
        >
          <img src={VkIcon} alt="vk" />
          {/* <span> - VK</span> */}
        </a>
      </li>
    </ul>
  );
};

export default IkonsList;
