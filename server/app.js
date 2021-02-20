require("dotenv").config();
const express = require("express");
const pool = require("./database");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const morgan = require("morgan");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello everyone");
});

app.post("/input", async (req, res) => {
  try {
    const { restaurant, rest_location, price_range } = req.body;
    const inputRestaurant = await pool.query(
      "INSERT INTO restaurants (restaurant, rest_location, price_range) VALUES($1, $2, $3) returning *",
      [restaurant, rest_location, price_range]
    );
    res.status(200).json({
      status: "success",
      results: inputRestaurant.rows.length,
      data: {
        restaurants: inputRestaurant.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/input", async (req, res) => {
  try {
    const getAllRestaurantInfo = await pool.query("SELECT * FROM restaurants");
    res.json(getAllRestaurantInfo.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/input/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getRestaurantInfo = await pool.query(
      "SELECT * FROM restaurants WHERE rest_id = $1",
      [id]
    );
    res.json(getRestaurantInfo.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.put("/input/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { restaurant, rest_location, price_range } = req.body;
    const updateRestaurantInfo = await pool.query(
      "UPDATE restaurants SET (restaurant, rest_location, price_range) = ($1, $2, $3) WHERE rest_id = $4 RETURNING *",
      [restaurant, rest_location, price_range, id]
    );
    res.json("Restaurant was updated");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/input/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRestaurantInfo = await pool.query(
      "DELETE FROM restaurants WHERE rest_id = $1",
      [id]
    );
    res.json("Restaurant was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
