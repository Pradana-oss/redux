const { Component } = require("react");
const {connect} = require("react-redux");


class CompC extends Component {

    constructor(props){
    super(props)
    this.state = {
        counter:0
    }
    this.tambah = this.tambah.bind(this);
    }

    tambah(){
        console.log("punya redux" + this.props.nilai);

        let nilai = this.state.counter;
        this.setState({counter:nilai})
        this.props.ketikaDiKlik(this.state.counter)
    }

    render(){
        return(
                <div className="card-body">
                    <a>Set Value Z :</a>
                    <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search">angka</input>
                        <button className="btn btn-outline-success" type="button"> onClick={this.props.jikaDitambah}</button>
                    </form>
                </div>
                
        );
    }
}

const mapStatetoProps = (fromRedux) => {
    return{
        nilai:fromRedux.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        jikaDitambah : () => dispatch({type:"DITAMBAH"})
    }
}
export default connect(mapStatetoProps, mapDispatchToProps) (CompC)