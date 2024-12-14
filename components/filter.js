import React from 'react'
import styles from "../components/home.module.css";

const Filter = () => {
  return (
    <>
    <div className={`${styles.filter} filter-bar justify-center`}>
      <div >3425</div>
      <select>
        <option>RECOMMENDED</option>
        <option>NEWEST FIRST</option>
        <option>POPULAR</option>
        <option>PRICE-HIGH-LOW</option>
        <option>PRICE:LOW TO HIGH</option>
      </select>
    </div>
    </>
  )
}

export default Filter
