import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import './Css/News.css';

const newsArticles = [
    {
        id: 1,
        title: 'RTX 50 Anunciada: Nueva Generación de GPUs NVIDIA',
        excerpt: 'NVIDIA reveló su próxima generación de tarjetas gráficas con ray tracing mejorado y DLSS 4.0 integrado...',
        date: '15 Mar, 2026',
        readTime: '6 min lectura',
        category: 'Hardware',
        imageGradient: 'linear-gradient(135deg, #00f0ff 0%, #0a0a0c 100%)'
    },
    {
        id: 2,
        title: 'Guía Completa: Cómo Elegir el Mejor Monitor Gaming',
        excerpt: 'Análisis detallado sobre resolución, Hz, tiempos de respuesta y tecnologías de sincronización...',
        date: '10 Mar, 2026',
        readTime: '8 min lectura',
        category: 'Tutoriales',
        imageGradient: 'linear-gradient(135deg, #8a2be2 0%, #0a0a0c 100%)'
    },
    {
        id: 3,
        title: 'Gaming en 4K: Análisis de Rendimiento en Última Generación',
        excerpt: 'Benchmark de los juegos más exigentes con configuración ultra en resolución 4K...',
        date: '05 Mar, 2026',
        readTime: '5 min lectura',
        category: 'Benchmarks',
        imageGradient: 'linear-gradient(135deg, #ff003c 0%, #0a0a0c 100%)'
    }
];

// Componente para mostrar una tarjeta de noticia individual
function NewsCard({ article }) {
    const handleLinkClick = (e) => {
        e.preventDefault();
    };

    return (
        <article className="news-card glass-panel">
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

                <a href="#!" onClick={handleLinkClick} className="read-more">
                    Leer Artículo <ArrowRight size={16} />
                </a>
            </div>
        </article>
    );
}

function News() {
    return (
        <section className="news-section">
            <div className="section-header text-center">
                <h2 className="section-title">
                    Blog <span className="gradient-text">Gaming</span>
                </h2>
                <p className="section-subtitle">
                    Mantente actualizado con análisis, tutoriales y noticias del mundo gaming.
                </p>
            </div>

            <div className="news-grid">
                {newsArticles.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}

export default News;
