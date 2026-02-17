import { Search, Rocket, ArrowUpLeft, ArrowUpRight, FolderKanban, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";

export function Header({
  searchQuery,
  onSearchChange,
  showBackButton = false,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) {
  const navigate = useNavigate();

  return (
    <header className="glass-bg sticky top-0 z-50 pb-6 w-full">
      
        <div className="flex items-end justify-end w-full mb-6">
 <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <Link to="/">
            <AnimatedBorderButton>
              <ArrowUpLeft className='w-5 h-5'/>
              Back home
            </AnimatedBorderButton>
          </Link>
        </div> 
        </div>
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="p-2 rounded-xl bg(--primary)/10 border border(--primary)/30">
              <BriefcaseBusiness className="h-6 w-6 text(--primary)" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
              <p className="text-sm text-(--muted-foreground)">
                {/* Real-time market data */}Project list
              </p>
            </div>
          </div>

          {/* Search Section */}
          {!showBackButton && (
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-(--muted-foreground)" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input-custom"
                />
              </div>
            </div>
          )}
                  {/* FilterBar */}
        <FilterBar
          sortBy={sortBy}
          onSortChange={onSortChange}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
        />
        {/* CTA */}
{/*         <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <Link to="/">
            <AnimatedBorderButton>
              <ArrowUpLeft className='w-5 h-5'/>
              Back home
            </AnimatedBorderButton>
          </Link>
        </div> */}
          {/* Back Button */}
          {showBackButton && (
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2.5 bg-card/60 backdrop-blur-xl border border-strong rounded-xl text-foreground font-medium transition-all duration-200 hover:bg-card hover:border-border"
            >
              ← Back to Portfolio
            </button>
          )}
        </div>
     
    </header>
  );
}
