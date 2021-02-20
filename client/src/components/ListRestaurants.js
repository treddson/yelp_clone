import React, { Fragment, useState, useEffect } from "react";
import Rating from "./Rating";

export default function ListRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const deleteRestaurant = async (id) => {
    try {
      const deleteRestaurant = await fetch(
        `http://localhost:4000/input/${id}`,
        {
          method: "DELETE",
        }
      );
      setRestaurants(
        restaurants.filter((restaurant) => restaurant.rest_id !== id)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  async function getRestaurant() {
    const response = await fetch(`http://localhost:4000/input`);
    const restArray = await response.json();
    setRestaurants(restArray);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center mt-5">Restaurants</h1>
      <table className="table mt-5">
        <thead className="table-head">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Rating</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {restaurants.map((restaurant) => (
            <tr key={restaurant.rest_id}>
              <td>{restaurant.restaurant}</td>
              <td>{restaurant.rest_location}</td>
              <td>
                <Rating />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteRestaurant(restaurant.rest_id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
