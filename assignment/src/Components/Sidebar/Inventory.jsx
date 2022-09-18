import React from 'react'

const Inventory = () => {
    let data = [
        {name:"Stagline Family Vineyard",rating:"+3",vintage:"1950's",qty:"04",volume:"Standard(750ml)",cost:"$56.95",price:"$ 59.95"},
        {name:"Bibi Graetz Testamatta",rating:"+3",vintage:"2015",qty:"32",volume:"Magnum(1500ml)",cost:"$ 59.95",price:"$ 59.95"},
        {name:"Cayussa Syrah en Chamber",rating:"+3",vintage:"2012",qty:"12",volume:"Standard(750ml)",cost:"$ 59.95",price:"$ 59.95"},
        {name:"Staglin Family Vineyard",rating:"+3",vintage:"2010",qty:"04",volume:"Odd Ball(5000ml)",cost:"$ 59.95",price:"$ 59.95"},
        {name:"K Vintners Syrah Cattle King",rating:"+3",vintage:"2015",qty:"25",volume:"Magnum(1500ml)",cost:"$ 59.95",price:"$ 59.95"},
        {name:"L'Ecole No 41 Ferguson",rating:"+3",vintage:"2014",qty:"04",volume:"Standard(750ml)",cost:"$ 59.95",price:"$ 59.95"},
        {name:"Staglin Family Vineyard",rating:"+3",vintage:"1950's",qty:"22",volume:"Odd Ball(5000ml)",cost:"$ 59.95",price:"$ 59.95"}
    ]
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Product</th>
                    <th>Rating</th>
                    <th>Vintage</th>
                    <th>Qty</th>
                    <th>Volume</th>
                    <th>Cost</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el)=>(
                    <tr>
                    <td><input type="checkbox"/></td>
                    <td>{el.name}<p>France Sauterans</p></td>
                    <td>{el.rating}</td>
                    <td>{el.vintage}</td>
                    <td>{el.qty}</td>
                    <td>{el.volume}</td>
                    <td>{el.cost}</td>
                    <td>{el.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Inventory