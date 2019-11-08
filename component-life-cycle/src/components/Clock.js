import React, { Component } from "react";

import SwitchButton from "./SwitchButton";

class Clock extends Component {
   clockId = "";

   state = {
      clockVisible: true,
      time: this.getTime()
   };

   getTime() {
      const currentTime = new Date();
      // console.log(currentTime);
      return {
         hours: currentTime.getHours(),
         minutes: currentTime.getMinutes(),
         seconds: currentTime.getSeconds()
      };
   }

   setTime() {
      const time = this.getTime();
      this.setState({ time });
   }

   componentDidMount() {
      this.clockId = setInterval(this.setTime.bind(this), 1000);
   }

   componentWillUnmount() {
      clearInterval(this.clockId);
   }

   handleClick = () => {
      this.setState({ clockVisible: !this.state.clockVisible });
   };

   render() {
      const { hours, minutes, seconds } = this.state.time;

      return (
         <>
            <SwitchButton
               active={this.state.clockVisible}
               click={this.handleClick}
            />
            {this.state.clockVisible && (
               <h1>
                  {hours > 9 ? hours : `0${hours}`} :{" "}
                  {minutes > 9 ? minutes : `0${minutes}`} :{" "}
                  {seconds > 9 ? seconds : `0${seconds}`}
               </h1>
            )}
         </>
      );
   }
}

export default Clock;
