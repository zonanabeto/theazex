import React, {Component} from 'react';
import background from '../../images/abstract-astro-astronomy-956999.jpg'

import { Card, Form, Input,  Select, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;

const divStyle ={
    backgroundImage:`url('${background}')`,
    backgroundSize:'cover',
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"column",
    alignItems:"center"
    }




class ContactContainer extends Component{


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

        handleWebsiteChange = (value) => {
          let autoCompleteResult;
          if (!value) {
            autoCompleteResult = [];
          } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
          }
          this.setState({ autoCompleteResult });
        }
        render() {
          const { getFieldDecorator } = this.props.form;
          const { autoCompleteResult } = this.state;

          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+1',
          })(
            <Select style={{ width: 100 }}>
              <Option value="52">+52</Option>
              <Option value="1">+1</Option>
              <Option value="other">Other</Option>
            </Select>
          );
      
          const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
          ));
      
          return (
            <div  style={divStyle} >
                <div style={{width:"600px", backgroundColor:"#ffffff", margin:"50px"}}>
                <Card title="Contact Me"  style={{ width: "100%" }}>
                 
                    <Form   onSubmit={this.handleSubmit}>
                    <FormItem
        
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem
                
                        label="Phone Number"
                    >
                        {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </FormItem>
                    <FormItem

                        label="Website"
                    >
                        {getFieldDecorator('website', {
                        rules: [{ required: false, message: 'Please input website!' }],
                        })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder="website"
                        >
                            <Input />
                        </AutoComplete>
                        )}
                    </FormItem>
                    <FormItem

                        label="How can I help you?"
                    >
                        {getFieldDecorator('body', {
                            rules: [{ required: true, message: 'Please input something! ;)' }],
                            })(
                                <TextArea placeholder="Write something here..." autosize={{ minRows: 4, maxRows: 6 }} />
                            )}
                    </FormItem>
                    <FormItem >
                        <Button type="primary" htmlType="submit">Register</Button>
                    </FormItem>
                    </Form>
                    </Card>
                </div>
            </div> 
          );
        }
      }

const WrappedRegistrationForm = Form.create()(ContactContainer);

export default WrappedRegistrationForm;