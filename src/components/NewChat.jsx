import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageService from '../Services/MessageService';

class NewChat extends Component {
    constructor(props){
        super(props)
        this.state={
            messages: []
        }
    }
    
    componentDidMount(){
        MessageService.getMessage().then((res) => {
         this.setState({messages: res.data});
        });

        // MessageService.getMessagesById(this.state.id).then((res)=>{
        //     let message=res.data;
        //     this.setState({senderEmail:message.senderEmail,
        //                    receiverEmail: message.receiverEmail,
        //                    message:message.message,
        //                    createdAt:message.createdAt,
        //                    chatId:message.chatId
   
        //     });
        // });



    }

    render() {
        return (
            <div>
                 <div>
                 <h2 className="text-center"> chat List</h2>

               </div>
               <div className='row'>
                   <table className="table table-striped table-borde red">
                     <thead>
                         <tr>
                         <th> sender</th>
                         <th> receiver</th>
                         <th> message </th>
                         <th>created at</th>
                         <th> chat identity </th>
                         </tr>


                     </thead>

                     <tbody>
                         {
                             this.state.messages.map(
                                 message =>
                                 <tr key={message.id}>
                                     <td>{message.senderEmail}</td>
                                     <td>{message.receiverEmail}</td>
                                     <td>{message.message}</td>
                                     <td>{message.createdAt}</td>
                                     <td>{message.chatId}</td>
                                 </tr>
                             )
                         }






                     </tbody>

                  </table>
                   
                   
                   </div> 
            </div>
        );
    }
}

export default NewChat;