
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarIcon, Clock } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/blog/${id}`);
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-md card-hover">
      <div onClick={handleNavigate} className="cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <CalendarIcon size={14} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {readTime}
          </div>
        </div>
        
        <div onClick={handleNavigate} className="cursor-pointer">
          <h3 className="text-xl font-bold mb-2 text-primary-800 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div 
          onClick={handleNavigate}
          className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium cursor-pointer"
        >
          Read More
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
