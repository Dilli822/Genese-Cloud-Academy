import React, { Component } from "react";
import axios from 'axios';
import CovidCard from './component/covidCard';
import ErrorComponent from "./component/errorComponent";

export default class ApiCall extends Component{

    // constructor class
    // storing the api data here
    constructor(props){
        super(props);
        this.state = {
            covidData: [],
            // initializing the loading state here
            // as our map is called below but map will be empty array at first
            loading: true,
            // if our api throws error we make error state here
            error: false
        }
    }
        // We always keep our api in componentDidMount()
        componentDidMount(){
            this.getRemoteData();
        }


        // arrow function getRemoteData for apifetch with axios package
        getRemoteData = () => {
                let self = this;
                // api for covide information 
                axios.get('https://coronavirus-19-api.herokuapp.com/countriessdssdfdsfdfds')
                .then(function(response){
                    console.log(response.data)
                    self.setState({
                        covidData: response.data,
                        // hence making loadin state false if we get covidData 
                        loading: false
                    })
                    
                })
                .catch(function(error){
                    self.setState({
                        error: true,
                      })
                });
            };

        // if error comes onRetry() function 
        onRetry=()=> {
            this.setState({error: false, loading: true});
            this.getRemoteData();
        }

    render(){
        // return here
        return(
            <div> 
                <h4> This is an api Call Example. This is a Covid-19 information extracted from api. </h4>
                
                {/* applying the ternary operator making sure that either loading is true or false */}
                
                {
                this.state.error ? 
                <ErrorComponent onRetry={this.onRetry} />:

                this.state.loading ? 
                <div> Data is loading.....</div>:
                <div>
                    {/* applied .map() js method which acts as forEach loop and gives only country names from data */}
                    
                    {
                        this.state.covidData.map((data)=>
                        // <div> 
                        // <li>{data.country}</li> 
                        // <li> Number of Deaths: {data.deaths} </li>
                        // <li> Number of Active Cases: {data.active} </li>
                        // </div>

                        
                        // passing data as props to covidCard/another Component
                        <CovidCard data={data}/>
                    
                        )
                    }
                </div>
                }
       </div>
        );
    }
}


/** Note: User https://jsoneditoronline.org/ for simplying the complex api data to similar infos */