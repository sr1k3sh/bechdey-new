import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "../context";
import { useHistory } from "react-router-dom";
import { category, location } from "../context/catagories";

export default function AddProduct(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [negotiate, setNegotiate] = useState(false);
    const [condition, setCondition] = useState("");
    const [usedFor, setUsedFor] = useState("");
    const [file, setFile] = useState([]);
    const userDetails = useAuthState();
    const [imageUrl, setImageUrl] = useState([]);

    const history = useHistory();

    const cat = category;
    const loc = location;

    const [Category, setCategory] = useState();
    const [subCategory, setSubCategory] = useState();
    const [mainCategory, setMainCategory] = useState();
    const [getLocation, setLocation] = useState();


    useEffect(()=>{
    },[])

    const onSubmitPost = async(e) =>{
        e.preventDefault();

        console.log(e);
        const formData = new FormData();
        formData.append('userId',userDetails.userId);
        formData.append('title',title);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("negotiate",negotiate);
        formData.append('condition',condition);
        formData.append("usedFor",usedFor);
        for (const f of file) {
            formData.append('file', f)
        }
        formData.append('category',Category);
        formData.append('subcategory',subCategory);
        formData.append('maincategory',mainCategory);
        formData.append('location',getLocation);
        try{
            await axios(
                {
                    method: "post",
                    url: '/api/products/addpost',
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                }
            ).then(res=>{
                console.log(res);
                history.push('/home')
            });
        }catch(err){
            console.log(err);
        }
    }

    const onImageuploadChange = async(e) =>{
        e.preventDefault();
        const checkfile = e.target.files

        setFile(checkfile);
        Array.from(checkfile).forEach(f=>{
            setImageUrl(prevArr=>[...prevArr,URL.createObjectURL(f)]);
        })
    }

    return (
        <React.Fragment>
            <div className="col-xl-8 m-auto">
                <form className="" onSubmit={onSubmitPost} encType="multipart/form-data">
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label d-none">Title</label>
                        <input type="hidden" className="form-control" name="userId" defaultValue={userDetails.userId}></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Title</label>
                        <input className="form-control" name="title" placeholder="enter title of product" onChange={e=>setTitle(e.target.value)}></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" name="description" placeholder="Add Description" onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Price</label>
                        <input className="form-control" name="price" type="number" placeholder="price in NPR" onChange={e=>setPrice(e.target.value)}></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <span>Is price negotiable?</span>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="negotiate" type="radio" value={false} id="bechdey_fixed" onChange={e=>setNegotiate(e.target.value)}/>
                            <label className="form-check-label" htmlFor="bechdey_fixed">
                                Fixed
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="negotiate" type="radio" value={true} id="bechday_negotiable" onChange={e=>setNegotiate(e.target.value)}/>
                            <label className="form-check-label" htmlFor="bechday_negotiable">
                                Negotiable
                            </label>
                        </div>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <span>Condition</span>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="condition" type="radio" value="Brand New" onChange={e=>setCondition(e.target.value)} id="bechdey_brandnew"/>
                            <label className="form-check-label" htmlFor="bechdey_brandnew">
                                Brand New
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="condition" type="radio" value="Like New" onChange={e=>setCondition(e.target.value)} id="bechday_likenew"/>
                            <label className="form-check-label" htmlFor="bechday_likenew">
                                Like New
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="condition" type="radio" value="Good" onChange={e=>setCondition(e.target.value)} id="bechday_good"/>
                            <label className="form-check-label" htmlFor="bechday_good">
                                Good
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="condition" type="radio" value="Not Working" onChange={e=>setCondition(e.target.value)} id="bechday_notworking"/>
                            <label className="form-check-label" htmlFor="bechday_notworking">
                                Not Working
                            </label>
                        </div>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Used for</label>
                        <input className="form-control" name="usedFor" placeholder="Eg. Months" onChange={e=>setUsedFor(e.target.value)}></input>
                    </div>
                    {
                        loc && loc.cities && <div className="bd-addform__inputgroup mb-4">
                            <label className="form-label">Location</label>
                                 <select className="form-control" name="location" defaultValue={'DEFAULT'} onChange={e=>setLocation(e.target.value)}>
                                    <option key="0_cities" value="DEFAULT">Select area of you city</option>
                                    {
                                        loc.cities.map((g,i)=>{
                                            return <option key={i+"_cities"} value={g}>{g}</option>
                                        })
                                    }
                                </select>
                                
                        </div>
                    }
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Category</label>
                        <select className="form-control" name="category" defaultValue={'DEFAULT'} onChange={e=>setCategory(e.target.value)}>
                            <option value="DEFAULT">Select category</option>
                            {
                                Object.keys(cat).map((g,i)=>{
                                    return <option key={i+"_main"} value={g}>{g}</option>
                                })
                            }
                        </select>
                    </div>
                    {
                        Category && cat[Category] && <div className="bd-addform__inputgroup mb-4">
                            <label className="form-label">Sub category</label>
                                 <select className="form-control" name="subcategory" defaultValue={'DEFAULT'} onChange={e=>setSubCategory(e.target.value)}>
                                    <option key="0_sub-main" value="DEFAULT">Select sub category</option>
                                    {
                                        Object.keys(cat[Category]).map((g,i)=>{
                                            return <option key={i+"_sub-main"} value={g}>{g}</option>
                                        })
                                    }
                                </select>
                                
                        </div>
                    }
                    {
                        subCategory && cat[Category][subCategory] && <div className="bd-addform__inputgroup mb-4">
                            <label className="form-label">Sub category</label>
                                 <select className="form-control" name="maincategory" defaultValue={'DEFAULT'} onChange={e=>setMainCategory(e.target.value)}>
                                    <option key="0_sub-main-value" value="DEFAULT">Select sub category</option>
                                    {
                                        cat[Category][subCategory].map((g,i)=>{
                                            return <option key={i+"_sub-main-value"} value={g}>{g}</option>
                                        })
                                    }
                                </select>
                                
                        </div>
                    }
                    
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Upload image</label>
                        <input multiple type="file" className="from-control" name="uploadedImages" onChange={onImageuploadChange}/>
                        {
                            imageUrl && <ul className="bd-addform__upload-list">
                                {
                                    imageUrl.map((img,i)=><li className="bd-addform__upload-item" key={i+"_upload-img"} ><img className="bd-addform__uploaded-img mt-4" src={img} alt="upload data"></img></li>)
                                   
                                }
                            </ul>

                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Post Ad</button>
                </form>
            </div>
        </React.Fragment>
    )
}