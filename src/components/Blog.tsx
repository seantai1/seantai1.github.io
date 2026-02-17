import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    id: "rl-for-language-models",
    title: "rl, feedback, and the optimization target problem",
    date: "feb 12, 2026",
    content: [
      "lately i've been thinking about RL for language models as a problem of turning human judgment into something a computer can actually optimize. in math or code it works cleanly because you can check if the answer is right. but most things we want models to help with aren't like that.",
      "advice, taste, safety decisions, even \"is this a good explanation\" — all live in a space where we can compare outputs but can't write a rule for what makes them good.",
      "so a lot of modern techniques end up being variations of the same idea: self-training, preference models, model-as-judge, scalable oversight. we keep trying to distill vague evaluation into a training signal.",
      "the catch is optimization pushes hard on whatever signal you give it. if the signal tracks truth the model gets reliable, if it tracks style or agreement the model gets persuasive instead.",
      "it makes me think progress here is less about better RL algorithms and more about figuring out how to learn from feedback that humans themselves can't fully specify.",
    ],
  },
];

const Blog = () => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = posts.find((p) => p.id === selectedPostId);

  if (selectedPost) {
    return (
      <div className="space-y-8">
        <div>
          <button
            onClick={() => setSelectedPostId(null)}
            className="text-accent hover:underline transition-colors duration-200 text-sm mb-6 inline-flex items-center gap-1"
          >
            ← back to posts
          </button>
          <h1 className="text-2xl font-bold mb-2 text-foreground">
            {selectedPost.title}
          </h1>
          <div className="text-sm text-muted-foreground">
            {selectedPost.date}
          </div>
        </div>

        <div className="space-y-4">
          {selectedPost.content.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">blog</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          thoughts and things
        </p>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => setSelectedPostId(post.id)}
            className="w-full flex justify-between items-center p-3 bg-card rounded border border-border hover:border-accent/50 transition-colors duration-200 text-left"
          >
            <div className="font-medium text-foreground">{post.title}</div>
            <div className="text-sm text-muted-foreground whitespace-nowrap ml-4">
              {post.date}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
