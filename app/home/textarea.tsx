import { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  text: string;
  time: string;
  replies?: Comment[];
}

export default function CommentBox() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState<string>('');
  const [profileName, setProfileName] = useState<string>('');

  const handlePost = () => {
    if (!input || !profileName) return;

    const newComment: Comment = {
      id: Date.now(),
      name: profileName,
      text: input,
      time: new Date().toLocaleString(),
      replies: [],
    };

    setComments([newComment, ...comments]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>💬 Comment Box</h2>
      <input
        type="text"
        placeholder="Your name"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
      />
      <textarea
        placeholder="Write a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', height: '80px', padding: '8px' }}
      />
      <button onClick={handlePost} style={{ marginTop: '8px' }}>Post Comment</button>

      <div style={{ marginTop: '20px' }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <strong>{comment.name}</strong> <span style={{ color: '#888' }}>({comment.time})</span>
            <p>{comment.text}</p>
            {/* Future reply UI can go here */}
          </div>
        ))}
      </div>
    </div>
  );
}