
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Veteran Campaigns",
  description = "Political campaign messaging and strategy experts",
  image = "/lovable-uploads/f7054911-fff7-4a56-9e4f-87833a35d6a3.png",
  canonical = "",
  type = "website",
  keywords = "Veteran Campaigns, political campaigns, campaign messaging, campaign strategy, election strategy"
}) => {
  const siteUrl = window.location.origin;
  const fullUrl = canonical ? `${siteUrl}${canonical}` : window.location.href;
  
  return (
    <Helmet>
      {/* Basic tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={fullUrl} />}
      
      {/* Open Graph tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      <meta property="og:site_name" content="Veteran Campaigns" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
