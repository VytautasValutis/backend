import { useState } from "react";

function Create() {

    const [wish, setWish] = useState('');
    const [size, setSize] = useState(0);

    const doWish = e => {
        setWish(e.target.value);
    }

    const doWishSize = e => {
        setSize(e.target.value);
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Create</h2>
            </div>
            <div className="card-body">
                <div className="m-3">
                    <label className="form-label">Enter Your wish</label>
                    <input type="text" className="form-control" onChange={doWish} value={wish} />
                </div>
                <div className="m-3">
                    <label className="form-label">How big {size}</label>
                    <input type="range" className="form-control" min="0" max="10" onChange={doWishSize} value={size} />
                </div>
                <button type="button" className="btn btn-outline-primary m-4">add</button>
            </div>
        </div>
    )
}

export default Create;
