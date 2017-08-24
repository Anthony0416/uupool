import React from 'react';

export const Title = (props) => {
  const titleStyle = {
    background: '#1b1b1b',
    overflow:'hidden',
    width: '100%',
    height: '40px',
    color: '#fff',
    position: 'relation',
  },
  name = {
    fontSize: '16px',
    fontWeight: 'blod',
    lineHeight: '40px',
    color: '#efefef',
    textDecoration: 'none',
    position: 'absolute',
    left: '10px',
    top: '0px',
    zIndex: '2',
  },
  ifo = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    lineHeight: '40px',
    textAlign: 'center',
    fontSize: '16px',
    zIndex: '1',
  };
  return (
    <div style={titleStyle} >
      <a href='#'><h1 style = {name}>UUPool</h1></a>
      <p style = {ifo}>矿池算力：&nbsp;&nbsp;&nbsp;&nbsp; ETC：{props.ETC}&nbsp;G &nbsp;&nbsp;&nbsp;&nbsp; ETH：{props.ETH}&nbsp;G &nbsp;&nbsp;&nbsp;&nbsp; ETP：{props.ETP}&nbsp;G</p>
    </div>
  )
}
