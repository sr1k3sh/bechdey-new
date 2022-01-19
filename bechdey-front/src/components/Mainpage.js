import React, { useEffect,useReducer } from "react";
import { fetchAds } from "../context/action";
import { dataReducer,initialDataState } from "../context/reducer";
import Banner from "./Banner";
import ProductCard from "./ProductCard";

export default function Mainpage(){

    const [state, dispatch] = useReducer(dataReducer, initialDataState);

    useEffect(()=>{
        try{
            fetchAds(dispatch,{page:1});
        }catch(err){
            console.log(err);
        }
    },[])

    return(
        <React.Fragment>
            <Banner></Banner>
            
            { state.dataLoading ? 
                <h2>loading</h2> : <div className="bd-product-wrapper">
                    {
                        state.data.map((s,i)=>
                            <ProductCard data={s} key={i}></ProductCard>
                        )
                    }
                </div>
            }
        </React.Fragment>
    )
}