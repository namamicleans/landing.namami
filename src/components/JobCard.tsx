import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  department: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  location,
  type,
  salary,
  department,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-primary-800">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-1 text-primary" /> {location}
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <Briefcase size={16} className="mr-1 text-primary" /> {type}
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <DollarSign size={16} className="mr-1 text-primary" /> {salary}
            </span>
          </div>
        </div>
        <span className="bg-primary-50 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
          {department}
        </span>
      </div>

      <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

      <div className="flex justify-end">
        <Link to={`/hiring/${id}#apply`}>
          <Button className="bg-primary text-white hover:bg-primary-600">
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
