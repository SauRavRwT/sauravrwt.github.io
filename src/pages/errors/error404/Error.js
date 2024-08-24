import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
  }

  componentDidMount() {
    const errorMessages = [
      "Hey Prabhu, Hey Hari Ram, Krishna Jagannatham, Prema Nandi, Ye kya hui?",
      "I'll be back!",
      "Hello, IT. Have you tried turning it off and on again?",
      "Welcome to This Page. The first rule of This Page is: you do not talk about This Page.",
      "Saurav!, we have a problem.",
      "Error messages! Why'd it have to be error messages?!",
      "I'm sorry!, Saurav. I'm afraid I can't do that.",
      "You're gonna need a bigger server.",
      "God help us; we're in the hands of engineers.",
      "I'm as mad as hell, and I'm not going to take this anymore!",
      "But we'll see each other soon. Won't we?",
      "You're the wrong guy on the wrong page at the wrong time.",
    ];
    const randomMessage =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];
    this.setState({ errorMessage: randomMessage });
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <Header theme={this.props.theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Woops!!</h1>
            <h1 className="error-404">404</h1>
            <p>{this.state.errorMessage}</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </Fade>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
