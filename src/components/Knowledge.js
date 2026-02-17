import React from 'react';
import { useTranslation } from 'react-i18next';

function Knowledge({ guides }) {
  const { t } = useTranslation();
  return (
    <section className="section">
      <header className="section-header">
        <h2>{t('knowledge.title')}</h2>
        <p>{t('knowledge.description')}</p>
      </header>
      <div className="grid two">
        <div className="card">
          <h3>{t('knowledge.guidesProcedures')}</h3>
          <ul className="list">
            {guides.map((guide) => (
              <li key={guide.id} className="list-item">
                <div>
                  <div className="list-title">{guide.title}</div>
                  <div className="muted">
                    {guide.level} • {guide.duration}
                  </div>
                </div>
                <button type="button" className="small-btn">
                  {t('knowledge.open')}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>{t('knowledge.liveQA')}</h3>
          <p className="muted">{t('knowledge.liveQADesc')}</p>
          <ul className="list">
            <li className="list-item">
              <div>
                <div className="list-title">{t('knowledge.weeklySoil')}</div>
                <div className="muted">{t('knowledge.saturdayTime')}</div>
              </div>
              <button type="button" className="small-btn">
                {t('knowledge.notifyMe')}
              </button>
            </li>
            <li className="list-item">
              <div>
                <div className="list-title">{t('knowledge.helpDesk')}</div>
                <div className="muted">{t('knowledge.dropQuestions')}</div>
              </div>
              <button type="button" className="small-btn">
                {t('knowledge.ask')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Knowledge;

