import { Link as RouterLink, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { blogPostsBySlug } from '../lib/blogData'

function BlogBlock({ block }) {
  if (block.type === 'paragraph') {
    return <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{block.text}</p>
  }

  if (block.type === 'heading') {
    return (
      <h2 className="pt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {block.text}
      </h2>
    )
  }

  if (block.type === 'quote') {
    return (
      <blockquote className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 px-5 py-4 text-base italic leading-relaxed text-slate-700 sm:text-lg">
        {block.text}
      </blockquote>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className="space-y-2 pl-1">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-base text-slate-700 sm:text-lg">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'image') {
    return (
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <div className="flex max-h-[420px] items-center justify-center bg-slate-100 sm:max-h-[480px]">
          <img
            src={block.src}
            alt={block.alt || ''}
            className="h-auto max-h-[420px] w-auto max-w-full object-contain sm:max-h-[480px]"
            loading="lazy"
          />
        </div>
        {block.caption ? (
          <figcaption className="px-4 py-3 text-sm text-slate-500">{block.caption}</figcaption>
        ) : null}
      </figure>
    )
  }

  if (block.type === 'youtube') {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm">
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${block.videoId}?rel=0&modestbranding=1`}
            title={block.title || 'Video de YouTube'}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {block.title ? (
          <p className="bg-white px-4 py-3 text-sm text-slate-600">{block.title}</p>
        ) : null}
      </div>
    )
  }

  return null
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPostsBySlug[slug]

  if (!post) {
    return (
      <div className="flex min-h-dvh flex-col bg-white">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-4 pt-24">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold text-slate-900">Artículo no encontrado</h1>
            <p className="mb-6 text-slate-500">Este post no existe o fue removido.</p>
            <RouterLink
              to="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              <ArrowLeft className="size-4" /> Volver al blog
            </RouterLink>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="pt-20">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <RouterLink
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="size-4" /> Volver al blog
          </RouterLink>

          <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-600">
            {post.category}
          </span>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mb-8 text-sm text-slate-500">
            {post.readTime} · {post.date}
          </p>

          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              className="mb-10 h-auto w-full rounded-2xl border border-slate-200 object-cover"
            />
          ) : null}

          <div className="space-y-6">
            {post.blocks.map((block, index) => (
              <BlogBlock key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
