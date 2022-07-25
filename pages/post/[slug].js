import React from 'react';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '../../services';
import { Categories, PostWidget, PostDetail, Author, Comments, CommentsForm, Loader } from '../../components'

const PostDetails = ({post}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className='lg:container mx-auto px-2 lg:px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
             <PostDetail post={post}/>
             <Author author={post?.author}/>
             <CommentsForm slug={post?.slug}/>
             <Comments slug={post?.slug}/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='lg:sticky relative top-8'>
                    <PostWidget slug={post?.slug} categories={post?.categories?.map((category) => category?.slug )}/>
                    <Categories/>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params?.slug);
    return {
      props: {
        post: data,
      },
      revalidate: 10,
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }