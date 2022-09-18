import React from 'react'
import style from "./bar.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Leftbar = () => {
  return (
    <div>
        <div className={style.leftBarEachDiv}>
          <HomeOutlinedIcon/> <span>Dashboard</span>
        </div>
        <div className={style.leftBarEachDiv}>
        <Inventory2OutlinedIcon/><span> Inventory</span>
        </div>
        <div className={style.leftBarEachDiv}>
          <LocalMallOutlinedIcon/><span> Orders</span>
        </div>
        <div className={style.leftBarEachDiv}>
          <GroupOutlinedIcon/><span> Customers</span>
        </div>
        <div className={style.leftBarEachDiv}>
          <DescriptionOutlinedIcon/><span> Reports</span>
        </div>
        <div className={style.leftBarEachDiv}>
          <SettingsOutlinedIcon/> <span>Settings</span>
        </div>
    </div>
  )
}

export default Leftbar