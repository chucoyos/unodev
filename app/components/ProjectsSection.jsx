'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const projects = [
  {
    title: "Yard Management System",
    description: "Real-time yard management with Rails",
    tags: ["Ruby on Rails", "PostgreSQL", "Redis"],
    github: "https://github.com/chucoyos/container-yard",
    live: "https://container-yard-2657e8869d5b.herokuapp.com/",
    image: "/yaco.png"
  },
  {
    title: "Yaco YardContainers",
    description: "Landing page for YMS",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/chucoyos/yaco",
    live: "https://yaco.vercel.app/",
    image: "/yacoLanding.png"
  },
  {
    title: "Shopping Cart",
    description: "E-commerce shopping cart",
    tags: ["React", "Material UI", "Vitest", "Cypress"],
    github: "https://github.com/chucoyos/shopping_cart",
    live: "https://shopping-cart-gamma-cyan.vercel.app",
    image: "/shoppingCart.png"
  },
  {
    title: "TODO List",
    description: "A simple TODO list app",
    tags: ["JavaScript", "Webpack", "localStorage"],
    github: "https://github.com/chucoyos/todo_list",
    live: "https://chucoyos.github.io/todo_list/index.html",
    image: "/todolist.png"
  },
  {
    title: "CV Creator",
    description: "Create your CV and download it as a PDF",
    tags: ["React", "JavaScript", "Vite"],
    github: "https://github.com/chucoyos/CV-application",
    live: "https://cv-application-jet.vercel.app/",
    image: "/cvCreator.png"
  },
  {
    title: "Wheather App",
    description: "Weather app using Weather API",
    tags: ["JavaScript", "localStorage", "API"],
    github: "https://github.com/chucoyos/weather_app",
    live: "https://chucoyos.github.io/weather_app/index.html",
    image: "/weatherApp.png"
  },
  {
    title: "Memory Card Game",
    description: "A simple memory game with Pokemon API",
    tags: ["React", "Material UI", "MUI Icons"],
    github: "https://github.com/chucoyos/memory-card",
    live: "https://odin-memory-card.netlify.app/",
    image: "/memoryCardGame.png"
  },
  {
    title: "Studio96 LS",
    description: "Beauty salon appointment system",
    tags: ["Ruby on Rails", "PostgreSQL", "Devise"],
    github: "https://github.com/chucoyos/studio96ls",
    live: "https://github.com/chucoyos/studio96ls",
    image: "/studio96.png"
  },
  {
    title: "FacturasManzanillo",
    description: "Landing page for electronic invoicing",
    tags: ["Bootstrap", "HTML", "CSS"],
    github: "https://github.com/chucoyos/gh-first",
    live: "https://facturasmanzanillo.com/",
    image: "/facturasmanzanillo.png"
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Full-stack applications combining Ruby on Rails with modern frontends
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1 text-sm hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
                    target="_blank"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-1 text-sm hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
                    target="_blank"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}