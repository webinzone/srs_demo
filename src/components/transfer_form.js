import React, { Component } from 'react';
import axios from 'axios';
import './transfer_form.css';
import m1 from './images/m1.jpg';




export default class Transfer_form extends Component {
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
              SRS Manager Supported Residential Service</b>
            </div>
            <img src={m1} width="200" height="250" align="right"/>

            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb ">
                <li class="breadcrumb-item active " aria-current="page"><b>Transfer Details</b></li>
              </ol>
            </nav>
            <h2>TRANSFER FORM</h2><br/>

         <form>

            <div class="row">
              <div class="column">
                <label for="fname">Resident Name</label>
                <input type="text" id="fname" name="fname"/>

              </div>
              <div class="column">

                <label for="fname">D.O.B</label>
                <input type="text" id="fname" name="fname"/>
              </div>
            </div> 

            <div class="row">
              <div class="column">
                <label for="fname">Nationality</label>
                <input type="text" id="fname" name="fname"/>
              </div>
              <div class="column">
                <label for="fname">Language Spoken </label>
                <input type="text" id="fname" name="fname"/>
              </div>
            </div>
            <div className="container">

            <div class="row">
            <div class="column">

              <label for="fname">Medi care No</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class="column">

              <label for="fname">Pension No</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            </div>
            <div class="row">

            </div>
          <div class="row">

              <label for="fname">Chemisist Details:</label>
              <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

              <label for="fname">Date:</label>
              <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

              <label for="fname">From:</label>
              <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

              <label for="fname">Address:</label>
              <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

              <label for="fname">Phone No:</label>
              <input type="text" id="fname" name="fname"/>
          </div> 
            <div class="row">

              <label for="fname">Reason for Transfer:</label>
              <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

          <label for="fname">Current Medication chart attached:</label>
          </div>
          <div class="row">

          <div class="column">

          <label for="vehicle1"> Yes</label>

          </div>
          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div><br/>
          <div class="column">

          <label for="vehicle2"> No</label>
          </div> 

          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          </div>
          <div class="row">

            <label for="fname">If No,List Medication Details:</label>
            <input type="text" id="fname" name="fname"/>
            </div> 
          <div class="row">

          <label for="fname">Website Park is given?:</label>
          </div>
          <div class="row">

          <div class="column">

          <label for="vehicle1"> Yes</label>
          </div>
          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          <div class="column">

          <label for="vehicle2"> No</label>
          </div> 

          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          </div>
          <div class="row">

          <label for="fname">If No,List Medication Detailswith Resident:</label>
          <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

          <label for="fname">Last time Medication Details:</label>
          <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

          <label for="fname">Reports/ other Notes:</label>
          <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

          <label for="fname">Next of kin:</label>
          <input type="text" id="fname" name="fname"/>
          </div>
          <div class="row">

        <label for="fname">Has been advised of the transfer:</label>
        </div> 

                  <div class="row">

        <div class="column">

        <label for="vehicle1"> Yes</label>
        </div>
        <div class="column">

        <input type="checkbox" id="" name="" value=""/>
        </div>
        <div class="column">

        <label for="vehicle2"> No</label>
        </div> 

        <div class="column">

        <input type="checkbox" id="" name="" value=""/>
        </div>
        </div>


        
        <div class="row">

          <label for="fname">Guardian:</label>
          <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

          <label for="fname">Has been advised of the transfer:</label>
          </div> 
          <div class="row">

          <div class="column">

          <label for="vehicle1"> Yes</label>
          </div>
          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          <div class="column">

          <label for="vehicle2"> No</label>
          </div> 

          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          </div>

          <div class="row">

          <label for="fname">Case Manager:</label>
          <input type="text" id="fname" name="fname"/>
          </div> 
          <div class="row">

          <label for="fname">Has been advised of the transfer:</label>
          </div> 
                    <div class="row">

          <div class="column">

          <label for="vehicle1"> Yes</label>
          </div>
          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          <div class="column">

          <label for="vehicle2"> No</label>
          </div> 

          <div class="column">

          <input type="checkbox" id="" name="" value=""/>
          </div>
          </div>

          <div class="row">

        <label for="fname">Person Nominated:</label>
        <input type="text" id="fname" name="fname"/>
        </div> 
        <div class="row">

        <label for="fname">Has been advised of the transfer:</label>
        </div> 
              <div class="row">

      <div class="column">

      <label for="vehicle1"> Yes</label>
      </div>
      <div class="column">

      <input type="checkbox" id="" name="" value=""/>
      </div>
      <div class="column">

      <label for="vehicle2"> No</label>
      </div> 

      <div class="column">

      <input type="checkbox" id="" name="" value=""/>
      </div>
      </div>




          <div className="form-group">
      <center> <input type="submit" value="UPDATE" className="btn btn-primary"/>
      </center>
      </div>
      </div>
        </form>
        </div>
     
    )
  }
}
