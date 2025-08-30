const CV = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">cv</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          selected experience, projects, and technical skills
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-accent pb-2">
            Education
          </h2>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground">
              University of California, Berkeley
            </h3>
            <p className="text-muted-foreground">
              B.A. Computer Science and Data Science (Applied Math & Modeling Emphasis)
            </p>
            <p className="text-sm text-muted-foreground">Graduating May 2027 • GPA: 3.75</p>
            <p className="text-sm text-muted-foreground">
              Selected coursework: Deep Neural Networks, Machine Learning, Agentic AI, Algorithms, Optimization
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-accent pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-foreground">Software Development Engineer Intern</h3>
              <p className="text-accent">Amazon Web Services — AWS Security Hub • Boston, MA</p>
              <p className="text-sm text-muted-foreground mb-2">May 2025 – Aug 2025</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Automated pre-prod cloud infra deployments with AWS CDK to generate security data.</li>
                <li>Cut deployment time from &gt;1h to seconds using Lambda and CloudFormation.</li>
                <li>Built multi-account pipelines simulating customer behavior in TypeScript.</li>
                <li>Added TTL cleanup for vulnerable resources in Java to ensure compliance.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">Contracted Machine Learning Research Engineer</h3>
              <p className="text-accent">Block (Square) • Oakland, CA</p>
              <p className="text-sm text-muted-foreground mb-2">Feb 2025 – May 2025</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Developed context strategies and MCP Server evals for an autonomous coding agent.</li>
                <li>Integrating sequential multi-agent context routing (see Chain-of-Agents by Google).</li>
                <li>Experimented with parallelized hierarchical multi-agent RAG using LangGraph.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">Machine Learning Engineer Intern</h3>
              <p className="text-accent">Digs • Vancouver, WA</p>
              <p className="text-sm text-muted-foreground mb-2">Jul 2024 – Oct 2024</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Designed ETL to annotate 5k images for LLM training; proposed GraphRAG accuracy wins.</li>
                <li>Rendered knowledge graphs with 12k+ entity relationships via Azure + SQL + GraphRAG.</li>
                <li>Optimized dataset generator with batching and robust error handling (−30% processing time).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-accent pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "TypeScript", "JavaScript", "SQL", "LaTeX"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Git", "Hugging Face", "LangChain", "LangGraph", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Azure", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-accent pb-2">
            Projects
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded border border-border">
              <h3 className="text-lg font-medium text-foreground mb-1">
                Vulnerability Detection for Vibe Coders — Anthropic × PearVC Hackathon (Top 10)
              </h3>
              <p className="text-muted-foreground mb-2">
                Built an MCP Server integrating with Claude Code CLI to statically analyze repos and retrieve secrets via a tool-calling, multi-agent hierarchical system.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "MCP",
                  "Claude",
                  "Static Analysis",
                ].map((t) => (
                  <span key={t} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-card rounded border border-border">
              <h3 className="text-lg font-medium text-foreground mb-1">
                All-Inclusive Health App — Berkeley × SkyDeck AI Hackathon (Finalist)
              </h3>
              <p className="text-muted-foreground mb-2">
                Built an AI app synced with watch data; processed 3M records in 3.5s to categorize and assess health risks via Bedrock-powered LLM diagnosis.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS Bedrock", "LLM", "Data Engineering"].map((t) => (
                  <span key={t} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="text-muted-foreground">
            For a detailed PDF version of my CV,{" "}
            <a
              href="/Sean_Tai_Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent hover:underline transition-colors"
            >
              download here
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default CV;
