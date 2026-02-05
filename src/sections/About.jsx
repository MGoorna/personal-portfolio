import { Code2, Rocket, Users, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing well-structured, readable, and scalable code that’s easy to maintain and evolve over time.'
  },
  {
    icon: Rocket,
    title: 'High Performance',
    description: 'Building fast, responsive applications with optimized loading times and smooth interactions.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Collaborating closely with clients to understand their goals and turn ideas into effective solutions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously exploring new technologies and best practices to deliver modern, future-proof solutions.'
  },
]
const About = () => {
  return (
  <section id="about" className='py-32 relative overflow-hidden'>
    <div className='container mx-auto px-6 relative z-10'>
      <div className='grid '>
        {/* Left Column */}
        <div className='space-y-8'>
          <div className='animate-fade-in'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
              About me
            </span>
          </div>

          <h2 className='text-4xl md:5xl font-bold loading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
            Building the future
            <span className='font-serif italic font-normal text-white'> 
              {" "} of web development.
            </span>
          </h2>
          <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            <p>I’m a Front-End Developer with a strong passion for creating clean, scalable, and user-focused digital experiences. While my hands-on background is rooted in software and front-end development, I’ve also built a solid theoretical and practical foundation in data science and analytics through structured self-learning and real-world Python projects.</p>
            <p>In my professional work, I designed and developed an AI-powered agriculture platform, where I gained experience building scalable applications, integrating APIs, and presenting complex data in clear, intuitive ways. This role strengthened my ability to think critically about performance, data structures, and user needs—skills that naturally bridge front-end engineering and data-driven problem solving. </p>
            <p>Alongside my development work, I’m actively pursuing growth in data science through focused self-study in Data Engineering and Python. I’ve built hands-on projects using Python, Pandas, and Streamlit to process and visualize data, integrated REST APIs, and created visual reports with Matplotlib. These projects have sharpened my ability to transform raw data into meaningful insights.</p>
            <p>I’m motivated to grow into a data-focused role where I can combine my technical background, analytical mindset, and commitment to continuous learning. I bring curiosity, adaptability, and a strong work ethic, and I’m excited to contribute to building scalable, intelligent solutions while continuing to learn and evolve in a data-driven environment.</p>
          </div>
          <div className='glass rounded-2xl my-6 p-6 glow-border animate-fade-in animation-delay-300'>
            <p className='text-lg font-medium italic text-foreground'>
              "My misiion is to create digital experience that are not just functional, but truly delightful -
                products that user loves to use and developers love to meintain."
            </p>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className='glass p-6 rounded-2xl animate-fade-in animation-delay-300'
                style={{animationDelay: `${index * 100}ms`  }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 '>
                  <highlight.icon className='w-6 h-6 text-primary' />
                </div>               
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    {highlight.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
