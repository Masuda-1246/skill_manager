import { useRouter } from "next/router";
import {getAllPostsIDs, getPostsData} from "../../lib/posts"
import SearchAppBar from "../../components/SearchAppBar"
import Divider from '@mui/material/Divider';


export default function PostData({post}){
  const router = useRouter();
  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <SearchAppBar />
      <div>
        <h1>{post.title}</h1>
        <p>作成日:{post.created_at}</p>
      </div>
      <Divider />
      <p>使用した言語:{post.lang}</p>
      <p id='url'>URL:<a href={post.link}>{post.link}</a></p>
      <p>{post.body}</p>
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
