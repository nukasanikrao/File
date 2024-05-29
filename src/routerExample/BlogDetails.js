import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    let {id, username} = useParams()
    console.log(useParams())
  return (
    <div>BlogDetails: {id} {username}</div>
  )
}
