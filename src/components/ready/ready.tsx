import React from 'react'
import styles from '@/styles/ready/ready.module.css'
function ready() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>
            Are you ready to maximize the value and sustainability of your <span>renewable energy investments?</span> 
            </h1>
        </div>
        <p>Unlock the full potential of your renewable energy assets <br/>with comprehensive solutions to boost efficiency, reliability, and sustainability for lasting impact.</p>
        <button>Schedule an inspection</button>
    </div>
  )
}

export default ready
