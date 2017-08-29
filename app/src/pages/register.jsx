import React from 'react'
import { RegisterForm } from '../components/RegisterForm'

export default class Register extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
  }

  render(){
    return(
      <div>
        <RegisterForm />
      </div>
    );
  }
}
