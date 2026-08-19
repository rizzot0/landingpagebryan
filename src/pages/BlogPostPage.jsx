import { Navigate } from 'react-router-dom'

/** Stand-by: el blog está en “Próximamente”; redirige posts individuales al listado. */
export default function BlogPostPage() {
  return <Navigate to="/blog" replace />
}
