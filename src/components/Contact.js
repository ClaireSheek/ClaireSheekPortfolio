import React, { Component } from "react";
import {Animated} from "react-animated-css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };

resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    try {
      await axios.post("https://email-api-clairesheek.vercel.app/api/v1", data);
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" >   
        <Animated animationIn="flipInX" animationInDelay={500} >
          <h1 className="title">Contact</h1>
        </Animated>
        <section className="contact content">
          <h4>I'd love to hear from you!</h4>
          <form className="form" onSubmit={(e) => this.formSubmit(e)}>
          <TextField
              className="textField"
              id="outlined-basic"
              placeholder="Enter Subject"
              label="Subject"
              variant="outlined"
              value={this.state.subject}
              onChange={(e) => this.setState({ subject: e.target.value })}
              required
            />
            <br />
            <br />

            <TextField
              className="textField"
              id="outlined-basic"
              placeholder="Enter your name"
              label="Name"
              variant="outlined"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
              type="text"
            />
            <br />
            <br />

            <TextField
              className="textField"
              id="outlined-basic"
              label="Email"
              placeholder="Enter email address"
              variant="outlined"
              value={this.state.email}
              onChange={(e) => this.handleChangeEmail(e)}
              error={this.state.emailError}
              required
              type="email"
            />
            <br />
            <br />
            <TextField
              className="messageField"
              id="standard-multiline-flexible"
              label="Message"
              placeholder="Enter Message"
              variant="outlined"
              multiline
              rowsMax={4}
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              required
              type="text"
            />
            <br />
            <br />
            <div className="button--container">
              <button type="submit" className="button button-primary">
                {this.state.buttonText}
              </button>
            </div>
          </form>
        </section>  
      </Animated>
    );
  }
}
