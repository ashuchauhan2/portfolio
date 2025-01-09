// src/app/about/page.js
import Navigation from '@/components/Navigation'
import Timeline from '@/components/Timeline'
import Image from 'next/image'
import { Basketball, GolfIcon, Gamepad2, Music, Camera, Book, Plane } from 'lucide-react'

function InterestCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all">
      <div className="bg-zinc-800 rounded-lg p-3 w-fit mb-4">
        {/* Make sure Icon exists before rendering */}
        {Icon && <Icon className="w-6 h-6 text-zinc-400" />}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}

function PhotoGrid({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}

export default function About() {
  const personalPhotos = [
    {
      src: "/bills.png", //pic in bills locker room
      alt: "At a Toronto Raptors game"
    },
    {
      src: "/golf.png", // golfing pic
      alt: "Out golfing at the course"
    }
  ]

  const interests = [
    {
      icon: Basketball,
      title: "Basketball",
      description: "Die-hard Toronto Raptors fan since day one. Love watching games and following the NBA season closely."
    },
    {
      icon: GolfIcon,
      title: "Golf",
      description: "Passionate about improving my golf game. There's nothing better than a day out on the course."
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Enjoy unwinding with video games, especially strategy games and sports simulations."
    },
    {
      icon: Music,
      title: "Music",
      description: "Music enthusiast who enjoys creating playlists. Perfect coding companion."
    },
    {
      icon: Book, 
      title: "Reading",
      description: "Always reading something new, whether it's tech blogs or fiction novels."
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Love exploring new places and experiencing different cultures. Each trip brings new perspectives."
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Profile */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Profile Image */}
              <div className="relative w-50 h-50 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/bills.png"
                    alt="Ashu Chauhan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Introduction Text */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  About Me
                </h1>
                <p className="text-lg text-zinc-400">
                  Hi! I'm Ashu, a student developer with a passion for technology and sports. 
                  When I'm not coding or studying, you'll probably find me watching sports or playing them.
                  During summers, I love to play golf when the weather allows for it with my dad, but during winters
                  I play lots of basketball and other indoor sports with my buddies. I am a huge football fan, and the 
                  proud owner of my fantasy football team in my family league! I love to travel, and have visited over 10 countries so far,
                  I hope that this number can continue to grow in the future. My favourite trip has been visiting India and seeing where my
                  grandparents grew up compared to the life my parents have built in Canada for me and my sister! Another notable trip is visiting
                  Universal Studios in Orlando and seeing Harry Potter world for the first time. Harry Potter has always been my favourite book series and seeing it
                  come to life as a teenager was very memorable.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Journey Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              My School Journey
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              Starting my computer science journey during the unprecedented times of COVID-19 
              presented unique challenges, but it also shaped me into a more adaptable and 
              resilient developer. Here's my path from first-year student to where I am today.
            </p>
            
            <Timeline />
          </div>
        </div>
      </main>
    </div>
  )
}