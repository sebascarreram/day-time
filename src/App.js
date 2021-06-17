import React, { Component } from "react";
import "./sass/main.scss";
import Nav from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Card from "./components/Card/Card";

class Header extends Component {
  render() {
    //    console.log(this.props);
    const {
      author: { firstname, lastname },
    } = this.props.data;

    return (
      <header className="header">
        <div className="wrapper flex flex__nav">
          <Logo firstname={firstname} lastname={lastname} />
          <Nav />
        </div>
      </header>
    );
  }
}

class Main extends Component {
  showDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const time = new Date();
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };
  urlImage = () => {
    let url;
    const time = new Date();
    const hour = time.getHours();
    const mins = time.getMinutes();

    // 5:00 to 6:59
    if (5 <= hour && 6 >= hour && 59 >= mins) {
      url = "/img/night-2.jpeg";
    }
    // 7:00 to 8:59
    if (7 <= hour && 8 >= hour && 59 >= mins) {
      //      console.log("Morning");
      url = "/img/morning.jpeg";
    }
    // 9:00 to 16:59
    if (9 <= hour && 16 >= hour && 59 >= mins) {
      //      console.log("Noon");
      url = "./img/noon.jpeg";
    }
    // 17:00 to 18:59
    if (17 <= hour && 18 >= hour && 59 >= mins) {
      //      console.log("Afternoon");
      url = "/img/afternoon.jpeg";
    }
    // 19:00 to 20:59
    if (19 <= hour && 20 >= hour && 59 >= mins) {
      //      console.log("Evening");
      url = "/img/evening.jpeg";
    }
    // 21:00 to 4:59
    if (21 <= hour || (0 <= hour && 4 >= hour && 59 >= mins)) {
      //    console.log("Night");
      url = "/img/night.jpeg";
    }

    return url;
  };

  textGood = () => {
    let text;
    const time = new Date();
    const hour = time.getHours();
    const mins = time.getMinutes();

    // 6:00 to 11:59
    if (6 <= hour && 11 >= hour && 59 >= mins) {
      text = "Good morning";
    }
    // 12:00 to 17:59
    if (12 <= hour && 17 >= hour && 59 >= mins) {
      text = "Good afternoon";
    }
    // 18:00 to 20:59
    if (18 <= hour && 20 >= hour && 59 >= mins) {
      text = "Good evening";
    }
    // 21:00 to 4:59
    if (21 <= hour || (0 <= hour && 5 >= hour && 59 >= mins)) {
      text = "Good night";
    }
    return text;
  };
  render() {
    return (
      <main>
        <article className="u-margin-top-medium u-margin-bottom-medium">
          <section className="wrapper flex flex--card">
            <Card url={this.urlImage()}>
              <div className="card__text">
                <h1 className="heading heading-primary">{this.textGood()}</h1>
                <h3 className="heading heading-tertiary">{this.showDate()}</h3>
                <h3 className="heading heading-tertiary">
                  {new Date().toLocaleTimeString()}
                </h3>
              </div>
            </Card>
          </section>
        </article>
      </main>
    );
  }
}

class App extends Component {
  render() {
    const data = {
      author: {
        firstname: "Sebastian",
        lastname: "Carrera",
      },
    };
    return (
      <div className="App">
        <Header data={data} />
        <Main />
      </div>
    );
  }
}

export default App;
