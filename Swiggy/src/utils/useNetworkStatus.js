import { useState, useEffect} from "react";
export default function useNetworkStatus(){
const [onlineFlag,setOnlinFlag] =useState(true);
useEffect(()=>{
    checkNetwork()
},[])
checkNetwork()  
function checkNetwork(){
   window.addEventListener("offline",()=>{
    setOnlinFlag(false)
   })
   window.addEventListener("online",()=>{
    setOnlinFlag(true)
   })
    
}

return onlineFlag
};