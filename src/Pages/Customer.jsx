import React from "react";
import CustomTile from "../components/TileComponent";
import { useCustomerTileData } from "../data/CustomerData"; 
import '../style/Customer.css';

const Customer = ()=> {
    const { count, activeUsers, expiringSoonUsers } = useCustomerTileData();
    return(
        <div>
            <div className="custom-tile-class">
                <CustomTile name = "Count" count={count}/>
                <CustomTile name = "Active Membership" count={activeUsers}/>
                <CustomTile name = "Expiring soon" count={expiringSoonUsers}/>
            </div>
            <h1>This is the Customer page</h1>
        </div>
    )
}

export default Customer;