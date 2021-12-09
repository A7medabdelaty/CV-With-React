import Leftcolumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Footer from "./footer";
import { Clear } from "./Clear";
import { Component } from "react";

class MyApp extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <Leftcolumn />
          <RightColumn />
        </div>
        <Clear />
        <Footer />
      </div>
    );
  }
}

export default MyApp;
