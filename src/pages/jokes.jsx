import React, { Component } from 'react';

import Header from '../components/header/header.jsx'
import JokeList from '../components/joke-list/joke-list.jsx'
import Form from '../components/form/form.jsx'

export default class Jokes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: true,
      value: ''
    };

    this.endpoint = "http://localhost:5000/api/jokes"
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount = () => (
    this.getJokes()
  );

  handleChangeValue = e => (
    this.setState({ value: e.target.value })
  );

  handleSubmit = e => {
    e.preventDefault();
    this.addJoke();
  }

  getJokes = () => {
    fetch(this.endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({
          jokes: data,
          loading: false,
          value: ''
        });
      });
  }

  addJoke = () => {
    fetch(this.endpoint, {
      method: "post",
      body: JSON.stringify({ jokeText: this.state.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() =>
        this.getJokes()
      );
  }

  render = () => {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : <JokeList jokes={this.state.jokes} />;

    return (
      <div>
        <Header
          title="JOKES"
          classname="bg--light"
        />
        <div className="w3-content w3-container w3-padding-64">
          {contents}
          <Form
            placeholder="Write a joke!"
            buttonText="SAVE THE MASTERPIECE"
            value={this.state.value}
            onSubmitEvent={this.handleSubmit}
            onChange={this.handleChangeValue}
          />
        </div>

      </div>
    );
  }
}
