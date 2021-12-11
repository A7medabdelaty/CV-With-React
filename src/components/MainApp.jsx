import Main from "./main-container";
import Footer from "./Footer";
import { Clear } from "./Clear";
import { Component } from "react";

class MyApp extends Component {
  render() {
    return (
      <div>
        {Main()}
        {Clear()}
        <Footer />
      </div>
    );
  }
}

export default MyApp;
