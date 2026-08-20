import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { blogPosts } from '../lib/blogData'

export default function BlogPage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="border-b border-slate-100 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Blog y consejos
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Aprende marketing digital gratis
            </h1>
            <p className="mt-2 max-w-xl text-slate-600">
              Tips, guías y casos reales de marketing digital para emprendedores y negocios en Chile.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <RouterLink
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="h-44 overflow-hidden bg-slate-100">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.coverAlt || post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 text-sm font-medium text-slate-400">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-block w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-600">
                    {post.category}
                  </span>
                  <h2 className="mb-3 flex-1 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {post.readTime} · {post.date}
                    </span>
                    <ArrowRight className="size-4 text-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </RouterLink>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
