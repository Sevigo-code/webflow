import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import './News.css';

const newsArticles = [
    {
        id: 1,
        title: 'Aura revela la nueva arquitectura X1 Pro en TechSummit 2026',
        excerpt: 'El revolucionario procesador X1 ofrece un rendimiento de escritorio en un formato ultradelgado con una eficiencia sin precedentes...',
        date: '12 Oct, 2026',
        readTime: '5 min lectura',
        category: 'Hardware',
        imageGradient: 'linear-gradient(135deg, #00f0ff 0%, #0a0a0c 100%)'
    },
    {
        id: 2,
        title: 'El Futuro de la RV: Realidad inmersiva como nunca antes',
        excerpt: 'Nuestro próximo visor de RV utiliza seguimiento ocular y respuesta neuronal para eliminar el mareo por completo.',
        date: '05 Oct, 2026',
        readTime: '8 min lectura',
        category: 'Innovación',
        imageGradient: 'linear-gradient(135deg, #8a2be2 0%, #0a0a0c 100%)'
    },
    {
        id: 3,
        title: 'AuraOS v12 Beta: IA integrada en el núcleo de la experiencia',
        excerpt: 'Experimenta el primer sistema operativo donde tu asistente digital anticipa tus necesidades antes de que preguntes.',
        date: '28 Sep, 2026',
        readTime: '4 min lectura',
        category: 'Software',
        imageGradient: 'linear-gradient(135deg, #ff003c 0%, #0a0a0c 100%)'
    }
];

const NewsCard = ({ article }) => (
    <article className="news-card glass-panel animate-fade-in">
        <div className="news-image-placeholder" style={{ background: article.imageGradient }}>
            <span className="news-category">{article.category}</span>
        </div>

        <div className="news-content">
            <div className="news-meta">
                <span className="meta-item"><Calendar size={14} /> {article.date}</span>
                <span className="meta-item"><Clock size={14} /> {article.readTime}</span>
            </div>

            <h3 className="news-title">{article.title}</h3>
            <p className="news-excerpt">{article.excerpt}</p>

            <a href="#" className="read-more">
                Leer Artículo <ArrowRight size={16} />
            </a>
        </div>
    </article>
);

const News = () => {
    return (
        <section className="news-section">
            <div className="section-header text-center">
                <h2 className="section-title">
                    Noticias <span className="gradient-text">Tech</span>
                </h2>
                <p className="section-subtitle">
                    Mantente al día con los últimos anuncios, reseñas e innovaciones.
                </p>
            </div>

            <div className="news-grid">
                {newsArticles.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
};

export default News;
