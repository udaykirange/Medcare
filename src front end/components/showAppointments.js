import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myStore from "./store";

export default function ShowAppointments()
{
    const [appointmentList,setList]=useState([]);
    const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;
    
    useEffect(() => {
        console.log("hello...");
        fetch("http://localhost:8081/showAppointments/"+uid)
        .then(res=>res.json())
        .then(data=>setList(data))
      },[]);

    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }

      return (<div className="container" style={{backgroundColor:"cadetblue",textAlign:"center"}}>
           <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            <div style={{textAlign:"center",padding:"80px 80px 80px 200px"}}>
            <table className="table-bordered" style={{"borderWidth":"1px", 'borderColor':"black", 'borderStyle':'solid'}}>
                <tr>
                    <th>PATIENT NAME</th>
                    <th>DOCTOR NAME</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>STATUS</th>
                </tr>
               { appointmentList.map((ev)=>{
                   return(
                       <tr>
                           <td>{ev.uid.name}</td>
                           <td>{ev.did.name}</td>
                           <td>{ev.date}</td>
                           <td>{ev.time}</td>
                           <td>{ev.status}</td>
                       </tr>
                   )
                })}
            </table>
            </div>
        </div>)
}