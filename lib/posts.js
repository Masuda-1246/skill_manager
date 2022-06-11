import fetch from "node-fetch";

const SERVER_URL = "http://127.0.0.1:8000/"

export async function getAllPostsData(){
  const res = await fetch(new URL(`${SERVER_URL}api/post`))
  const posts = await res.json()
  return posts
}

export async function getAllPostsIDs(){
  const res = await fetch(new URL(`${SERVER_URL}api/post`))
  const posts = await res.json()
  return posts.map((post)=>{
    return {
      params:{
        id: String(post.id) 
      }
    }
  })
}

export async function getPostsData(id){
  const res = await fetch(new URL(`${SERVER_URL}api/post/${id}`))
  const post = await res.json()
  console.log(post)
  return post
}