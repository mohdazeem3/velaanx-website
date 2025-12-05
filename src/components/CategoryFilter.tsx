import { cn } from '@/lib/utils';
import { categories } from '@/data/mockData';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onSelectCategory(category.name)}
          className={cn(
            "px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2",
            selectedCategory === category.name
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-foreground hover:bg-muted border border-border"
          )}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
