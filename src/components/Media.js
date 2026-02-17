import React from 'react';
import { useTranslation } from 'react-i18next';

function Media({ posts }) {
  const { t } = useTranslation();
  return (
    <section className="section">
      <header className="section-header">
        <h2>{t('media.title')}</h2>
        <p>{t('media.description')}</p>
      </header>
      <div className="grid">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <div className="card-media-placeholder">
              <span>{post.type}</span>
            </div>
            <div className="card-body">
              <h3>{post.title}</h3>
              <p className="muted">
                {post.farmer} • {post.location}
              </p>
              <p>{post.description}</p>
              <div className="tag-row">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-footer-row">
                <button type="button" className="ghost-btn">
                  {t('media.like')}
                </button>
                <button type="button" className="ghost-btn">
                  {t('media.comment')}
                </button>
                <button type="button" className="ghost-btn">
                  {t('media.followFarm')}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Media;

