import React from 'react'

export const Footer = () => {
  const footerStyle = {
    background: '#2a394a',
    padding: '50px 0 100px 0',
    lineHeight: '2.5',
    color: '#888',
    fontSize: '15px',
    width: '100%',
    textAlign: 'center',
  },
  link = {
    color: '#dbdbdb'
  };

  return (
    <div style={footerStyle}>
      <p>双优客服全天为您提供服务</p>
      <p>QQ群：123456789（1群）123456789（2群推荐）商务联系：123456@123.com</p>
      <p>双优矿池 © 2017 UUPOOL <a href='#' style={link}>粤ICP备15057025号</a> 友情链接: <a href='#' style={link}>以太经典</a> <a href='#' style={link}>以太坊</a> <a href='#' style={link}>元界</a></p>
    </div>
  )
}
