import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../database/firebase.Config";

export default function Home() {
    const [users, setusers] = useState([])
    console.log("===> Home ~ usres:", users);


    useEffect(() => {
        getUsers()

    }, [])

    const getUsers = async () => {
        const list = []
        const dbsnap = await getDocs(collection(db, 'users'))
        dbsnap.forEach(item => {
            list.push(item.data())

        })

        setusers(list)

    }



    return (
        <div>
            <div className="bg-[skyblue]  w-full p-6 mb-16">
                <h1 className=" text-2xl font-bold text-blue-800">User List</h1>
            </div>

            {users.map(item => (
                <div className="w-11/12 shadow-md border border-black bg-blue-50 shadow-gray-300 rounded-md mx-auto py-5 px-10">
                   <h1 className=" uppercase font-semibold text-xl">{item.name}</h1>
                   
                </div>

                
            ))}
            
          
        </div>


    
        )
    }

