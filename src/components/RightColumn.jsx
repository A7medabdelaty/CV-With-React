import { Component } from "react";
class RightColumn extends Component {
  work_exp() {
    return (
      <div className="workexp">
        <h2>
          <i className="fas fa-briefcase"></i>Work Experience
        </h2>
        <div className="textcont">
          <h4>Front End Developer / w3schools.com</h4>
          <h5>
            <i className="fas fa-calendar-alt"></i>Jan 2014 -{" "}
            <span>Current</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
            deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
            ea et odio, unde doloremque repellendus iure, iste.
          </p>
          <hr />
          <h4>Web Developer / something.com</h4>
          <h5>
            <i className="fas fa-calendar-alt"></i>Mar 2012 - Dec 2014
          </h5>
          <p>
            Consectetur adipisicing elit. Praesentium magnam consectetur vel in
            deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
            ea et odio, unde doloremque repellendus iure, iste.
          </p>
          <hr />
          <h4>Graphic Designer / designsomething.com</h4>
          <h5>
            <i className="fas fa-calendar-alt"></i>Jun 2010 - Mar 2012
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    );
  }

  education() {
    return (
      <div class="education">
        <h2>
          <i class="fas fa-certificate"></i>Education
        </h2>
        <div class="textcont">
          <h4>W3Schools.com</h4>
          <h5>
            <i class="fas fa-calendar-alt"></i>Forever
          </h5>
          <p>Web Development! All I need to know in one place</p>
          <hr />
          <h4>London Business School</h4>
          <h5>
            <i class="fas fa-calendar-alt"></i>2013 - 2015
          </h5>
          <p>Master Degree</p>
          <hr />
          <h4>School of Coding</h4>
          <h5>
            <i class="fas fa-calendar-alt"></i>2010 - 2013
          </h5>
          <p>Bachelor Degree</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="rightcolumn">
        {this.work_exp()}
        {this.education()}
      </div>
    );
  }
}

export default RightColumn;
