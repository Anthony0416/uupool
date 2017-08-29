import React from 'react'
import { Form, Input, Tooltip, Select, Cascader, Row, Col, Button, AutoComplete } from 'antd';
import { browserHistory } from 'react-router'
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Log extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  handleRegister = () => {
    browserHistory.push('register');
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
      <div className='register'>
        <Form onSubmit = { this.handleSubmit }>
        <FormItem
          style={{ marginBottom: 8 }}
          {...formItemLayout}
          label="账号"
          hasFeedback
          extra="登录账号为您的注册邮箱。"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '非法邮箱格式!',
            }, {
              required: true, message: '请输入您的电子邮箱!',
            }],
          })(
            <Input />
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
                <img src="" height="32px" width="97px"/>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            <Button type="primary" htmlType="submit" style={{width: '420px',height: '40px'}}>登 录</Button>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <span>还没有账户? <a onClick={this.handleRegister}>立即注册</a></span>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const LoginForm = Form.create()(Log);
