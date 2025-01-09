// src/components/ProjectCard.jsx
import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, description, image, github, demo, technologies } = project

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="relative h-48 bg-zinc-800">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="w-8 h-8 text-zinc-700" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            Code
          </Link>
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Demo
          </Link>
        </div>
      </div>
    </div>
  )
}