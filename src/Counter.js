import React from "react";
import Button from "./Button"; 
import Cart from "./Cart";
import DisplayCart from "./DisplayCart";


class Counter extends React.Component{
    constructor(props){
        super();
        this.state={
            value: 0,
            isClicked:false,
            defaultValue:0,
            bname:props.bname
        }
    }
    increment = () =>{
        this.setState({
            value: this.state.value+1,
            isClicked:false
        })
    }
    decrement = () =>{
        this.setState({
            value: this.state.value-1,
            isClicked:false
        })
    }
    componentDidMount(){
        console.log('Mounted...')
    }
    componentDidUpdate(){
        console.log('Updated..')
    }
    componentWillUnmount(){
        console.log('Unmounted..')
    }
    getValue = (pname,count) =>{
        console.log(`${count} ${pname} added to cart`)
        this.setState({
            isClicked : true,
            defaultValue : this.state.value
        })
    }
    render(){
        return(
            <>
              <button onClick={this.increment}>+</button>
              <span>{this.state.value}</span>
              <button onClick={this.decrement}>-</button>
              <Button bname={this.props.bname} value="Add to Cart" count={this.state.value} handler={this.getValue}/>
              {this.state.isClicked?<Cart style={{padding:"20px",fontSize:"25px"}} count={this.state.value} bname={this.state.bname} />:<DisplayCart style={{fontSize:"25px",padding:"20px"}} count={this.state.defaultValue} bname={this.state.bname}/>}
            </>
        )
    }
}

export default Counter;