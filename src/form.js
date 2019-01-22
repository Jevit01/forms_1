import React, { Component } from "react";
import { countries } from "./countries.json";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      month: "",
      day: "",
      year: "",
      countries: "",
      diet: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      id: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.id]: event.target.id
    });
  };

  handleYear = () => {
    let output = [];
    for (let i = 2019; i >= 1900; i--) {
      output.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return output;
  };

  handleMonth = () => {
    let output = [];
    for (let i = 1; i <= 12; i++) {
      output.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return output;
  };

  handleDay = () => {
    let output = [];
    for (let i = 1; i <= 31; i++) {
      output.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return output;
  };

  handleCountry = () => {
    let output = [];
    for (let i = 0; i < countries.length; i++) {
      output.push(
        <option key={i} value={countries[i].name}>
          {countries[i].name}
        </option>
      );
    }
    return output;
  };

  formCompleted = () => {};

  render() {
    const {
      name,
      email,
      month,
      day,
      year,
      countries,
      diet,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      id
    } = this.state;
    return (
      <>
        <h1> Mars Mission Regristration Form </h1>
        <form onChange={this.handleChange}>
          <div className="info">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={this.state.name}
              id="name"
            />
            <br />
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              value={this.state.email}
              id="email"
            />
          </div>
          <br />
          <div className="birth">
            Date Of Birth
            <select
              htmlFor="date_of_birth"
              name="month"
              value={this.state.month}
            >
              <option>Month</option>
              {this.handleMonth()}
            </select>
            <select htmlFor="date_of_birth" name="day" value={this.state.day}>
              <option>Day</option>
              {this.handleDay()}
            </select>
            <select htmlFor="date_of_birth" name="year" value={this.state.year}>
              <option>Year</option>
              {this.handleYear()}
            </select>
          </div>
          <br />
          <div className="country">
            <p>What is your country of origin?</p>
            <select name="countries" value={this.state.countries}>
              <option>Country</option>
              {this.handleCountry()}
            </select>
          </div>
          <br />
          <div className="diet">
            <p>What is your dietary preference? </p>
            <select name="diet" value={this.state.diet}>
              <option>Diet</option>
              <option>Omnivore</option>
              <option>Vegitarian</option>
              <option>Vegan</option>
            </select>
          </div>
          <div className="why">
            <p>Why do you want to be a Mars explorer?</p>
            <textarea className="text" />
          </div>
          <div className="ques">
            <div className="ques1">
              <p>1) Can you breathe underwater longer than 1 minute?</p>
              Yes
              <input type="radio" value="Yes" name="question1" />
              <br />
              No
              <input type="radio" value="No" name="question1" />
              <br />
              I dont know
              <input type="radio" value="I dont Know" name="question1" />
            </div>
            <div className="ques2">
              <p>2) What is your marital status?</p>
              Married
              <input type="radio" value="Married" name="question2" />
              <br />
              Unmarried
              <input type="radio" value="Unmarried" name="question2" />
            </div>
            <div className="ques3">
              <p>
                3) When you are in a stressful or difficult situation, how do
                you most frequently react?
              </p>
              Determination: I continue to confront the situation.
              <input type="radio" value="determine" name="question3" />
              <br />
              Defeat: I stop confronting the situation.
              <input type="radio" value="defeat" name="question3" />
              <br />
              Anger: I become upset at the situation.
              <input type="radio" value="anger" name="question3" />
              <br />
              Resourcefulness: I seek help to confront the situation.
              <input type="radio" value="resource" name="question3" />
            </div>
            <div className="ques4">
              <p>4) Are you claustrophobic?</p>
              Yes
              <input type="radio" value="Yes" name="question4" />
              <br />
              No
              <input type="radio" value="No" name="question4" />
              <br />
              I dont know
              <input type="radio" value="I dont know" name="question4" />
            </div>
            <div className="ques5">
              <p>
                5) Does your family have a history of (check all that apply):
              </p>
              Cancer
              <input type="checkbox" value="cancer" name="question5" />
              <br />
              Heart Disease
              <input type="checkbox" value="heart" name="question5" />
              <br />
              Diabetes
              <input type="checkbox" value="diabetes" name="question5" />
            </div>
            <div className="ques6">
              <p>6) Do you have any living (check all that apply):</p>
              Siblings?
              <input type="checkbox" value="Siblings" name="question6" />
              <br />
              Parents?
              <input type="checkbox" value="Parents" name="question6" />
              <br />
              Grandparents?
              <input type="checkbox" value="Grandparents" name="question6" />
            </div>
            <div className="ques7">
              <p>7) Check all educational credentials you have received:</p>
              High school diploma or GED equivalent
              <input
                type="checkbox"
                value="highschool or GED"
                name="question7"
                id="High school diploma or GED equivalent"
              />
              <br />
              Associate Degree
              <input
                type="checkbox"
                value="Associate"
                name="question7"
                id="Associate"
              />
              <br />
              Bachelors Degree
              <input
                type="checkbox"
                value="Bachelors"
                name="question7"
                id="Bachelors"
              />
              <br />
              Masters Degree
              <input
                type="checkbox"
                value="Masters"
                name="question7"
                id="Masters"
              />
              <br />
              PhD
              <input type="checkbox" value="PhD" name="question7" id="PhD" />
              <br />
              Other
              <input
                type="checkbox"
                value="Other"
                name="question7"
                id="Other"
              />
            </div>
          </div>
        </form>
        <div className="confirm">
          <p>{name ? "Your name: " + name : ""}</p>
          <p>{email ? "Your Email: " + email : ""}</p>
          <p>
            {month && day && year
              ? "Your date of birth: " + month + "/" + day + "/" + year
              : ""}
          </p>
          <p>{countries ? "Country of origin: " + countries : ""}</p>
          <p>{diet ? "Dietary preference: " + diet : ""}</p>
          <p>{question1 ? "Question 1 choice: " + question1 : ""}</p>
          <p>{question2 ? "Question 2 choice: " + question2 : ""}</p>
          <p>{question3 ? "Question 3 choice: " + question3 : ""}</p>
          <p>{question4 ? "Question 4 choice: " + question4 : ""}</p>
          <p>{question5 ? "Question 5 choice: " + question5 : ""}</p>
          <p>{question6 ? "Question 6 choice: " + question6 : ""}</p>
          <p>{question7 ? "Question 7 choice: " + id : ""}</p>
        </div>
        <button type="submit">Submit</button>
      </>
    );
  }
}

export default Form;
