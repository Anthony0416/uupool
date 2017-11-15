import React from 'react'
import { Form, Input, Tooltip, Select, Cascader, Row, Col, Button, AutoComplete, message } from 'antd';
import { browserHistory } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Registe extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    imgurl: 'http://47.52.42.88/index.php?s=Api/verify',
    loading: false,
  };
  handleSubmit = (e) => {
    this.setState({loading: true})
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(values.username);
        $.ajax({
          url: ''
        })
      } else {
        message.erroe('')
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  handleLogin = (e) => {
    browserHistory.push('login');
  }
  handleChange = () => {
    this.setState({imgurl: '#'})
    console.log(this.state.imgurl);
    let _this = this;
    setTimeout(function(){
      _this.setState({imgurl: 'http://47.52.42.88/index.php?s=Api/verify'})
      console.log(_this.state.imgurl);
    },0)
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 9 },
        sm: { span: 9 },
      },
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 12,
          offset: 9,
        },
        sm: {
          span: 12,
          offset: 9,
        },
      },
    };

    return(
      <div className='registerForm'>
        <Form onSubmit = { this.handleSubmit }>
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{
              type: 'string', message: '请输入字母和数字!',
            }, {
              required: true, message: '请输入您的用户名!',
            }],
          })(
            <Input />
          )}
        </FormItem>
          <FormItem
            style={{ marginBottom: 8 }}
            {...formItemLayout}
            label="电子邮箱"
            hasFeedback
            extra="您的邮箱将作为登录账号使用。"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '非法邮箱格式!',
              }, {
                required: true, message: '请输入您的电子邮箱!',
              }],
            })(
              <Input onBlur={checkEmail} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入密码!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请再次输入密码!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号码"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入您的手机号!' },{
                len: 11, message: '请输入正确的手机号码！'
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
          >
            <Row gutter={9}>
              <Col span={18}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入获取的验证码!'}],
                })(
                  <Input size="large" />
                )}
              </Col>
              <Col span={6}>
                <img src={this.state.imgurl} height="32px" width="97px" onClick={this.handleChange}/>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            <Button loading={this.state.loading} type="primary" htmlType="submit" style={{width: '420px',height: '40px'}}>注 册</Button>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <span>已有账户? <a onClick={this.handleLogin}>立即登录</a></span>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const RegisterForm = Form.create()(Registe);
