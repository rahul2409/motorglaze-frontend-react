import React from "react";
import {FaHome, FaUsers, FaIdCard} from "react-icons/fa"
export const TaskbarActionsData = [
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path:"/customers",
        name:"Customer",
        icon:<FaUsers/>
    },
    {
        path:"/memberships",
        name:"Membership",
        icon:<FaIdCard/>
    }
];
