import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data, setdata]=useState({}) //empty object 

    // use effect works on dependiences ....
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data)
    },[currency])
   
}
export default useCurrencyInfo;