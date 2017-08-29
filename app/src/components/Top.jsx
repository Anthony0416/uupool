import React from 'react'

export const Top = () => {
  const topBody = {
    padding: '40px 0 30px 0',
    background: '#e0e0e0',
    width: '100%'
  },
  topTitle = {
    fontSize: '40px',
    color: '#333',
    textAlign: 'center',
  },
  topText = {
    lineHeight: '3',
    fontSize: '21px',
    textAlign: 'center',
  };

  return (
    <div style={topBody}>
      <h1 style={topTitle}>ManisPool矿池</h1>
      <p style={topText}>质量优 服务优 Best Quality & Best Service</p>
    </div>
  )
}
