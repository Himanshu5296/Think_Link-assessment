import React from 'react'
import style from "./bar.module.css"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import Chart from '../Chart/Chart';
import Inventory from './Inventory';

const Rightbar = () => {
  return (
    <div className={style.rightBar_Container}>
        {/* overview */}
        <div className={style.rightBar_Overview}>
            <p>Overview</p>
            <button><AddCircleOutlineOutlinedIcon/> <span>Add new wine</span> </button>
        </div>
        {/* order data */}
        <div className={style.order_data}>
            <div className={style.openOrders}>
             <div>Open Orders<span style={{color:"#FFAA2C",paddingLeft:"100px"}}><LocalMallOutlinedIcon/></span></div>
             <div>239</div>
            </div>
            <div className={style.openOrders}>
            <div>Orders in transit<span style={{color:"#2C67FF",paddingLeft:"65px"}}><LocalShippingOutlinedIcon/></span></div>
             <div>126</div>
            </div>
            <div className={style.openOrders}>
            <div>Fullfilled Orders<span style={{color:"#00CF3A",paddingLeft:"70px"}}><GradingOutlinedIcon/></span></div>
             <div>1,254</div>
            </div>
            <div className={style.openOrders}>
             <div>Cancelled Orders<span style={{color:"#FF1C1C",paddingLeft:"60px"}}><CancelOutlinedIcon/></span></div>
             <div>35</div>
            </div>
        </div>
        {/* sales detail */}
        <div className={style.rightBarTitle}>Sales details</div>
        <div className={style.salesDetailsContainer}>
            <div className={style.salesDetails_upperPart}>
                <div>
                    <h5>Total Sales Overview</h5>
                    <p>7 - 3 Aug, 2020</p>
                </div>
                <div>
                    <p><RefreshOutlinedIcon/>Refresh Metrics</p>
                    <span> <span style={{color:"rgb(120, 115, 115)"}}>Filter by |</span> <select><option><b>This Week</b></option></select></span>
                </div>
            </div>
            <div className={style.salesDetails_lowerPart}>
                <div className={style.salesDetails_lowerPart_firstChild}>
                    <div>$74,729.00</div>
                    <div><ShowChartOutlinedIcon/>+21% from last week</div>
                    <div><Chart/></div>
                </div>
                <div className={style.salesDetails_lowerPart_lastChild}>
                    <div>Total Profit</div>
                    <div>$ 12.454.00</div>
                    <div><ShowChartOutlinedIcon/>+23% from last week</div>
                    <div>Total Product Sold</div>
                    <div>329</div>
                </div>
            </div>
        </div>
        {/* inventory */}
        <div className={style.rightBarTitle}>Inventory</div>
        <div>
            <Inventory/>
        </div>
    </div>
  )
}

export default Rightbar