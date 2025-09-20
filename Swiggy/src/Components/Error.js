import { useRouteError } from "react-router-dom"
export default function Error(){
     const err = useRouteError();
     console.log(err)
    return(<>
        <h1>Oops something Went Wrong</h1>
        <h1>{err.status + " " + err.statusText}</h1>
        </>
    )
}