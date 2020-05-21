import React from "react";
import StatCard from "./StatCard";

const data = [
  {
    socialMedia: "facebook",
    handle: "@nathanf",
    followerCount: 1987,
    follows: 12,
    color: "hsl(203, 89%, 53%)",
  },
  {
    socialMedia: "twitter",
    handle: "@nathanf",
    followerCount: 1044,
    follows: 99,
    color: "hsl(195, 100%, 50%)",
  },
  {
    socialMedia: "instagram",
    handle: "@realnathanf",
    followerCount: "11k",
    follows: 1099,
    color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  },
  {
    socialMedia: "youtube",
    handle: "Nathan F.",
    followerCount: 8239,
    follows: -144,
    color: "hsl(348, 97%, 39%)",
  },
];

const Stats = () => {
  return (
    <main className="main flex-container">
      {data.map((stat, index) => (
        <StatCard
          key={index}
          iconName={stat.socialMedia}
          borderColor={stat.color}
          followerCount={stat.followerCount}
          follows={stat.follows}
          handle={stat.handle}
        />
      ))}
    </main>
  );
};

export default Stats;
