const About = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">sean tai</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          i'm a computer science & data science student at uc berkeley, developer, and a huge fan of daily life
        </p>
      </div>

      <div className="space-y-6">

        <p className="text-muted-foreground leading-relaxed">
          i have an interest in anything under ai safety & alignment, applied ml, generative ai, and just building fun things :)
        </p>

        <p className="text-muted-foreground leading-relaxed">
          this website offers a glance of my professional identity, limited to what I find worth writing down.
        </p>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Experience</h2>
        
        <div className="relative">
        <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-muted"></div>
          
          <div className="space-y-8">
            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-accent mb-1">Today (Feb 2026)</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Continuing my studies
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                been really interested in alignment research, rl envs, and user agents recently. looking forward to this summer! doing some cool stuff
              </p>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2026 · Berkeley, CA</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                AI Safety Research Fellow at SPAR working on post-training/RL methods for mitigating sycophancy & reward hacking
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2025 · Berkeley, CA</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Researcher at Berkeley RDI working on agent evals for security patches
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2025 · Boston, MA</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Software Engineer Intern at Amazon Web Services {" "}
                <a
                  href="https://aws.amazon.com/blogs/security/how-to-prioritize-security-risks-using-aws-security-hub-exposure-findings/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  (AWS Security Hub)
                </a>
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2025 · Berkeley, CA</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Contracted ML Research Engineer at Block working on {" "}
                <a
                  href="https://block.github.io/goose/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  goose
                </a>
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2024 · Remote</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Machine Learning Engineer Intern at{" "}
                <a
                  href="https://digs.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  Digs
                </a>
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2024 · Berkeley, CA</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Software Engineer Intern at{" "}
                <a
                  href="https://wonderfil.world/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  Wonderfil
                </a>
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2022-2023 · Rocklin, CA</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Coding Instructor
              </h3>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
              <div className="text-sm text-muted-foreground mb-1">2022 · Remote</div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Research Intern at Stop AAPI Hate
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact</h2>
        <p className="text-muted-foreground">
          You can reach me at{" "}
          <code className="text-accent bg-muted px-1 py-0.5 rounded text-sm">
            sean.tai@berkeley.edu
          </code>{""}
          , or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/seanytai/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline transition-colors"
          >
            linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
