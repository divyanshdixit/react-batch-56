// Suspense is rendering machinsm

// Suspense lets React pause rendering while something is loading, and show fallback UI in the meantime.

// component is not ready yet → ⏸ suspend

// React shows fallback → ⌛ loader

// component becomes ready → ✅ show content

// t is for anything asynchronous,

// Suspense only works when the component throws a Promise , like React.lazy, React Server Components

// fetch in useEffect does NOT integrate with Suspense.

import React, { Suspense, useEffect, useState } from 'react';
import Modal from '../ModalRoot';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);
    const [users, setUsers] = useState([]);

    // loads posts:
    const getPosts = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        return posts;
    }

    const getTodos = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        return res.json();
        
    }

    const getUsers = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        return users;
    }

    const getAllData = async() => {
        const [posts, todos, users] = await Promise.all([ getPosts(),  getTodos(),  getUsers()]);
        setPosts(posts);
        setTodos(todos);
        setUsers(users);
        setLoading(false);
    }

    useEffect(() => {
        // this is waterfall fetch => one after the other:
        // getPosts();
        // getTodos();
        // getUsers();

        // instead of it we have to do in parallel:
        getAllData()
    }, []);

    if(isLoading) return 'Loading...Loading...';

  return (
    <div>
        <h1> posts </h1>
        {posts.map((post) => (
            <p> {post.id} </p>
        ))}
        <h1> todos </h1>
        {todos.map((todo) => (
        <p> {todo.id} </p>
       ))}
        <h1> users </h1>
        {users.map((user) => (
        <p> {user.id} </p>
       ))}

        {/* <Modal>
            <h1> Modal header </h1>
            <p> modal body</p>
            <h2> Modal </h2>
       </Modal>

       <Modal>
        <h1> Modal header </h1>
        <p> modal body</p>
        <h1> Modal footer </h1>
       </Modal> */}
    </div>
  )
}

export default React.memo(Dashboard)