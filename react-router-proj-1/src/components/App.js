import React, { Component } from "react";

import { BrowserRouter, Link, Route } from "react-router-dom";

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
                  <Link to="/">start</Link>
                </li>
                <li>
                  <Link to="/news">aktualności</Link>
                </li>
                <li>
                  <Link to="/contact">kontakt</Link>
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
