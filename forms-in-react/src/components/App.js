import React, { Component } from "react";

class Form extends Component {
   state = {
      city: "Londyn",
      text: "",
      isLoved: true,
      number: 0
   };

   handleChange = e => {
      if (e.target.type === "checkbox") {
         this.setState({
            [e.target.name]: e.target.checked
         });
      } else {
         this.setState({
            [e.target.name]: e.target.value
         });
      }
   };

   render() {
      return (
         <div>
            <label htmlFor="">
               Podaj miasto
               <input
                  value={this.state.city}
                  onChange={this.handleChange}
                  type="text"
                  name="city"
                  id=""
               />
            </label>

            <br />

            <label htmlFor="">
               Napisz coś o tym mieście
               <textarea
                  value={this.state.text}
                  onChange={this.handleChange}
                  name="text"
                  id=""
                  cols="30"
                  rows="10"></textarea>
            </label>

            <br />

            <label htmlFor="">
               Czy lubisz to miasto
               <input
                  checked={this.state.isLoved}
                  onChange={this.handleChange}
                  type="checkbox"
                  name="isLoved"
                  id=""
               />
            </label>

            <br />

            <label htmlFor="">
               ile razy byliście w tym mieście
               <select
                  value={this.state.number}
                  onChange={this.handleChange}
                  name="number"
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
