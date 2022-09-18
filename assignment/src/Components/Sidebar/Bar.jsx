import React from 'react'
import style from "./bar.module.css"
import Leftbar from './Leftbar'

const Bar = () => {
  return (
    <div className={style.bar_container}>
       <Leftbar/>
       <div></div>
    </div>
  )
}

export default Bar