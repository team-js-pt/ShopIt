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
    const uploadTask = storage.ref(`${category}/${productName}`).put(this.image);
   await  uploadTask.on('state_changed', (snapshot) => {
      // progrss function ....
    },
    (error) => {
         // error function ....
      console.log(error);
    },() => {
      // complete function ....
      storage.ref('images').child(productName).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
           ...this.state,url
          },()=>{this.props.addProduct(this.state)});
      })
  });
}
  render() {
    const { auth, authError } = this.props;
    if (auth.email!=="admin@gmail.com") return <Redirect to='/' /> 
    return (
      <div className="container  d-flex flex-column align-items-center align-middle mt-5 AddProductContainer col-lg-4 ">
      <form className="text-dark  align-middle  text-center p-0 mt-5 d-flex flex-column align-middle" onSubmit={this.handleSubmit}>
          <div className="mt-5 d-flex flex-row justify-content-around">
            <label htmlFor="category" className=" font-weight-bold ">Select Category:</label>
            <select id='category' className="bg-none border-dark" onChange={this.handleChange}>
            <option>Select Category</option>
            <option value="vegetables">vegetables</option>
            <option value="footwear">Footwear</option>
            <option value="appliances">Appliances</option>
            <option value="mobiles">Mobiles</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
            </select>
          </div>
          <div className="mt-4 d-flex flex-row justify-content-around">
            <label htmlFor="productName" className="font-weight-bold">Product Name:</label>
            <input type="text" id='productName' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className=" mt-4  d-flex flex-row justify-content-around">
            <label htmlFor="description" className=" font-weight-bold">Product Description: </label>
            <textarea  id='description' className="border-dark"  onChange={this.handleChange} />
          </div>
          <div className="mt-4 d-flex flex-row justify-content-around">
            <label htmlFor="price" className=" font-weight-bold">Price:</label>
            <input type="text" id='price' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className="mt-4 d-flex flex-row justify-content-around">
            <label htmlFor="offer" className=" font-weight-bold">Offer:</label>
            <input type="text" id='offer' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className="mt-4 d-flex flex-row justify-content-around">
            <label htmlFor="image" className=" font-weight-bold mr-4 ">Product Image:</label>
            <input type="file" id='image' className="border-dark  ml-5 " accept="image/*" onChange={this.handleImage} />
          </div>
          <div className="mt-4">
          <button className="btn btn-dark mb-4 rounded-pill h6 font-weight-bold">ADD</button>
            <div className="text-center text-danger">
              { authError ? <p>{authError}</p> : null }
            </div>
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