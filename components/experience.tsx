"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "AI Researcher",
    company: "Banking Analytics Lab",
    period: "May 2025 - Present",
    description: "Conducting applied machine learning research focused on credit risk modeling, LLM-based explanation generation, and high-performance computing.",
    achievements: [
      "Built an explainable credit risk model by combining Graph Attention Networks and XGBoost, using GNNExplainer and SHAP to identify key drivers of loan default prediction.",
      "Fine-tuned quantized LLMs (7B+) on synthetically generated, prompt-engineered JSON explanations",
      "Accelerated model training by 3.7× using PyTorch DistributedDataParallel (DDP) on 4× A100 GPUs with CUDA and SLURM on the Graham and Narval clusters.",
      "Engineered non-anthropomorphic, pipeline-specific prompts using Chain-of-Thought, subgoal structuring, and counterfactual reasoning to generate faithful and accessible model explanations.",
      "Designed a randomized multi-round Qualtrics study to evaluate LLM-generated explanations with controlled exposure across credit-risk professionals and non-experts."
    ],
  },
  {
    title: "Vice President, Projects",
    company: "Western Artificial Intelligence",
    period: "June 2025 – Present",
    description: "Lead 8 project managers and 25+ developers delivering AI research for CUCAI 2026. Oversee strategy, paper review, and ensure technical, ethical, and legal alignment.",
    achievements: [
      "Directed 12+ CUCAI-selected projects, including: Conversational AI for Law (LangGraph/LangChain), Portfolio Optimization with RL and real-time financial feeds, ECG Classification via agentic LLMs and vector search, and LLM-based Misinformation Detection bots.",
      "Reviewed all submitted papers and provided technical and ethical feedback.",
      "Advised teams on project design, evaluation methods, and research framing."
    ],
  },
  {
    title: "Project Manager",
    company: "Tech for Social Impact",
    period: "Dec 2024 – July 2025",
    description: "Led the redesign of Fund Homecare Canada’s website, transitioning from WordPress to a React-based frontend to improve maintainability and user experience for families seeking in-home palliative care.",
    achievements: [
      "Managed an Agile team using Jira, GitHub Actions, and Scrum to deliver a production-ready site under tight deadlines.",
      "Led two cross-functional Agile teams (7 developers total), leveraging Jira and GitHub Actions to boost delivery velocity by 30% across consecutive sprints",
      "Strengthened stakeholder alignment and communication to ensure high-impact delivery in a real-world nonprofit setting."
    ],
  },
  {
    title: "Website Developer",
    company: "Girls’ Hockey Non-Profit",
    period: "Sept 2024 – Jan 2025",
    description: "Developed a full-stack web platform to modernize operations and improve engagement for a youth sports organization.",
    achievements: [
      "Replaced outdated Google Forms with a responsive web app built using Angular, ExpressJS, and PostgreSQL, boosting participation and engagement among girls in hockey.",
      "Implemented account management and e-commerce functionality to streamline membership registration and reduce manual admin workload.",
      "Improved accessibility and UX across devices, enabling easier participation for players, parents, and coaches."
    ],
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">Experience</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-6 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>

                <div className="flex-1 backdrop-blur-sm bg-black/20 border border-gray-800/50 p-6 hover:border-gray-600/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                    <h3 className="text-xl font-bold font-mono text-cyan-300">{exp.title}</h3>
                      <p className="text-gray-400 font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                        <span className="text-white flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
