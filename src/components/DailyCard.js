import React, { Component } from 'react';
import {formatNumberK} from "../format";

export default class DailyCard extends Component {
  render() {
    return (
      <div className= "daily-card">
          <div className="daily-row">   
            <span className="daily-desc"> {this.props.dailyDesc}</span>
            <img src={this.props.svgIcon} alt="social media logo"></img>
          </div>
        <div className="daily-row"> 
          <span className="daily-number primary"> {formatNumberK(this.props.dailyNumber)}</span>
          <span className=  {"daily-perc status-" + this.props.status}>{this.props.dailyPercent} %</span>
        </div>  
      </div>
    );
  };
  }



