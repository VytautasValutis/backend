import { useEffect } from "react";

function Gone10() {

    useEffect(() => {
        console.log('GONE BORN');
        return () => {
            console.log('GONE is dead');
        } 
    }, []);

    return <h2>I'm still HERE</h2>
}

export default Gone10;