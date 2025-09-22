import { useState } from "react";
import { useContext } from "react";
import { userExport } from "./ComponentA";

function ComponentB(){
    const value = useContext(userExport)
    return(
        <>
            <p>{value}</p>
        </>
    );
}
export default ComponentB