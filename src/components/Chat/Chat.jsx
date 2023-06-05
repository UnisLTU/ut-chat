import {collection, limit, onSnapshot, orderBy, query} from 'firebase/firestore';
import React, {useEffect, useRef, useState} from 'react';
import {auth, db} from '../../utils/utchat';
import SendMessage from '../SendMessage/SendMessage.jsx';
import SignOut from '../SignOut/SignOut';
import Message from '../Message/Message';
import styles from '../Chat/Chat.module.css';

const Chat = () => {
 const ref = useRef(null);
 const [messages, setMessages] = useState([]);

 useEffect(() => {
  updateMessages();
 }, []);

 const updateMessages = () => {
  const q = query(collection(db, 'messages'), orderBy('time'), limit(50));
  const chatMessages = onSnapshot(q, (snapshot) => {
   const messages = [];
   snapshot.forEach((doc) => {
    messages.push({...doc.data(), id: doc.id});
   });
   setMessages(messages);
   setTimeout(() => ref.current.scrollIntoView(), 0);
  });

  return () => {
   chatMessages();
  };
 };

 return (
  <div>
   <SignOut />
   <div className={styles.outer_chat}>
    <div className={styles.chat_box}>
     {messages.map(({id, text, photoURL, displayName, uid}) => (
      <div key={id}>
       <div
        className={`${styles.message} ${
         uid === auth.currentUser?.uid ? styles.sent : styles.received
        }`}
       >
        <img className={styles.user_photo} src={photoURL} alt='profile' />
        <div className={styles.username}>{displayName}</div>
        <div className={styles.divider}>|</div>
        <Message text={text} uid={uid} id={id} />
       </div>
      </div>
     ))}
     <div ref={ref}></div>
    </div>
   </div>
   <SendMessage />
  </div>
 );
};

export default Chat;
