import React, { useEffect,useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchAds } from "../context/action";
import { dataReducer,initialDataState } from "../context/reducer";
import Banner from "./Banner";
import ProductCard from "./ProductCard";

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
            <div className="col-xl-12">
                <h2>Recently Added</h2>
                { state.dataLoading ? 
                    <h2>loading</h2> : <div className="bd-product-wrapper">
                        {
                            state.data.map((s,i)=>
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