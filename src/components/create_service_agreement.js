import React, { Component } from 'react';
import axios from 'axios';
import './create_service_agreement.css';


export default class Create_service_agreement extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10,marginLeft:10 }}>
            <div class="alert alert-primary" role="alert"><b>
              Residential Service Agreement</b>
            </div>
            <nav aria-label="breadcrumb align-items-center">
              <ol class="breadcrumb ">
                <li class="breadcrumb-item active " aria-current="page"><b>Resident Details</b></li>
              </ol>
            </nav>
         <form>
         <div className="container">

            <div class="row">
              <label for="fname">Resident Name</label>
              <input type="text" id="fname" name="fname"/>
            </div> 
            <div class="row">
              <div class="column">
                <label for="fname">Room No</label>
                <input type="text" id="fname" name="fname"/>
              </div>
              <div class="column">
                <label for="fname">Bed Number</label>
                <input type="text" id="fname" name="fname"/>
              </div>
              <div class="column">
                <label for="fname">D.O.A</label>
                <input type="text" id="fname" name="fname"/>
              </div>
            </div>
            <div class="row">
              <label for="fname">Guardian</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Administrator</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Person Nominated</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <p>(This person has been nominated by the resident)</p>
            </div>
          <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page"><center><b>Duration Of stay </b></center></li>
                </ol>
          </nav>
          <div className="container">

          <div class="row">
            <div class="column">

              <label for="fname">indefinite period of stay from :</label>
              <input type="text" id="fname" name="fname"/>
            </div>
          </div> 
          </div>
          <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page"><b>Fees and Charges</b></li>
                </ol>
          </nav>
          <div className="container">

          <div class="row">
            <div class="column">

              <label for="fname">Fee for accomadation and personel support :</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="column">

              <label for="fname">How to pay :</label>
              <input type="text" id="fname" name="fname"/>
              </div>
          </div> 
          <div class="row">
              <label for="fname">Fees in advancedcharged for terms/services provided by the srs</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Security deposit charged</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Reservation Fee charged</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Establishment Fee charged</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <p>(refunds of money helds in trust)</p>
            </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page"><b>Individual Specifics</b></li>
                </ol>
          </nav>
          <div className="container">

          <div class="row">
              <label for="fname">Furniture in Residents</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Specific Terms and services provided</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">Any Specialterms</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="row">
              <label for="fname">PersonelProperty</label>
              <input type="text" id="fname" name="fname"/>
            </div><br></br>
            <div class="row">

            <div className="form-group">
                   <center> <input type="submit" value="UPDATE AGREEMENT" className="btn btn-primary"/>
                   </center>
            </div>
            </div>
            </div>

        </form>
        </div>
     
    )
  }
}
