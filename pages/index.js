import SearchAppBar from'../components/SearchAppBar'
import CreateCardMenu from '../components/CreateCardMenu'
import OutlinedCard from '../components/OutlinedCard'
import {getAllPostsData} from '../lib/posts';
import Head from 'next/head'

export default function Home({posts}) {
  return (
   <div>
    <Head>
      <title>Task_Manager</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SearchAppBar />
    <div className="inline-block">
        {
          posts && posts.map((post)=><OutlinedCard key = {post.id} title={post.title} date={post.created_at} body={post.lang} id={post.id}/>)
        }
    </div>
    <CreateCardMenu />
   </div>
  )
}

export async function getStaticProps(){
  const posts = await getAllPostsData()
  return {
    props:{posts},
    revalidate:3,
  }
}