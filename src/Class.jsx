import React from 'react';

export default class Class extends React.Component{
  constructor(){
    super()
    this.state={name:'ww'}
  }
  componentDidMount(){
    let a
    let a = 77
    a = a+1;
    console.log(a)
  }
  render(){
    return(
      <div>
        {this.state.name}
      </div>
    )
  }
}