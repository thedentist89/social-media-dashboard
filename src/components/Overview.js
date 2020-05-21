import React from "react";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <section className="overview">
      <h1 className="overview__heading">Overview - Today</h1>
      <div className="flex-container">
        <OverviewCard
          iconName="facebook"
          count="87"
          percentage={3}
          label="Profile Views"
        />
        <OverviewCard
          iconName="facebook"
          count="52"
          percentage={-2}
          label="Likes"
        />
        <OverviewCard
          iconName="instagram"
          count="5462"
          percentage={2257}
          label="Likes"
        />
        <OverviewCard
          iconName="instagram"
          count="52k"
          percentage={1375}
          label="Profile Views"
        />
        <OverviewCard
          iconName="twitter"
          count="117"
          percentage={303}
          label="Retweets"
        />
        <OverviewCard
          iconName="twitter"
          count="507"
          percentage={553}
          label="Likes"
        />
        <OverviewCard
          iconName="youtube"
          count="107"
          percentage={-19}
          label="Likes"
        />
        <OverviewCard
          iconName="youtube"
          count="1407"
          percentage={-12}
          label="Total Views"
        />
      </div>
    </section>
  );
};

export default Overview;
