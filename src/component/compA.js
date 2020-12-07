import { Component } from 'react';

class CompA extends Component{
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    updateData(nilai){

    }

    render(){
        return(
        <div className="card">
            <h5 className="card-title">Component C</h5>
        </div>
        )
    }
}

export default CompA

