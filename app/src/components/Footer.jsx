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
  };

  return (
    <div style={footerStyle}>
      <p>ManisPool客服全天为您提供服务</p>
      <p>QQ群：123456789（1群）123456789（2群推荐）商务联系：123456@123.com</p>
      <p>深圳市算力科技有限公司 © 2017 ManisPool <a href='http://www.miibeian.gov.cn/'className='link'>粤ICP备15057025号</a> &nbsp;友情链接: &nbsp;
        <a href='https://etcchain.com/' className='link'>以太经典</a> &nbsp;
        <a href='https://ethereum.org/' className='link'>以太坊</a> &nbsp;
        <a href='https://mvs.live/' className='link'>元界</a>
      </p>
    </div>
  )
}
