import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../context/action";
import { initProductState, productDetailReducer } from "../context/reducer";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
export default function ProductDetail(){

    let { id } = useParams();

    const [state,dispatch] = useReducer(productDetailReducer,initProductState);

    const {data,isLoading} = state;

    useEffect(()=>{
        try{
            fetchProductDetails(dispatch,{id:id});
        }catch(err){
            console.log(err);
        }
    },[id]);

    return(
        <React.Fragment>
            {
                isLoading?
                <div>
                    isloading
                </div>
                :
                <div className="container-xl mb-5 mt-5">
                    <div className="row">
                        <div className="col-xl-6">
                            <Splide
                                options={ {
                                    rewind: true,
                                    heightRatio : 0.8,
                                    gap   : '1rem',
                                  } }>
                                {
                                    data?.name.length && data?.name.map((d,i)=>{
                                        return <SplideSlide key={i}>
                                            <img className="bd-product-detail__img-slider" src={"/public/"+d} alt={i}/>
                                        </SplideSlide>
                                    })

                                }
                            </Splide>
                        </div>
                        <div className="col-xl-6">
                            <div className="bd-product-detail__title-wrapper">
                                <h1>{data.title}</h1>
                                <div>
                                    <button className="btn ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                                    </button>
                                    <button className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243c2.262 2.268 2.34 5.88.236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404-1.503-1.499-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.991-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451l8.432 8.446L12 21.485 3.52 12.993c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="bd-product-detail__price-detail">
                                <span><mark className="bd-product-detail__price">{data.price}</mark></span>
                                <span className="bd-product-detail__price-nego">{data.negotiate?"(Negotiable)":"(Fixed)"}</span>
                            </div>
                            <hr></hr>
                            <div>
                                <div className="bd-product-detail__title-wrapper">
                                    <h4>Product description</h4>
                                    <span>{new Date(data.createdAt).toDateString().split(" ").splice(1).join(" ")}</span>
                                </div>
                                <p>
                                    {data.description}
                                </p>
                                <div className="bd-product-detail__sort-info-wrapper">
                                    <div className="bd-product-detail__sort-info">
                                        <span><strong>Condition:</strong></span>
                                        <span>new</span>
                                    </div>
                                    <div className="bd-product-detail__sort-info">
                                        <span><strong>Used for:</strong></span>
                                        <span>2 months</span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div>
                                <div>
                                    <h4>Seller's Information</h4>
                                </div>
                                
                                <div className="bd-product-detail__info-wrapper">
                                    <div className="bd-product-detail__sort-info-wrapper">
                                        <div className="bd-product-detail__sort-info">
                                            <span><strong>Sold by:</strong></span>
                                            <span>Rikesh</span>
                                        </div>
                                        <div className="bd-product-detail__sort-info">
                                            <span><strong>Location:</strong></span>
                                            <span>Kathmandu</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline-primary">Contact Seller</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            }
        </React.Fragment>
    )
}