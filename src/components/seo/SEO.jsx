import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'IA Trends Blog',
  description = 'Blog líder en tendencias de Inteligencia Artificial, Machine Learning y tecnología. Tutoriales, análisis y casos de uso prácticos.',
  keywords = 'inteligencia artificial, IA, machine learning, deep learning, chatgpt, tutoriales IA, tendencias tecnología',
  author = 'IA Trends Blog',
  image = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  article = false,
  publishedTime = null,
  modifiedTime = null,
  category = null,
  tags = [],
}) => {
  const siteUrl = 'https://iatrendsblog.com'; // Cambiar por tu dominio
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title} | IA Trends Blog</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="es" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="IA Trends Blog" />
      <meta property="og:locale" content="es_ES" />

      {/* Article específico */}
      {article && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {category && <meta property="article:section" content={category} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@iatrendsblog" />

      {/* Google AdSense Optimization */}
      <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      
      {/* Schema.org para Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': article ? 'Article' : 'WebSite',
          headline: title,
          description: description,
          image: image,
          author: {
            '@type': 'Organization',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'IA Trends Blog',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.png`,
            },
          },
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl,
          },
        })}
      </script>

      {/* Breadcrumb Schema */}
      {article && category && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: category,
                item: `${siteUrl}/categoria/${category.toLowerCase()}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: currentUrl,
              },
            ],
          })}
        </script>
      )}

      {/* Favicon y Apple Touch Icon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Preconnect para performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#0ea5e9" />
    </Helmet>
  );
};

export default SEO;
