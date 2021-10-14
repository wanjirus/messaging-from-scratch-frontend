import React, { useEffect, useRef, useState } from 'react';
import UploadService from "../Services/upload-file.service";
import MessageService from '../Services/MessageService';
import { v4 as uuidv4 } from 'uuid';
import { PaperClipOutlined, SendOutlined} from '@ant-design/icons';
import userEvent from '@testing-library/user-event';
function MessageForm (){

  const [selectedFiles, setSelectedFiles] = useState('');
  const [currentFile, setCurrentFile] = useState([]);
  const [ showFile, setShowFile] = useState([]);
  const [message, setMessage] = useState('');
  const [fileInfos, setFileInfos] = useState('');
  const [message2, setMessage2] = useState('');
  const [value, setValue] = useState('');
  const [chat, setChat] = useState('');
  const [progress, setProgrss] = useState('');
  const message4 ={
    senderEmail:localStorage.getItem('senderEmail'),
    receiverEmail:localStorage.getItem('receiverEmail'),
    message:message,
    chatId:localStorage.getItem('chatId')
}
    useEffect(() => {
       MessageService.getChatExists().then(res=>{
            setValue(res.data);
            console.log(value);
            if(res.data===false){
            localStorage.setItem('chatId', uuidv4());
          } else{
              MessageService.getChatId().then(res=>{
          setChat(res.data);   
          localStorage.setItem('chatId', res.data.chatId);
          });
          }
        });
        UploadService.getFiles().then((response) => {
          setFileInfos(response.data);
          });
        }, []);
    const selectFile = (event) =>{
        setSelectedFiles(
         event.target.files,
        );
      }
      const changeMessage=(event)=>{
         event.preventDefault();
        setMessage( event.target.value);
    }
   const saveMessage=(e)=>{

      if(!selectedFiles){
        e.preventDefault();
        if(!message){
            alert('please enter a message')
            return
        }
        if(value===false){
          localStorage.setItem('chatId', uuidv4());
                MessageService.createMessage(message4);
       }
        else{
            MessageService.createMessage(message4);   
            }
             window.location.reload(false);
     }
   else {
  
        let currentFile = selectedFiles[0];
        setCurrentFile({
          progress: 0,
          showFile: currentFile,
        });
        UploadService.upload(currentFile, (event) => {
          setShowFile({
            progress: Math.round((100 * event.loaded) / event.total),
            showFile:currentFile,
          });
        })
          .then((response) => {
            setMessage(response.data.message
          );
            localStorage.setItem('message', message);
          MessageService.createMessage(message4);  
            return UploadService.getFiles();
          })
          .then((files) => {
            setFileInfos(
              files.data,
            );
            
          })
          .catch(() => {
            setMessage(
              
              "Could not upload the file!",
            );
          }); 
      }
    }
        return (
            <div>
{currentFile && (
          <div className="progress" style={{backgroundColor:'white'}}>
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
              {message2}
              </div>
         )
}
<div className='container'>
  <div className='row'>
    <div className='card-body'>
      <form>
        <div class="input-group-append">
          <input type='file'
          multiple={false}
          id="upload-button"
          style={{display: 'none'}}
          onChange = {selectFile}   
          />          
        </div>
        <div className="input-group mb-3">
          <label htmlFor='upload-button'>
            <PaperClipOutlined
            className = "picture -icon"
            style={{ color:'blue',fontSize:'40px', float:'inline-start'}}/>
          </label>
          <input style={{backgroundColor:'white',
          outline:'none',
          outlineStyle:'none',
          borderTop:'none',
          borderLeft:'none',
          borderRight:'none',
          marginLeft:'none',
          float:'inline-start',
          borderBottom:'1px solid purple',                
          }}
          className='form-control'
          value={message} 
          onChange={changeMessage}
          type="text" 
          placeholder="Message"/>
          <div class="input-group-append">
          <Button 
            className='btn'
            enabled={!selectedFiles}
            onClick={saveMessage}>
            <SendOutlined 
            className="send-icon" 
            style={{color:'blue',fontSize:'40px'}}/>
          </Button>
          </div>
        </div>
      </form>   
     </div>
    </div>
  </div>
</div>
);
}


export default MessageForm;