import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MessageService from '../Services/MessageService';
import MessageForm from './MessageForm';
import UploadFiles from './upload-files.component';
//const keys;
class ChatPage extends Component {
    constructor(props){
        super(props)
        this.state={
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
componentDidUpdate(){
    
    MessageService.getMessageByReceiver().then(res=>{
        this.setState({receivedMessages:res.data})
        
    });
}

  
    render() {
        return (
            <Container>
                 <Row>
                     
                     
                      <Col md={{ span: 6, offset: 0}}>
                        <div>  
                          <div className='chat'>
                          <div className='sentMes'>{
                              this.state.sentMessages.map(message => 
                                <div key = {message.id}
                                 className='sentMessages'>
                                    
                                    <p 
                                    // className="Container"
                                    > {message.message} </p>
                                     {/* <p className='sentTime'>{message.createdAt}</p> */}
                                </div>
                                 )} 
                           </div>
                              
                        <div className='receivedMes'>
                            {this.state.receivedMessages.map(Message =>
                              <div key = {Message.id}
                              className="receivedMessages">
                                 <p> {Message.message}</p>
                                  {/* <p className='receivedTime'>{Message.createdAt}</p> */}
                               </div>                             
                               )}
                        </div>                      
                        </div>
                           <div style={{position:'static'}}>
                               <MessageForm /> 
                        </div>
                        </div> 

    </Col>
    <Col  md={{ span: 3, offset: 0}}> <UploadFiles /></Col>
  </Row>
            </Container>
        );
    }
}

export default ChatPage;