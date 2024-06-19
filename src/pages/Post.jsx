import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-4xl p-4 h-full">
                <Container>
                    <div className="w-full flex justify-center mb-2 relative border rounded-xl p-1">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl h-[30rem] w-full object-cover"
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgcolor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgcolor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-6">
                        <h1 className="text-2xl font-bold">Book: {post.title}</h1>
                    </div>
                    <div className="w-full mb-6">
                        <h2 className="text-xl font-bold">Author: {post.auther}</h2>
                    </div>
                    <div className="w-full mb-6">
                        <h2 className="text-xl font-bold">Publication Date: {post.publication}</h2>
                    </div>
                    <div className="browser-css">
                        {parse(`Description: ${post.content}`)}
                    </div>
                </Container>
            </div>
        </div>
    ) : null;
}
