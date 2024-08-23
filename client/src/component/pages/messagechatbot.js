import React, { useEffect, useRef } from "react";
import { useState } from "react";
const MessageChatbot = ()=>{
    const [userInput, setUserInput] = useState('')
    const [messageHistory, SetMessageHistory] = useState([
        'what is GPT?',
        'Message Alignment CSS?',
        'I understand ',
        'Flask Backend is ?',
        'LLMS in Chatbot?'
    ])
    const [conversation, setConversation] = useState([])
    const ref = useRef(null)
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }
    const submitMessage = () => {
        console.log('click')
        console.log(conversation)
        setConversation((prevMessage)=>[...prevMessage, {sender:'user', content:userInput}])
        setConversation((prevMessage)=>[...prevMessage, {bot:'bot', content:'Bot Messages'}])
        setUserInput('')
    }
    const scrollToBottom = ()=>{
        ref.current.scrollIntoView({behavior: "smooth" });
    };
    useEffect(()=>{
        scrollToBottom();
    }, [conversation]);
    return(
        <div className="chatbot-widget">
            <div className="history-group">
                    <button>New Chat</button>
                    {messageHistory.map((mhistory, index)=>(
                        <>
                        <div className="history-list">
                            <div className="mhistory-icon"></div>
                            <div key={index} className="histroy-message">{mhistory}</div>
                        </div>
                        </>
                    ))}
            </div>
            <div className="message-group">
                <div className="conversation">
                    <div>
                    {conversation.map((message, index)=>(
                        <div key={index} className={`${message.sender=== 'user' ?'user-message':'bot-message'}`}>{message.content}</div>
                    ))}
                    </div>
                    <div ref={ref}  className="ref"></div>
                </div>
                  
                <div className="input-group">
                    <textarea className="send-message" placeholder="Send a message" value={userInput} onChange={handleInputChange}/>
                    <button className="btn-send" onClick={submitMessage}></button>
                </div>
            </div>
        </div>
    )
}

export default MessageChatbot