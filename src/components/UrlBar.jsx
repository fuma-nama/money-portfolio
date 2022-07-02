import { Discord, Github } from "react-bootstrap-icons";
import "./UrlBar.scss";

export default function UrlBar() {
  return (
    <div className="social-icons">
      <a href="https://github.com/SonMooSans">
        <Github size={50} />
      </a>
      <a href="#contact">
        <Discord size={50} />
      </a>
    </div>
  );
}
