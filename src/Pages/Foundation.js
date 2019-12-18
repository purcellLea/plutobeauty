import React, {Component} from 'react';
import {foundationDB} from "../Database/foundationDB";
import Popup from "../Components/Popup";

//create instance of the product List
const foundationList = foundationDB;

class Foundation extends Component {
    constructor(props) {
        super(props);
        this.state = {showPopup: false}; //default state of popup
        this.togglePopup=this.togglePopup.bind(this); //binds the event
    }
    togglePopup(){
        this.setState({
            showPopup: !this.state.showPopup
            });
    }
    render() {
        return (
                <div className="list">
                    <h1> Foundation </h1>
                    {foundationList.map(info =>
                        <div key={info.id}>
                            <ul>
                                <li>{info.brand}</li>
                                <li>{info.name} </li>
                                <li><img src = {info.image_link} /> </li>
                                <li>${info.price}  </li>
                                <li> <button onClick={this.togglePopup.bind(this)}> More info </button>
                                    {this.state.showPopup?
                                        <Popup
                                            text={info.name}
                                            closePopup = {this.togglePopup.bind(this)}
                                        />
                                        : null}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
        );
    }
}
export default Foundation;


