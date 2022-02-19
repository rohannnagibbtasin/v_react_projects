import React, { useEffect, useState } from 'react'

const Table = () => {
    const [dataPerPage,setDataPerPage] = useState(20);
    const [data,setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    useEffect(()=>{ 
        const getData = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const main = await response.json();
            setData(main);
        }
        getData();
    },[]);
    let pageNumber = Math.ceil(data.length/dataPerPage);
    let pages= [];
    for(let i =0;i<pageNumber;i++){
        pages[i] = i+1;
    }
    const mainData = data.slice((currentPage - 1) * dataPerPage,(dataPerPage * currentPage));
    return (
        <div>
            <div>
                <select onChange={e=>setDataPerPage(e.target.value)}>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mainData.map((n,i)=>(
                                <tr key={i}>
                                    <td>{n.id}</td>
                                    <td>{n.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="pages">
                {
                    pages.map((page,i)=>(
                        <li className="page" key={i} value={i+1} onClick={e=>setCurrentPage(e.target.value)} >{page}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default Table;
