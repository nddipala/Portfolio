import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "1",
    title: "What Are AI Agents? (And Why Everyone's Talking About Them)",
    summary: "Explore how autonomous AI agents like AutoGPT and BabyAGI are revolutionizing workflows across industries.",
    date: "June 1, 2025",
  },
  {
    id: "2",
    title: "n8n Automation in 2025: Beyond Zapier & Make",
    summary: "Discover how n8n is becoming the open-source backbone of AI-powered automation pipelines.",
    date: "June 8, 2025",
  },
  {
    id: "3",
    title: "Mastering LangChain: The Future of Context-Aware AI Apps",
    summary: "LangChain makes it easy to build intelligent LLM chains with tools, memory, and agent control.",
    date: "June 15, 2025",
  },
  {
    id: "4",
    title: "Building Scalable AI Apps with RAG and Vector Databases",
    summary: "Learn how RAG architectures combine vector search and LLMs to enable domain-specific chatbots and Q&A.",
    date: "June 22, 2025",
  },
  {
    id: "5",
    title: "Top 5 AI Tools Developers Should Learn in 2025",
    summary: "From OpenAI to Pinecone, see which tools every AI developer should master this year.",
    date: "June 29, 2025",
  },
  {
    id: "6",
    title: "AI Agents in Enterprise: Use Cases & Integration Strategies",
    summary: "How enterprises are adopting AI agents for compliance, automation, and customer support.",
    date: "July 6, 2025",
  },
  {
    id: "7",
    title: "Understanding Multi-Agent Systems in AI",
    summary: "Learn how multiple AI agents coordinate to solve complex problems in smart cities and robotics.",
    date: "July 13, 2025",
  },
];

const BlogList = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Blog
        </h2>
        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {blog.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{blog.summary}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
