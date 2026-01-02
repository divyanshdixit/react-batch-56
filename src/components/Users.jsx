import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { setUsers } from '../redux/UserApiSlice/userSlice';

const Users = () => {
    const {users} = useSelector(state => state.user); // re-render
    const dispatch = useDispatch();

    // using manual fetch and reducer:

    useEffect(() => { // rtk query, asyncThunk , (pending, fulfiiled , rejected) 
        const getUsers = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await res.json(); // [{}, {}]
            dispatch(setUsers(users))
        }
        getUsers();
    }, []);

  return (
    <div>
        <h2> All users Name </h2>
        {
            users.map(user => (
                <p key={user.id}> {user.name} </p>
            ))
        }
    </div>
  )
}

export default React.memo(Users)