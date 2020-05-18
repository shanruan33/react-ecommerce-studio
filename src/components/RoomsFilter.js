import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        dance,
        fitness
    } = context;
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = [...people];
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="filter-container">
            <Title title="search classes" />
            <form className="filter-form">
                {/* type */}
                <div className="form-group">
                    <label htmlFor="type">class type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* size*/}
                <div className="form-group">
                    <label htmlFor="capacity">class size</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">class price ${minPrice} ~ {maxPrice}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                {/* dance/fitness extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="dance"
                            id="dance"
                            checked={dance}
                            onChange={handleChange}
                        />
                        <label htmlFor="dance">dancing class</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="fitness"
                            id="fitness"
                            checked={fitness}
                            onChange={handleChange}
                        />
                        <label htmlFor="fitness">fitness class</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter;
