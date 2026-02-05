import { ArrowUpRight, Github } from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'
const projects = [
  {
    title: "Vineyard Management Solution",
    discription: "TerraviewOS consolidates various aspects of vineyard management into a single, user-friendly platform. It improves operational efficiency and offers data-driven insights for enhanced vineyard management. Discover how to maximise your vineyards with TerraviewOS.",
    image: "/projects/terraview1.png",
    tags: ["Typescript", "React", "Redux", "PostgresSQL", "MUI", "styled-components"],
    link: "https://www.terraview.gmbh/terraviewos",
    /* github: "#", */
  },
    {
    title: "Aquaview - Water Utility Asset Management Software",
    discription: "Soil Moisture Monitoring. Optimize Irrigation with Precision Moisture Tracking. Leverage real-time, high-resolution moisture readings suitable for any crop type.",
    image: "/projects/Aquaview.avif",
    tags: ["Typescript", "React", "Redux", "MUI", "styled-components", "Stripe", "Auth0"],
    link: "https://www.gamaya.com/aquaview",
   /*  github: "#", */
  },
    {
    title: "Osadkowski - agricultural portal for professionals",
    discription: "Osadkowski is a trusted partner of Polish farmers. The company has been operating on the market since 1990, offering a wide range of products from reputable suppliers and proven technologies, as well as the support of professional agricultural advisors.",
    image: "/projects/agro.png",
    tags: ["Wordpress", "React", "Redux", "SQL", "MUI", "styled-components"],
    link: "https://osadkowski.pl/?srsltid=AfmBOookt8rbmccid8vXHDDP5jQrVxUaGJ-rXv7ssRMR67chA0xFy9jI",
    /* github: "#", */
  },
    {
    title: "Bajkodajnia",
    discription: "This innovative application utilises the scientifically proven power of fairy tale therapy to gently introduce preschool and early school age children to the world of feelings and emotions.",
    image: "/projects/Dudek_11.jpg",
    tags: ["Typescript", "React", "TanStack", "Tailwind", "styled-components", ],
    link: "https://bajkodajnia.pl/",
    /* github: "#", */
  },
]
const Projects = () => {
  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      {/* Bg belows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'/>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section header */}
        <div className='text-center mx-auto mx-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in animation-delay-100'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Project that 
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex web application to 
            innovate tools that solve real-world problems.
          </p>
        </div>
       {/*  Project grids */}
       <div className='grid row-span-2 md:grid-cols-2 gap-8'>
        {projects.map((projects, index) => (
          <div 
            key={index} 
            className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-2'
            style={{animationDelay:`${(index + 1) * 100}ms`}}
          >
            <div className='relative overflow-hidden aspect-video md:row-span-2'>
              <img 
                src={projects.image} 
                alt={projects.title} 
                className='w-full h-full object-center transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110 '
              />
              <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'/>
              {/* Overlay Links */}
              <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <a 
                  href={projects.link}
                  className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                ><ArrowUpRight className='w-5 h-5' /></a>
{/*                 <a 
                  href={projects.link}
                  className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                >
                  <Github className='w-5 h-5'/>
                  </a> */}
              </div>
            </div>
           {/*  Content */}
           <div className='p-6 space-y-4 '>
            <div className='flex items-start justify-between'>
              <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                {projects.title}
                </h3>
              <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
              group-hover:-translate-y-1 transition-all'/>
            </div>
            <p className='text-muted-foreground text-sm '>
              {projects.discription}
            </p>
            <div className='flex flex-wrap gap-2'>
              {projects.tags.map((tag, index) => (
                <span 
                  key={index}
                  className='px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer'
                >
                  {tag}
                </span>
              ))}
            </div>
           </div>
          </div>
        ))}

       </div>
       {/* CTA */}
       <div className='text-center mt-12 animate-fade-in animation-delay-500'>
        <AnimatedBorderButton>
          <ArrowUpRight className='w-5 h-5'/>
          View All Projects
        </AnimatedBorderButton>
       </div>

      </div>
    </section>
  )
}

export default Projects
