import axios from "axios";
const MESSAGE_API_BASE_URL="http://localhost:8080/api/chats";
const params={
    email: localStorage.getItem('senderEmail'),
    receiverEmail:localStorage.getItem('receiverEmail'),
    chatId:localStorage.getItem('chatId')
}
class MessageService{
     getMessageBySender(){
         return axios.get(MESSAGE_API_BASE_URL+'/'+'sender',{params})
        }
    getMessageByReceiver(){
            return axios.get(MESSAGE_API_BASE_URL + '/' + 'receiver',{params})
       }
    
    createMessage(message){
        return axios.post(MESSAGE_API_BASE_URL,message)
    }
    getChatExists(){
        return axios.get(MESSAGE_API_BASE_URL + '/' + 'checkChat' , {params})
    }
}

export default new MessageService();