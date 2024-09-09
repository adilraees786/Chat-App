import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../database/firebase.Config";
import { useLocation, useNavigate } from "react-router-dom";



export default function Chat() {
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()
    const { state } = useLocation()

    console.log("=== ==>~ home~", state);




    useEffect(() => {
        getMessages()

    }, [])

    const getMessages = async () => {




    }



    return (
        <div>
            <div className="bg-[#0f546f]  w-full p-6 flex items-center uppercase">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAY1BMVEVerCT///9NpQDF37XQ5cPu9uqUxHhXqg1bqx1SpwBWqRHX6c32+vNJpABYqhjr9Obe7dW62ah1tkp/u1ptsztnsDSJwGfj79ucyYGizIqy1Z5wtEJ6uVOFvmFkry2SxXSq0ZTsUpy+AAAEKklEQVR4nO2c25aqMAyGy0nSWgsIiqOo8/5PufE0YEtBByfNXqv/pTd86zeUNGnDAkNZ0QjF8KREU2QmBtN/SBYbjsl1EfDNwmDTyJJzKACZ68omwnMyRlZU3AHWTbwqrGTZNnTh10MQbpNhsvwgHHJdlB7yIbKYYQe+KcVikyx2Evm6QMQ6WQwUwFo0iJ/J6hMNsBbtVPfJ5Np18HcSa9kj26WueXpKdx1Z7G59HRKPf8jIBNlNcHqQFbQsa00rbmTJhpZlrWmH5EoWha5JDIXRlYzIGtsXsAtZTs+y1rS8Jfuis8h2El8BkyW9P7P9O0vJakaRjLVcS4ph1gbaku2pLbM38T3bUXwB2ldgxxqaYQYNq1wzWFSxk2sEi6hyeXl5eXl5eXl5fUSKC05yX8HLIip2QI4NVHQtYyYNMbSuXi5LtJ4HqOmtH/Bl1ydaIUC14qI8HsIJGzrH8Aq//LuWMlmOt8sgXPbAgi1KpEX3p51HXAP2BIZCJr4fT5P2QjOsnsECjJp02D2usNWzdMeCJcIboNbd82oLmeGYxKjiiEX3wGS4OQUnHQyltzxNZjq2RakVTpKZjq1x+n5TZNo6huYYY+k4mfFW4n3Nxz2DVHfsiFaPHiUzHSvx8p8xMhDuHBslA+XQsTEyAN2xErXnYSUz/srkiJtj28hMxxrkLpGFrJ9aO3HMRmYuF9UqfEOfOK44SGZ8koJl9JaKks/Ok4bIDMd+oWw917YhMj3t+SXaTNcGyMTuA2BtAMx8l4fIPmFZq5lpnEkG1cB54d/oOC/S6JINZI6Q25/2jmYuzQNxln59BGzuaYz/atVot0vz/89s9n5hcIcCXEer47cUbdXsL6fli667lp1W4ep1hR9ITGxZkNLR0Guz1szRyIOQtuY/su6EAWq3rr2xQ0kaVNfGdnVMjzXUw9+jO2Fjw4np2mjFxalrUxUXDS0p0VybqJ8ZS26CdstmurKnoUms4sYL1VDdtQoH7YUKsuHaESXWXqq6O3FNNd0T7Z0KHW1uVviSet0d6z0Cw7UYo7+Z7n/iZ6QjpscazpWDR0d1MRI9er8CpV0N6T6RUubjSQ6IHJ3s0q0+bqe71U+pJNrJfvVKh7+XgGP0N99Ql0qi9Dff0eP4QdK4v6KqCcJjEUWL+XvJP5DinOaJJS8vLy8vLy8vr/miehvxRPhmKbV9zl3QEL7BTPfWN92b8rVrBotqwhMZ6E6xIDz5A6/Y9bpu01Ls5/7dKSxuU3kqaqZBldwnGVGaSnVRep9kFEhy059kQH5iVkDqsy56U8YCeaBTwVSH/mQ2StPs2NM0uzbUXij5YwiUNgEwCCIiUxMfl+V6kyYjAq49Lqc+kwU5UgfcLlENTucMgqx0PNG07B871abAbhxOgd3sn1i0ybnZ2C3NP5U6a+d0/wGZHTOkgv2AlgAAAABJRU5ErkJggg== " className="  w-10 mr-10 cursor-pointer" onClick={(() => navigate('/home'))} />


                <img src="data:image/jpeg;base64,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" className=" w-10 mr-4 rounded-full border-2" />

                <h1 className=" text-2xl font-bold  text-white">Chat With {/** state.name */}</h1>
            </div>

<div className=" bg-gray-100 h-[80vh]">

</div>

            <div className="flex items-center  justify-center pt-5">
                <input type="text" placeholder="Enter Message" className="w-10/12 border-gray-500 rounded-lg px-6 py-2 text-xl " />
                <button className="text-xl w-40 ml-2 rounded-lg bg-red-200 "> Send</button>
            </div>

        </div>

    )
}

