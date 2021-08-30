import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MessageService from '../Services/MessageService';
import MessageForm from './MessageForm';
//const keys;
class ChatPage extends Component {
    constructor(props){
        super(props)
        this.state={
            //  senderEmail: 'stanmburu254@gmail.com',
            sentMessages:[],
            receivedMessages:[]
            
        }
    }
componentDidMount(){
    MessageService.getMessageBySender().then(res=>{
        this.setState({sentMessages:res.data})
    }); 


    MessageService.getMessageByReceiver().then(res=>{
        this.setState({receivedMessages:res.data})
    });
}
  
    render() {
        return (
            <Container>
                 <Row>
                      <Col md={{ span: 6, offset: 3 }}>
                          <div style={{
                              backgroundColor:'white',
                              height:'fit-content',
                              borderTop: "8px solid",  
                              borderLeft:'2px solid',
                              borderRight:'2px solid',
                              borderColor:'purple',
                              borderRadius:'5%',

                              }}>
                          <div>
                               {

                                


                              this.state.sentMessages.map(
                                  message => 
                                  <div className="container" style={{
                                  textAlign:''
                                  ,marginTop:'10px'
                                  ,marginRight:"5px"
                                  ,backgroundColor:'purple'
                                  ,width:"45%"
                                  ,color:'white'
                                  ,borderRadius:"20px"
                                //   ,textAlign:'center'
                                }}>
                                    {message.message}
                                    <br></br>
                                    {message.createdAt}
                                    </div>
                              )}
                              
                              
                              {this.state.receivedMessages.map(
                                  Message => 
                                  <div style={{
                                  textAlign:'center',
                                  backgroundColor:'navy',
                                  marginTop:'10px',
                                  width:'45%',
                                  display:'',
                                  marginLeft:'5px',
                                  borderRadius:"20px",
                                  color:'white',
                                  }} >
                                      {Message.message}
                                      <br></br>
                                      {Message.createdAt}
                                      </div>
                                
                              )}
                              
                                  
                                  </div>
                                  <div style={{marginTop:'0%'}}>
                                  <MessageForm /> 
                                  </div>
                                  </div>
     
       
    </Col>

  </Row>



            </Container>
        );
    }
}

export default ChatPage;