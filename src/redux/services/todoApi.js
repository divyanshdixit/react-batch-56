import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// deduplication => 
// caching => 60 s
//  tags => cache invalidation 

// api => 60 s => 

export const todoApi = createApi({
    reducerPath: 'todoApi',
    keepUnusedDataFor: 30, 
    tagTypes: ['Users', 'posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        retry: 3,
    }),
    endpoints: (builder) => ({
        // get query:

        getUsers: builder.query({
            query: () => `/users`,
            providesTags: ['Users'],
        }),

        getPosts: builder.query({
            query: () => `/posts`,
            providesTags: ['posts']
        }),

        getTodos: builder.query({
            query: () => '/todos'
        }),
        addUsers: builder.mutation({
            query: ({...body}) => ({
                method: 'POST',
                url: '/users',
                body
            }),
            invalidatesTags: ['Users', 'posts']
        }),
        addPosts: builder.mutation({
            query: ({comment, id}) => ({
                method: 'PATCH',
                url: `/post/${id}`,
                body: JSON.stringify(comment)
            }),
            invalidatesTags: ['posts']
        })
    })
})

export const {useGetUsersQuery, useLazyGetUsersQuery, useAddUsersMutation, useGetPostsQuery, useLazyGetTodosQuery, useAddPostsMutation} = todoApi;