import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import ArticleCard from '../components/articles/ArticleCard';
import { articles, categories, popularTags } from '../data/articles';
import { FireIcon, SparklesIcon, ChartBarIcon, TagIcon } from '../components/ui/Icons';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredArticles = articles.filter((article) => article.featured);
  const latestArticles = articles.filter((article) => !article.featured);

  const filteredArticles = selectedCategory === 'all'
    ? latestArticles
    : latestArticles.filter((article) => article.category === selectedCategory);

  return (
    <>
      <SEO
        title="Inicio - Tendencias de IA y Machine Learning"
        description="Descubre las últimas tendencias en Inteligencia Artificial, tutoriales de Machine Learning, comparativas de herramientas y casos de uso reales."
        keywords="inteligencia artificial, IA, machine learning, deep learning, chatgpt, tutoriales"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
              <SparklesIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">Lo último en IA y Tecnología</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in">
              Explora el Futuro de la{' '}
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed">
              Descubre tendencias, tutoriales expertos y análisis profundos sobre IA, Machine Learning y las tecnologías que están transformando nuestro mundo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <Link
                to="/articulos"
                className="btn-premium px-8 py-4 text-lg shadow-glow"
              >
                Explorar Artículos
              </Link>
              <Link
                to="/newsletter"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Suscribirme al Newsletter
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-white/70">Artículos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">10k+</div>
                <div className="text-sm text-white/70">Lectores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">5+</div>
                <div className="text-sm text-white/70">Categorías</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="container-custom py-16">
          <div className="flex items-center space-x-3 mb-8">
            <FireIcon className="h-8 w-8 text-orange-500" />
            <h2 className="text-3xl font-display font-bold text-neutral-900">
              Artículos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured={true} />
            ))}
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="bg-neutral-50 py-8 sticky top-20 z-40 border-y border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-custom pb-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-tech text-white shadow-glow-blue'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.name
                    ? 'bg-gradient-tech text-white shadow-glow-blue'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container-custom py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <ChartBarIcon className="h-8 w-8 text-primary-500" />
            <h2 className="text-3xl font-display font-bold text-neutral-900">
              {selectedCategory === 'all' ? 'Últimos Artículos' : `Artículos de ${selectedCategory}`}
            </h2>
          </div>
          <Link
            to="/articulos"
            className="text-primary-600 hover:text-primary-700 font-medium hidden md:block"
          >
            Ver todos →
          </Link>
        </div>

        <div className="space-y-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured={false} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-500 text-lg">
              No hay artículos en esta categoría aún.
            </p>
          </div>
        )}
      </section>

      {/* Sidebar Section - Tags & Newsletter */}
      <aside className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Popular Tags */}
            <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <TagIcon className="h-6 w-6 text-secondary-500" />
                <h3 className="text-2xl font-display font-bold text-neutral-900">
                  Tags Populares
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tag/${tag.toLowerCase()}`}
                    className="px-4 py-2 rounded-lg bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-colors font-medium"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-tech rounded-2xl shadow-glow p-8 text-white text-center">
              <SparklesIcon className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold mb-3">
                ¿No te quieres perder nada?
              </h3>
              <p className="text-white/90 mb-6">
                Únete a más de 10,000 profesionales que reciben insights semanales sobre IA.
              </p>
              <Link
                to="/newsletter"
                className="inline-block px-8 py-3 rounded-lg bg-white text-primary-600 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Suscribirme Ahora
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HomePage;
