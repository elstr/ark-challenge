import React from "react";
import GeneralCard from "./GeneralCard";

const Dashboard = (props) => {
  return (
    <div className="general-container">
      <GeneralCard
        OpenModal={props.OpenModal}
        classBorder="border facebook"
        status="green"
        svgIcon={props.FacebookIcon}
        userName="@nathanf"
        generalNumber={1987}
        todayNumber={12}
        generalDesc="Followers"
        social="facebook"
      ></GeneralCard>
      <GeneralCard
        OpenModal={props.OpenModal}
        classBorder="border twitter"
        status="green"
        svgIcon={props.TwitterIcon}
        userName="@nathanf"
        generalNumber={1044}
        todayNumber={99}
        generalDesc="Followers"
        social="twitter"
      ></GeneralCard>
      <GeneralCard
        OpenModal={props.OpenModal}
        classBorder="border instagram"
        status="green"
        svgIcon={props.InstagramIcon}
        userName="@realnathanf"
        generalNumber={11000}
        todayNumber={1099}
        generalDesc="Followers"
        social="instagram"
      ></GeneralCard>
      <GeneralCard
        OpenModal={props.OpenModal}
        classBorder="border youtube"
        status="red"
        svgIcon={props.YoutubeIcon}
        userName="Nathan F."
        generalNumber={8239}
        todayNumber={144}
        generalDesc="Subscribers"
        social="youtube"
      ></GeneralCard>
    </div>
  );
};

export default Dashboard;
