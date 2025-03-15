"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Save } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NewBlogPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would call an API to create the blog
    console.log({
      title,
      content,
      isPublished,
      date: new Date().toISOString(),
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
          <h1 className="text-3xl font-typewriter">Create New Blog Post</h1>
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
                Publish immediately
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-sm hover:bg-neutral-700 transition-colors font-typewriter"
              >
                <Save className="h-4 w-4" />
                Save Post
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

