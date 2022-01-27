import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail(){

    let { id } = useParams();

    return(
        <React.Fragment>
            <div className="container-xl">
                <h1>Detail page</h1>
            </div>
        </React.Fragment>
    )
}