import React, { Component } from 'react';
import UploadService from "../Services/upload-file.service";
import MessageService from '../Services/MessageService';
import { v4 as uuidv4 } from 'uuid';
import { PaperClipOutlined, PictureOutlined, SendOutlined, UploadOutlined } from '@ant-design/icons';
class MessageForm extends Component {
    constructor(props){
        super(props);
        this.selectFile = this.selectFile.bind(this);
        // this.upload = this.upload.bind(this);
        this.state = {
            selectedFiles: undefined,
          message:'',
          message2:'',
          value:'',
          chat: ''
        }
    this.saveMessage=this.saveMessage.bind(this);
    this.changeMessage=this.changeMessage.bind(this);
    // this.upload = this.upload.bind(this);  
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
        UploadService.getFiles().then((response) => {
            this.setState({
              fileInfos: response.data,
            });
          });
    }
    selectFile(event) {
        this.setState({
          selectedFiles: event.target.files,
        });
      }
    saveMessage=(e)=>{

      if(!this.state.selectedFiles){
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
  

  else{
    
      //e.target.preventDefault();
        let currentFile = this.state.selectedFiles[0];
    
        this.setState({
          progress: 0,
          currentFile: currentFile,
        });
    
        UploadService.upload(currentFile, (event) => {
          this.setState({
            progress: Math.round((100 * event.loaded) / event.total),
          });
        })
          .then((response) => {
            this.setState({
              message: response.data.message,
            });
            return UploadService.getFiles();
          })
          .then((files) => {
            this.setState({
              fileInfos: files.data,
            });
          })
          .catch(() => {
            this.setState({
              progress: 0,
              message: "Could not upload the file!",
              currentFile: undefined,
            });
          });
    
        this.setState({
          selectedFiles: undefined,
        });
      }
  }
    changeMessage=(event)=>{
        event.preventDefault();
        this.setState({message: event.target.value});
    }
    selectFile(event) {
        this.setState({
          selectedFiles: event.target.files,
        });
      }
    render(){
        const {
            selectedFiles,
            currentFile,
            progress,
            message2,
            fileInfos,
          } = this.state;
        return (
            <div>
{currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}
        <div className="alert alert-light" role="alert">
          {message2}
        </div>
                <div className='container'>
                    <div className='row'>
                     <div className='card-body'>
                     
                     
                     
                     
                     
                      <form>
                      <div class="input-group-append">
                      <label htmlFor='upload-button'>
            <span className = 'image-button'>
                <PaperClipOutlined
                 className = "picture -icon" 
                 style={{ color:'blue',fontSize:'40px'}}/>

            </span>    
            </label> 
            <input type='file' 
                    multiple={false}
                     id="upload-button"
                    style={{display: 'none'}}
                    onChange = {this.selectFile}   
            />          
            </div>
                   <div className="input-group mb-3">
                      
                          
                          <input
                          style={{backgroundColor:'white',
                          outline:'none',
                          outlineStyle:'none',
                          borderTop:'none',
                          borderLeft:'none',
                          borderRight:'none',
                          marginLeft:'20%',
                
                          borderBottom:'1px solid purple',
                          
                         }}
                      
                          className='form-control'
                           value={this.state.message} 
                         onChange={this.changeMessage}
                          type="text" 
                          placeholder="Message"/>
                    <div class="input-group-append">
                        <button
                         className='btn' 
                        //  disabled={!selectedFiles}
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