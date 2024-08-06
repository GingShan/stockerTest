import React from 'react';
import axios from "axios";
import './Info.css'

export default class Info extends React.Component {
    constructor(){
        super();
        this.state = {
            canArray:[]
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
        })
        .then(res => {
            console.log(res);
            this.setState({canArray: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        const { canArray } = this.state;
        return <div className="wrapper">
            {
                canArray.map((cans, index) => {
                    return <p key={index}>{cans.name}</p>
            })
            }
        </div>
    }
}