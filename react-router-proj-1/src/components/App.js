import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, NavLink, Route } from "react-router-dom";

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt do nas</h1>;

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home_selected"
                    activeStyle={{
                      backgroundColor: "gray",
                      letterSpacing: "2px"
                    }}>
                    start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news">aktualności</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">kontakt</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </section>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
