import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAds, fetchFilterAds } from "../context/action";
import { category, location } from "../context/catagories";
import { dataReducer, initialDataState } from "../context/reducer";
import ProductCard from "./ProductCard";
import CheckboxTree from 'react-checkbox-tree';
import BreadCrumb from "./breadcrumb";

export default function RecentlyProducts(){
    const [state, dispatch] = useReducer(dataReducer, initialDataState);

    const {dataCount} = state;
    const cat = category;
    const loc = location;

    const [catchecked,setCatChecked] = useState();
    const [catexpanded,setCatExpanded] = useState();
    const [locchecked,setLocChecked] = useState();
    const [locexpanded,setLocExpanded] = useState();

    const data = {
        page:1,limit:6
    }

    const options = {
        check: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/></svg>,
        uncheck: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5z"/></svg>,
        halfCheck: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 6h10v2H7v-2z"/></svg>,
        expandClose: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>,
        expandOpen: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>,
        expandAll: <span className="rct-icon rct-icon-expand-all" />,
        collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
        parentClose: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"/></svg>,
        parentOpen: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>,
        leaf: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 19V9H4v10h7zm0-12V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8zm2-2v14h7V5h-7zM5 16h5v2H5v-2zm9 0h5v2h-5v-2zm0-3h5v2h-5v-2zm0-3h5v2h-5v-2zm-9 3h5v2H5v-2z"/></svg>,
    }
    useEffect(()=>{
        try{
            fetchAds(dispatch,{page:1,limit:6})
        }catch(err){
            console.log(err);
        }
    },[]);

    const handleClick = (e) =>{
        e.preventDefault();
        data.page = e.target.id;
        catchecked && (data.maincategory = catchecked);
        locchecked && (data.location = locchecked);
        fetchFilterAds(dispatch,data);
    }

    const ShowPaginationNumbers = (pageNumbers) => {

        let paginationNumbers = [];

        if (pageNumbers) {
            let showMax = 3;
            let endPage;
            let startPage;

            if (pageNumbers < showMax) {
                startPage = 1;
                endPage = pageNumbers;
            }
            else {
                startPage = dataCount?.currentPage;
                if (startPage !== pageNumbers && (startPage + 1) !== pageNumbers) {
                    endPage = dataCount?.currentPage + showMax - 1;
                }
                else {
                    endPage = pageNumbers;
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
                        <Link to='#' className={(dataCount?.currentPage === number ? ' active' : '') + ' page-link'} key={number} id={number} onClick={handleClick}>{number}</Link>
                    </li>
                );
          });
            return result;
        }
    }

    
    const onCheckedCategory = (checked) =>{
        setCatChecked(checked);
        data.maincategory = checked;
        locchecked && (data.location = locchecked);
        fetchFilterAds(dispatch, data);
    }

    const onCheckedLocation = (checked) =>{
        setLocChecked(checked);
        data.location = checked;
        catchecked && (data.maincategory = catchecked);
        fetchFilterAds(dispatch, data);
    }

    return(
        <React.Fragment>
            <div className="container-xl">
                <div className="row mt-3">
                    <BreadCrumb></BreadCrumb>
                    <aside className="col-xl-3 mb-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Categories
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {
                                    loc.length && <CheckboxTree
                                                nodes={cat}
                                                checked={catchecked}
                                                expanded={catexpanded}
                                                onCheck={(checked) => onCheckedCategory(checked)}
                                                onExpand={expanded => setCatExpanded(expanded)}

                                                icons={options}
                                            />

                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Location
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                        {
                                            loc.length && <CheckboxTree
                                            nodes={loc}
                                            checked={locchecked}
                                            expanded={locexpanded}
                                            onCheck={checked => onCheckedLocation(checked)}
                                            onExpand={expanded => setLocExpanded(expanded)}

                                            icons={options}
                                        />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="col-xl-9">
                        <div className="col-xl-12">
                            {
                                catchecked && <ul className="bd-filter__list">
                                    {
                                        catchecked && catchecked.map((c,i)=><li className="bd-filter__item" key={i}><span className="bd-filter__span">{c}</span></li>)
                                    }
                                </ul>
                            }
                            {
                                locchecked && <ul className="bd-filter__list">
                                    {
                                        locchecked && locchecked.map((c,i)=><li className="bd-filter__item" key={i}><span className="bd-filter__span">{c}</span></li>)
                                    }
                                </ul>
                            }
                        </div>
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
                                    <Link className="page-link" to="/" tabIndex="-1" aria-disabled="true">Previous</Link>
                                </li>
                                {
                                    ShowPaginationNumbers(dataCount?.totalPages)
                                }
                                <li className={dataCount?.hasNextPage?"page-item":"page-item disabled"}>
                                    <Link className="page-link" to="/">Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}