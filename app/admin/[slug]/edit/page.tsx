"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Save } from "lucide-react"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"

// In a real app, this would come from an API
const blogs = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    content: `
      Next.js has quickly become one of the most popular frameworks for building React applications. It provides a great developer experience with features like server-side rendering, static site generation, and API routes.

      ## Why Next.js?

      There are several reasons why Next.js has gained so much popularity:

      1. **Server-side rendering (SSR)** - Next.js allows you to render your React components on the server before sending them to the client. This improves performance and SEO.

      2. **Static site generation (SSG)** - Next.js can generate static HTML files at build time, which can be served from a CDN for maximum performance.

      3. **API routes** - Next.js allows you to create API endpoints as part of your application, making it easy to build full-stack applications.

      4. **File-based routing** - Next.js uses a file-based routing system, which makes it easy to create new pages and routes.

      5. **Built-in CSS and Sass support** - Next.js has built-in support for CSS and Sass, making it easy to style your application.

      ## Getting Started

      To create a new Next.js application, you can use the \`create-next-app\` command:

      \`\`\`bash
      npx create-next-app my-next-app
      \`\`\`

      This will create a new Next.js application in the \`my-next-app\` directory. You can then navigate to that directory and start the development server:

      \`\`\`bash
      cd my-next-app
      npm run dev
      \`\`\`

      This will start the development server at \`http://localhost:3000\`. You can now open your browser and navigate to that URL to see your application.

      ## Creating Pages

      In Next.js, pages are React components exported from files in the \`pages\` directory. Each page is associated with a route based on its file name.

      For example, to create a page at the route \`/about\`, you would create a file at \`pages/about.js\`:

      \`\`\`jsx
      export default function About() {
        return (
          <div>
            <h1>About</h1>
            <p>This is the about page</p>
          </div>
        )
      }
      \`\`\`

      ## Conclusion

      Next.js is a powerful framework for building React applications. It provides a great developer experience and many features that make it easy to build high-performance applications.

      In future posts, we'll explore more advanced features of Next.js, such as dynamic routes, API routes, and deployment options.
    `,
    published: true,
  },
  // Other blog posts...
}

export default function EditBlogPage({ params }: { params: { slug: string } }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  const router = useRouter()

  // In a real app, you would fetch the blog from an API
  useEffect(() => {
    const blog = blogs[params.slug]
    if (blog) {
      setTitle(blog.title)
      setContent(blog.content)
      setIsPublished(blog.published)
    } else {
      notFound()
    }
  }, [params.slug])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would call an API to update the blog
    console.log({
      id: params.slug,
      title,
      content,
      isPublished,
    })

    // Redirect to the admin blogs page
    router.push("/admin/blogs")
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <Link
              href="/admin/blogs"
              className="font-typewriter text-neutral-700 hover:text-neutral-900 flex items-center"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog Management
            </Link>
          </div>
          <h1 className="text-3xl font-typewriter">Edit Blog Post</h1>
        </header>

        <main>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block font-typewriter text-neutral-800">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-neutral-300 rounded-sm font-typewriter focus:outline-none focus:ring-2 focus:ring-neutral-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="block font-typewriter text-neutral-800">
                Content (Markdown supported)
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border border-neutral-300 rounded-sm font-typewriter h-96 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="published" className="font-typewriter text-neutral-800">
                Published
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-sm hover:bg-neutral-700 transition-colors font-typewriter"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

