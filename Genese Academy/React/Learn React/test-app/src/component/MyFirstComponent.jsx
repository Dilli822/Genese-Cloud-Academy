
import React, {Component} from 'react';
// import MySecondComponent from './MySecondComponent'
// import MyThirdComponent from './MyThirdComponent';



export default class MyFirstComponent extends Component{
    // we write the constructor here

    constructor(props){
        super(props)
        // here this is scope of MyFirstComponent 
        this.state = {
            // name of state: "value"
            // these username address .. are also variabkes of state
            // 
            username: "",
            address: "",
            phoneNumber: "",
            age: "",
        };
        // we need to bind the handleChange event with function handleChange
        // this.handleChange.bind = this.handleChange();

        // binding the function here will not require the arrow function
        // this.handleChange = this.handleChange.bind(this);
        // this is scope indication to certain class
        // we need to bind the this with .bind method or directly use the  arrow function
        // state in react  It may also define that the state of component holds information which changes over the lifetime of the component.
        
    }

    // handleChange(event){ 
        // or make it arrow function
        handleChange = (event) => {
        // let's console it 
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            // setState return or render the value typed in input 
            // username: event.target.value,
            // address: event.target.value,
            // TARGET.NAME is setname and .value is it's value 
            // so with event.target.name we can use single function for multiple purposes
            // event, target , .value() method , receives the value that is typed in the input field
            [event.target.name]: event.target.value
        });
    }

    // this handleChange1 is actually another function which handle the address 
    // change name but this will be very bad practice and not proper way to do
    handleChange1 = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    render() {
        return (
            <div className='firstDiv'>
                {/* This is my First Component!
                <MySecondComponent/>
                <MyThirdComponent/> */}
                {/* // state is like container where we store data and everytime state changes components will rendered */}
             
             {/* {this.state.username}
             {this.state.age} */}
             {/* let's make an input field with onChange event showing the name of type
             users name */}
             <input type="text" name="username" onChange={this.handleChange} placeholder='Enter your Name Here'/> <br></br> 
             {/* <input type="text" name="address" onChange={this.handleChange1} placeholder='Enter your address' /> */}
             <input type="text" name="address" onChange={this.handleChange} placeholder='Enter your Address here '/> <br></br>
             <input type="number" min="0" name="phoneNumber" onChange={this.handleChange} placeholder='Enter your Number Here '/> <br></br>
             <input type="number" min="0" name="age" onChange={this.handleChange} placeholder="Enter your age in year" /> <br></br>
             <p> Username: {this.state.username} </p> 
             <p> Address: {this.state.address} </p>
             <p> Your Phone Number: {this.state.phoneNumber} </p>
             <p> Your age is: {this.state.age} </p>

            </div>
        )
    }
}