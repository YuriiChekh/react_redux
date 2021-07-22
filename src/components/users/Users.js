import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import User from "../user/User"

export default function Users() {
    const users = useSelector(({users}) => users)
    const dispatch = useDispatch()

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        dispatch({
            type: 'ADD_USERS',
            payload: data
        })
    }

    useEffect(()=>{
        fetchUsers()
    }, [])




    return (
            <div>
                {
                    users.map(user => {
                        <User key={user.id} item={user}/>
                    })
                }

            </div>
        )

  }