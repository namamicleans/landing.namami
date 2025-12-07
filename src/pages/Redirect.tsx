import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const WHATSAPP_NUMBER = '918770490169';

const REDIRECT_TYPES = {
  reschedule: {
    text: 'Reschedule my booked Service',
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=Reschedule%20my%20booked%20Service`
  },
  book: {
    text: 'Want to Book a New Service',
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=Want%20to%20Book%20a%20New%20Service`
  }
};

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const type = searchParams.get('type');
    
    if (type && REDIRECT_TYPES[type as keyof typeof REDIRECT_TYPES]) {
      const redirectConfig = REDIRECT_TYPES[type as keyof typeof REDIRECT_TYPES];
      
      // Redirect to WhatsApp
      window.location.href = redirectConfig.url;
    } else {
      // If no valid type parameter, redirect to home after 3 seconds
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, navigate]);

  const type = searchParams.get('type');
  const isValidType = type && REDIRECT_TYPES[type as keyof typeof REDIRECT_TYPES];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full mx-4">
        <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-6" />
        
        {isValidType ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Redirecting to WhatsApp
            </h1>
            <p className="text-gray-600 mb-4">
              You're being redirected to our WhatsApp support...
            </p>
            <p className="text-sm text-gray-500">
              Action: <span className="font-semibold">{REDIRECT_TYPES[type as keyof typeof REDIRECT_TYPES].text}</span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Invalid Request
            </h1>
            <p className="text-gray-600 mb-4">
              The redirect link is invalid or incomplete.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to home page...
            </p>
          </>
        )}
        
        <div className="mt-6 text-xs text-gray-400">
          If you're not redirected automatically, please contact support.
        </div>
      </div>
    </div>
  );
};

export default Redirect;
