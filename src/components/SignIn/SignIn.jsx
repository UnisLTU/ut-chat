import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../utils/utchat';
import styles from './SignIn.module.css';
import React from 'react';

import {AiOutlineLinkedin} from 'react-icons/ai';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {RiGithubLine} from 'react-icons/ri';

const SignIn = () => {
 const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  void signInWithPopup(auth, provider);
 };

 return (
  <div className={styles.LogIn}>
   <div className={styles.welcome}>Welcome to</div>
   <div className={styles.logo}>Ut. chat</div>
   <button className={styles.LogIn_button} onClick={signInWithGoogle}>
    Sign In with Google
   </button>
   <h1> Contact me:</h1>
   <div className={styles.contact}>
    <a href='https://www.linkedin.com/in/ugnius-tyla-9083a1132/' className={styles.contact_card}>
     <AiOutlineLinkedin size={32} style={{padding: 8}} />
     <div className={styles.text_container}>
      <span className={styles.website_name}>LinkedIn</span>
      <span className={styles.website_url}>linkedin.com/in/ugnius-tyla-9083a1132</span>
     </div>
    </a>
    <a href='mailto: tyla.ugnius@gmail.com' className={styles.contact_card}>
     <HiOutlineMailOpen size={32} style={{padding: 8}} />
     <div className={styles.text_container}>
      <span className={styles.website_name}>Email</span>
      <span className={styles.website_url}>tyla.ugnius@gmail.com</span>
     </div>
    </a>
    <a href='https://github.com/UnisLTU' className={styles.contact_card}>
     <RiGithubLine size={32} style={{padding: 8}} />
     <div className={styles.text_container}>
      <span className={styles.website_name}>Github</span>
      <span className={styles.website_url}>https://github.com/UnisLTU</span>
     </div>
    </a>
   </div>
  </div>
 );
};

export default SignIn;
