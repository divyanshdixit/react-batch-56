import React from 'react'
import { useAddPostsMutation, useGetUsersQuery } from '../redux/services/todoApi'
import { useDispatch } from 'react-redux';
import { setPosts } from '../redux/UserApiSlice/userSlice';

const Posts = () => {
    const dispatch = useDispatch();

    const [addPosts, {data, isLoading, isError, isSuccess}] = useAddPostsMutation();
    const {data: usersData} = useGetUsersQuery();
    console.log(data)

    dispatch(setPosts(data))
    const handleSubmit = async () => {
        try{
                const postDetails = {
                id: 2,
                title: 'Title1',
                author: 'Divyansh',
                comment: [
                    {id: 1, userId:2, text: 'comment 1'}
                ]
            };

            const result = await addPosts({
                comment: postDetails.comment.text,
                id: postDetails.id
            }).unwrap();

            console.log(result);
        }catch(err){

        }
       
        
    }
  return (
    <div>
        <button onClick={handleSubmit}> Submit </button>
        {post.map()}
    </div>
  )
}

export default Posts