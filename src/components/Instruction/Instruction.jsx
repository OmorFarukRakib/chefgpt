import React from 'react'
import styles from './instruction.module.css'
const Instruction = () => {
  return (
    <div className={styles['instruction-wrapper']}>
      Please input all the ingredients you have in a comma separated line
    </div>
  );
}

export default Instruction