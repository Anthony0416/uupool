import React from 'react';

export default class Title extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }

  render(){
    const titleStyle = {
      background: '#1b1b1b',
      overflow:'hidden',
      width: '100%',
      height: '40px',
      color: '#fff',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '999'
    },
    name = {
      display: 'inline-block',
      fontSize: '16px',
      fontWeight: 'blod',
      lineHeight: '40px',
      color: '#efefef',
      textDecoration: 'none',
      width: '19%',
      marginLeft: '1%',
    },
    ifo = {
      display: 'inline-block',
      width: '60%',
      lineHeight: '40px',
      textAlign: 'center',
      fontSize: '16px',
    },
    login = {
      display: 'inline-block',
      width: '19%',
      textAlign: 'right',
      fontSize: '16px',
      marginRight: '1%'
    };

    return(
      <div style={titleStyle}>
        <a href='http://www.manispool.com'><h1 style = {name}>ManisPool</h1></a>
        <p style = {ifo}>矿池算力：&nbsp;&nbsp;&nbsp;&nbsp; ETC：500&nbsp;G &nbsp;&nbsp;&nbsp;&nbsp; ETH：500&nbsp;G &nbsp;&nbsp;&nbsp;&nbsp; ETP：500&nbsp;G</p>
        <p style = {login}>
          <span className='regist'>注册</span>
          <span className='login'>登录</span>
        </p>
      </div>
    );
  }
}
