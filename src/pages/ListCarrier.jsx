import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import httpClient from "../http-client";

const ListCarrier = () => {
  const [carriers, setCarriers] = useState([]);

  useEffect(() => {
    getCarriers();
  }, []);

  const getCarriers = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };

    httpClient
      .get("/api/shipper/carrier", config)
      .then((response) => {
        setCarriers(response.data.data);
      })
      .catch((error) => {
        console.log("error", error.response.data);
      });
  };

  if (carriers.length === 0) {
    return (
      <div>
        <p>There is no carrier!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>List Carriers</h1>
        <Link to="add-carrier">Add Carrier</Link>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Shipper ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
            {carriers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} height="30" />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.shipper_id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListCarrier;
