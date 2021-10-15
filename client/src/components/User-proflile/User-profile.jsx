import React from 'react'
import {useEffect,useState} from 'react'
import { getToken } from '../../redux/users/usersAction'
import jwtDecode from 'jwt-decode'
function UserProfile() {
    const [userData,setUserData] = useState() 
    useEffect(()=>{
        const data = getToken()
        if(data.msg){
            setUserData(false)
        }else {
            const infoUser = jwtDecode(data)
            setUserData(infoUser)
        }
    },[])

   function muestra(){
       userData ? console.log(userData): console.log('hola')
   }
   muestra()
    return (
        <div>
            <h1>{userData ? userData.name:""}</h1>
            <img src={userData ? userData.picture : ""} alt="" />
        </div>
    )
}

export default UserProfile
