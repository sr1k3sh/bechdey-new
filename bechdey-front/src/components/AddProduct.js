import React from "react";

export default function AddProduct(){
    return (
        <React.Fragment>
            <div className="col-xl-8 m-auto">
                <form className="">
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Title</label>
                        <input className="form-control" placeholder="enter title of product"></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" placeholder="Add Description"></textarea>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Price</label>
                        <input className="form-control" type="number" placeholder="price in NPR"></input>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <span>Is price negotiable?</span>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="bechdey_negotitate" id="bechdey_fixed"/>
                            <label class="form-check-label" for="bechdey_fixed">
                                Fixed
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="bechdey_negotitate" id="bechday_negotiable" checked/>
                            <label class="form-check-label" for="bechday_negotiable">
                                Negotiable
                            </label>
                        </div>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <span>Condition</span>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="bechdey_condition" id="bechdey_brandnew"/>
                            <label class="form-check-label" for="bechdey_brandnew">
                                Brand New
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="bechdey_condition" id="bechday_likenew" checked/>
                            <label class="form-check-label" for="bechday_likenew">
                                Like New
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="bechdey_condition" id="bechday_good" checked/>
                            <label class="form-check-label" for="bechday_good">
                                Good
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="bechdey_condition" id="bechday_notworking" checked/>
                            <label class="form-check-label" for="bechday_notworking">
                                Not Working
                            </label>
                        </div>
                    </div>
                    <div className="bd-addform__inputgroup mb-4">
                        <label className="form-label">Used for</label>
                        <input className="form-control" placeholder="Eg. Months"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Ad</button>
                </form>
            </div>
        </React.Fragment>
    )
}