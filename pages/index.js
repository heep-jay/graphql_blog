import { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Categories,Header, Loader, PostCard, PostWidget } from '../components';
import FeaturedPosts from '../sections/FeaturedPosts';
import { getPosts } from '../services/index'

const Home = ({posts}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;

  }
  return (
    <div className="lg:container mx-auto lg:px-10 px-2 mb-8">
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
    },
    revalidate: 10,
  }
}
