/* eslint-disable @typescript-eslint/naming-convention */
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import React, {useState, useRef} from 'react';
import {db, auth} from '../../utils/utchat';
import {FiSend} from 'react-icons/fi';
import Picker from 'emoji-picker-react';
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import styles from './SendMessage.module.css';

const SendMessage = () => {
 const [message, setMessage] = useState('');
 const ref = useRef(null);
 const [showPicker, setShowPicker] = useState(false);

 const setOnChange = (e) => {
  setMessage(e.currentTarget.value);
 };

 const user = auth.currentUser;
 const {displayName, photoURL, uid} = user;
 const time = serverTimestamp();

 const sendMessage = async (e) => {
  e.preventDefault();
  if (message === '') {
   ref.current?.focus();
  } else {
   await addDoc(collection(db, 'messages'), {
    text: message,
    photoURL,
    uid,
    time,
    displayName,
   });
   setMessage('');
  }
 };

 const addEmoji = (e, emoji) => {
  setMessage(`${String(message)}${String(emoji.emoji)}`);
 };

 const togglePicker = () => {
  setShowPicker(!showPicker);
 };

 return (
  <div className={styles.form_container}>
   <button className={styles.emoji_button} onClick={togglePicker}>
    <HiOutlineEmojiHappy style={{verticalAlign: 'middle', height: 45, width: 45}} />
   </button>
   <div className={styles.emoji_picker}>{showPicker && <Picker onEmojiClick={addEmoji} />}</div>
   <form className={styles.form_box} onSubmit={sendMessage}>
    <input
     ref={ref}
     className={styles.input_box}
     value={message}
     onChange={setOnChange}
     type='text'
     placeholder='Message...'
    />
    <button className={styles.send_box} type='submit'>
     <FiSend style={{verticalAlign: 'middle', height: 25, width: 25}} />
    </button>
   </form>
  </div>
 );
};

export default SendMessage;
