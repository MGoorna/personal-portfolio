import {useState } from 'react'
import { ChevronRight,ChevronLeft, Quote, UserRoundPen } from 'lucide-react'

const testimonials = [
  {
    quote: "One of the best implementations I’ve seen so far — clean, thoughtful, and well executed.",
    author: "Dominique",
    role: "Senior QA Tester Specialist",
    image: "",
  },
  {
    quote: "Magda delivered her work on time and exactly to specification, while also enhancing the visual quality and overall usability of the site. She was responsive throughout the entire process and proactive in resolving issues as they arose. It’s clear he takes great pride in her work, and I wouldn’t hesitate to recommend or collaborate with her again.",
    author: "Radek",
    role: "Senior .NET Developer Engineer",
    image: "",
  },
  {
    quote: "Working with Magdalena exceeded our already high expectations. An exceptionally talented developer, but what truly sets them apart is a strong work ethic and a calm, methodical approach. Time and again, they introduced thoughtful improvements without being asked, resulting in a stronger final product for both us and our clients.",
    author: "P.",
    role: "Startup Founder",
    image: "",
  },
  {
    quote: "It was a genuine pleasure working with Magda. The communication was always clear and professional, and every step of the process was handled with care and attention to detail.",
    author: "D.D.",
    role: "Startup Founder",
    image: "",
  },
]
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const next = () => {
    setActiveIndex(activeIndex => (activeIndex + 1) % testimonials.length)
  }
  const prev = () => {
    setActiveIndex(activeIndex => (activeIndex - 1 + testimonials.length) % testimonials.length)
  }
  return (
  <section id="testimonials" className='py-32 relative overflow-hidden'>
    <div className='absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-1/2
    -translate-x-1/2 -translate-y-1/2'/>  
    <div className='container mx-auto px-6 relative z-10'>
      <div className='text-center mx-automax-w-3xl mb-16'>
        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in animation-delay-100'>
          Testimonials
        </span>
        <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
          What my 
          <span className='font-serif italic font-normal text-white'> clients say.</span>
        </h2>
        <p className='text-muted-foreground animate-fade-in animation-delay-200'>
          Here's what my clients have to say about my work.
        </p>
      </div>
      <div className='max-w-4xl mx-auto'>
        <div className='relative'>
          <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200'>
            <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
              <Quote className= 'w-6 h-6 text-primary-foreground'/>
            </div>
            <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
              {testimonials[activeIndex].quote}
            </blockquote>
            <div className='flex item-center gap-4'>
              {testimonials[activeIndex].image 
              ? <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className='w-14 h-14 rounded-full object-cover ring-2 ring-primary'/>
              : <UserRoundPen className='w-6 h-6'/>
              }
            </div>
            <div>
              <div className='font-semibold'>{testimonials[activeIndex].author}</div>
              <div className='text-sm text-muted-foreground'>
                {testimonials[activeIndex].role}
                </div>
            </div>    
          </div>
        </div>
      </div>
    <div className='flex items-center justify-center gap-4 mt-8'>
      <button onClick={prev} className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'> 
        <ChevronLeft className='w-6 h-6'/>
      </button>
      <div className='flex items-center gap-2'>
      {testimonials.map((_, index) => (
        <button 
          onClick={() => setActiveIndex(index)}
          key={index}
          className={`w-2 h-2 rounded-full ${index === activeIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50' } transition-all duration-300`}
          />
      ))}
      </div>
      <button onClick={next} className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'>
        <ChevronRight className='w-6 h-6'/>
      </button>
    </div>
    </div> 
  </section>
  )
}

export default Testimonials
