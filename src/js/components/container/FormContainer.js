import React, { Component } from "react";
import Input from "../presentational/Input";
import {connect} from "react-redux";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName:"",
      phone: "",
      date: "",
      address:"",
      company:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event){
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit (event){
    event.preventDefault();
    this.props.submitData(this.state);
    this.setState({
      fName: '',
      lName: '',
      phone: '',
      date: '',
      address: '',
      company: ''

    });
  }

  render() {
    const { fName,lName,phone,date,address,company } = this.state;
    
    return (
      <div>
      <form id="article-form" 
      onSubmit={this.handleSubmit}
      style={{marginTop: '30px'}}>
        <Input
          text="First Name"
          className="form-control"
          label="Fname"
          type="text"
          id="fName"
          value={fName}
          handleChange={this.handleChange}
        />
        <Input
          text="Last Name"
          className="form-control"
          label="Lname"
          type="text"
          id="lName"
          value={lName}
          handleChange={this.handleChange}
        />
        <Input
          text="Address"
          className="form-control"
          label="address"
          type="text"
          id="address"
          value={address}
          handleChange={this.handleChange}
        />
        <Input
          text="Company"
          className="form-control"
          label="company"
          type="text"
          id="company"
          value={company}
          handleChange={this.handleChange}
        />
        <Input
          text="Phone No"
          className="form-control"
          label="phone"
          type="number"
          id="phone"
          value={phone}
          handleChange={this.handleChange}
        />
        <Input
          text="Date"
          className="form-control"
          label="date"
          type="date"
          id="date"
          value={date}
          handleChange={this.handleChange}
        />
        <input
          className="btn btn-secondary float-right"
          label="submit"
          type="submit"
          id="submit"
          />
      </form>
      </div>
    );
  }
}


function mapDispatchToProps (dispatch){
 return {
      submitData: function(newData){
        dispatch({
          type:"ADD_DATA",
          payload:newData
      })
      }
  }
}

export default connect(null, mapDispatchToProps)(FormContainer)