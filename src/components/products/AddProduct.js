import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/css/AddProduct.css'
import {storage} from '../../config/shopItConfig';
import {addProduct} from '../../store/actions/productActions'
class AddProduct extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = {}
    this.image = {}
    this.id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleImage = (e) => {
    if (e.target.files[0]) {
      this.image = e.target.files[0];
    }
  }
  handleSubmit =(e) => {
    e.preventDefault();
    e.target.reset();
    this.handleUpload();
  } 
  handleUpload = async() => {
    const {productName,category} = this.state;
    const uploadTask = storage.ref(`${category}/${productName}${this.id}`).put(this.image);
   await  uploadTask.on('state_changed', (snapshot) => {
      // progrss function ....
    },
    (error) => {
         // error function ....
      console.log(error);
    },() => {
      // complete function ....
      storage.ref(category).child(`${productName}${this.id}`).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
           ...this.state,url
          },()=>{this.props.addProduct(this.state)});
      })
  });
}

  render() {
   this.catty;
     
    const { auth, authError } = this.props;
    if (auth.email!=="admin@gmail.com") return <Redirect to='/' /> 
    return (
      <div className="container d-flex  align-items-center  justify-content-center  AddProductContainer  ">
         
          <form className="text-dark  text-center d-flex flex-column col-lg-6 addForm align-items-center  justify-content-center " onSubmit={this.handleSubmit}>
          <p class="AP_Text mt-5 ">Add Product</p>
          
          <div  id='category'  onChange={this.handleChange}  >
                  <select className="categories my-4 inputs  ">
                    <option >Categories</option>
                    <option value="vegetables">vegetables</option>
                    <option value="footwear">Footwear</option>
                      <option value="appliances">Appliances</option>
                      <option value="mobiles">Mobiles</option>
                      <option value="beauty">Beauty</option>
                      <option value="sports">Sports</option>
                      <option value="clothing">Clothing</option>
                  </select>
          </div>
              
            <input type="text" id='productName' className="inputs col-10 mb-4 mt-3" placeholder="Product Name" onChange={this.handleChange} required/>    
            <textarea  id='description' className=" col-10 mb-4 mt-3" placeholder="Description" onChange={this.handleChange} required/>        
            <input type="text" id='price' className="inputs col-10 mb-4 mt-3" placeholder="Price" onChange={this.handleChange} required/>       
            <input type="text" id='offer' className="inputs col-10 mb-4 mt-3" placeholder="Offer" onChange={this.handleChange} required/>        
           <label id='image' className="inputs bg-none col-4  mb-4 mt-2 py-2" onChange={this.handleImage} required > Choose a File<span className="pl-2">></span>
                <input type="file" id='image'   accept="image/*"  required/>
                </label>
          <button className="btn  text-white font-weight-bold col-lg-4   col-sm-6 col-md-4   mb-5 addBtn">ADD</button>
            <div className="text-center text-danger">
              { authError ? <p>{authError}</p> : null }
          
          </div>
        </form>
          </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    addProduct: (product) => dispatch(addProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)