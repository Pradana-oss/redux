
import './App.css';
import { Component } from 'react';
import CompB from './component/compB';
import CompA from './component/compA';


class App extends Component{
  
  constructor(props){
    super(props)

    this.state={
      counter:0
    }
    this.updateData = this.updateData.bind(this);
  }
  updateData(nilai){

    this.setState({counter:nilai})
  }

  render(){
    return(
        <div>
          <CompB angka={this.state.counter}/>
          <CompA ketikaDiKlik = {this.updateData}/>
        </div>
    )
  }

}

export default App;
