import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { bc_img1, bc_img2 } from "../image/index";
import { ID } from "appwrite";

function Home() {
  const [posts, setPosts] = useState([]);
  // for SearchBook
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  // console.log(posts)
  // yaha tak block

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      if (posts) {
        setResults(posts);
      }
    }
  }, [searchTerm]);

  // Search book
  const handleSearch = async () => {
    try {
      const filteredItems = posts.filter(
        (b) =>
          b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.auther.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // const books = await appwriteService.searchBooks(searchTerm);
      setResults(filteredItems);
      // console.log(books);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  //yaha tak block

  
  return (
    <>
      <div className=" w-full "> {/*// img and search function */}
        {/* <HeroSec /> */}
        <div
          className="relative h-[24rem] bg-cover bg-center bg-no-repeat"
          //  style={{ backgroundImage: `url('https://images.pexels.com/photos/25542627/pexels-photo-25542627/free-photo-of-woman-in-white-dress-sitting-in-window-and-reading-book.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>
          style={{ backgroundImage: `url(${bc_img1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <div className="">
              {/* <SearchBook /> */}
              <div>
                <input
                  type="text"
                  className=" h-16 w-[22rema] text-xl text-black font-bold flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 bg-indigo-100 opacity-60 "
                  placeholder="Search Somethings"
                  value={searchTerm}
                  onInput={(e) => setSearchTerm(e.target.value)}
                  onChange={(e) => {
                    handleSearch();
                  }}
                  // onChange={handleSearch}
                />
                {/* <button
                  className=" mx-2"
                  // type='submit'
                  onClick={handleSearch}
                >
                  Search
                </button> */}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Good Website to Book etc
            </h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Discover a vast collection of books, from the latest bestsellers
              to timeless classics. Enjoy easy browsing, seamless booking, and
              fast delivery at your fingertips.
            </p>
          </div>
        </div>
      </div>
       <div>   {/*//post nahi to please login */}
        {posts?.length === 0 ? (
          <div className=" w-full py-8 mt-4 text-center">
            <Container>
              <div className="flex flex-wrap">
                <div className="p-2 w-full">
                  <h1 className="text-2xl font-bold hover:text-gray-500">
                    Login to read Posts
                  </h1>
                </div>
              </div>
            </Container>
          </div>
        ) : null}
      </div>
      <div className="w-full py-4">     {/*//post content */}
        {results?.length > 0 ? (
          <Container>
            <div className="flex justify-center flex-wrap">
              {results.map((book) => (
                <div key={book?.$id} className="p-2 w-1/4">
                  {/* console.log({book.$id}) */}
                  <PostCard {...book} />
                </div>
              ))}
            </div>
          </Container>
        ) : (
          <Container>
            <div className="flex justify-center flex-wrap">
              {posts.map((post) => (
                <div key={post?.$id} className="p-2 w-1/4">
                  {/* console.log({post.$id}) */}
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        )}
      </div>
    </>
  );
}

export default Home;
