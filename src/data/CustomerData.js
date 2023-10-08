import React, { useState, useEffect, useMemo } from "react";
import { getCustomers } from "../api/CustomerApi"; // Import the API function

export const useCustomerTileData = () => {
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers(0, 0); // Passing zero as parameters will return all customers
      setCustomers(data.users);
      setTotalCustomers(data.total);
    };
    fetchCustomers();
  }, []);

  // TODO Remove the useMemo and add the api call to different calculations. 
  const activeUsers = useMemo(() => {
    return 0;
    // return customers.filter((customer) => customer.status === "active").length;
  }, [customers]); 

  const expiringSoonUsers = useMemo(() => {
    return 0
    // return customers.filter(
    //   (customer) =>
    //     new Date(customer.expiry_date) <
    //     new Date(new Date().setMonth(new Date().getMonth() + 1))
    // ).length;
  }, [customers]); 
  
  return {
    count: totalCustomers,
    activeUsers: activeUsers,
    expiringSoonUsers: expiringSoonUsers,
  };
};

export const useCustomerData = (rowsPerPage) => {
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers(page, rowsPerPage);
      setCustomers(data.data);
      setTotalCustomers(data.total_count);
    };
    fetchCustomers();
  }, [page, rowsPerPage]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return {
    customers,
    totalCustomers,
    handleChangePage,
  };
};
