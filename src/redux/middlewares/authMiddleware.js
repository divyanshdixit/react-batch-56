import { lazy, useCallback } from "react"

const authMiddleware  = (store) => (next) => (action) => {
    if(action.type === 'auth/loginSucess'){
        localStorage.setItem('token', action.payload.token)
    }
    return next()
}

React.memo(Mycomponent) => EnhanceVersionMYCompnent

/*

webp jepg 
hoc , useffect(), virtual dom (reconsiclation), performace optimation (useMemo, useCallback, React.memo, lazy with dyanmic import, code-spliting, caching, deduplication )
props , context api, redux-toolkit, 
api fetching =>rtk query 
rtk query(query, lazy, mutuation, caching, deduplication) vs creatAsyncthunk, middlewares
react routing (csr, ssr)
outlet, suspense

injectEndPoints => large apps (used to split api by feature)

baseApi.injectEndPoints({
endPoints: () => ({
    query: () => '/user/cart'
    })
    })

    selectFromResult: {}

onQueryStarted  => clg('start time', new Date().now())

transformResponse => (res) => res.data * 2 => 20

retry 
*/