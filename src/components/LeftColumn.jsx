import { Component } from "react";

class Leftcolumn extends Component {
  render() {
    return (
      <div className="leftcolumn">
        {this.image()}
        {this.info()}
        {this.skills()}
        {this.lang()}
      </div>
    );
  }

  image() {
    return (
      <div className="image">
        <img
          src="https://www.w3schools.com/w3images/avatar_hat.jpg"
          alt="fakeimage"
        />
      </div>
    );
  }

  info() {
    return (
      <div className="info">
        <p>
          <i className="fas fa-briefcase"></i>Designer
        </p>
        <p>
          <i className="fas fa-home"></i>London, UK
        </p>
        <p>
          <i className="fas fa-envelope"></i>ex@mail.com
        </p>
        <p>
          <i className="fas fa-phone-alt"></i>1224434434
        </p>
      </div>
    );
  }

  skills() {
    return (
      <div className="skills">
        <h2>
          <i className="fas fa-star-of-life"></i> Skills
        </h2>
        <p className="one">Adobe Photoshop</p>
        <p className="two">Photography</p>
        <p className="three">Illustrator</p>
        <p className="four">Media</p>
      </div>
    );
  }

  lang() {
    return (
      <div className="lang">
        <h2>
          <i className="fas fa-globe-europe"></i>Languages
        </h2>
        <p className="one">English</p>
        <p className="two">Spanish</p>
        <p className="three">German</p>
      </div>
    );
  }
}

export default Leftcolumn;
