"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { MessageCircle, ThumbsUp } from "lucide-react";

interface Comment {
  id: number;
  text: string;
  createdAt: string;
}

const Home: React.FC = () => {
  const [postText, setPostText] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [likes, setLikes] = useState<number>(0);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [hidden, sethidden] = useState<boolean>(false)

  const handlePost = (): void => {
    if (postText.trim() === "") {
      setError("This field is required");
    } else {
      setError("");
      toast("Post submitted!");
      setPostText("");
    }
  };

  const handleLikeClick = (): void => {
    if (likes === 0) {
      setLikes(1);
      toast("You liked");
    } else {
      setLikes(0);
      toast("Disliked");
    }
  };

  // const handleCommentToggle = (): void => {
  //   if (commentCount === 0) {
  //     setCommentCount(1);
  //     toast("Comment success");
  //   } else {
  //     setCommentCount(0);
  //     toast("Comment removed");
  //   }
  // };

  const handlePostComment = (): void => {
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      text: commentText,
      createdAt: new Date().toISOString(),
    };
    setCommentCount((one) => one + 1);

    setComments((prev) => [...prev, newComment]);
    setCommentText("");
  };

  const handleCommentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handlePostComment();
      hide(e);
    }
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);



  useEffect(() => {
    const storedcounts = localStorage.getItem("counts");
    if (storedcounts) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCommentCount(JSON.parse(storedcounts));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(commentCount));
  })

  const hide = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      toast("comment added");
    } else {
      setError("");
      toast("removed");

    }
  }

  function Hidden() {
    sethidden((prev) => !prev);
  }

  return (
    <div className="p-8">
      {/* Create Post Section */}
      <div className="bg-white p-5 rounded-3xl border">
        <h1 className="text-[18px] font-semibold tracking-wide">Create Post</h1>
        <div className="flex items-center pt-8 gap-4 h-[50px]">
          <Image
            src="/profile.png"
            alt="Profile image"
            width={50}
            height={90}
            className="rounded-full border border-greencol object-cover"
          />
          <h1 className="text-[18px] font-medium text-gray-800">sopia johnson</h1>
        </div>
        <div className="bg-white rounded-xl flex text-[15px] font-medium pt-5">
          <textarea
            placeholder="what's on your mind?"
            className="rounded-xl w-full py-3 sm:py-4 px-4 text-[14px] sm:px-5 md:w-[190px] lg:w-[290px] outline-none resize-none"
            rows={6}
            value={postText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value)}
          />
        </div>
        {error && <p className="text-[12px] text-red-500">{error}</p>}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="text-gray-400">Add to your post:</h1>
        
            <div className="flex ">
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center text-white rounded-full transition"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgDtbVl_6Yr-5YHmA5BmVpsHe1mamE0Mg1w&s"
                  className="w-5 h-5"
                  alt="icon"
                />

              </label>
              <input id="file-upload" type="file" className="hidden" />
               <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center text-white rounded-full transition"
              >
                 <img
                src="https://cdn-icons-png.freepik.com/512/2893/2893392.png"
                className="w-6 h-6 ml-2"
                alt="icon"
              />
                

              </label>
              <input id="file-upload" type="file" className="hidden" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-3 px-6 rounded-xl font-sansserif"
              onClick={handlePost}
            >
              Post Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-3xl border mt-4">
        <div className="flex items-center pt-8 gap-4 h-[50px]">
          <Image
            src="/profile.png"
            alt="Profile image"
            width={50}
            height={90}
            className="rounded-full border border-greencol object-cover"
          />
          <div className="flex flex-col text-start text-[18px] font-medium">
            <span>Sopia johnson</span>
            <span className="text-[10px] text-gray-400">1 year ago</span>
          </div>
        </div>
        <div className="w-full h-[100px] border-b p-8">
          <span className="text-gray-400">whats app</span>
        </div>
        <div className="flex gap-2 border-b py-2">
          <button onClick={handleLikeClick} className="flex items-center gap-2 text-gray-400 p-1">
            <ThumbsUp className="hover:text-purple-500" />
            {likes}
          </button>
          <button className="text-gray-400 flex items-center gap-2" onClick={Hidden} >
            <MessageCircle />
            {commentCount}
          </button>
        </div>

        {hidden && (
          <div>
            {comments.length > 0 && (
              <ul className="mt-4 space-y-2">
                {comments.map((c) => (
                  <li key={c.id} className="text-sm text-gray-700 border-b pb-2 p-4">
                    <strong>{new Date(c.createdAt).toLocaleString()}:</strong> {c.text}
                  </li>
                ))}
              </ul>
            )}

          </div>
        )}
        <div className="flex items-center gap-2 p-2">
          <Image
            src="/profile.png"
            alt="Profile image"
            width={30}
            height={10}
            className="rounded-full border border-greencol object-cover"
          />
          <textarea
            placeholder="comment something...."
            className="text-[14px] focus:outline-0 w-full mt-4"
            value={commentText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)}
            onKeyDown={handleCommentKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;