import {auth, db} from '../../utils/utchat';
import {useState} from 'react';
import {doc, updateDoc} from 'firebase/firestore';
import {BiEdit} from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import styles from './Message.module.css';
import React from 'react';

const Message = ({uid, text, id}) => {
 const [edit, setEdit] = useState(true);
 const [message, setMessage] = useState(text);
 const [getId, setGetId] = useState('');

 const handleEdit = (e) => {
  setGetId(e.currentTarget.id);
  setEdit((prev) => !prev);
 };

 const setOnChange = (e) => {
  setMessage(e.currentTarget.value);
 };

 const cancelEdit = () => {
  setEdit((prev) => !prev);
 };

 const editMessage = async (e) => {
  e.preventDefault();
  const update = doc(db, 'messages', getId);
  await updateDoc(update, {
   text: message,
  });
  setEdit((prev) => !prev);
 };

 return (
  <>
   {edit ? (
    <>
     <p className={styles.text}>{text}</p>
     {uid === auth.currentUser?.uid ? (
      <button className={styles.edit_message_button} id={id} onClick={handleEdit}>
       <BiEdit style={{height: '20', width: '20'}} />
      </button>
     ) : null}
    </>
   ) : (
    <>
     <form className={styles.form} onSubmit={editMessage}>
      <input value={message} onChange={setOnChange} type='text' />
      <div className={styles.divider}>|</div>
      <button className={`${styles.edit_message_button} ${styles.green}`} type='submit'>
       <BsCheckLg style={{height: '18', width: '18'}} />
      </button>
      <div className={styles.divider}>|</div>
      <button className={`${styles.edit_message_button} ${styles.red}`} onClick={cancelEdit}>
       <AiFillCloseCircle style={{height: '18', width: '18'}} />
      </button>
     </form>
    </>
   )}
  </>
 );
};

export default Message;
