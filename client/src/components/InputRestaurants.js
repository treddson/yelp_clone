import React, { useState, Fragment } from 'react'

export default function InputRestaurants() {

    const [restaurant, setRestaurant] = useState('')
    const [rest_location, setRest_location] = useState('')
    const [price_range, setPrice_range] = useState('')

    const onFormSubmit = async e => {
        try {
            e.preventDefault()
        const body = { restaurant, rest_location, price_range }
        const response = await fetch(`http://localhost:4000/input`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        window.location = '/'
        console.log(response);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
             <h1 className='text-center mt-5'>Add Restaurant</h1>
           <form className="d-flex mt-5" onSubmit={onFormSubmit}>
               <label htmlFor="restaurant" className="m-2">Restaurant</label>
               <input type="text" className="form-control" value={restaurant} onChange={e => setRestaurant(e.target.value)}/>
               <label htmlFor="restaurant" className="m-2">Location</label>
               <input type="text" className="form-control" value={rest_location} onChange={e => setRest_location(e.target.value)}/>
               <label htmlFor="restaurant" className="m-2">Price Range</label>
               <input type="text" className="form-control" value={price_range} onChange={e => setPrice_range(e.target.value)}/>
               <button className="btn btn-outline-success ml-2">Add</button>

           </form>
        </Fragment>
    )
}
