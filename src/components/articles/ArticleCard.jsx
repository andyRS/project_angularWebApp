import { Link } from 'react-router-dom';
import { ClockIcon, EyeIcon, CalendarIcon, ArrowRightIcon, UserIcon } from '../ui/Icons';

const ArticleCard = ({ article, featured = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views;
  };

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300">
        {/* Image Container */}
        <Link to={`/articulo/${article.slug}`} className="block relative h-80 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Featured Badge */}
          <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-tech text-white text-sm font-semibold shadow-glow">
            ⭐ Destacado
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="badge bg-white/90 backdrop-blur-sm text-neutral-900">
              {article.category}
            </span>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-display font-bold mb-3 line-clamp-2 group-hover:text-primary-300 transition-colors">
              {article.title}
            </h2>
            
            <p className="text-neutral-200 mb-4 line-clamp-2">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center flex-wrap gap-4 text-sm text-neutral-300">
              <div className="flex items-center space-x-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full border-2 border-white/50"
                />
                <span className="font-medium">{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ClockIcon className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <EyeIcon className="h-4 w-4" />
                <span>{formatViews(article.views)}</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <Link 
          to={`/articulo/${article.slug}`}
          className="block relative md:w-2/5 h-64 md:h-auto overflow-hidden flex-shrink-0"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Category Badge on Image */}
          <div className="absolute top-4 left-4">
            <span className="badge bg-white/90 backdrop-blur-sm">
              {article.category}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <Link to={`/articulo/${article.slug}`}>
            <h3 className="text-xl font-display font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <div className="flex items-center space-x-4 text-sm text-neutral-500">
              {/* Author */}
              <div className="flex items-center space-x-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-neutral-700">{article.author.name}</span>
              </div>

              {/* Reading Time */}
              <div className="hidden sm:flex items-center space-x-1">
                <ClockIcon className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>

              {/* Views */}
              <div className="hidden sm:flex items-center space-x-1">
                <EyeIcon className="h-4 w-4" />
                <span>{formatViews(article.views)}</span>
              </div>
            </div>

            {/* Read More Link */}
            <Link
              to={`/articulo/${article.slug}`}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm group/link"
            >
              <span>Leer más</span>
              <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
