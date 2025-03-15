import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-12 border-b border-neutral-200 pb-4">
          <h1 className="text-4xl font-typewriter mb-2">Your Name</h1>
          <p className="text-neutral-700 font-typewriter">Notes on my work and thoughts</p>

          <nav className="mt-8">
            <ul className="flex space-x-8 font-typewriter">
              <li>
                <Link
                  href="/projects"
                  className="text-lg text-neutral-800 hover:text-neutral-600 pb-1 border-b-2 border-neutral-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-lg text-neutral-800 hover:text-neutral-600 pb-1 border-b-2 border-neutral-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="space-y-16">
          {/* About Section */}
          <section id="about" className="space-y-4">
            <h2 className="text-2xl font-typewriter border-b border-neutral-200 pb-2">About Me</h2>
            <div className="font-typewriter leading-relaxed space-y-4 text-neutral-800">
              <p>
                Hello there. I'm a developer with a passion for building thoughtful digital experiences. My approach
                combines technical expertise with a deep appreciation for simplicity and clarity.
              </p>
              <p>
                When I'm not writing code, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying the outdoors.
              </p>
            </div>
          </section>

          {/* Recent Projects Preview */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
              <h2 className="text-2xl font-typewriter">Recent Projects</h2>
              <Link
                href="/projects"
                className="font-typewriter text-sm text-neutral-700 hover:text-neutral-900 flex items-center"
              >
                View All <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-typewriter">Project One</h3>
                <p className="font-typewriter text-neutral-800">
                  A responsive web application built with React and Next.js.
                </p>
                <Link
                  href="/projects/project-one"
                  className="inline-block font-typewriter text-neutral-800 underline decoration-dotted underline-offset-4 hover:text-neutral-600"
                >
                  Read More →
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-typewriter">Project Two</h3>
                <p className="font-typewriter text-neutral-800">
                  A full-stack e-commerce solution with product management.
                </p>
                <Link
                  href="/projects/project-two"
                  className="inline-block font-typewriter text-neutral-800 underline decoration-dotted underline-offset-4 hover:text-neutral-600"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </section>

          {/* Recent Blog Posts Preview */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
              <h2 className="text-2xl font-typewriter">Recent Posts</h2>
              <Link
                href="/blogs"
                className="font-typewriter text-sm text-neutral-700 hover:text-neutral-900 flex items-center"
              >
                View All <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-typewriter">Getting Started with Next.js</h3>
                <p className="text-sm font-typewriter text-neutral-600">March 15, 2023</p>
                <p className="font-typewriter text-neutral-800">
                  An introduction to building modern web applications with Next.js.
                </p>
                <Link
                  href="/blogs/getting-started-with-nextjs"
                  className="inline-block font-typewriter text-neutral-800 underline decoration-dotted underline-offset-4 hover:text-neutral-600"
                >
                  Read More →
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-typewriter">The Power of TypeScript</h3>
                <p className="text-sm font-typewriter text-neutral-600">February 28, 2023</p>
                <p className="font-typewriter text-neutral-800">
                  Why TypeScript is becoming essential for modern JavaScript development.
                </p>
                <Link
                  href="/blogs/the-power-of-typescript"
                  className="inline-block font-typewriter text-neutral-800 underline decoration-dotted underline-offset-4 hover:text-neutral-600"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-4 border-t border-neutral-200 font-typewriter text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="mt-1">Handcrafted with care.</p>
        </footer>
      </div>
    </div>
  )
}

