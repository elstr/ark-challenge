
import React, { Component } from 'react';
import {formatNumberK} from "../format";


class GeneralCard extends Component {
  render() {
    return (
      <div  onClick={()=> this.props.OpenModal(this)} className={"general-card "+ this.props.classBorder }>
        <div className="user-name-container">
          <img src={this.props.svgIcon} alt="social media logo"></img>        
          <span className="user-name">{this.props.userName}</span>
        </div>
        <span className="general-number primary">{formatNumberK(this.props.generalNumber)}</span>
        <span className="general-desc">{this.props.generalDesc}</span>
        <span className= {"general-daily status-" +this.props.status}>{this.props.todayNumber} Today</span>
      </div>
    );
  }
}

export default GeneralCard;





