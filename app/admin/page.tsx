"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Edit, Trash, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

// In a real app, this would come from an API
const initialBlogs = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "March 15, 2023",
    published: true,
  },
  {
    id: "the-power-of-typescript",
    title: "The Power of TypeScript",
    date: "February 28, 2023",
    published: true,
  },
  {
    id: "mastering-css-grid",
    title: "Mastering CSS Grid",
    date: "January 15, 2023",
    published: true,
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components",
    date: "December 10, 2022",
    published: true,
  },
  {
    id: "draft-post",
    title: "Draft Post",
    date: "April 1, 2023",
    published: false,
  },
]

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const router = useRouter()

  // In a real app, you would fetch blogs from an API
  useEffect(() => {
    // Simulating API call
    setBlogs(initialBlogs)
  }, [])

  const deleteBlog = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      // In a real app, you would call an API to delete the blog
      setBlogs(blogs.filter((blog) => blog.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/" className="font-typewriter text-neutral-700 hover:text-neutral-900 flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Site
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-typewriter">Manage Blog Posts</h1>
            <Link
              href="/admin/blogs/new"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-sm hover:bg-neutral-700 transition-colors font-typewriter"
            >
              <Plus className="h-4 w-4" />
              New Post
            </Link>
          </div>
        </header>

        <main>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-typewriter">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4">Title</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-neutral-200 hover:bg-neutral-50">
                    <td className="py-3 px-4">
                      <Link href={`/blogs/${blog.id}`} className="text-neutral-800 hover:text-neutral-600">
                        {blog.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-neutral-600">{blog.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-sm ${
                          blog.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => router.push(`/admin/blogs/${blog.id}/edit`)}
                          className="p-1 text-neutral-600 hover:text-neutral-900"
                          aria-label={`Edit ${blog.title}`}
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteBlog(blog.id)}
                          className="p-1 text-neutral-600 hover:text-red-600"
                          aria-label={`Delete ${blog.title}`}
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

