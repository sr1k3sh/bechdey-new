import React, { useEffect,useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchAds } from "../context/action";
import { dataReducer,initialDataState } from "../context/reducer";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import Title from "./Title";

export default function Mainpage(){

    const [state, dispatch] = useReducer(dataReducer, initialDataState);

    useEffect(()=>{
        try{
            fetchAds(dispatch,{page:1,limit:5});
        }catch(err){
            console.log(err);
        }
    },[])

    return(
        <React.Fragment>
            <Banner></Banner>
            <div className="container-xl mt-5">
                <Title title="Recently added"></Title>
                { state.dataLoading ? 
                    <div className="bd-product-wrapper">
                        {
                            <React.Fragment>
                                <ProductCard skeleton={true}></ProductCard>   
                                <ProductCard skeleton={true}></ProductCard>   
                                <ProductCard skeleton={true}></ProductCard>   
                                <ProductCard skeleton={true}></ProductCard>   
                            </React.Fragment>
                         
                        }
                    </div> 
                     : 
                    <div className="bd-product-wrapper">
                        {
                            state.data && state.data.map((s,i)=>
                                <ProductCard data={s} key={i}></ProductCard>
                            )
                        }
                    </div>
                }
                <span className="bd__more"><Link className="bd__link" to="/recent">see more</Link></span>
            </div>
        </React.Fragment>
    )
}