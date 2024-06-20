import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    
    if (posts?.length === 0) {
        return (
          <div className="flex justify-center items-center w-full py-8 mt-4 text-center h-[36rem]">
            <Container>
              <div className="p-2 w-full">
                <h1 className="text-5xl font-bold text-green-600 hover:text-gray-500">
                  Loading...
                </h1>
              </div>
            </Container>
          </div>
        );
    }
      
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex justify-center flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts