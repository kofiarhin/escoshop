import React from "react";
import _ from "lodash";
import "./search.sass";

const Search = ({ products, saveResult }) => {

    const handleChange = event => {



        if (event.target.value === "") {

            console.log(products);
            saveResult(products);

        } else {

            let result = [];
            products.forEach(product => {

                if (product.name.toLowerCase().includes(event.target.value)) {

                    result.push(product);
                }
            })


            if (!_.isEmpty(result)) {

                saveResult(result);

            }


        }


    }
    return <div className="container">

        <div className="search-wrapper">

            <input type="text" onChange={event => handleChange(event)} placeholder="Search for product" />

        </div>
    </div>
}

export default Search;