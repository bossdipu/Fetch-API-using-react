import React from "react"

const User = ({item}) =>{
    
    return(
        <>
      {item.map((list)=>{
          return(
              <div className="box">
                  <img src={list.avatar} alt="" />
                  <h2>{list.first_name}</h2>
                  <p>{list.email}</p>
              </div>
          )
      })}
        </>
    )
}
export default User