import { cn } from "../lib/utils";
import CustomDropdown from "./CustomDropdown";
import { Grid3X3, List} from "lucide-react";

/* const sortOptions = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "react", label: "React" },
  { value: "typescript", label: "Typescript" },
  { value: "javascript", label: "JavaScript" },
  { value: "redux", label: "Redux" },
  { value: "tailwind", label: "Tailwind" },
  { value: "styled-components", label: "styled-components" },
]; */
const FilterBar = ({
/*   sortBy,
  onSortChange, */
  viewMode,
  onViewModeChange
}) => {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      {/* Sort Dropdown */}
{/*       <div className="flex items-center gap-4">
        <CustomDropdown
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          label="Sort by"
        />
      </div> */}
      {/* View Toggle */}
      <div className="flex items-center gap-2 p-1 bg-(--card)/50 backdrop-blur-xl border border-(--border)/50 rounded-xl">
        <button
          onClick={() => onViewModeChange("grid")}
          className={cn(
            "p-2.5 rounded-lg transition-all duration-200",
            viewMode == "grid"
              ? "bg-(--color-primary) text-(--primary-foreground) shadow-lg"
              : "text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--card)"
          )}
          aria-label="Grid view"
        >
          <Grid3X3 className="h-5 w-5" />
        </button>
        <button
          
          onClick={() => onViewModeChange("list")}
          className={cn(
            "p-2.5 rounded-lg transition-all duration-200",
            viewMode == "list"
              ? "bg-(--color-primary) text-(--primary-foreground) shadow-lg"
              : "text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--card)"
          )}
          aria-label="List view"
        >
          <List className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default FilterBar
