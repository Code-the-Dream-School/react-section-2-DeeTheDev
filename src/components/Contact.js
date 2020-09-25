import React, { Component } from "react";
//DOTENV did not work / needs attention
require("dotenv").config();

class Contact extends Component {
    state = {
        contactData: "",
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        const API_URL =
            "https://api.airtable.com/v0/appgJ7LWi6KpDht73/Contact?api_key=";
        const API_KEY = "keyMNpf3rU59ffzTZ";
        fetch(API_URL + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                const contactData = data.records[0].fields;
                this.setState({ contactData });
            })
            .catch((error) => console.log(error));
    };

    render() {
        const { contactData } = this.state;
        const { name, phone, email, linkedIn, github } = contactData;
        const result = (field) => {
            return contactData ? field : null;
        };
        return (
            <>
                <p>{result(name)}</p>
                <p>{result(phone)}</p>
                <p>{result(email)}</p>
                <p>
                    <a
                        href={result(linkedIn)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a
                        href={result(github)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </p>
            </>
        );
    }
}

export default Contact;
