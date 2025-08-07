'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Search, Scale, Menu, X, Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold font-rajdhani tracking-wider">AGENT FIVE-O</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-red-500 transition-colors duration-300 font-medium">ABOUT</a>
            <a href="#services" className="hover:text-red-500 transition-colors duration-300 font-medium">SERVICES</a>
            <a href="#contact" className="hover:text-red-500 transition-colors duration-300 font-medium">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#about" 
                className="block hover:text-red-500 transition-colors duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#services" 
                className="block hover:text-red-500 transition-colors duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#contact" 
                className="block hover:text-red-500 transition-colors duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Enhanced Background Pattern with Circle Image */}
        <div className="absolute inset-0">
          {/* Circle Pattern Background */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/circle-pattern.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Additional animated circles for depth */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
            {[120, 100, 80, 60, 40, 20].map((size, index) => (
              <div 
                key={size}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-500/30 rounded-full animate-pulse`}
                style={{ 
                  width: `${size * 4}px`, 
                  height: `${size * 4}px`,
                  animationDelay: `${index * 0.8}s`,
                  animationDuration: '4s'
                }}
              ></div>
            ))}
          </div>
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider font-rajdhani">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              AGENT FIVE-O
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light tracking-wide">
            PRIVATE INVESTIGATION, LLC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              GET STARTED TODAY
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-100 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              248-379-5374
            </Button>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-rajdhani">OUR EXPERTISE</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Surveillance Services",
                description: "Providing discreet, professional surveillance for personal and business matters. Whether you are dealing with a cheating spouse, suspecting fraud, or need to monitor employee activities, we use advanced techniques and equipment to gather evidence and provide you with the truth."
              },
              {
                icon: Search,
                title: "Background Checks",
                description: "Our comprehensive background checks cover criminal records, financial history, professional credentials, and more. Ideal for employers looking to hire safely or individuals wanting to verify someone's history before making important decisions. No stone unturned."
              },
              {
                icon: Scale,
                title: "Asset Searches",
                description: "When someone is trying to hide assets whether in the case of a divorce, business dispute, or debt collection— we help uncover hidden financial accounts, real estate, and other assets. Our investigative techniques locate bank accounts, real estate, and other assets."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-800/50 hover:border-red-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-red-400 font-rajdhani">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Jamie Hill Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mr-6 mb-4 lg:mb-0 font-rajdhani">MEET JAMIE HILL</h2>
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 text-sm font-bold rounded-lg shadow-lg">
                <Shield className="w-4 h-4 inline mr-2" />
                LICENSED INVESTIGATOR
              </span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-2">
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                With over <span className="text-red-400 font-semibold">20 years of distinguished law enforcement experience</span>, Jamie Hill brings unparalleled expertise to private investigation. As a former undercover detective and FBI task force member, Jamie has the skills and experience to handle the most complex cases.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                After retiring from the <span className="text-red-400 font-semibold">Royal Oak Police Department</span>, Jamie served with the Michigan Attorney General&apos;s Office before founding Agent Five-O Private Investigation, LLC.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <div className="text-3xl font-bold text-red-400 font-rajdhani">20+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <div className="text-3xl font-bold text-red-400 font-rajdhani">100%</div>
                  <div className="text-sm text-gray-400">Licensed & Bonded</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl shadow-2xl">
                  <Image
                    src="/images/jamie-hill-photo.png"
                    alt="Jamie Hill - Licensed Private Investigator with Royal Oak Police Department background"
                    width={500}
                    height={600}
                    className="rounded-xl w-full h-auto"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg border border-red-600/30">
                    <div className="text-lg font-semibold text-red-400 font-rajdhani">20+ Years Law Enforcement</div>
                    <div className="text-sm text-gray-300">Royal Oak Police Department • FBI Task Force</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-rajdhani">
            <span className="bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
              UNCOVERING THE TRUTH AND<br />
              RECOVERING WHAT&apos;S YOURS.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact Agent Five-O Private Investigation today for a confidential consultation about your case.
          </p>
          <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Phone className="w-6 h-6 mr-3" />
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Enhanced Services Area */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="bg-gradient-to-r from-red-900/30 to-red-800/20 border-red-700/50 hover:border-red-600 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-red-400 font-rajdhani">Licensed & Bonded</h3>
              <p className="text-gray-300 text-lg">Michigan License #3701000265 - Fully insured and bonded</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-red-400 font-rajdhani">Located and Serving Clients in Michigan</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-red-400">Individuals:</p>
                      <p className="text-sm">Personal investigation services like infidelity checks, missing person investigations, or background checks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-red-400">Corporations & Small Businesses:</p>
                      <p className="text-sm">Corporate investigations, employee monitoring, fraud prevention, or security consulting</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-red-400">Attorneys & Law Firms:</p>
                      <p className="text-sm">Lawyers who need evidence, witness location, or general support for their cases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-red-400">Insurance Companies:</p>
                      <p className="text-sm">Firms seeking help with fraud investigations or complex claims</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="contact" className="bg-gradient-to-r from-red-900/30 to-red-800/20 border-red-700/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-red-400 font-rajdhani mb-6">Contact Us</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-2xl font-bold text-gray-100 drop-shadow-lg">248-379-5374</p>
                      <p className="text-gray-300 text-sm">24/7 Emergency Line</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-lg text-gray-100">agentfiveo.pi@gmail.com</p>
                      <p className="text-gray-300 text-sm">Confidential Inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-bold font-rajdhani tracking-wider">AGENT FIVE-O</div>
            <div className="text-center md:text-right">
              <div className="text-gray-400 text-sm mb-2">
                © 2025 Agent Five-O Private Investigation, LLC.
              </div>
              <div className="text-gray-500 text-xs">
                Licensed in Michigan #3701000265 | Fully Insured & Bonded
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
