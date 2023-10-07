import React from "react";
import CustomTile from "../components/TileComponent";
import { CustomerTileData } from "../data/CustomerData";
import '../style/Customer.css';

const Customer = ()=> {
    return(
        <div>
            <div className="custom-tile-class">
                {
                    CustomerTileData.map((item, index)=> {
                    return <CustomTile name={item.name} count = {item.count}/>
                    })
                }
            </div>
            <h1>This is the Customer page</h1>
        </div>
    )
}

export default Customer;