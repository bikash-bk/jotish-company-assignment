import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./List.css";
import { getTableData } from "../../services/api";

export default function List(){

  const [list,setList] = useState([]);
  const navigate = useNavigate();

 useEffect(()=>{

  getTableData().then((res)=>{
    console.log("API FULL RESPONSE:",res);

   
    setList(res.TABLE_DATA.data);

  });

},[]);
  


  return(
    <div className="list-main">
      <h2>Employee List</h2>

      {list.map((item,index)=>(
        <div
          key={index}
          className="card"
          onClick={()=>navigate(`/details/${index}`,{state:{item}})}
        >
          <p>Name: {item[0]}</p>
          <p>Role: {item[1]}</p>
          <p>City: {item[2]}</p>
        </div>
      ))}
    </div>
  );
}
