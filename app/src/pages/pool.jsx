import React from 'react'
import Mock from 'mockjs';
import { Card,Row,Col } from 'antd'
import { Bottom } from '../components/Bottom'

import '../less/pool.less'

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

export default class Pool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: [],
            two: []
        }
    }

    componentDidMount() {
        $.ajax({
            url:'getProfile'
        })
        .done(function(res) {
            // let data = JSON.parse(res);
            let one = [{
              key: '矿池算力',
              val: '450.121 G'
            },{
              key: '当前区块',
              val: '4356467'
            }],
            two = [{
              key: '全网难度',
              val: '94.920 T'
            },{
              key: 'ETC价格',
              val: '￥102.01'
            }];
            // 需要绑定this
            this.setState({one:one})
            this.setState({two:two})
        }.bind(this))
    }

    render() {

        return (
          <div className='poolStyle'>
            <div className='left-card'>
              <Card title='矿池算力' bordered={false}>
                450.121 G
              </Card>
            </div>
            <div className='left-card'>
              <Card title='当前区块' bordered={false}>
                4356467
              </Card>
            </div>
            <div className='img'>
              <img src='http://www.uupool.cn/images/etc.png' />
            </div>
            <div className='right-card'>
              <Card title='全网难度' bordered={false}>
                94.920 T
              </Card>
            </div>
            <div className='right-card'>
              <Card title='ETC价格' bordered={false}>
                ￥102.01
              </Card>
            </div>
            { Bottom() }
          </div>
        )
    }
}
