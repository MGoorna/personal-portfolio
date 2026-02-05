
const experiences = [
  {
    period: '2024 - present',
    title: 'Junior Data Scientist',
    description: 'Focused on developing practical skills in Python-based data engineering and analytics through self-directed projects and guided learning. Built small-scale applications using Python, Pandas, and Streamlit to process, analyze, and visualize datasets, gaining hands-on experience with data wrangling and visualization best practices.',
    technologies: ["Python", "Pandas", "SQL", "Scikit-learn", "Matplotlib", "Seaborn" ],
    current: true,
  },
  {
    period: '2023 - 2024',
    title: 'UX/UI Frontend Developer Engineer',
    description: 'Designed, developed, and maintained an AI-powered agriculture platform from concept to production using TypeScript, React, and Redux, ensuring high performance and scalability. Managed API integration with RESTful services, and handled state management with Redux. Implemented advanced frontend features. Implemented interactive mapping features with Leaflet.js, allowing users to zoom, annotate, and visualize geospatial data dynamically. Integrated AI-driven analytics, soil moisture data, and historical weather information, visualized with amCharts for actionable insights. Collaborated with UI/UX designers to implement responsive and accessible layouts, improving cross-device usability and user satisfaction.',
    technologies: ["React", "Redux", "Typescript", "TailwindCSS", "Material UI", "Figma" ],
    current: false,
  },
    {
    period: '2018 - 2022',
    title: 'Frontend Developer Engineer',
    description: 'Designed and developed responsive web applications using React, DevExtreme, JavaScript, and Bootstrap. Optimized website performance through code refactoring, image compression, and caching strategies. Maintained and updated internal company content in SharePoint, ensuring accuracy and usability. Developed SharePoint-based workflows using Webcon Designer Studio and SQL queries to automate business processes.',
    technologies: ["React", "Redux", "Typescript", "TailwindCSS", "Material UI", "GitHub" ],
    current: false,
  },
  {
    period: '2016 - 2017',
    title: 'Frontend Developer Engineer',
    description: 'Contributed to building a new web platform using ReactJS, JavaScript(ES6), JSS, and SCSS. Implemented responsive layouts using Bootstrap, ensuring cross-device accessibility. Assisted in optimizing application performance by reducing DOM reflows and leveraging Webpack optimizations.',
    technologies: ["React", "JavaScript", "Typescript", "Bootstrap", "Figma" ],
    current: false
  },
  {
    period: '2009 - 2016',
    title: 'Logistic in Spare Parts ',
    description: 'Planned, organized, and managed logistics operations, including inventory control, warehousing, and transportation for spare parts distribution. Optimized and coordinated the full order cycle — from procurement and supplier negotiations to final delivery. Negotiated prices and delivery terms with suppliers, achieving cost savings while maintaining quality standards. Monitored stock levels and implemented demand forecasting strategies to reduce excess inventory and prevent shortages. Prepared logistics reports and performance analyses. Implemented process improvements in warehouse organization and material handling.',
    technologies: ["Exact (ERP)", "Excel", "Adobe Photoshop", "Six Sigma", "Pareto principle" ],
    current: false
 
  },
]
const Experience = () => {
  return (
    <section id="experience" className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-1/2'/>

      <div className='container mx-auto px-6 relative z-10'>
       {/*  Section header */}
        <div className='max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in animation-delay-100'>
            Career Jurney
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Experience that 
            <span className='font-serif italic font-normal text-white'> speaks volumes.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A timeline of my professional growth, where I've had the privilege of working on diverse projects and contributing to meaningful projects.
          </p>
        </div>
        {/* Timeline */}
        <div className='relative'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/30 to-transparent md:translate-x-1/2 shadow-[0_0_25ppx_rgba(32,178,166,0.8)]'/>
         {/*  Experience items */}
         <div className='space-y-12'>
          {experiences.map((experience, index) => (
           <div 
            key={index}
            className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
            style={{ animationDelay: `${(index + 1) * 200}ms`}}
           >
            {/* Timeline dot */}
            <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/3 ring-4 ring-background z-10'>
              {experience.current && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'></span>  }
            </div>
            {/* Content */}
            <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
              <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300`}>
                <span className='text-sm text=primary font-medium'>
                  {experience.period}
                </span>
                <h3 className='text-xl font-semibold mt-2'>
                  {experience.role}
                </h3>
                <p className='text-muted-foreground'>{experience.company}</p>
                <p className='text-sm text-muted-foreground mt-4'>{experience.description}</p>
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground' 
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
           </div>
          ))}
         </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
