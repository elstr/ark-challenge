import React, { Component } from 'react';
import DailyCard from "./DailyCard";

export default class Overview extends Component {
    render() {
        return (
            
            <div className="daily-container">
            <h2>Overview - Today</h2>
        <DailyCard
          dailyDesc="Page Views"
          status="green"
          svgIcon={this.props.FacebookIcon}
          dailyNumber={87}
          dailyPercent={3}
        ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "red"
          svgIcon={this.props.FacebookIcon}
          dailyNumber={52}
          dailyPercent={2}
        ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "green"
          svgIcon={this.props.InstagramIcon}
          dailyNumber={5462}
          dailyPercent={2257}
        ></DailyCard>
        <DailyCard
          dailyDesc="Profile Views"
          status= "green"
          svgIcon={this.props.InstagramIcon}
          dailyNumber={52}
          dailyPercent={1375}
        ></DailyCard>
        <DailyCard
          dailyDesc="Retweets"
          status= "green"
          svgIcon={this.props.TwitterIcon}
          dailyNumber={117}
          dailyPercent={303}
          ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "green"
          svgIcon={this.props.TwitterIcon}
          dailyNumber={507}
          dailyPercent={553}
        ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "red"
          svgIcon={this.props.YoutubeIcon}
          dailyNumber={107}
          dailyPercent={19}
        ></DailyCard>
        <DailyCard
          dailyDesc="Total Views"
          status= "red"
          svgIcon={this.props.YoutubeIcon}
          dailyNumber={1407}
          dailyPercent={12}
        ></DailyCard>
      </div>
        )
    }
}
