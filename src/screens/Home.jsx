

// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../database/firebase.Config";
// import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom"


export default function Home() {

    // const [myUid, setUid] = useState('')
    // const [users, setusers] = useState([])
    const navigate = useNavigate()



    // useEffect(() => {
    //     getUsers()
    // }, [])

    // const getUsers = async () => {
    //     const uid = await localStorage.getItem("userId")
    //     setUid(uid)
    //     // console.log(uid);


    //     const list = []
    //     const dbsnap = await getDocs(collection(db, 'user'))
    //     dbsnap.forEach(item => {
    //         list.push(item.data())
    //     })
    //     // console.log("====> getusers", list);


    //     setusers(list)

    // }


    
    const handlelogout = () => {
        localStorage.removeItem('userId')
        navigate('/login')

    }

  

    return (
       
        <div>

       <Navbar/>

        </div>
    )
 }

