import React, { useState } from "react";
import { Star, Play, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image?: string;
  videoId?: string;
  socialLink?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  rating,
  image,
  videoId,
  socialLink,
}) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden mb-2">
      {videoId && !videoPlaying ? (
        <div
          className="relative cursor-pointer"
          onClick={() => setVideoPlaying(true)}
        >
          <AspectRatio ratio={16 / 9}>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`Testimonial by ${name}`}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play fill="white" className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
        </div>
      ) : videoId && videoPlaying ? (
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`Testimonial by ${name}`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      ) : null}

      <div className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-14 w-14 border-2 border-primary/10">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : (
              <AvatarFallback className="bg-gradient-to-br from-primary-300 to-primary-600 text-white text-xl font-bold">
                {name.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="ml-4">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-lg">{name}</h4>
              {socialLink && (
                <a
                  href={socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-gray-600 text-sm">{role}</p>

            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <p className="text-gray-700 italic text-base leading-relaxed line-clamp-4">
            "{testimonial}"
          </p>
          <span className="absolute -top-2 -left-1 text-6xl text-primary/10 font-serif">
            "
          </span>
          <span className="absolute -bottom-8 -right-1 text-6xl text-primary/10 font-serif rotate-180">
            "
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
