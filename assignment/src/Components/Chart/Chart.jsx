import React from 'react'
import CanvasJSReact from "./assets/canvasjs.react"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
            valueFormatString: "$#,##0,.K",
            includeZero: false,
        },
        axisX:{
            includeZero:true
        },
        data: [{
            type: "line",
            yValueFormatString: "$#,##0,.00K",
            indexLabelOrientation: "vertical",
            dataPoints: [
                {x:0,y:0},
                { label: "Mon", y: 5000 },
                { label: "Tue", y: 7000 },
                { label: "Wed", y: 5000 },
                { label: "Thur", y: 9000 },
                { label: "Fri", y: 7000 },
                { label: "Sat", y: 10000 },
                { label: "Sun", y: 15000 },
            ]
        }]
    }

  return (
    <div className='chart'>
     <CanvasJSChart options = {options} />
    </div>
  )
}

export default Chart