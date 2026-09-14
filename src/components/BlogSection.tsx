import React from 'react';
import { BookOpen, Clock3, CalendarDays } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  if (!posts.length) {
    return null;
  }

  return (
    <section
      id="blog-section"
      className="w-full bg-slate-50/70 dark:bg-slate-900/40 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#4A7C9D] dark:text-sky-300">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-normal tracking-wide">Technical Blog</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto">
            Notes and implementation guides from real-world data engineering and analytics work.
          </p>
          <div className="w-12 h-0.5 bg-[#4A7C9D]/30 dark:bg-sky-400/40 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-[#3B6982] dark:text-sky-300 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
                    <Clock3 className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{post.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{post.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
