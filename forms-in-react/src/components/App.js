import React, { Component } from "react";

class Form extends Component {
   state = {
      city: "Londyn",
      text: "",
      isLoved: true,
      number: 0
   };

   handleCityChange = e => {
      this.setState({
         city: e.target.value
      });
   };

   handleTextChange = e => {
      this.setState({
         text: e.target.value
      });
   };

   handleIsLovedChange = e => {
      this.setState({
         isLoved: e.target.checked
      });
   };

   handleSelectChange = e => {
      this.setState({
         number: e.target.value
      });
   };

   render() {
      return (
         <div>
            <label htmlFor="">
               Podaj miasto
               <input
                  value={this.state.city}
                  onChange={this.handleCityChange}
                  type="text"
                  name=""
                  id=""
               />
            </label>

            <br />

            <label htmlFor="">
               Napisz coś o tym mieście
               <textarea
                  value={this.state.text}
                  onChange={this.handleTextChange}
                  name=""
                  id=""
                  cols="30"
                  rows="10"></textarea>
            </label>

            <br />

            <label htmlFor="">
               Czy lubisz to miasto
               <input
                  checked={this.state.isLoved}
                  onChange={this.handleIsLovedChange}
                  type="checkbox"
                  name=""
                  id=""
               />
            </label>

            <br />

            <label htmlFor="">
               ile razy byliście w tym mieście
               <select
                  value={this.state.number}
                  onChange={this.handleSelectChange}
                  name=""
                  id="">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
               </select>
            </label>
         </div>
      );
   }
}

export default Form;
