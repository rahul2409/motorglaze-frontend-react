import { faHome, faIdCard, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const TaskbarActionsData = [
    {
        title:"Home",
        icon: <FontAwesomeIcon icon={faHome} />,
        linkTo: "/"
    },
    {
        title: "Customers",
        icon: <FontAwesomeIcon icon={faUsers} />,
        linkTo: "/customers"
    },
    {
        title: "Memberships",
        icon: <FontAwesomeIcon icon={faIdCard} />,
        linkTo: "/memberships"
    }
];
