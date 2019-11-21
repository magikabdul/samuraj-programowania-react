import React, { Component } from "react";

import "../styles/App.css";

import { BrowserRouter, NavLink } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <header>
          {<Header/>}
        </header>
        <main>
          <aside>
            {<Navigation/>}
          </aside>
          <section className="blog">
            {<Page/>}
          </section>
        </main>
        <footer>
          {<Footer/>}
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
