import React from 'react';
import styles from '@/styles/Home.module.css'; // Import the CSS file

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.image} src="https://cdn.cutshort.io/public/companies/5950dfcf58f0627f77973a12/admybrand-logo" alt="ADmyBRAND logo" /> &emsp; &emsp; &emsp; &emsp; <button className={styles.text} type="button">HIRING TASK</button>
        
        <p className={styles.p}>&gt; &gt; &gt; &gt;
</p>
      </div>
    </div>
  );
};

export default MyComponent;
