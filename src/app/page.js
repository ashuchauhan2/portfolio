// src/app/page.js
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, BookOpen, Code, Server, FileText } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  Hi, I&apos;m Ashu
                </h1>
                <h2 className="text-2xl md:text-3xl text-zinc-400 font-medium">
                  Student Developer & Tech Enthusiast
                </h2>
              </div>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Welcome to my site! I&apos;m a student passionate about technology, eager to embrace roles that challenge me to grow and provide opportunities to learn and contribute.
              </p>

              <h1 className="text-5xl md:text-4xl font-bold text-white">
                  Currently Working On:
                </h1>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {/* <Link href="make this yt video when i make it" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-400"> */}
                  <h2 className="text-2xl font-bold text-white">Consistify</h2>
                  <br></br>
                {/* </Link> */}
                <p>A mobile app which allows users to bring consistency to their daily life through daily tracking, and friendly competition with friends and communities!</p>
                <p>Currently in development</p>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects"
                  className="flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg text-white font-medium transition-colors border border-zinc-700"
                >
                  Download Resume
                  <FileText className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg text-white font-medium transition-colors border border-zinc-700"
                >
                  Get in Touch
                </Link>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Link 
                  href="https://github.com/ashuchauhan2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-lg transition-colors border border-zinc-800"
                >
                  <Github className="w-6 h-6 text-zinc-400" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/ashuc27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-lg transition-colors border border-zinc-800"
                >
                  <Linkedin className="w-6 h-6 text-zinc-400" />
                </Link>
                <Link 
                  href="/contact"
                  className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-lg transition-colors border border-zinc-800"
                >
                  <Mail className="w-6 h-6 text-zinc-400" />
                </Link>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                  <div className="bg-zinc-800 rounded-lg p-3 w-fit mb-4">
                    <Code className="w-6 h-6 text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                  <p className="text-zinc-400">Passionate about creating efficient and innovative solutions</p>
                </div>

                <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                  <div className="bg-zinc-800 rounded-lg p-3 w-fit mb-4">
                    <Server className="w-6 h-6 text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technology</h3>
                  <p className="text-zinc-400">Exploring new technologies and best practices</p>
                </div>

                <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 md:col-span-2">
                  <div className="bg-zinc-800 rounded-lg p-3 w-fit mb-4">
                    <BookOpen className="w-6 h-6 text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-zinc-400">Always eager to learn and grow in the tech industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}