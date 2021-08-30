import React, { Component } from 'react';
import MessageService from '../Services/MessageService';

class MessageForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           // receiverEmail:'',
              //  senderEmail:'',
                message:'',
               chat:'', 
                value:''
               

        }

        
    this.saveMessage=this.saveMessage.bind(this);
    }
    componentDidMount(){
        MessageService.getChatExists().then(res=>{
            this.setState({value:res.data})
            console.log(this.state.value);
        });
           //localStorage.setItem('email','stanmbueu254@gmail.com');
          //localStorage.setItem('chatId',8)
    }



    saveMessage=(e)=>{
        e.preventDefault();
if(this.state.value === false){
//    this.setState({chat:UUID.v4()})
//    localStorage.setItem('chatId',this.state.chat)
//localStorage.setItem()
   const message ={
    senderEmail:localStorage.getItem('senderEmail'),
     receiverEmail:localStorage.getItem('receiverEmail'),
      message:this.state.message,
      chatId:localStorage.getItem('chatId')

    }
    MessageService.createMessage(message);
}
else{
     const  message={
           senderEmail:localStorage.getItem('senderEmail'),
            receiverEmail:localStorage.getItem('receiverEmail'),
             message:this.state.message,
             chatId:localStorage.getItem('chatId')
       };
       MessageService.createMessage(message);
        
        
}

    }
    changeMessage=(event)=>{
        this.setState({message: event.target.value});}
    // changeChatId=(event)=>{
    //     this.setState({chatId: event.target.value});}
       cancel(){
           this.props.history.push('/chat');
           
       }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                     <div className='card-body'>
                      <form>
                         {/* <div className='form-group'>
                              <label> sender Email</label>
                              <input placeholder='Sender Email address' name='senderEmail' className='form-control' value={this.state.senderEmail} onChange={this.changeSenderEmail}/>
                          </div> */}

                          {/* <div className='form-group'>
                              <label> Receiver Email</label>
                              <input placeholder='Receiver Email' name='receiverEmail' className='form-control' value={this.state.receiverEmail} onChange={this.changeReceiverEmail}/>
                            </div> */}

                            <div className='form-group'>
                              
                               <input placeholder='message' name='message' className='form-control' value={this.state.message} onChange={this.changeMessage}/>

                                <button className='btn btn-success' onClick={this.saveMessage}>send</button>
                            
                            </div>

                            {/* <div className='form-group'>
                               <label> chatId</label>
                               <input placeholder='chatId' name='chatId' className='form-control' value={this.state.chatId} onChange={this.changeChatId}/>
                            </div> */}

                      {/* <button className='btn btn-success' onClick={this.saveMessage}>save</button> */}
                        {/* <button type="submit" className="send-button">
                <SendOutlined className="send-icon" style={{color:'blue'}}/>
                </button>   */}
                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:'58%'}}>clear</button>                                */}
                    </form>   

                </div>
            </div>

       </div>
 </div>
 
        );
    }
}

export default MessageForm;