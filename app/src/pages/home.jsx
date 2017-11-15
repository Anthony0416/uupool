import React from 'react'
import Mock from 'mockjs';
import { Card,Row,Col } from 'antd'
import { Bottom } from '../components/Bottom'

import '../less/home.less'

let debug = 1;
if (debug) {
    Mock.mock(/getProfile/,{
        "idx|5":[{
            "key|1":['ETHEREUM CLASSIC ( ETC )','ETHEREUM( ETH )','METAVERSE ( ETP )','ZCASH (ZEC)','DECRED ( DCR )'],
            "img|1":['http://www.uupool.cn/images/etc.png','http://www.uupool.cn/images/eth.png','http://www.uupool.cn/images/etp.png','http://www.uupool.cn/images/zec.png','http://www.uupool.cn/images/dcr.png'],
            "value|1-7":"★"
        }]
    })
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: []
        }
    }

    componentDidMount() {
        $.ajax({
            url:'getProfile'
        })
        .done(function(res) {
            // let data = JSON.parse(res);
            let data = [{
              key: 'ETHEREUM CLASSIC ( ETC )',
              img: 'http://www.uupool.cn/images/etc.png',
              price: '1%',
              address: 'manispool.com:3252',
              get: '0.01712232 DCR 每 Ghash/s',
              path: '#'
            },{
              key: 'ETHEREUM( ETH )',
              img: 'http://www.uupool.cn/images/eth.png',
              price: '1%',
              address: 'manispool.com:3252',
              get: '0.01712232 DCR 每 Ghash/s',
              path: '/eth/index.html'
            },{
              key: 'METAVERSE ( ETP )',
              img: 'http://www.uupool.cn/images/etp.png',
              price: '1%',
              address: 'manispool.com:3252',
              get: '0.01712232 DCR 每 Ghash/s',
              path: '#'
            },{
              key: 'ZCASH (ZEC)',
              img: 'http://www.uupool.cn/images/zec.png',
              price: '1%',
              address: 'manispool.com:3252',
              get: '0.01712232 DCR 每 Ghash/s',
              path: '#'
            },{
              key: 'DECRED ( DCR )',
              img: 'http://www.uupool.cn/images/dcr.png',
              price: '1%',
              address: 'manispool.com:3252',
              get: '0.01712232 DCR 每 Ghash/s',
              path: '#'
            }]
            console.log(data);
            // 需要绑定this
            this.setState({idx:data})
        }.bind(this))
    }

    render() {

        return (
          <div className='homeStyle'>
            <Row gutter={30}>
              {/*Each child in an array or iterator should have a unique "key" prop*/}
              {this.state.idx.map((item,index) => {
                return  (
                  <Col span="12" key={index}>
                    <a href={item.path}>
                      <Card title={item.key} bordered={false}>
                        <img src={item.img} width='115' height='111' className='card-img' />
                        <div className='card-div'>
                          <p>费率：{item.price}</p>
                          <p>矿池地址：{item.address}</p>
                          <p>24小时平均收益：{item.get}</p>
                        </div>
                      </Card>
                    </a>
                  </Col>
                )
              })}
            </Row>
            { Bottom() }
          </div>
        )
    }
}
