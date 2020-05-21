import React from "react";
import Icon from "./Icon";
import { ReactComponent as UpArrow } from "../assets/icon-up.svg";
import { ReactComponent as DownArrow } from "../assets/icon-down.svg";

const OverviewCard = ({ iconName, count, percentage, label }) => {
  return (
    <div className="overview__card">
      <div className="flex space-between align-center overview__card__header">
        <h2 className="overview__card__heading">{label}</h2>
        <Icon name={iconName} />
      </div>
      <div className="flex space-between align-center overview__card__footer">
        <span className="overview__card__count">{count}</span>
        <span
          className={`overview__card__percentage ${
            percentage > 0
              ? "overview__card__percentage-green"
              : "overview__card__percentage-red"
          }`}
        >
          {percentage > 0 ? <UpArrow /> : <DownArrow />} {Math.abs(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default OverviewCard;
