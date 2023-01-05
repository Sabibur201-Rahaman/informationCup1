import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios';

const contactStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    // backgroundColor: "red",
  };

 class ContactsDetails extends Component {
    state={
        contact:{}
    }
    componentDidMount(){
        const id=this.props.match.params.id
    axios.get(`http://localhost:4000/contacts/${id}`)
    .then(data=>{
      this.setState({
        contact:data.data
      })
    })
    .catch(err=>console.log(err))
    }
   
    
// findContact(){
//     const id=this.props.match.params.id
//     const contact=this.props.contacts.find(contact=>contact.id===Number(id))
//     this.setState({
//         contact:contact
//     })

// }
//     componentDidMount(){
//         this.findContact()
//     }
  render() {
    const{contact}=this.state
    // console.log(this.props.match.params.id)
    return(
      
         <div className="card contact my-2 text-center" style={contactStyle}>
      
<img src={contact?.picture} className='card-img-top'alt={contact?.first_name}/>
        <div className="card-body">
          <h5 className="card-title">
            {contact?.first_name} 
            {contact?.last_name}
          </h5>
          <p className="card-text">{contact?.email}</p>
          <p className="card-text">{contact?.gender}</p>
          <p className="card-text"> date of Birth:{contact?.dob}</p>
          {/* <Link to={`/contacts/${contact.id}`}>Learn More</Link> */}
          <button className='btn btn-secondary' onClick={()=>this.props.history.goBack()}>go Back</button>
        </div>
       
      </div>
     
      
    )
  }
}  
export default withRouter(ContactsDetails)
