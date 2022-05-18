import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
      <ListCarriers>
        <h1>List Carriers</h1>

        <ResponsiveTable>
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
        </ResponsiveTable>
        <div className="addCarrier">
          {" "}
          <Link to="/add-carrier">Add Carrier</Link>
        </div>
      </ListCarriers>
    );
  }
};
const ListCarriers = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  h1 {
    color: #023e8a;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
  .addCarrier{
  margin-top: 0.6rem;
  text-transform: uppercase;
  font-size: medium;
 font-weight: 700;
  letter-spacing: 0.1rem;
  }
`;
const ResponsiveTable = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  th,
  td {
    text-align: left;
    padding: 1rem;
  }
`;

export default ListCarrier;
