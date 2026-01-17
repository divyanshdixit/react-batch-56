import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { setUsers } from '../redux/UserApiSlice/userSlice';
import { useGetPostsQuery, useGetUsersQuery,useLazyGetTodosQuery } from '../redux/services/todoApi';
import { fetchUsers } from '../redux/services/thunks';
import { logout } from '../redux/Auth/authSlice';


const Users = () => {
    const {data, isLoading, isError} = useGetUsersQuery(undefined, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        pollingInterval: 5000, // 5seconds
        keepUnsuedDataFor: 30 // 30 seconds, 60 seconds (cache expires after 60 secs)
    }); // server data 
    const {data: postData} = useGetPostsQuery(undefined, {
        selectFromResult: ({postData}) => ({
            postCount: postData.length
        })
    });
    // const [getUser, result] = useLazyGetTodosQuery(id, {skip: });
    // console.log(getUsers())
    console.log(data, postData, isLoading, isError);
    const {users} = useSelector(state => state.user); // re-render
    const dispatch = useDispatch();

    // dispatch(setUsers())

    const handleClick = async() => {
        try{
            const res = dispatch(fetchUsers()).unwrap();
            console.log(res);
        }catch(err){
            console.log(err)
            // setError(err.message)
        }
    }

    const handlelogout = () => {
        dispatch(logout())
    }

    if(isLoading) return <h1> Loading... </h1>
    if(isError) return <h1> Error... </h1>
  return (
    <div>
        <h2> All users Name </h2>
        {
            data.map(user => (
                <p key={user.id}> {user.name} </p>
            ))
        }
         {
            postData.length && postData.map(post => (
                <p key={post.id}> {post.title} </p>
            ))
        }

        <button onClick={handlelogout}> Logout </button>
    </div>
  )
}

export default React.memo(Users)