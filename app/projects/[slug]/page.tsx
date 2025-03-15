import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"

// In a real app, this would come from a database or API
const projects = {
  "project-one": {
    title: "Project One",
    description:
      "A responsive web application built with React and Next.js. Features include authentication, data visualization, and real-time updates.",
    fullDescription: `
      This project was built to solve the problem of visualizing complex data sets in a user-friendly way. 
      
      The application features a responsive dashboard with real-time updates, interactive charts, and a robust authentication system. Users can filter data, export reports, and customize their dashboard view.
      
      The tech stack includes:
      - Next.js for the frontend framework
      - React Query for data fetching and caching
      - Tailwind CSS for styling
      - Recharts for data visualization
      - NextAuth.js for authentication
      
      One of the biggest challenges was implementing real-time updates without affecting performance. This was solved by using a combination of WebSockets and optimistic UI updates.
    `,
    image: "/placeholder.svg?height=400&width=600",
    date: "March 2023",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  "project-two": {
    title: "Project Two",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, and secure payment processing.",
    fullDescription: `
      This e-commerce platform was built to provide a seamless shopping experience with a focus on performance and security.
      
      Key features include:
      - Product catalog with advanced filtering
      - Shopping cart with persistent storage
      - Secure checkout process
      - Order management system
      - Admin dashboard for product and order management
      
      The tech stack includes:
      - Next.js for the frontend and API routes
      - Prisma for database access
      - PostgreSQL for data storage
      - Stripe for payment processing
      - NextAuth.js for authentication
      
      The biggest challenge was implementing a secure and user-friendly checkout process. This was achieved by using Stripe's checkout API and implementing proper error handling and validation.
    `,
    image: "/placeholder.svg?height=400&width=600",
    date: "January 2023",
    tags: ["Next.js", "Prisma", "Stripe"],
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  "project-three": {
    title: "Project Three",
    description:
      "Cross-platform mobile app built with React Native. Features include offline support, push notifications, and social sharing.",
    fullDescription: `
      This mobile application was designed to work seamlessly across iOS and Android platforms while providing a native-like experience.
      
      Key features include:
      - Offline-first architecture
      - Push notifications for important updates
      - Social sharing integration
      - User profile management
      - Location-based services
      
      The tech stack includes:
      - React Native for cross-platform development
      - Expo for simplified development workflow
      - Firebase for backend services
      - Redux for state management
      - React Navigation for routing
      
      The main challenge was implementing reliable offline support. This was solved by using a combination of local storage, background sync, and conflict resolution strategies.
    `,
    image: "/placeholder.svg?height=400&width=600",
    date: "November 2022",
    tags: ["React Native", "Expo", "Firebase"],
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <Link
              href="/projects"
              className="font-typewriter text-neutral-700 hover:text-neutral-900 flex items-center"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
            </Link>
          </div>
          <h1 className="text-3xl font-typewriter mb-2">{project.title}</h1>
          <p className="text-neutral-700 font-typewriter">{project.date}</p>
        </header>

        <main className="space-y-8">
          <div className="aspect-video bg-neutral-100 rounded-sm overflow-hidden border border-neutral-200">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-neutral-100 text-neutral-800 text-xs font-typewriter rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="font-typewriter text-neutral-800 space-y-4">
            {project.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-sm hover:bg-neutral-50 transition-colors font-typewriter"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Link>
            <Link
              href={project.liveDemo}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-sm hover:bg-neutral-50 transition-colors font-typewriter"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          </div>
        </main>

        <footer className="mt-16 pt-4 border-t border-neutral-200 font-typewriter text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

