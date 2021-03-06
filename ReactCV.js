class App extends React.Component {
  render() {
    return (
      <div>
        <div class="main-container">
          <Leftcolumn />
          <Rightcolumn />
          <div class="clear"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
class Leftcolumn extends React.Component {
  render() {
    return (
      <div class="leftcolumn">
        <div class="image">
          <img
            src="https://www.w3schools.com/w3images/avatar_hat.jpg"
            gi
            alt="fakeimage"
          />
        </div>
        <div class="info">
          <p>
            <i class="fas fa-briefcase"></i>Designer
          </p>
          <p>
            <i class="fas fa-home"></i>London, UK
          </p>
          <p>
            <i class="fas fa-envelope"></i>ex@mail.com
          </p>
          <p>
            <i class="fas fa-phone-alt"></i>1224434434
          </p>
        </div>
        <hr />
        <div class="skills">
          <h2>
            <i class="fas fa-star-of-life"></i> Skills
          </h2>
          <p class="one">Adobe Photoshop</p>
          <p class="two">Photography</p>
          <p class="three">Illustrator</p>
          <p class="four">Media</p>
        </div>
        <hr />
        <div class="lang">
          <h2>
            <i class="fas fa-globe-europe"></i>Languages
          </h2>
          <p class="one">English</p>
          <p class="two">Spanish</p>
          <p class="three">German</p>
        </div>
      </div>
    );
  }
}

class Rightcolumn extends React.Component {
  render() {
    return (
      <div class="rightcolumn">
        <div class="top">
          <h2>
            <i class="fas fa-briefcase"></i>Work Experience
          </h2>
          <div class="textcont">
            <h4>Front End Developer / w3schools.com</h4>
            <h5>
              <i class="fas fa-calendar-alt"></i>Jan 2014 - <span>Current</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
              deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr />
            <h4>Web Developer / something.com</h4>
            <h5>
              <i class="fas fa-calendar-alt"></i>Mar 2012 - Dec 2014
            </h5>
            <p>
              Consectetur adipisicing elit. Praesentium magnam consectetur vel
              in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr />
            <h4>Graphic Designer / designsomething.com</h4>
            <h5>
              <i class="fas fa-calendar-alt"></i>Jun 2010 - Mar 2012
            </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="bottom">
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
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <p>Find me on social media.</p>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <p>Powered by Ahmed abdelaty</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
