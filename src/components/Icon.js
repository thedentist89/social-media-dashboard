import React from "react";
import { ReactComponent as FacebookIcon } from "../assets/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icon-youtube.svg";

const Icon = ({ name, className }) => {
  switch (name) {
    case "facebook":
      return <FacebookIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "youtube":
      return <YoutubeIcon className={className} />;
    default:
      throw TypeError("invalid icon name");
  }
};

export default Icon;
