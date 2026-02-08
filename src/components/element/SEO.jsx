import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Arthasya Communications - Strategic Communication & Brand Solutions",
  description = "Arthasya Communications delivers innovative communication strategies, brand development, and marketing solutions that drive meaningful impact for businesses across industries.",
  keywords = "communication agency, brand strategy, marketing solutions, digital marketing, brand development, public relations, content marketing, strategic communication",
  image = "/og-image.jpg",
  url = "",
  type = "website",
  author = "Arthasya Communications",
  twitterHandle = "@ArthasyaComm"
}) => {
  const siteUrl = "https://www.arthasya.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Arthasya Communications" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Arthasya Communications",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.facebook.com/ArthasyaComm",
            "https://www.twitter.com/ArthasyaComm",
            "https://www.linkedin.com/company/arthasya-communications",
            "https://www.instagram.com/arthasya_communications"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;