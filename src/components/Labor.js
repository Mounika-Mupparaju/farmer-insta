import React from 'react';
import { useTranslation } from 'react-i18next';

function Labor({ laborProfiles, jobs, onCreateJob }) {
  const { t } = useTranslation();
  return (
    <section className="section">
      <header className="section-header">
        <h2>{t('labor.title')}</h2>
        <p>{t('labor.description')}</p>
      </header>

      <div className="grid two">
        <div className="card">
          <h3>{t('labor.availableLabor')}</h3>
          <ul className="list">
            {laborProfiles.map((labor) => (
              <li key={labor.id} className="list-item">
                <div>
                  <div className="list-title">{labor.name}</div>
                  <div className="muted">
                    {labor.location} • {labor.availability}
                  </div>
                  <div className="tag-row">
                    {labor.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button type="button" className="small-btn">
                  {t('labor.contact')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>{t('labor.postJob')}</h3>
          <p className="muted">{t('labor.postJobNote')}</p>
          <form className="form" onSubmit={onCreateJob}>
            <label className="form-label">
              {t('labor.jobTitle')}
              <input
                name="title"
                type="text"
                placeholder={t('labor.jobTitlePlaceholder')}
                className="form-input"
              />
            </label>
            <label className="form-label">
              {t('labor.location')}
              <input
                name="location"
                type="text"
                placeholder={t('labor.locationPlaceholder')}
                className="form-input"
              />
            </label>
            <label className="form-label">
              {t('labor.type')}
              <input
                name="type"
                type="text"
                placeholder={t('labor.typePlaceholder')}
                className="form-input"
              />
            </label>
            <button type="submit" className="primary-btn full-width">
              {t('labor.postJobBtn')}
            </button>
          </form>

          <h4 className="mt-lg">{t('labor.openJobs')}</h4>
          <ul className="list">
            {jobs.map((job) => (
              <li key={job.id} className="list-item">
                <div>
                  <div className="list-title">{job.title}</div>
                  <div className="muted">
                    {job.location} • {job.type}
                  </div>
                </div>
                <button type="button" className="small-btn">
                  {t('labor.viewApplicants')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Labor;

