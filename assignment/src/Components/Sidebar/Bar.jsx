import React from 'react'
import style from "./bar.module.css"
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'

const Bar = () => {
  return (
    <div className={style.bar_container}>
       <Leftbar/>
       <Rightbar/>
    </div>
  )
}

export default Bar