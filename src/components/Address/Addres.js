import React, { Component } from 'react'
const InputStyle = {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    padding: '0',
    margin: '0',
    boxShadow: 'none',
    borderColor: 'lightgray',
    fontFamily: 'Lato'
};
class Addres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryAddress: '',
            secondaryAddress: '',
            State: '',
            city: '',
            pincode: ''
        }
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
   
    saved=(e)=> {
        e.preventDefault();
        e.target.reset();
       
     
    }
    render() {
        console.log(this.state)
        return (
            <form className="row mt-3 " onSubmit={this.saved}>
                <div className="col-md-12">
                    <div className="row m-auto border " style={{ boxShadow: '0 2px 6px 0px' }}>
                        <div className="col-12 border " style={{ backgroundColor: '#fafafa' }}>
                            <h5 className="pt-2 pl-2">Address</h5>
                        </div>
                        <div className="col-md-8 mt-4">
                            <div className="form-group">
                                <label className="m-0 text-dark">Primary address:</label>
                                <input type="text" id='primaryAddress' className="form-control" placeholder="mandatory" style={InputStyle} required onBlur={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group">
                                <label className="m-0 text-dark">Secondary address:</label>
                                <input type="text" id="secondaryAddress" className="form-control" placeholder="optional" style={InputStyle} onBlur={ this.handleChange }></input>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label className="m-0 text-dark">State:</label>
                                        <input type="text" id="State" className="form-control" placeholder="Enter state" style={InputStyle} required onBlur={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label className="m-0 text-dark">City:</label>
                                        <input type="text" id="city" className="form-control" placeholder="Enter City" style={InputStyle} required onBlur={ this.handleChange }></input>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label className="m-0 text-dark">PinCode:</label>
                                        <input type="number" id="pincode" className="form-control" placeholder="Enter PinCode" style={InputStyle} required onBlur={this.handleChange }></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <input type="submit" value="submit" className="btn w-50 mb-5" style={{ backgroundColor: '#008081', color: 'white', boxShadow: 'none' }}></input>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default Addres;