import React from "react";
import Icon from "./Icon";
import { ReactComponent as UpArrow } from "../assets/icon-up.svg";
import { ReactComponent as DownArrow } from "../assets/icon-down.svg";

const StatCard = ({
  iconName,
  borderColor,
  followerCount,
  follows,
  handle,
}) => {
  return (
    <div className="stat-card">
      <div
        className="stat-card__top-border"
        style={{ background: borderColor }}
      ></div>
      <div className="stat-card__body">
        <div className="stat-card__social-media">
          <Icon name={iconName} className="stat-card__icon" />{" "}
          <span className="stat-card__username">{handle}</span>
        </div>
        <h1 className="stat-card__count">{followerCount}</h1>
        <h3 className="stat-card__followers">followers</h3>
        <span className="stat-card__indicator">
          {follows > 0 ? (
            <UpArrow className="stat-card__indicator-icon" />
          ) : (
            <DownArrow className="stat-card__indicator-icon" />
          )}{" "}
          <span
            className={`stat-card__indicator-count ${
              follows > 0
                ? "stat-card__indicator-count-up"
                : "stat-card__indicator-count-down"
            }`}
          >
            {Math.abs(follows)} Today
          </span>
        </span>
      </div>
    </div>
  );
};

export default StatCard;
