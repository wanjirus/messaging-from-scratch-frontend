// import { useState } from "react";
// import { useEffect } from "react";
// import MessageService from "../Services/MessageService";
// import { v4 as uuidv4 } from 'uuid';
// const NewChatPage = () => {
//     const [value, setValue]=useState('');
//      const [chat,setChat]=useState("");
    
//     useEffect(()=>{
//         const getValue =async () =>{
//             const valueFromServer= await fetchValue()
//             setValue(valueFromServer)
//              }
//              getValue();

//         const getChatId =async () =>{
//             const chatIdFromServer=await fetchChatId()
//             setChat(chatIdFromServer)
//         }

// getChatId();
//             }
//              );
//     const fetchValue=async () =>{
//         const res= await MessageService.getChatExists()
//         const data=await res.data;
//         return data;

//     }
//     console.log(value)
//     if(value===false){
//          setChat({chat:uuidv4()})
//         console.log(chat);
//     }
//      else{
//     const fetchChatId=async () =>{
//     const res = await MessageService.getChatId()
//     const data = await res.data
//     console.log(data)
// }
// console.log(chat)

//      }
//     //    const res= await MessageService.getChatId()
//     //                  const data = await res.data;
//     //                  setChat(chat);
//     //                  localStorage.setItem('chatId', chat.chatId);
//     //                  console.log(chat.chatId);
                    
//     //              });
//     //     console.log('cannot set chat');
//     // }
    
    
//     //     MessageService.getChatExists().then(res=>{
//     //   const value = res.data;
//     //   setValue(value);
//     //   });
//     //     console.log(value);
//     //     if(value === false){
//     //         setChat({chat:uuidv4()})
//     //         console.log(chat);}
//     //  else{
//     //     MessageService.getChatId().then(res=>{
//     //          const chat = res.data;
//     //          setChat(chat);
//     //          localStorage.setItem('chatId', chat.chatId);
//     //          console.log(chat.chatId);
            
//     //      });
        
//     //  }










//     // })
    
//     return (
//         <div>
            
//         </div>
//     )
//     }

// export default NewChatPage
