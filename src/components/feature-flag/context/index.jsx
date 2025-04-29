import { createContext, useEffect, useState } from "react";
import featureFalgsDataServiceCall from "../data";

export const FeatureFlagsContext=createContext(null)

export default function FeatureFalgGlobalState({children}){
    const [loading,setLoading]=useState(false)
    const [enablesFlags,setEnabledFlags]=useState({})

    async function fetchFeatureFlags() {
        try{
            setLoading(true)
            ///original service call
            const response=await featureFalgsDataServiceCall()
            setEnabledFlags(response)
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
            throw new Error(error)
        }
        
        
    }

    useEffect(()=>{
        fetchFeatureFlags()
    },[])
    return(
        <FeatureFlagsContext.Provider value={{loading,enablesFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}
