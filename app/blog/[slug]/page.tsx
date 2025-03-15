import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// In a real app, this would come from a database or API
const blogs = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    date: "March 15, 2023",
    readTime: "5 min read",
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
  },
  "the-power-of-typescript": {
    title: "The Power of TypeScript",
    date: "February 28, 2023",
    readTime: "7 min read",
    content: `
      TypeScript has become an essential tool for modern JavaScript development. It adds static typing to JavaScript, which helps catch errors early and improves the developer experience.

      ## Why TypeScript?

      There are several reasons why TypeScript has gained so much popularity:

      1. **Static typing** - TypeScript adds static typing to JavaScript, which helps catch errors at compile time rather than runtime.

      2. **Improved tooling** - TypeScript provides better tooling, such as code completion, refactoring, and navigation.

      3. **Better documentation** - TypeScript's type annotations serve as documentation, making it easier to understand code.

      4. **Safer refactoring** - TypeScript's type system makes it safer to refactor code, as the compiler will catch many errors.

      5. **Gradual adoption** - TypeScript can be adopted gradually, allowing you to add types to your JavaScript code over time.

      ## Getting Started

      To start using TypeScript, you first need to install it:

      \`\`\`bash
      npm install -g typescript
      \`\`\`

      You can then create a TypeScript file with the \`.ts\` extension:

      \`\`\`typescript
      function greet(name: string) {
        return \`Hello, \${name}!\`;
      }

      console.log(greet("World"));
      \`\`\`

      To compile this file to JavaScript, you can use the \`tsc\` command:

      \`\`\`bash
      tsc file.ts
      \`\`\`

      This will generate a JavaScript file that you can run with Node.js.

      ## TypeScript in React

      TypeScript works great with React. You can create React components with TypeScript by using the \`.tsx\` extension:

      \`\`\`tsx
      import React from 'react';

      interface Props {
        name: string;
      }

      const Greeting: React.FC<Props> = ({ name }) => {
        return <h1>Hello, {name}!</h1>;
      };

      export default Greeting;
      \`\`\`

      ## Conclusion

      TypeScript is a powerful tool that can help you write better JavaScript code. It adds static typing to JavaScript, which helps catch errors early and improves the developer experience.

      In future posts, we'll explore more advanced features of TypeScript, such as interfaces, generics, and utility types.
    `,
  },
  "mastering-css-grid": {
    title: "Mastering CSS Grid",
    date: "January 15, 2023",
    readTime: "10 min read",
    content: `
      CSS Grid is a powerful layout system that allows you to create complex web layouts with ease. It's a two-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system.

      ## Why CSS Grid?

      There are several reasons why CSS Grid has become so popular:

      1. **Two-dimensional layouts** - CSS Grid allows you to create two-dimensional layouts, which makes it easier to create complex designs.

      2. **Simplified markup** - CSS Grid allows you to create complex layouts with simpler HTML markup.

      3. **Control over both dimensions** - CSS Grid gives you control over both the rows and columns of your layout.

      4. **Alignment control** - CSS Grid provides powerful alignment capabilities, making it easy to align items within the grid.

      5. **Responsive design** - CSS Grid makes it easy to create responsive designs that adapt to different screen sizes.

      ## Getting Started

      To create a grid container, you set the display property to grid:

      \`\`\`css
      .container {
        display: grid;
      }
      \`\`\`

      You can then define the columns and rows of your grid using the \`grid-template-columns\` and \`grid-template-rows\` properties:

      \`\`\`css
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100px 200px;
      }
      \`\`\`

      This creates a grid with three equal-width columns and two rows with heights of 100px and 200px.

      ## Placing Items

      You can place items within the grid using the \`grid-column\` and \`grid-row\` properties:

      \`\`\`css
      .item {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }
      \`\`\`

      This places the item in the first row, spanning from the first to the third column.

      ## Conclusion

      CSS Grid is a powerful layout system that allows you to create complex web layouts with ease. It's well-supported in modern browsers and can be used today to create responsive, flexible layouts.

      In future posts, we'll explore more advanced features of CSS Grid, such as grid areas, auto-placement, and alignment.
    `,
  },
  "react-server-components": {
    title: "Understanding React Server Components",
    date: "December 10, 2022",
    readTime: "8 min read",
    content: `
      React Server Components are a new feature in React that allows you to render components on the server. This can improve performance and reduce the amount of JavaScript sent to the client.

      ## Why Server Components?

      There are several benefits to using Server Components:

      1. **Reduced bundle size** - Server Components are not included in the JavaScript bundle sent to the client, which can significantly reduce the bundle size.

      2. **Improved performance** - Server Components can access server resources directly, without making additional API requests, which can improve performance.

      3. **Better user experience** - Server Components can load data on the server, which means users don't have to wait for data to load on the client.

      4. **Progressive enhancement** - Server Components work well with progressive enhancement, allowing your application to work even if JavaScript is disabled.

      5. **Simplified data fetching** - Server Components can fetch data directly from the database or other server resources, simplifying your data fetching logic.

      ## How Server Components Work

      Server Components are rendered on the server and their HTML output is sent to the client. They can access server resources directly, such as databases or file systems, without making additional API requests.

      Server Components cannot use client-side features like state or effects. They are designed to be static and to render the same output for a given set of props.

      ## Client and Server Components

      React applications can use both Client and Server Components. Client Components are rendered on the client and can use client-side features like state and effects. Server Components are rendered on the server and can access server resources directly.

      You can use the \`"use client"\` directive at the top of a file to indicate that a component should be rendered on the client:

      \`\`\`jsx
      "use client"

      import { useState } from 'react';

      export default function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        );
      }
      \`\`\`

      ## Conclusion

      React Server Components are a powerful new feature that can help improve the performance and user experience of your React applications. They allow you to render components on the server, reducing the amount of JavaScript sent to the client and simplifying data fetching.

      In future posts, we'll explore more advanced features of Server Components, such as streaming and suspense.
    `,
  },
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug]

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/blogs" className="font-typewriter text-neutral-700 hover:text-neutral-900 flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
            </Link>
          </div>
          <h1 className="text-3xl font-typewriter mb-2">{blog.title}</h1>
          <div className="flex items-center gap-3 text-sm font-typewriter text-neutral-600">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>

        <main>
          <article className="prose prose-neutral max-w-none font-typewriter">
            {blog.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-xl font-typewriter mt-8 mb-4">
                    {paragraph.substring(3)}
                  </h2>
                )
              } else if (paragraph.startsWith("```")) {
                const codeLines = paragraph.split("\n")
                const language = codeLines[0].substring(3)
                const code = codeLines.slice(1, -1).join("\n")
                return (
                  <pre key={index} className="bg-neutral-100 p-4 rounded-sm overflow-x-auto my-4">
                    <code>{code}</code>
                  </pre>
                )
              } else if (paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n").map((item) => item.substring(3))
                return (
                  <ol key={index} className="list-decimal pl-5 my-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                )
              } else {
                return (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                )
              }
            })}
          </article>
        </main>

        <footer className="mt-16 pt-4 border-t border-neutral-200 font-typewriter text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

