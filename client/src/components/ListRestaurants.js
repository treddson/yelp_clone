import React, { Fragment, useState, useEffect } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function ListRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const deleteRestaurant = async (id) => {
    try {
      // eslint-disable-next-line
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
      <table className="table table-hover mt-5">
        <thead className="table-head">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {restaurants.map((restaurant) => (
            <tr key={restaurant.rest_id}>
              <td>{restaurant.restaurant}</td>
              <td>{restaurant.rest_location}</td>
              <td>{restaurant.price_range}</td>
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
              <td>
                <Link to="/UpdateRestaurants">
                  <button type="button" className="btn btn-outline-warning">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
