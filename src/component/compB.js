const { Component } = require("react");
const {connect} = require("react-redux");

class CompB extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Value From Z:
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" value={this.props.nilai}></input>
                    </form>
            </div>
        )
    }
}

const mapStatetoProps = (fromRedux) => {
    return {
        nilai:fromRedux.counter
    }
}
export default connect(mapStatetoProps)(CompB)