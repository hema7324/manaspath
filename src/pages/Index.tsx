import { useEffect } from "react";
import ManasPathHomepage from "@/components/ManasPathHomepage";

const Index = () => {
  useEffect(() => {
    // SEO Meta Updates
    document.title = "ManasPath - Your Inner Path to Balance | Ancient Indian Wellness";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover mental wellness through timeless Indian wisdom. Daily Ayurveda, Yoga, and Gita practices for inner balance and peaceful mind.');
    }
    
    // Add structured data for wellness website
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "ManasPath",
      "description": "Ancient Indian wisdom for mental wellness and inner balance",
      "url": window.location.origin,
      "serviceType": "Mental Wellness Platform",
      "areaServed": "Worldwide"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main>
      <ManasPathHomepage />
    </main>
  );
};

export default Index;
