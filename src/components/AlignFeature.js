import Button from '@restart/ui/esm/Button';
import React, { useEffect,useState } from 'react';
import Avatar from 'react-avatar';
import { Col, Container, Row } from 'react-bootstrap';
import MessageService from '../Services/MessageService';
// import UploadFileService from '../Services/upload-file.service';
import MessageForm from './MessageForm';
import UploadFiles from './upload-files.component';
function AlignFeature(){
    // const [receivedMessages, setReceivedMessages] = useState([]);
    // const [sentMessages, setSentMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([])
    // const [localMesages, setLocalMessages] = useState([]);
    const [temp, setTemp] = useState(0);
    useEffect(()=>{
     setInterval(()=>{
         setTemp((prevTemp)=>prevTemp+1)

     },)
    }, [])
    useEffect(()=>{
        MessageService.getAllMessages().then(res=>{
            setAllMessages(res.data);
    })
        // setLocalMessages(res.data)
    }, [temp])  
         





    // useEffect(()=>{

    //     MessageService.getAllMessages().then(res=>{
    //         setAllMessages(res.data);
    //     });  
    // }, []);
    // (async () => {
    //     MessageService.getAllMessages().then(res=>{
    //         setAllMessages(res.data);
            
    //     });
    // })();

    // MessageService.getMessageByReceiver().then(res=>{
    //     setReceivedMessages(res.data)
   
    // });
// }, []);

// (async () => {
//     {
//    await MessageService.getAllMessages().then(res=>{
//       setLocalMessages(res.data);
//      console.log(localMesages)
//     });
//     }
// })();   

        return (
            <Container>
                 <Row>
                     
                     
                      <Col md={{ span: 6, offset: 0}}>
                        <div> 
                            <div><Button color='warning' onclick={MessageService.deleteChat}>delete chat</Button></div> 
                          <div className='chat'>
                          <div>{
                              allMessages.map(message => 
                                <div>
                               { 
                                function any(...args){
                                    const email = localStorage.getItem('senderEmail');
                                    const email2 =localStorage.getItem('receiverEmail');
                                    if(message.senderEmail== email){
                                        return(
                                            
                                        <div>
                                          
                                           <p className='sentMessages'>{message.message}</p>
                                           <p style={{float:'right'}}> <Avatar 
                                           size ='20px'
                                           round ={true}
                                           name={email} /> </p>
                                            </div>
                                            
                                        )
                                       }else {
                                        return(
                                          <div>
                                              <p style={{
                                              marginBottom:'1px',
                                              marginTop:'10px'}}> <Avatar 
                                           size ='20px'
                                           round ={true}
                                           name={email2} /> </p>
                                          <p className='receivedMessages'>{message.message}</p>
                                             
                                           </div>
                                          )
                                        }
                                }
                               (()=>{
                                   console.log('all is well')
                              })
                            }
                              </div>
                              
                                
                                 )} 
                                 
                           </div>
                           //here 

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


export default AlignFeature;


{/* <div className='receivedMes'>
{receivedMessages.map(Message =>
  <div key = {Message.id}
  className="receivedMessages">
     <p> {Message.message}</p>
      {/* <p className='receivedTime'>{Message.createdAt}</p> */}
//    </div>                             
//    )}
// </div>  


// function AlignFeature() {
//     const [allMessages, setAllMessages] = useState([]);
//     useEffect(() => {
//         MessageService.getAllMessages().then(res => {
//             setAllMessages(res.data);
//         });



//     }, []);

//     return (
//         <Container>
//             <Row>
//                 <Col md={{ span: 6, offset: 0 }}>
//                     <div>
//                         <div><Button color='warning'
//                             onclick={MessageService.deleteChat}>
//                             delete chat</Button></div>
//                         <div className='chat'>
//                             <div className='sentMes'>{
//                                 allMessages.map(message => {
//                                     const email = localStorage.getItem('senderEmail');
//                                     if (allMessages.some(email => message.receiverEmail == email)) {
//                                         // when email matches local
//                                         <div key={message.id} className='sentMessages'>

//                                             <p style={{ float: 'right' }}> {message.message} </p>

//                                         </div>;
//                                     } else {
//                                         // when email does not match local
//                                         <div key={message.id} className='sentMessages'>

//                                             <p> {message.message} </p>

//                                         </div>
//                                     }
//                                 }
//                                 )}

//                             </div>


//                         </div>
//                         <div style={{ position: 'static' }}>
//                             <MessageForm />
//                         </div>
//                     </div>

//                 </Col>
//                 <Col md={{ span: 3, offset: 0 }}> <UploadFiles />
//                 {/* updateLocalMessages={(lMessages) => setLocalMessages(lMessages)} /> */}
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
// export default AlignFeature;