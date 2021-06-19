import React, {useState,useEffect} from 'react'
import axios from 'axios'
import  Card  from 'react-bootstrap/Card'
function UserList ()   {
    const [users,setUsers]=useState([])

    useEffect(()=> {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res)
            setUsers(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div className="card" >
           
                {users.map(user=>(
                    <div className="user" >
               <hr/>
                   <Card  key={user.id} >  <img className="photo" src="https://www.dgd-immobilier.fr/uploads/profile_picture/nopicture.png" style={{ height:"100px", width:"100px"}} alt =''></img> <br></br>
                   <div>Name : {user.name}</div> 
                   <div > User name : {user.username}</div> 
                   <div> Email: {user.email}</div>
                   <br></br>
                  </Card>
                  
                </div>))}
           
        </div>
        
    )
}

export default UserList