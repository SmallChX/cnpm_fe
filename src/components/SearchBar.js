import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style/SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user && 
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    }

    const handlleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div class="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Tìm kiếm" 
                type="text" value={input}
                onChange={(e) => handlleChange(e.target.value)}
            />
        </div>
    );
};