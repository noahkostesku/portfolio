"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Pin } from "lucide-react"
import { useState, useEffect } from "react"

const categories = ["All", "AI", "Prompt Engineering", "Thoughts"]

const posts = [
  {
    id: "theoretical-spectral-graph-framework-entity-canonicalization",
    title: "A Theoretical Spectral Graph Framework for Entity Canonicalization in AI Search",
    excerpt: "A spectral graph–theoretic model that explains how AI search systems canonically represent entities by smoothing embeddings over a semantic graph, quantifying stability, drift, and competitive interference",
    category: ["AI", "Thoughts"],
    date: "2025-12-05",
    readTime: "18 min read",
    image: "/images/blog-images/specgraph.png",
    pinned: true,
    content: `[PDF:/pdfs/SpectralGraph.pdf]`,
  },
  {
    id: "why-best-marketers-scale-bad-products",
    title: "Why the Best Marketers Learn to Scale Bad Products",
    excerpt: "The strongest marketers don't come from polished environments—they emerge from messy products, broken processes, and markets that make you fight for every inch.",
    category: ["Thoughts"],
    date: "2025-11-15",
    readTime: "9 min read",
    image: "/images/blog-images/scaleBadProducts.png",
    pinned: true,
    content: `
# Why the Best Marketers Learn to Scale Bad Products

There's a common misconception in the startup world: that the strongest marketers are the ones who come from polished environments; the unicorns, the hypergrowth SaaS companies, or the teams with perfect funnels and top-tier funding behind them. These marketers or growth leaders often get celebrated because they were in the same room when something took off.

But the places that produce great marketers are almost never the glamorous ones. Over and over again, the best operators tend to come out of messy products, broken processes, and markets that make you fight for every inch.

This isn't related to praising bad products. It's just recognizing that your fundamentals get sharper when things aren't easy, when the product isn't carrying the momentum for you, when conversions don't happen on their own, and when you have to earn customer trust again and again instead of inheriting it.

## Marketing Instincts Only Friction Can Develop

If you are responsible for a product with real flaws, you do not get to coast. You cannot rely on brand equity, assume the market will simply understand the story, and you cannot cover confusion with a little design polish. You end up treating every part of the job, including messaging, creative, and operations, as genuinely important.

When the product is not carrying you, your messaging tightens up quickly. Vague ideas stop working. Generic lines fall apart immediately. Anyone who has tried to fix a leaky onboarding flow knows this feeling. The story has to be simple and honest, and it needs to match what customers will actually encounter. Even small friction points pile up much faster than you expect.

The operations side becomes its own lesson. When the product is rough around the edges, you deal with more objections, odd situations, and customers reacting in ways you did not plan for. You end up tightening funnels simply because the leaks become obvious. Segmentation also gets sharper, since bringing in the wrong people turns into churn fast. Feedback has to move quicker too. Slow teams fall behind. You usually do not learn any of this inside companies where strong product market fit covers up most mistakes.

Leadership gets hit with the same reality. If customers are unsure and the team feels stretched, marketers have to talk straight, manage expectations, and think about long-term trust instead of quick wins. Those moments end up shaping people more than anything that happens in a comfortable or polished environment.

## The Paradox of Good Product Environments

Marketers who grow inside companies with strong product market fit often walk away with lessons that do not hold up anywhere else. When the product already matches what the market wants and the company has real momentum, almost anything you try will look like it works.

This is where the resume inflation shows up. Someone steps into a role, gets flooded with inbound interest, runs a simple framework, watches the numbers rise, and walks out thinking their process was the engine. Then they join a team that does not have those tailwinds. They try the same moves and suddenly nothing responds the way it used to.

The problem is not their ability, it's the diagnosis. Good product environments create momentum, while hard product environments reveal who can build it from scratch.

## A Real-World Example of What Hard Environments Produce

Some of the strongest marketers in the startup world came out of places where the product could not keep up with the growth targets. In a few well-known cases, including ones covered in [TechCrunch](https://techcrunch.com/2024/05/02/they-thought-they-were-joining-an-accelerator-instead-they-lost-their-startups/), operators were asked to build revenue systems that hit seven figures in steady monthly sales while the internal structure around them was falling apart.

In those situations, it was not unusual to watch a marketing and sales engine jump from roughly $60K in MRR to well over $1M within two years. That is roughly a fifteen to twenty times increase. None of it came from product momentum. It came from acquisition systems that were designed to work even when the product was barely holding together.

Teams built outbound engines that could spot new startups almost as soon as they appeared online. They tracked incorporation records, scraped early web activity, and watched for Reg CF and Reg D filings to catch new fundraising the moment it happened. At peak performance, these engines reached a huge share of newly formed companies and often beat competitors simply by being faster and more accurate in how they targeted intent.

The operators behind these systems also tended to build teams that stayed close long after the company changed direction. You can still see connections between people from those years showing up in later roles and collaborations, which says a lot about the kind of leadership required to keep a group steady when everything around them felt unstable.

## Why Scaling a Flawed Product Builds Elite Operators

People who come up in tough environments usually end up with skills they never planned on learning. A lot of it starts with simply figuring out how to get attention when nobody is already looking your way. They learn to spark demand from scratch, guess at early signals, and talk to the market before the market even knows what it wants. Over time, they stop thinking about inbound and outbound as separate things and just build the mix that delivers results.

They also get used to noticing when something feels off. Sometimes it is a weird drop in the numbers, other times it is the moment where customers pause for no obvious reason. They start poking around those spots, rereading a line on a page or testing a small part of the flow until they figure out what is throwing people off. After a while, they can see how these small bits end up shaping the way someone decides to buy.

The data work usually shows up next, mostly because there is no other way to move forward. Instinct helps for a bit, then it stops being enough. So they start checking everything. They look at groups side by side, run the plain boring reports, and slowly figure out what is actually happening instead of what they hoped was happening. Most people never dig that deep unless the job basically forces them into it.

After a while, they also learn how to deal with the rough days. That part never comes from easy environments. When you are working on something that still feels half-finished, there are more surprises, more things breaking, and plenty of moments where you just have to make a call because the original plan fell apart. The people who make it through that usually walk away with a steadiness they did not even know they were building.

## What Founders Get Wrong When Hiring Marketers

A lot of founders put too much weight on big-name companies and not enough on people who learned their craft in harder places. It is easy to assume that anyone who worked at a well-known company must be exceptional. But a strong product can hide a lot of weak fundamentals, and it happens more often than most people admit.

A better rule of thumb is pretty simple: the person who managed to grow a messy or difficult product is usually the one who can scale a great one. They have already done the hard part.

People who come from those tougher setups know how to build things without relying on brand pull or automatic demand. They are quicker at spotting bottlenecks, adjusting to markets that are not ready yet, and keeping the team steady when the environment is volatile. And once they finally get to work with a product that actually has momentum, their impact tends to multiply fast.

## Why This Matters in the Era of AI Search

The way people get found online has shifted a lot in the last few years. What used to be a simple SEO game is now driven by large models trying to understand what a page or a brand is actually saying. It is less about crawling and counting keywords and more about how all of your content fits together across the web. Discovery does not follow the old rules anymore. It moves around depending on how the system makes sense of what you put out there.

In this space, pushing out more content does not really help the way people think it does. What matters is whether everything you say feels like it belongs together. A lot of the old keyword habits do not work anymore, and companies that try them now end up confused about why nothing is moving. These systems look for information that lines up between different places, and if your brand feels scattered or mixed up, it gets pushed aside.

People who came up in rougher environments usually handle this change better than most. They already know how to explain things in plain language when things are chaotic, and they do not freeze when the market changes direction. They adjust fast because they are used to nothing going smoothly. That ends up helping a lot with AI search. The brands that stand out now are usually the ones that can talk about what they do in a clear, steady way, even when everything around them keeps changing.

## The Next Decade Belongs to Operators Built Under Pressure

As AI changes how people find information, the companies that break through will be the ones that speak clearly and keep their message consistent across everything they publish. Models need clean signals, not noise. And the teams that will handle this best are the ones led by marketers who already know how to build growth machines without any built-in advantages.

Not the people who stepped into polished funnels, the ones lifted by a strong product or the ones whose playbooks only worked because momentum carried them.

The edge goes to the operators who figured out how to grow something that was fighting them the whole time.

Anyone can look good in an easy environment. Very few can do it when the conditions are rough.
    `,
  },
  {
    id: "understanding-generative-ai",
    title: "Understanding Generative AI: From Neural Networks to Transformers",
    excerpt: "A comprehensive guide to generative AI, exploring the mechanisms behind modern AI systems and how they mimic human cognition to create new content.",
    category: ["AI", "Thoughts"],
    date: "2025-05-26",
    readTime: "12 min read",
    image: "/images/blog-images/GenAITransf.png",
    pinned: true,
    content: `
# Understanding Generative AI: From Neural Networks to Transformers

## Introduction

There's a lot of unsettling energy these days about AI taking over the world. Unfortunately, the way things are going, it wouldn't be too surprising if that claim turned out to be true—especially if AI keeps making our essays sound like Shakespeare wrote them. Jokes aside, AI isn't some magic alchemy of spells, and it certainly won't replace you. AI works best as your creative partner; one that should be guided by proper ethical standards and human imagination.

Due to the recent swarm of information about Artificial Intelligence and its related disciplines, this article aims to clarify the confusion surrounding generative AI and the processes behind how it generates different modalities of data in lightning speed. We'll discuss the mechanisms that paved the way for generative AI, offering a brief look into its inner workings and the powerful techniques that drive it. Following this, we'll discuss how you, the reader, can incorporate this new knowledge into your own careers, as well as a challenge at the end to strengthen your prowess in this dynamic field.

## Getting the Facts Straight: Clarifying the Nuances

I'm confident you've heard words such as AI, generative AI, LLMs, etc. thrown around loosely, but what does that all mean? AI, or artificial intelligence, refers to computing systems designed to model human cognition. These systems can perform tasks like learning, problem-solving, and decision-making by simulating human thought processes, unlike traditional computers that simply follow predefined instructions.

Generative AI is a subset of artificial intelligence that performs generative tasks (hence the name), which involve creating new content such as text, images, or videos based on patterns learned from large datasets. These tasks rely on mathematical frameworks trained on big data to produce multimodal outputs. Think of these models as 'digital brains' that learn patterns from data and combine them to create new content. The main idea is generative AI is not only an analysis paradigm, but it also produces new outputs by recombining patterns learned from the data it's given.

Large Language Models (LLMs) are another subset of AI, particularly a type of generative AI that are designed to understand and process natural language. Various popular ones are OpenAI's GPT-4 (used in ChatGPT), Meta's Llama 4, or Anthropic's Claude 3.7 Sonnet. Imagine AI as an entire workforce in a company, generative AI as the creative department, and LLMs like GPT-4 as the star copywriters of the department; those who curate the most attractive text for the public to read. The models behind these tools are like the years the copywriters put into their training to master the art of language. All four of these topics are interconnected but serve slightly different purposes relative to the AI space.

## Your Brain Plays an Important Role

Now that the terminology is set straight, we can dive deeper into how some popular generative AI models works. Before we step into the technical, let's take a step back and see where the inspiration to make such intricate methodologies came from.

A question I like to ask others to spark their interest in AI is, "When you look at me, how do you know it's me?." This question may sound slightly trivial, but when you stop and reflect on it, the question can be quite daunting. Regardless of what I am wearing, the setting I'm in, or whether I came back from vacation with a slight tan, people who are familiar with me can still recognize me in a split second. Our brain naturally filters and ranks sensory input based on relevance, and that prioritization drives our response, for example, identifying me as the person you're currently observing. The brain can be thought of as a sophisticated network, capable of processing, filtering, and adapting to new information. By studying how the brain learns, researchers have discovered clever ways to design models that mimic this behaviour. Therefore, if the goal were to mimic how a human generates text in writing or other forms of data, it makes the most sense to mimic the "architecture" of the brain which can be represented mathematically. This is the idea of neural networks, which serves as the backbone for many modern generative AI models. Advancements in this field led to the development of Transformer architectures, which will be discussed in the later sections.

## Artificial Networks: Mimicking the Mind

If we want to mimic how the brain works, wouldn't it make sense to emulate its structure and encode its main components into a mathematical architecture? That is one of the main ideas behind how many generative AI models and broader fields of AI operate. Without getting into too much biology, engineers attempt to capture psychological processes such as the evaluation of sensory inputs, neuron communication (like two people receiving information from each other) models of contextual processing, reasoning, and more. The combination of these and other processes is imitated and integrated into the design of architectures that aim to emulate aspects of human thought.

## Attention Was All That We Needed

Narrowing down our topic to generative AI, a major milestone in the field was marked by Google's 2017 paper, Attention Is All You Need. This paper revealed key components that earlier models, such as GRUs (Gated Recurrent Unit Networks) and LSTMs (Long Short-Term Memory Networks), were missing: namely, the ability to accurately retain long chains of thought and maintain contextual understanding, which limited their effectiveness in generating coherent long-form content or responding with nuance in complex tasks. Earlier models often struggled because they processed inputs sequentially, making it difficult to capture long-range dependencies and selectively filter relevant context.

To overcome these limitations, researchers at Google proposed the Transformer, an architecture that captures context by attending to distinct parts of the input through a mechanism called self-attention - a process where the model evaluates how much each word in the input relates to others (like how ChatGPT processes a prompt). This mechanism is enhanced by multi-headed self-attention, where multiple "heads" focus on different parts of the input simultaneously for richer understanding.

![Transformer Architecture Overview proposed by Google Researchers](/images/blog-images/TransformerArchitectureGoogle.png)

To understand how Transformer architecture works, consider the following analogy. Imagine standing in a room surrounded by hundreds of people, each speaking to you at once. Before you can begin to process what these people are saying, you need to organize the information: you assign each voice a unique position based on where it is coming from. This acts like positional encodings, helping you keep track of the order of information.

Next, instead of dealing with raw voices, you convert what each person says into a simpler, structured form, like translating it into numbers you can easily work with. This process resembles embedding the words into a numerical space that the Transformer can operate on, since it only understands numbers. As you listen, you instinctively ask: "What am I hearing?" (queries), "What information is being offered?" (keys), and "What should I remember?" (values). These are the queries, keys, and values inside the self-attention mechanism, helping you decide where to focus your attention.

Since you can think about multiple conversations at once, your brain creates different strategies for listening; one for tone, one for important words, one for emotional cues. This is like using multiple heads in multi-headed self-attention, allowing the Transformer to analyze various aspects of the input in parallel. After gathering and filtering the information, you process it more deeply to make sense of what you've focused on, like how each token passes through a small feed-forward network inside the Transformer to refine its meaning.

For example, consider a query like: "Why are there so many geese on Western University's campus in the spring?" When processed by a Transformer, each attention head might focus on different components of the sentence. One of them might attend to "so many geese," another to "Western University," and another to "in the spring." Just as your brain splits focus between tone, content, and context in a conversation, the model breaks the sentence down into parallel attention streams. Each of these is then refined through small feed-forward networks to build a complete understanding of the query, combining areas like wildlife behaviour, location, and seasonality to inform its response.

Once you have fully processed the information, you start forming a clear response, piecing together the most important parts. This resembles decoding and token prediction, where the Transformer generates the next word (token) based on everything it has understood so far.

Finally, before speaking back, you need to translate your structured understanding back into natural language (numbers to letters) just like the Transformer maps its internal numerical predictions back into readable text.

And like any conversation, you repeat this cycle (listening, focusing, processing, responding) layer after layer, until the whole interaction is complete. In a way, this process mirrors how our brains filter, prioritize, and respond to information in real time. This is the power of the Transformer. Today, companies like OpenAI and Meta build their most advanced models on Transformer architectures. As AI continues to evolve, these ideas are likely to be foundational in driving innovation for various industries such as healthcare, education, and many others. With careful decision-making, AI can serve as a tool to support human work rather than replace it. How we apply these technologies will determine their impact: AI could either displace workers through automation or enhance human capabilities to create new opportunities (Acemoglu & Johnson, 2023). Generally, AI should be used to enhance work and never cheat, plagiarize, or compromise integrity.
    `,
  },
  {
    id: "cluely-system-prompt-analysis",
    title: "The Hidden Gaps in Cluely's System Prompt: When AI Meets Human Complexity",
    excerpt: "A deep dive into Cluely's leaked system prompt reveals sophisticated engineering but exposes critical blind spots in handling real-world human interactions.",
    category: ["AI", "Prompt Engineering"],
    date: "2025-07-04",
    readTime: "7 min read",
    image: "/images/blog-images/Cluely.avif",
    pinned: true,
    content: `
# The Hidden Gaps in Cluely's System Prompt: When AI Meets Human Complexity

A couple weeks ago, a snippet was released of what is alleged to be the very system prompt Cluely uses to power its software.

At first glance, the prompt looks expertly crafted, clearly the product of many careful hours. But on closer inspection, there are nuanced gaps between Cluely's goals and the realities of high-stakes human interaction.

![ Snippet of Leaked Cluely System Prompt](/images/blog-images/LeakedSysPrompt.png)

## What Cluely gets right

The prompt reveals quite sophisticated engineering: a "live-meeting co-pilot" processing both screen content and audio history, with smart confidence thresholds (answers when ≥ 50% sure a question was asked, and, if < 70% sure who's speaking, errs on the side of caution). It nicely handles real-world mess - garbled speech, speaker mislabeling ("Me:" vs. "Them:"), and fragments. Its domain expertise also shines through structured frameworks for behavioural (STAR), financial (profitability trees), and creative responses.

And more of course!

## The Real Challenge: Context Switching

But here's where things get interesting. Consider two scenarios:

### Scenario 1: Final Round Interview

Cluely has detailed guidelines for technical questions, behavioural responses, and objection handling. But what happens when the conversation rapidly shifts contexts?

The prompt prioritizes answering questions "at the end of the transcript"—but real conversations don't always have clear endings. When an interviewer pivots mid-thought or asks a follow-up that blends technical and behavioural elements (e.g., "How did you debug the React issue, and what did you learn about teamwork?"), Cluely's hierarchy (question ➔ term definition ➔ conversation advancement) treats each bucket as mutually exclusive. Because of that, it may respond with only the technical fix and skip the teamwork insight, splitting a single blended question into two mismatched halves.

### Scenario 2: High-Stakes Big Deal Negotiation

Cluely includes specific objection handling protocols, but only in explicitly sales/negotiation contexts. The prompt states:

- "Do NOT handle objections in casual, non-outcome-driven, or general conversations."

This means subtle resistance in other scenarios (a date's hesitation, a colleague's skepticism) may not trigger Cluely's sophisticated handling mechanisms. Worse, it defaults to passive mode unless all conditions for action are met, making it hyperactive in structured settings but inert in ambiguous ones.

## Battle between confidence and competence

The most interesting gap isn't about confidence thresholds, rather it's about context recognition. Cluely has impressive domain-specific expertise, but the prompt shows blind spots in:

- Blended contexts (e.g., technical + interpersonal questions)
- Implicit objections (non-sales resistance)
- Over-triggering "unclear intent" mode (sub-90% confidence forces disengagement, even for valid-but-ambiguous queries)

The system prompt ironically seems *too* proactive in clear-cut scenarios (thanks to its strict priority system) but overly conservative in ambiguity (due to passive mode's exhaustive conditions)

If Cluely's mission is "Everything You Need. Before You Ask," the challenge isn't just technical accuracy or confidence calibration. Contextual fluidity is the next step and one the broader research community is actively working to solve. The prompt shows thoughtful engineering, but human interaction rarely fits into neat categories.

The product is strong. The prompt is clever. But the ultimate test will be whether it can handle the messy, multi-layered contexts where human judgment matters most, not just knowing what to say, but knowing when the rules need to bend.
    `,
  },
  {
    id: "anthropomorphic-vs-non-anthropomorphic-ai",
    title: "Anthropomorphic vs Non-Anthropomorphic AI: The Art of Contextual Agent Design",
    excerpt: "Exploring the nuanced decision-making process behind designing AI agents that either embrace human-like qualities or maintain pure utilitarian functionality.",
    category: ["AI", "Prompt Engineering", "Thoughts"],
    date: "2025-07-02",
    readTime: "5 min read",
    image: "/images/blog-images/AnthroNonAnthro.png",
    content: `
# Anthropomorphic vs Non-Anthropomorphic AI: The Art of Contextual Agent Design

I'm EXCITED to announce that AI won't take your job.

Unless you know a thing or two about prompt engineering — let's talk about it!

There's an interesting discussion in AI regarding the use of anthropomorphic versus non-anthropomorphic approaches when designing LLM agents or LLMs more broadly.

The "right" decision often involves nuance and subjectivity — should the model be designed to nurture human-like emotional connection or purely function as a utilitarian tool?

## Context Matters: Education vs Cybersecurity

Consider an agentic education system with principals, teachers, and students. In this case, prompts designed for "teacher" agents might benefit from incorporating human-like elements such as empathy and encouragement to reflect the needs of conscious and sentient entities like students. In such contexts, emotional resonance may take precedence over transparency and neutrality.

Now consider a cybersecurity response team. In this context, agents may necessitate a non-anthropomorphic or hybrid configuration with emphasis on an instrumental paradigm approach, where objectivity, consistency, and unambiguous communication take precedence over emotional resonance or relational depth.

## Systems-Level Thinking

When designing agents, we must think from both a holistic and atomistic point of view. What is my agent's core function? How does it integrate into a larger system? This type of systems-level thinking ensures that agents contribute meaningfully at both local and global levels.

Agents are capable of addressing specialized use cases when their design reflects contextual specificity and defined functional objectives. However, prompt engineering often remains constrained by the engineer's conceptual limitations and attention to detail. Whether prompting models like ChatGPT or embedding LLMs into workflows, performance is frequently capped by ad hoc strategies that lack a rigorous, system-level understanding of the task domain.

## The Double-Edged Sword

At the same time, over-engineering or excessive detail can become a double-edged sword ⚔️ — reducing adaptability or creating unintended complexity. It will be important to see how enterprises and AI startups evolve their prompting strategies to align agent behaviour more effectively with real-world context and operational demands.

The key lies in finding the right balance between anthropomorphic warmth and non-anthropomorphic precision, always guided by the specific context and intended function of the AI agent.
    `,
  },
  {
    id: "automate-redundant-tasks",
    title: "Automate or Waste Time: The Hidden Cost of Manual Repetition",
    excerpt: "Discover how automating redundant tasks can dramatically increase your productivity and free up mental energy for high-impact creative work.",
    category: ["AI", "Thoughts"],
    date: "2025-06-15",
    readTime: "4 min read",
    image: "/images/blog-images/Automate.png",
    content: `
# Automate or Waste Time: The Hidden Cost of Manual Repetition

If you aren't automating redundant tasks in your life, you're wasting huge amounts of time.

I'm sure you know that movie cliché where a student gets detention and has to write the same sentence 100 times on a chalkboard. We encounter similar tasks in our everyday life, and it's important that you start to notice it.

## A Real-World Example: Image Compression

Take a recent project I worked on: A client's website was loading images too slowly on mobile data, so I needed to decompress a bunch of image files stored across 8 different folders.

Yeah, I could have manually run and tweaked the same terminal command over and over again, copying, pasting, and moving files around. Why not use the tools around me and automate the process?

## The Automation Solution

I had images spread across 8 different folders, so here's what I did: I prompted the model by explaining what my directory structure looked like, what I wanted to accomplish, and how I wanted it done. I laid out the directory structure and asked it to generate three types of commands for each folder:

- One to compress the images
- One to delete the uncompressed versions from the target folder  
- One to move the compressed images into that folder

That meant 8 folders × 3 commands = 24 total. Instead of manually repeating the same process over and over, I just pasted those 24 commands into my terminal in VSCode—and the entire task was done in under 5 minutes.

## The Value Proposition

Automate redundant tasks. Your value as a team member will increase. The less time you spend on repetitive work, the more energy you can invest in high-impact problems that actually require creative thinking and decision-making.

The key insight? Identify patterns in your daily work and leverage automation tools to handle the repetitive parts. Your brain is your most valuable asset—don't waste it on tasks that can be automated.
    `,
  },
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState<string | null>(null)

  // Scroll to article when a post is opened
  useEffect(() => {
    if (selectedPost) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const el = document.getElementById("blog-title")
        const article = document.getElementById("blog-article")
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (article) {
          article.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        // Don't scroll to top - just scroll to article if it exists
      }, 100)
    }
  }, [selectedPost])

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter((post) => post.category.includes(selectedCategory))
  
  // Sort posts: pinned first, then by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const currentPost = selectedPost ? posts.find((post) => post.id === selectedPost) : null

  if (currentPost) {
    return (
      <div className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.button
            onClick={() => setSelectedPost(null)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono">Back to Blog</span>
          </motion.button>

          <motion.article
            id="blog-article"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg max-w-none"
          >
                          <div className="mb-8">
                <div className="flex items-center space-x-4 text-sm font-mono mb-4">
                  <div className="flex space-x-2">
                    {(Array.isArray(currentPost.category) ? currentPost.category : [currentPost.category]).map((cat: string, index: number) => (
                      <span key={index} className={`px-2 py-1 border shadow-[0_0_8px_rgba(0,0,0,0.2)] ${
                        cat === "AI" ? "border-cyan-500/30 text-cyan-300 bg-cyan-500/10 shadow-[0_0_8px_rgba(34,211,238,0.2)]" :
                        cat === "Prompt Engineering" ? "border-purple-500/30 text-purple-300 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.2)]" :
                        cat === "Thoughts" ? "border-blue-500/30 text-blue-300 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.2)]" :
                        "border-cyan-500/30 text-cyan-300 bg-cyan-500/10 shadow-[0_0_8px_rgba(34,211,238,0.2)]"
                      }`}>#{cat}</span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1 text-purple-300">
                    <Calendar className="w-3 h-3" />
                    <span>{currentPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-300">
                    <Clock className="w-3 h-3" />
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>
              </div>

            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: currentPost.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 id="blog-title" class="text-4xl font-light mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">${line.slice(2)}</h1>`
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-light mt-8 mb-4 text-gray-200">${line.slice(3)}</h2>`
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-light mt-6 mb-3 text-gray-300">${line.slice(4)}</h3>`
                    }
                    if (line.startsWith("```")) {
                      return line.includes("```") && !line.startsWith("```")
                        ? "</code></pre>"
                        : '<pre class="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code>'
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="text-gray-300 mb-2">${line.slice(2)}</li>`
                    }
                    if (line.startsWith("![") && line.includes("](") && line.endsWith(")")) {
                      const altText = line.match(/!\[(.*?)\]/)?.[1] || ""
                      const imagePath = line.match(/\((.*?)\)/)?.[1] || ""
                      return `<div class="my-8 text-center"><img src="${imagePath}" alt="${altText}" class="max-w-full h-auto rounded-lg border border-gray-800/50 mx-auto" /><p class="text-sm text-gray-500 mt-2 italic">${altText}</p></div>`
                    }
                    if (line.startsWith("[PDF:") && line.endsWith("]")) {
                      const pdfPath = line.match(/\[PDF:(.*?)\]/)?.[1] || ""
                      // If it's a local path (starts with /), use it directly. Otherwise, use Google Docs Viewer or direct URL
                      const pdfUrl = pdfPath.startsWith("http") 
                        ? pdfPath 
                        : pdfPath.startsWith("/")
                        ? pdfPath
                        : `https://docs.google.com/viewer?url=${encodeURIComponent(pdfPath)}&embedded=true`
                      return `<div class="my-8 w-full" style="height: 900px;"><iframe src="${pdfUrl}" class="w-full h-full border border-gray-800/50 rounded-lg" frameborder="0"></iframe></div>`
                    }
                    if (line.trim() === "") {
                      return "<br>"
                    }
                    // Process markdown links [text](url)
                    let processedLine = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
                    return `<p class="text-gray-300 leading-relaxed mb-4">${processedLine}</p>`
                  })
                  .join(""),
              }}
            />
          </motion.article>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">Latest Thoughts</h2>
          <div className="w-20 h-px bg-white mx-auto"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4 backdrop-blur-sm bg-black/20 border border-gray-800/50 p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-mono text-sm transition-colors ${
                  selectedCategory === category ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-400"
                }`}
              >
                #{category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sortedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group backdrop-blur-sm bg-black/20 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden cursor-pointer relative"
              onClick={() => setSelectedPost(post.id)}
            >
              {post.pinned && (
                <div className="absolute top-4 right-4 z-10 bg-amber-500/20 border border-amber-400/50 rounded-full p-2 shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                  <Pin className="w-4 h-4 text-amber-300 fill-amber-300" />
                </div>
              )}
              <div className="aspect-video overflow-hidden bg-gray-900/50">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className={`w-full h-full transition-all duration-300 ${
                    post.id === "theoretical-spectral-graph-framework-entity-canonicalization" 
                      ? "object-contain scale-90" 
                      : "object-cover"
                  }`}
                  onError={(e) => {
                    console.error("Image failed to load:", post.image);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>

                              <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs font-mono">
                    <div className="flex space-x-2">
                      {(Array.isArray(post.category) ? post.category : [post.category]).map((cat: string, index: number) => (
                        <span key={index} className={`px-2 py-1 border shadow-[0_0_6px_rgba(0,0,0,0.2)] ${
                          cat === "AI" ? "border-cyan-500/30 text-cyan-300 bg-cyan-500/10 shadow-[0_0_6px_rgba(34,211,238,0.2)]" :
                          cat === "Prompt Engineering" ? "border-purple-500/30 text-purple-300 bg-purple-500/10 shadow-[0_0_6px_rgba(168,85,247,0.2)]" :
                          cat === "Thoughts" ? "border-blue-500/30 text-blue-300 bg-blue-500/10 shadow-[0_0_6px_rgba(59,130,246,0.2)]" :
                          "border-cyan-500/30 text-cyan-300 bg-cyan-500/10 shadow-[0_0_6px_rgba(34,211,238,0.2)]"
                        }`}>#{cat}</span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-purple-300">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-300">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                <h3 className="text-xl font-bold font-mono group-hover:text-white transition-colors">{post.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>

                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2 text-sm font-mono pt-4">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
