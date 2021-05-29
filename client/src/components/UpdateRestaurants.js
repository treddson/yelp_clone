import React, { Fragment, useState, useEffect } from "react";
import Rating from "./Rating";

const UpdateRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const updateRestaurant = async (id) => {
    try {
      // eslint-disable-next-line
      const updateRestaurant = await fetch(
        `http://localhost:4000/input/${id}`,
        {
          method: "PUT",
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
            <th scope="col">Update</th>
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
                  onClick={() => updateRestaurant(restaurant.rest_id)}
                  className="btn btn-outline-danger"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default UpdateRestaurants;
