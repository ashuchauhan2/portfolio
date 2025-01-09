// src/components/Timeline.jsx
import React from 'react';
import { Calendar, Award, Code, BookOpen, Trophy, School, Briefcase, FolderCode, School2, ScrollText } from 'lucide-react';

const TimelineItem = ({ date, title, description, icon: Icon }) => (
  <div className="relative pl-8 pb-12 group">
    {/* Connector Line */}
    <div className="absolute left-[11px] top-2 h-full w-[2px] bg-zinc-800 group-last:hidden" />
    
    {/* Icon */}
    <div className="absolute left-0 top-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
      <Icon className="w-4 h-4 text-zinc-400" />
    </div>
    
    {/* Content */}
    <div className="space-y-2">
      <span className="text-sm text-zinc-500">{date}</span>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  </div>
);

const Timeline = () => {
  const milestones = [
    {
      date: "September 2020",
      title: "Started University Journey at Brock University",
      description: "Started first year of university during the Covid pandemic. This led to online classes and not a typical start to post-secondary experience, however it was one of one. Started learning Java and dived into my first data structures and algorithms course in this year.",
      icon: School
    },
    {
      date: "September 2021",
      title: "Second Year",
      description: "Learned Data Structures and Algorithms in depth during this study year. Started to learn computer architecture in depth and learned Mips assembly. Also had my first co-op job search in the summer.",
      icon: School
    },
    {
      date: "June 2022",
      title: "Secured first internship!",
      description: "Landed a role working with Shared Services Canada as an IT Support Technician! This was my first tech related job, and one that I learned a lot from and grew in.",
      icon: Briefcase
    },
    {
      date: "September 2023",
      title: "Image to Text OCR App",
      description: "Developed an Image-to-Text tool using Python and OCR technology. While working in an IT support role, I discovered my passion for software development—creating and maintaining code to build impactful tools that improve lives. This project, though simple, proved highly practical. My friends and I used it during a course where lecture slides were provided as image files. The tool allowed us to efficiently extract text and streamline note-taking, saving time and effort by eliminating the need to retype everything.",
      icon: FolderCode
    },
    {
      date: "January 2024",
      title: "AI Courses",
      description: "Through my coursework, and recent technology advancements in the world, Brock began to offer many more AI related courses, and naturally I took quite a few. This started with an intro to AI course where I developed a genetic algorithm, and progressed to NLP, and LLM studies. A new professor at Brock named Ali Emami was at the heart of the new AI courses at Brock and he is the reason why I have a passion for it.",
      icon: School2
    },
    {
      date: "May 2024",
      title: "First Research Paper",
      description: "As part of a group project for an NLP class, me and my groupmates conducted research on the sentiment of the general public on social media regarding AI and technology advancements. We used data from twitter primarily to draw our conclusions in our paper.",
      icon: ScrollText
    },
    {
      date: "Current",
      title: "Close to Graduation!",
      description: "Currently close to completing my post-secondary education, and now I am using the knowledge I have gained through school, and applying it by building software for personal use, as well as to help out others. I will be focused on completing my education, while also beginning my post-undergraduate job search!",
      icon: Award
    }
  ];

  return (
    <div className="relative max-w-2xl mx-auto">
      {milestones.map((milestone, index) => (
        <TimelineItem
          key={index}
          date={milestone.date}
          title={milestone.title}
          description={milestone.description}
          icon={milestone.icon}
        />
      ))}
    </div>
  );
};

export default Timeline;