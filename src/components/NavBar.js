import React from 'react';
import { useTranslation } from 'react-i18next';

const TAB_KEYS = {
  FEED: 'nav.mediaFeed',
  KNOWLEDGE: 'nav.knowledge',
  EQUIPMENT: 'nav.equipment',
  LABOR: 'nav.labor',
  PRODUCTS: 'nav.products',
  SALES: 'nav.sales',
  LEARNING: 'nav.learning',
  COMMUNITY: 'nav.community',
};

function NavBar({ activeTab, onChangeTab, tabs }) {
  const { t } = useTranslation();
  return (
    <nav className="app-nav">
      {Object.keys(tabs).map((key) => {
        const value = tabs[key];
        const labelKey = TAB_KEYS[value];
        const label = labelKey ? t(labelKey) : value;
        return (
          <button
            key={key}
            type="button"
            className={activeTab === value ? 'app-nav-btn active' : 'app-nav-btn'}
            onClick={() => onChangeTab(value)}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}

export default NavBar;

