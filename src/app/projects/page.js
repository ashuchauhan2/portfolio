// src/app/projects/page.js
import ProjectCard from '@/components/ProjectCard'
import Navigation from '@/components/Navigation'

export default function Projects() {
  const projects = [
    {
      title: "Cryptanalysis Genetic Algorithm",
      description: "Developed a genetic algorithm to decrypt text using the Vigenere cipher.",
      image: "/ga.png",
      github: "https://github.com/ashuchauhan2/GeneticAlgorithm",
      demo: "https://www.youtube.com/watch?v=FAj27jRUXQQ", //insert yt link for priv video here
      technologies: ["Java"]
    },
    {
      title: "Image to Text Tool",
      description: "A simple program that allows users to select an image and get raw text from the image using OCR technology",
      image: "/image2text.png",
      github: "https://github.com/ashuchauhan2/imagetotext/tree/main",
      demo: "https://www.youtube.com/watch?v=CSoQYXdu0hI",
      technologies: ["Python", "OCR", "Kivy"]
    },
    // Add more projects here
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}