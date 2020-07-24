import React from 'react'
import {connect} from 'react-redux'
import addNumber from '../redux/actions/Add'
import {subNumber} from '../redux/actions/Add'
import '../App';


const Main = (props) => {
    console.log(props)
    return (
        <>
            <p className="title" style={{color: "rgba(0, 125, 31)"}} >This is our Counter</p>
            <br/>
            <div className="counter" >
            <button className="btn" onClick={() => {props.moin()}} >-</button>
            <div className="number" style={{backgroundColor:"rgba(0, 185, 31, 0.349)",
             paddingLeft:20, paddingRight:20 }}>
            <span > {props.number.number} </span>
            </div>
            <button className="btn" onClick={() => {props.plus()}} >+</button>
            </div>

        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        plus: () =>{dispatch(addNumber())},
        moin: () =>{dispatch(subNumber())}
    }
}       

const mapStateToProps = (state) =>{
    return {
        number: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Main)