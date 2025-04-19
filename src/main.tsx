
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Namami Cleans",
  "url": "https://namamicleans.com",
  "logo": "https://namamicleans.com/namami_logo.png",
  "description": "Professional cleaning services for homes and businesses with a focus on quality, reliability, and environmental sustainability.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street, Suite 200",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "postalCode": "02108",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://facebook.com/namamicleans",
    "https://twitter.com/namamicleans",
    "https://instagram.com/namamicleans",
    "https://linkedin.com/company/namamicleans"
  ]
};

// Create a script element to insert the JSON-LD
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);

// Ensure we have a proper DOM element before rendering
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
