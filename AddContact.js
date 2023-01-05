
import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css' 


export default class AddContact extends Component {
    state={
firstName:'',
lastName:'',
dob:new Date(),
email:'',
picture:'',
gender:'',
error:''
// error:{
//     firstName:''
// }
    }
    handleChange=(e)=>{
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleDateChange=(date)=>{
        this.setState({
            dob:date
        })
    }
    handleSubmit=(e)=>{
        const{firstName,lastName,gender,picture,email,dob}=this.state
        // if(firstName===''){
        //     this.setState({
        //         error:{
        //             firstName:'enter valid value'
        //         }

        //     })

        // }
        if(firstName===''||lastName===''||email===''||gender===''||picture===''||dob===''){
            this.setState({
                error:'enter valid data with valid info'
            })

        }
        else{
            //valid input
console.log(this.state)
//sending API request to server
axios.post('http://localhost:4000/contacts',{
    first_name:firstName,
    last_name:lastName,
    email,
    picture,
    gender,
    dob

}).then(data=>{
    console.log(data)
})
.catch(err=>
    console.log(err)
)
        }
        e.preventDefault()
        console.log(this.state)
    }

  render() {
    const{firstName,lastName,gender,picture,email,dob}=this.state
    return (
        <>
        <h2 className=' mt-3'>AddContact</h2>   
             <form
             onSubmit={this.handleSubmit}

              style={{
            width:'25rem',
            margin:'0auto'
        }}>
             <div className="mb-3 text-center">
          <label htmlFor="firstName" className="form-label">firstName
          </label>
          <input type="text" value={firstName} name='firstName' onChange={this.handleChange} className="form-control" />
          
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="lastName" className="form-label">lastName</label>
          <input type="text" value={lastName} name='lastName'onChange={this.handleChange} className="form-control" />
          
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={email} name='email' onChange={this.handleChange} className="form-control" />
          
        </div>
        <div className='mb-3'>
            <DatePicker selected={dob} onChange={this.handleDateChange}/>            
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="picture" className="form-label">picture</label>
          <input type="url" value={picture} name='picture'  onChange={this.handleChange} className="form-control" />
          
        </div>
        <div className='mb-3 text-center'>
        <select name='gender' className='form-select'>
            <option value=''>select
            </option>
            <option value='male' selected>Male</option>
            <option value='Female'>Female</option>

        </select>
        </div>
        
        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>

    )
  }
}
