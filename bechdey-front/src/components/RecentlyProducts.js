import React, { useEffect, useReducer } from "react";
import { fetchAds } from "../context/action";
import { dataReducer, initialDataState } from "../context/reducer";
import ProductCard from "./ProductCard";

export default function RecentlyProducts(){
    const [state, dispatch] = useReducer(dataReducer, initialDataState);

    const {dataCount} = state;

    useEffect(()=>{
        try{
            fetchAds(dispatch,{page:1,limit:4})
        }catch(err){
            console.log(err);
        }
    },[]);

    const handleClick = (e) =>{
        e.preventDefault();
        fetchAds(dispatch,{page:e.target.id,limit:4})
    }

    const ShowPaginationNumbers = (pageNumbers) => {

        let paginationNumbers = [];

        if (pageNumbers) {
            let showMax = 3;
            let endPage;
            let startPage;

            if (pageNumbers <= showMax) {
                startPage = 1;
                endPage = pageNumbers.length;
            }
            else {
                startPage = dataCount?.currentPage;
                if (startPage !== pageNumbers.length && (startPage + 1) !== pageNumbers.length) {
                    endPage = dataCount?.currentPage + showMax - 1;
                }
                else {
                    endPage = pageNumbers.length;
                }
                endPage>pageNumbers && (endPage = pageNumbers) && (startPage = pageNumbers - showMax);

            }
            for (let i = startPage; i <= endPage; i++) {
                paginationNumbers.push(i);
            }
            return ShowRenderPageNumbers(paginationNumbers); 
        }
    }

    const ShowRenderPageNumbers = (paginationNumbers) => {

        if (paginationNumbers) {
          let result = paginationNumbers.map(number => {
                return (
                    <li className={(dataCount?.currentPage === number ? ' active' : '') + ' page-item'} key={number}>
                        <a className={(dataCount?.currentPage === number ? ' active' : '') + ' page-link'} key={number} id={number} onClick={handleClick}>{number}</a>
                    </li>
                );
          });
            return result;
        }
    }


    return(
        <React.Fragment>
            <div className="container-xl">
                <div className="row">
                    <aside className="col-xl-3">
                        <p>What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


    Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </aside>
                    <div className="col-xl-8 offset-xl-1">
                        <span>Total ads: {dataCount?.count}</span>
                        <h2>Recently Added</h2>
                        { state.dataLoading ? 
                            <h2>loading</h2> : <div className="bd-product-wrapper__list">
                                {
                                    state.data.map((s,i)=>
                                        <ProductCard data={s} key={i}></ProductCard>
                                    )
                                }
                            </div>
                        }

                        <nav className="bd-pagination__wrapper" aria-label="Pagination link">
                            <ul className="pagination">
                                <li className={dataCount?.hasPrevPage?"page-item":"page-item disabled"}>
                                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                </li>
                                {
                                    ShowPaginationNumbers(dataCount?.totalPages)
                                }
                                <li className={dataCount?.hasNextPage?"page-item":"page-item disabled"}>
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}