import React, { Component } from 'react';
import MessageService from '../Services/MessageService';
import { v4 as uuidv4 } from 'uuid';
const chat= '';
class MessageForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          
          message:'',
          value:'',
          chat: ''
               

        }
    this.saveMessage=this.saveMessage.bind(this);
    }
    componentDidMount(){
        MessageService.getChatExists().then(res=>{
            this.setState({value:res.data})
            console.log(this.state.value);
            if(this.state.value === false){
                   this.setState({chat:uuidv4()})
                   console.log(this.state.chat);}
            else{
                MessageService.getChatId().then(res=>{
                    this.setState({chat:res.data})
                    console.log(this.state.chat.chatId);
                    localStorage.setItem('chatId',this.state.chat.chatId);
                });}
        });
    }
    saveMessage=(e)=>{
        e.preventDefault();
        if(this.state.value === false){
            localStorage.setItem('chatId',this.state.chat);
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
        cancel(){
           this.props.history.push('/chat');}
    render(){
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                     <div className='card-body'>
                      <form>
                            <div className='form-group'>
                              
                               <input placeholder='message' name='message' className='form-control' value={this.state.message} onChange={this.changeMessage}/>

                                <button className='btn btn-success' onClick={this.saveMessage}>send</button>
                            
                            </div>
                    </form>   

                </div>
            </div>

       </div>
 </div>
 
        );
    }
}

export default MessageForm;