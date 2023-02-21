
import rand from "../../Functions/rand";

function Bebras({color, name}) {

    const fun = () => {
        let a= '';
        for (let i = 1; i < 9; i++) {
            a += i;
        }
        return a;
    }

    return <>
        <h1 style={{
            color: color,
            backgroundColor: rand(0,1) ? 'coral' : 'pink'
        }}> Bebras - {name}</h1>
        <h2 className="red"> <i>Barsukas ind </i> {
            fun()
        }    
        </h2>
    </>
}

export default Bebras;
