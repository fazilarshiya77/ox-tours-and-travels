import React from 'react';
import { Search } from 'lucide-react';
import { GALLERY_CATEGORIES } from '../../data/galleryData';
import { FilterPills } from '../ui/FilterPills';
import { TextField } from '../ui/FormFields';
import { Reveal } from '../ui/Reveal';

interface GalleryFilterBarProps {
  category: string;
  query: string;
  onCategoryChange: (category: string) => void;
  onQueryChange: (query: string) => void;
}

/** Gallery controls: collection pills and a keyword search. */
export const GalleryFilterBar: React.FC<GalleryFilterBarProps> = ({
  category,
  query,
  onCategoryChange,
  onQueryChange,
}) => (
  <Reveal className="grid grid-cols-1 gap-5 border-y border-ink-black py-5 lg:grid-cols-12 lg:items-end">
    <div className="lg:col-span-8">
      <FilterPills label="Collection" options={GALLERY_CATEGORIES} value={category} onChange={onCategoryChange} />
    </div>
    <TextField
      containerClassName="lg:col-span-4"
      label="Search"
      icon={Search}
      type="search"
      placeholder="Vehicle or interior"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  </Reveal>
);
