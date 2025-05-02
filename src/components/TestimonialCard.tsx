import React, { useState } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TestimonialCardProps {
  name: string;
  videoId?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  videoId,
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
    </div>
  );
};

export default TestimonialCard;
