import { useState } from "react";

function LsTest() {

    const [show, setShow] = useState('');
    const [color, setColor] = useState('white');

const write = () => {
    localStorage.setItem('animals', 'RACOON');
    localStorage.setItem('color', JSON.stringify({id:555, spalva:'red'}));
}
const read = () => {
    // const what = localStorage.getItem('animals');
    const kkk = localStorage.getItem('animals');
    setShow(kkk);
    const color = JSON.parse(localStorage.getItem('color'));
    setColor(color.spalva);
}
const destroy = () => {
    localStorage.removeItem('animals');
}

return (
<>
<h1>{show}</h1>
<button className="btn btn-outline-success m-4" onClick={write}>write</button>
<button className="btn btn-outline-primary m-4" onClick={read}>read</button>
<button className="btn btn-outline-danger m-4" onClick={destroy}>delete</button>

</>

)

}

export default LsTest
