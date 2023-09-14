import React,{useEffect} from 'react'
import Form from './components/Form'
import Card from './components/Card'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts.js'

function App() {

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getPosts());
},[dispatch])

  return (
    <div class = "d-flex">
      <Form />
      <Card />
    </div>
  )
}

export default App