import React from "react";
import dummy from './../assets/images/banner.jpg';
import Skeleton from 'react-loading-skeleton';
export default function ProductCard(props){

    const {data} = props;

    return(
        <React.Fragment>
            {
                props.skeleton ? 
                <article className="bd-product-card bd-product-card--skeleton">
                    <div className="bd-product-card__img-wrapper">
                        <Skeleton className="bd-product-card__img"></Skeleton>
                    </div>
                    <div className="bd-product-card__details">
                        <div className="bd-product-card__price-wrapper">
                            <Skeleton width={100} style={{borderRadius:"1rem"}} className="bd-product-card__price"/>
                            <button className="bd-product-card__like btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/></svg>
                            </button>
                        </div>
                        <Skeleton width={130} style={{borderRadius:"1rem"}} className="bd-product-card__title"/>
                    
                        <div className="bd-product-card__footer">
                            <Skeleton width={90} style={{borderRadius:"1rem"}} className="bd-product-card__location"/>
                            <Skeleton width={50} style={{borderRadius:"1rem"}} className="bd-product-card__date"/>
                        </div>
                    </div>
                </article>
                :
                <article className="bd-product-card" id={data._id}>
                    <div className="bd-product-card__img-wrapper">
                        <span className="bd-product-card__condition">{data.condition}</span>
                        <img className="bd-product-card__img" src={data.name?"/public/"+data.name[0] :dummy} alt="product card"></img>
                    </div>
                    <div className="bd-product-card__details">
                        <div className="bd-product-card__price-wrapper">
                            <span className="bd-product-card__price">Rs {data.price}</span>
                            <button className="bd-product-card__like btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/></svg>
                            </button>
                        </div>
                        <span className="bd-product-card__title">{data.title}</span>
                        <div className="bd-product-card__footer">
                            <span className="bd-product-card__location">{data.location}</span>
                            <span className="bd-product-card__date">{new Date(data.createdAt).toDateString().split(" ").splice(1).join(" ")}</span>
                        </div>
                    </div>
                </article>
            }
        </React.Fragment>
    )
}