import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            country: "",
            email: "",
            phone: "",
            message: "",
            status: "Submit"
        };
    }
    render() {
        let buttonText = this.state.status;
        return (

            <form  onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={this.state.country}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <button type="submit">{buttonText}</button>
            </form>

        );
    }
    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "email") {
            this.setState({ email: event.target.value });
        } else if (field === "message") {
            this.setState({ message: event.target.value });
        }
        else if (field === "country") {
            this.setState({country: event.target.value});
        }
        else if (field === "phone") {
            this.setState({phone: event.target.value});
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ status: "Sending" });
        axios({
            method: "POST",
            url: "http://localhost:5000/contact",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "sent") {
                alert("Message Sent");
                this.setState({ name: "", country:"",email: "", phone: "", message: "", status: "Submit" });
            } else if (response.data.status === "failed") {
                alert("Message Failed");
            }
        });
    }
}

export default ContactForm;