import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Categories,Header, PostCard, PostWidget } from '../components';
import FeaturedPosts from '../sections/FeaturedPosts';
import { getPosts } from '../services/index'

const Home = ({posts}) => {

  // console.log(posts)
  // const posts = [
  //   {
  //     title: "Web Development",
  //     excerpt: "Now, this link among others explains that Vader was played by three performers: Christensen, Dmitrious Bistrevsky, and Tom O’Connell. And, in addition, Vader is voiced by James Earl Jones."
  //   },
  //   {
  //     title: "App Development",
  //     excerpt: "Now, this link among others explains that Vader was played by three performers: Christensen"
  //   },
     
  //   ]
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, i) => (
            <div>
             <PostCard key={i} post={post.node}/>
            </div>
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Categories/>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || []; 



  return {
    props: {
      posts
    }
  }
}
