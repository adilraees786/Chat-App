 
// import React ,{useEffect} from "react"
// import { useNavigate } from "react-router-dom"

// const Loading = () => {
//     const navigate = useNavigate()

//     useEffect(() => {
//         checkUser()

//     }, [])

//     const checkUser = async () => {
//         const userid = await localStorage.getItem('userid');
//         if (userid !==null)
//             navigate('/home')
//         else
//             navigate('/login')

//     }

//     return(
//         <div className=" min-h-screen flex items-center justify-center bg-gray-100">
//             <div className=" flex items-center space-x-2">
//                 <div className=" w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-800">

//                 </div>

//             </div>

//         </div>
//     )


// }