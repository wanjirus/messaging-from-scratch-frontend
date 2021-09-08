import React, { Component } from 'react';
import MessageService from '../Services/MessageService';
import { v4 as uuidv4 } from 'uuid';
import { SendOutlined } from '@ant-design/icons';
import { Button } from 'bootstrap';
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
    this.changeMessage=this.changeMessage.bind(this);
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
                   
                });
               
            }
            
        });
    
    }
    saveMessage=(e)=>{
        e.preventDefault();
        if(!this.state.message){
            alert('please enter a message')
            return
        }
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
            window.location.reload(false);
    }
    changeMessage=(event)=>{
        event.preventDefault();
        this.setState({message: event.target.value});
    }
    render(){
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                     <div className='card-body'>
                      <form>
                      <div class="input-group mb-3">
                          <input
                          style={{backgroundColor:'white',
                          outline:'none',
                          outlineStyle:'none',
                          borderTop:'none',
                          borderLeft:'none',
                          borderRight:'none',
                          marginLeft:'5%',
                
                          borderBottom:'1px solid purple',
                          fontSize:'15px',
                          
                        
                        
                        }}
                          
                          
                          className='form-control'
                          value={this.state.message} 
                          onChange={this.changeMessage}
                          type="text" 
                          placeholder="Message"/>
                    <div class="input-group-append">
                        <button
                         className='btn' 
                          onClick={this.saveMessage}>
                              <SendOutlined 
                            className="send-icon" 
                            style={{color:'blue',fontSize:'40px'}}/>
                       </button>
                            </div>
                            
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