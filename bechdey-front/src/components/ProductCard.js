import React from "react";
import dummy from './../assets/images/banner.jpg';

export default function ProductCard(props){

    const {data} = props;
    
    return(
        <React.Fragment>
            <article className="bd-product-card">
                <div className="bd-product-card__img-wrapper">
                    <span className="bd-product-card__condition">{data.condition}</span>
                    <img src={data.name?"/public/"+data.name[0] :dummy} alt="product card"></img>
                </div>
                <div className="bd-product-card__details">
                    <span className="bd-product-card__price">Rs {data.price}</span>
                    <span className="bd-product-card__title">{data.title}</span>
                    <div className="bd-product-card__footer">
                        <span className="bd-product-card__location">baluwatar,ktm</span>
                        <span className="bd-product-card__date">{new Date(data.createdAt).toDateString().split(" ").splice(1).join(" ")}</span>
                    </div>
                </div>
            </article>
        </React.Fragment>
    )
}