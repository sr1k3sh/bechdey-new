import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "../context";
import { useHistory } from "react-router-dom";

export default function AddProduct(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [negotiate, setNegotiate] = useState(false);
    const [condition, setCondition] = useState("");
    const [usedFor, setUsedFor] = useState("");
    const [file, setFile] = useState();
    const userDetails = useAuthState();

    const history = useHistory();

    useEffect(()=>{

    },[])

    const onSubmitPost = async(e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId',userDetails.userId);
        formData.append('title',title);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("negotiate",negotiate);
        formData.append('condition',condition);
        formData.append("usedFor",usedFor);
        formData.append('file',file[0]);

        try{
            await axios.post('/api/products/addpost',formData).then(res=>{
                history.push('/')
            });
        }catch(err){
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <div className="col-xl-8 m-auto">
                <form className="" onSubmit={onSubmitPost}>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Title</label>
                        <input className="form-control" placeholder="enter title of product" onChange={e=>setTitle(e.target.value)}></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" placeholder="Add Description" onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Price</label>
                        <input className="form-control" type="number" placeholder="price in NPR" onChange={e=>setPrice(e.target.value)}></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <span>Is price negotiable?</span>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="bechdey_negotitate" value={false} id="bechdey_fixed" onChange={e=>setNegotiate(e.target.value)}/>
                            <label className="form-check-label" htmlFor="bechdey_fixed">
                                Fixed
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="bechdey_negotitate" value={true} id="bechday_negotiable" onChange={e=>setNegotiate(e.target.value)}/>
                            <label className="form-check-label" htmlFor="bechday_negotiable">
                                Negotiable
                            </label>
                        </div>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <span>Condition</span>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Brand New" onChange={e=>setCondition(e.target.value)} name="bechdey_condition" id="bechdey_brandnew"/>
                            <label className="form-check-label" htmlFor="bechdey_brandnew">
                                Brand New
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Like New" onChange={e=>setCondition(e.target.value)} name="bechdey_condition" id="bechday_likenew"/>
                            <label className="form-check-label" htmlFor="bechday_likenew">
                                Like New
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Good" onChange={e=>setCondition(e.target.value)} name="bechdey_condition" id="bechday_good"/>
                            <label className="form-check-label" htmlFor="bechday_good">
                                Good
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Not Working" onChange={e=>setCondition(e.target.value)} name="bechdey_condition" id="bechday_notworking"/>
                            <label className="form-check-label" htmlFor="bechday_notworking">
                                Not Working
                            </label>
                        </div>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Used for</label>
                        <input className="form-control" placeholder="Eg. Months" onChange={e=>setUsedFor(e.target.value)}></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <input type="file" className="admin__input" id="myFile" name="myFile" onChange={e=>setFile(e.target.files)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Ad</button>
                </form>

                {/* <img src="/public/brooke-lark-29h2n639YDA-unsplash.jpg"></img> */}
            </div>
        </React.Fragment>
    )
}