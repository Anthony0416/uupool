import React from 'react'
import '../less/Bottom.less'

export const Bottom = () => {

  return (
    <div className='bottomStyle'>
      <h3 className='bottomTittle'>常见问题</h3>
      <p className='title'>一、如何查看矿工</p>
      <p>浏览器输入链接查看（将您的矿工地址替换）：</p>
      <p className='address'>
        <span>ETH：manispool.com/eth/<strong>地址</strong></span>
        <span>ETC：manispool.com/etc/<strong>地址</strong></span>
      </p>
      <p className='address'>
        <span>ETP：manispool.com/etp/<strong>地址</strong></span>
        <span>ZEC：manispool.com/zec/<strong>地址</strong></span>
      </p>
      <p className='title'>二、支付说明</p>
      <div className='table'>
        <ul>
          <li className='table_name'>币种</li>
          <li>ETH</li>
          <li>ETC</li>
          <li>DCR</li>
          <li>ETP</li>
          <li className='table_right'>ZEC</li>
        </ul>
        <ul>
          <li className='table_name'>费率</li>
          <li>PPS:1%</li>
          <li>PPS:1%</li>
          <li>PPS:2%</li>
          <li>PPLNS:1%</li>
          <li className='table_right'>PPLNS:1%</li>
        </ul>
        <ul>
          <li className='table_name'>支付时间</li>
          <li className='table_long'>早上10:00-下午16:00排队支付（不分前后顺序）</li>
          <li className='table_right'>出块至成熟</li>
        </ul>
        <ul>
          <li className='table_name table_bottom'>支付额度</li>
          <li className='table_long table_bottom'>0.1个币起支付（若不足则等足够后支付）ETP 1个币起付</li>
          <li className='table_right table_bottom'>根据share份额</li>
        </ul>
      </div>
      <p>PS:各个币种支付时矿池承担转账手续费</p>
      <p className='title'>三、如何查看矿池出块记录</p>
      <p>在manispool.com主页当中点击相应币种框或者在主页右侧导航栏中点击相应币种即可查看矿池出块记录以及全网数据。</p>
    </div>
  )
}
