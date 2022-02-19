import React from 'react'

export default function Plan({handleDelete,value,id}) {
    return (
        <>
            <li className="shadow p-2 my-2 col-sm-9">{value}</li>
            <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>handleDelete(id)}>X</button>
        </>
    )
}
