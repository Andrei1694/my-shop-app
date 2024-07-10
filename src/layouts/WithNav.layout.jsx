import { Outlet } from "react-router-dom";
import DefaultNav from "../components/navigation.component";

export default function WithNav(){
    return(
        <>
            <Outlet />
            <DefaultNav />
        </>
    )
}