import React from 'react';
import { useTranslation } from 'react-i18next';

function Community() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <header className="section-header">
        <h2>{t('community.title')}</h2>
        <p>{t('community.description')}</p>
      </header>
      <div className="grid two">
        <article className="card">
          <h3>{t('community.farmerInfluencers')}</h3>
          <p className="muted">{t('community.influencersDesc')}</p>
          <ul className="list">
            <li className="list-item">
              <div>
                <div className="list-title">Kisan Mentor</div>
                <div className="muted">
                  Organic vegetable farming • Weekly live sessions
                </div>
              </div>
              <button type="button" className="small-btn">
                {t('community.follow')}
              </button>
            </li>
            <li className="list-item">
              <div>
                <div className="list-title">Tech in the Field</div>
                <div className="muted">
                  Drones, IoT sensors, and precision ag
                </div>
              </div>
              <button type="button" className="small-btn">
                {t('community.follow')}
              </button>
            </li>
          </ul>
        </article>

        <article className="card">
          <h3>{t('community.futureOpportunities')}</h3>
          <ul className="future-list">
            <li>{t('community.aiCrop')}</li>
            <li>{t('community.droneIot')}</li>
            <li>{t('community.blockchain')}</li>
            <li>{t('community.government')}</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Community;

