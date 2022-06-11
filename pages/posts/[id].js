import { useRouter } from "next/router";
import {getAllPostsIDs, getPostsData} from "../../lib/posts"
import SearchAppBar from "../../components/SearchAppBar"
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Image from 'next/image'

export default function PostData({post}){
  const router = useRouter();
  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <SearchAppBar />
      <div className="p-10">
        <Card sx={{ maxWidth:'auto', m:1 }}>
          <div className="p-5 m-3 justify-center">
            <p className="text-center text-3xl place-content-center">{post.title}</p>
            <p className="text-center">{post.created_at}</p>
          </div>
          <div className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500"></div>
          <div className="p-2 m-3">
            <p className="text-center text-1xl">使用した言語:{post.lang}</p>
          </div>
          <div className="p-2 m-3">
            <p id='url'className="text-center text-1xl" ><Image src="/images/GitHub.png" width={16} height={16}/> GitHub: <a href={post.link} className="underline decoration-solid hover:text-cyan-500 ">{post.link}</a></p>
          </div>
          <div className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500"></div>
            <div className="p-6 m-6">
              <p className="text-center">内容</p>
              <p className="text-center p-3 m-3">{post.body}</p>
            </div>
          <div className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500"></div>
          <div className="p-2 m-3">
            <p className="text-center ">Author : {post.author}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export async function getStaticPaths(){
  const paths = await getAllPostsIDs()
  return {
    paths,
    fallback:true
  }
}

export async function getStaticProps({params}){
  const post = await getPostsData(params.id)
  return {
    props:{
      post,
    },
    revalidate:3
  }
}
