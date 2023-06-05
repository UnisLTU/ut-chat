import {auth} from '../../utils/utchat';
import {signOut} from 'firebase/auth';
import {VscSignOut} from 'react-icons/vsc';
import styles from './SignOut.module.css';
import React from 'react';

const SignOut = () => {
 const user = auth.currentUser;
 const {displayName, photoURL} = user;

 const signOutAuth = async () => signOut(auth);
 return (
  <div className={styles.navbar}>
   <>
    <img className={styles.current_user_photo} src={photoURL} alt='current_user_photo'></img>
    <span className={styles.user_name}>Sign as : {displayName}</span>
   </>
   <button className={styles.signOutButton} onClick={signOutAuth}>
    SIGN OUT{' '}
    <VscSignOut
     style={{
      verticalAlign: 'middle',
      height: 20,
      width: 20,
      paddingLeft: 6,
     }}
    />
   </button>
  </div>
 );
};

export default SignOut;
