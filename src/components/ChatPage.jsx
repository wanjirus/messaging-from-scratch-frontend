import Button from '@restart/ui/esm/Button';
import React, { useEffect,useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MessageService from '../Services/MessageService';
// import UploadFileService from '../Services/upload-file.service';
import MessageForm from './MessageForm';
import UploadFiles from './upload-files.component';
function ChatPage(){
    const [receivedMessages, setReceivedMessages] = useState([]);
    const [sentMessages, setSentMessages] = useState([]);
    useEffect(()=>{

    
    MessageService.getMessageBySender().then(res=>{
        setSentMessages(res.data);
    });  


    MessageService.getMessageByReceiver().then(res=>{
        setReceivedMessages(res.data)
        
    });
}, []);
// (async () => {
//     MessageService.getMessageByReceiver().then(res=>{
//         setReceivedMessages(res.data);
        
//     });
// })();
  
   
        return (
            <Container>
                 <Row>
                     
                     
                      <Col md={{ span: 6, offset: 0}}>
                        <div> 
                            <div><Button color='warning' onclick={MessageService.deleteChat}>delete chat</Button></div> 
                          <div className='chat'>
                          <div className='sentMes'>{
                              sentMessages.map(message => 
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
                            {receivedMessages.map(Message =>
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


export default ChatPage;