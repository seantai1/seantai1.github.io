import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    id: "doing-ml-research",
    title: "actually doing ml research",
    date: "mar 8, 2026",
    content: [
      "i'm a few weeks into real ml research now and it's different from what i expected. the biggest surprise is how expensive everything is. training runs, evaluation, even just judging outputs costs real compute. i always heard my friends say they needed more GPUs and now i get it. the compute problem isn't abstract when you're watching your credits burn.",
      "i knew there would be a lot of reading but i underestimated how much. it feels like more than half my time is spent in papers. i kept wanting to read everything first, show up with a polished experiment idea, and then execute. but that's not how it works. you read as you go, run experiments at a bare minimum level to test the idea, and think about extensions after. the reading isn't prep before the research, it is the research, which I guess makes sense lol.",
      "claude code has shifted what matters in a weird way. the coding itself doesn't need to be polished anymore, so the hard part is entirely generating good research directions. brainstorm, brainstorm, brainstorm. i've never been great at that, my hackathon ideas have always been pretty mid, and these past few weeks have really tested that. talking to people and getting a diversity of opinions has been one of the best ways to spark something, and being more open and communicative is a real goal of mine now.",
      "research is also lonely in a way i didn't anticipate. you're sitting with your own thoughts a lot, not coworking or building alongside people the way you do at a startup or a job. it's a different kind of work, slower (?), more uncertain, no instant gratification from shipping something.",
      "one thing that's been genuinely nice though, everyone in ai safety is incredibly sweet and supportive. the community doesn't feel competitive or gatekeepy the way parts of ml can seem from the outside. that's made the transition easier even when the work itself is hard.",
    ],
  },
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
          this is for a class btw! (cdss 94: thoughtful ai systems)
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
