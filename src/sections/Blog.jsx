import { motion as Motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import { blogPosts } from '../lib/blogData'

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Blog y consejos</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Aprende marketing digital gratis
          </h2>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <RouterLink
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
              >
                <span className="mb-3 inline-block w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 tracking-wide">
                  {post.category}
                </span>
                <h3 className="mb-4 flex-1 text-base font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.readTime} · {post.date}</span>
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                </div>
              </RouterLink>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
