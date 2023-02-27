import { destroy } from "../../Functions/localStorage";

function List({ list, setDeleteData }) {
    
    const destroy = w => {
        setDeleteData(w);
    }

    const edit
    
    if (null === list) {
        return (
            <div className="card mt-5">
                <div className="card-header">
                    <h2>LOADIND ...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>WishList</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        list.length ?
                            list.map(w => <li className="list-group-item">{w.wish}<i>{w.size}</i>
                            <div className="ed-button" onClick={() => edit(w)}></div>
                            <div className="del-button" onClick={destroy(w)}></div>
                            </li>)
                            :
                            <li className="list-group-item">No wishes yet</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;