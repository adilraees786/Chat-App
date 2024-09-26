
import Navbar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom"


export default function Home() {

    
    const navigate = useNavigate()


    
    // const handlelogout = () => {
    //     localStorage.removeItem('userId')
    //     navigate('/login')

    // }

  

    return (
       
        <div>

       <Navbar/>

        </div>
    )
 }

