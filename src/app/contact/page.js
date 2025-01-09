'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({
        type: 'error',
        message: 'Name is required'
      })
      return false
    }
    
    if (!formData.email.trim()) {
      setStatus({
        type: 'error',
        message: 'Email is required'
      })
      return false
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      })
      return false
    }
    
    if (!formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Message is required'
      })
      return false
    }
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setStatus({
      type: '',
      message: ''
    })

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Get in Touch
                </h1>
                <p className="text-zinc-400 text-lg">
                  Have a question or want to work together? Feel free to reach out!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'error' 
                      ? 'bg-red-900/50 border border-red-800 text-red-200' 
                      : 'bg-green-900/50 border border-green-800 text-green-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-zinc-500 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <Mail className="w-6 h-6 text-zinc-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-zinc-400">ashuchauhan2702@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <MapPin className="w-6 h-6 text-zinc-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Location</h3>
                      <p className="text-zinc-400">Niagara Falls, Canada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information Card */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect!</h3>
                <p className="text-zinc-400 mb-4">
                  Whether you have a question about a project or just want to chat about technology, 
                  I'm always open to new opportunities and conversations.
                </p>
                <p className="text-zinc-400">
                  Response time: Usually within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}