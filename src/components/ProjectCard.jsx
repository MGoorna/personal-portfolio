import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  index, project, viewMode
}) => {
  return (
    <>
    { viewMode == 'grid' 
    ? ( 
    <div 
            key={index} 
            className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-2'
            style={{animationDelay:`${(index + 1) * 100}ms`}}
          >
            <div className='relative overflow-hidden aspect-video md:row-span-2'>
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-full object-center transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110 '
              />
              <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'/>
              {/* Overlay Links */}
              <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <a 
                  href={project.link}
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
                {project.title}
                </h3>
              <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
              group-hover:-translate-y-1 transition-all'/>
            </div>
            <p className='text-muted-foreground text-sm '>
              {project.discription}
            </p>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className='px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer'
                >
                  {tag}
                </span>
              ))}
            </div>
           </div>
    </div>)
    : (
      <div 
      key={index} 
      className='group glass rounded-2xl overflow-hidden animate-fade-in'
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <div className='grid grid-cols-[120px_1fr_1fr_auto] gap-4 items-center p-6'>
        
        {/* Image Section - Small */}
        <div className='relative overflow-hidden rounded-lg h-24 shrink-0'>
          <img 
            src={project.image} 
            alt={project.title} 
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'/>

          {/* Overlay Links */}
          <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <a 
              href={project.link}
              className='p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
            >
              <ArrowUpRight className='w-4 h-4' />
            </a>
          </div>
        </div>

        {/* Title Section */}
        <div className='min-w-0'>
          <h3 className='text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2'>
            {project.title}
          </h3>
        </div>

        {/* Description Section - Truncated */}
        <div className='min-w-0'>
          <p className='text-muted-foreground text-sm line-clamp-3'>
            {project.discription}
          </p>
        </div>

        {/* Tags Section */}
        <div className='flex flex-wrap gap-2 shrink-0'>
          {project.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className='px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap'
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className='px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground'>
              +{project.tags.length - 2}
            </span>
          )}
        </div>

      </div>
      </div>
    
    )}
    </>
  )
}

export default ProjectCard
