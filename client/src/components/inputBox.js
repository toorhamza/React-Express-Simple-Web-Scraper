import React from 'react';
import Result from "./result.js"

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     url: "",
     selector: "",
     error: "",
     status: false,
     fetchedData: "",
    };

    // Binds this to the event handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState( {[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({status: true, error: ""}); // Used to show loading bar

    // Fetch POST request to the Express Backend
    const Postdata = {url:this.state.url, selector:this.state.selector}

    fetch('http://localhost:8000/fetch', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "http://ptsv2.com",
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Postdata)
  })
  .then (res => res.json())  
  .then(data => this.setState({ status: false, fetchedData: data }))
  .catch(error => this.setState({error: error, status: false}))
}
  
  render() {
    return ( 
      <div className="inputBox">
        <form onSubmit={this.handleSubmit}>
          <div className="inputContainer">
            <label className="inputLabel" >URL: </label>
              <input className="inputField" placeholder="http://www.example.com" type="text" id="url" name="url" onChange={this.handleChange} />
          </div>
          <div className="inputContainer">
            <label className="inputLabel" >Selector Code: </label>
              <input className="inputField" type="text" id="selector" name="selector" onChange={this.handleChange} />
          </div>
          <div className="button_cont" align="center">
            <input className="button" type="submit" value="Fetch" />
          </div>
          </form> 

            <Result data={this.state.fetchedData} status={this.state.status} error={this.state.error}/>
        </div>
    ) 
  }
}