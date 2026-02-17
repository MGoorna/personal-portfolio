import { useMemo, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { projects } from "../data/projects";
import { Header } from "../components/Header";
import { cn } from "../lib/utils";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  const [sortBy, setSortBy] = useState("asc");
  const [sortOrder, setSortOrder] = useState("asc"); // asc | desc
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState('grid')
  
  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredAndSortedList = useMemo(() => {
    const lowerSearch = debouncedSearch.toLowerCase();

    return [...projects]
      .filter(project =>
        [project.title, project.discription, ...project.tags]
          .join(" ")
          .toLowerCase()
          .includes(lowerSearch)
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );

  }, [debouncedSearch, sortBy]);

  const filteredAndSortedList2 = useMemo(() => {
    
    let filtered = [...projects]

      filtered = filtered.filter(project =>
        project.tags.includes(debouncedSearch)
      );
    
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)

        case "discription":
          return a.discription.localeCompare(b.discription)
        default:
          return a.title.localeCompare(b.title)
      }
    })
    return filtered
  }, [projects, debouncedSearch, sortBy])

  return (
    <div className="container relative z-20 mx-auto px-6 pt-6 pb-20">

      {/* Section header */}
{/*       <div className='text-center mx-auto mx-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in animation-delay-100'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Project that 
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex web application to 
            innovate tools that solve real-world problems.
          </p>
      </div> */}

        <Header 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
          showBackButton={false}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

       {/*  Project grids */}
       {filteredAndSortedList.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-(--muted-foreground) text-xl">
              No projects found matching "{debouncedSearch}"
            </p>
          </div>
        ) : (
       <div       
          className={cn(
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                : "flex flex-col gap-3"
            )}>
        {filteredAndSortedList.map((project, index) => ( 
          <ProjectCard key={index} index={index} project={project} viewMode={viewMode} />
        ))}

       </div>
       )}
    </div>
  )
}

export default Projects
