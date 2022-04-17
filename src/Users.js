import React from "react";

const Users = ({list}) =>{
    const {id,email,first_name,avatar} = list;
    return(
        <>
        <h1>{first_name}</h1>
        </>
    )
}
export default Users