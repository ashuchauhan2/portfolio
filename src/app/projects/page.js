// src/app/projects/page.js
import ProjectCard from '@/components/ProjectCard'
import Navigation from '@/components/Navigation'

export default function Projects() {
  const projects = [
    {
      title: "Consistify",
      description: "A mobile app which allows users to bring consistency to their daily life",
      image: "/consistify.png",
      github: "https://github.com/ashuchauhan2/consistify",
      demo: "", //add yt link after I make the video lol
      technologies: ["Flutter", "Firebase"]
    },
    {
      title: "CourseMix",
      description: "Developed a basic web app that allows users to estimate the fuel costs for a trip based on the distance, fuel efficiency, and fuel price.",
      image: "/coursemix.jpeg",
      github: "https://github.com/ashuchauhan2/coursemix",
      demo: "https://coursemix.ca",
      technologies: ["JavaScript", "Python", "Next.js", "TailwindCSS", "Shadcn", "Supabase", "Resend", "Vercel"]
    },
    {
      title: "Gastimator",
      description: "Developed a basic web app that allows users to estimate the fuel costs for a trip based on the distance, fuel efficiency, and fuel price.",
      image: "/gastimator.png",
      github: "https://github.com/ashuchauhan2/Gastimator",
      demo: "https://gastimator.vercel.app/", //insert yt link for priv video here
      technologies: ["TypeScript", "Next.js", "TailwindCSS", "Shadcn", "Google Maps API"]
    },
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
      github: "https://github.com/ashuchauhan2/imagetotext",
      demo: "https://www.youtube.com/watch?v=CSoQYXdu0hI",
      technologies: ["Python", "OCR", "Kivy"]
    },
    {
      title: "Discord Stock Bot",
      description: "A bot I created for Discord which displays the current price of a stock",
      image: "/stock.png",
      github: "https://github.com/ashuchauhan2/stockBot",
      demo: "",
      technologies: ["Python", "Discord API", "Web Scraping"]
    },
    // add more as I build more!
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
