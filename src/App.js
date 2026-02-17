import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getDataForLang } from './dataByLang';
import './App.css';
import NavBar from './components/NavBar';
import Media from './components/Media';
import Knowledge from './components/Knowledge';
import Equipment from './components/Equipment';
import Labor from './components/Labor';
import Products from './components/Products';
import Sales from './components/Sales';
import Learning from './components/Learning';
import Community from './components/Community';

const TABS = {
  FEED: 'FEED',
  KNOWLEDGE: 'KNOWLEDGE',
  EQUIPMENT: 'EQUIPMENT',
  LABOR: 'LABOR',
  PRODUCTS: 'PRODUCTS',
  SALES: 'SALES',
  LEARNING: 'LEARNING',
  COMMUNITY: 'COMMUNITY',
};

function App() {
  const { t, i18n } = useTranslation();
  const data = getDataForLang(i18n.language);
  const [activeTab, setActiveTab] = useState(TABS.FEED);
  const [cart, setCart] = useState([]);
  const [jobs, setJobs] = useState(data.jobs);
  const [userSalesItems, setUserSalesItems] = useState([]);
  const [userEquipment, setUserEquipment] = useState([]);

  useEffect(() => {
    setJobs(getDataForLang(i18n.language).jobs);
  }, [i18n.language]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const handleCreateJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value.trim();
    const location = form.location.value.trim();
    const type = form.type.value.trim();

    if (!title || !location || !type) return;

    setJobs((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title,
        location,
        type,
      },
    ]);

    form.reset();
  };

  const handleAddSalesItem = (item) => {
    setUserSalesItems((prev) => [...prev, { ...item, id: `user-sales-${Date.now()}` }]);
  };

  const handleAddEquipment = (item) => {
    setUserEquipment((prev) => [...prev, { ...item, id: `user-equip-${Date.now()}` }]);
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <div>
          <h1 className="app-title">{t('app.title')}</h1>
          <p className="app-subtitle">{t('app.subtitle')}</p>
        </div>
        <div className="app-header-meta">
          <select
            className="lang-select"
            value={i18n.language && i18n.language.split('-')[0]}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            aria-label="Language"
          >
            <option value="en">{t('language.en')}</option>
            <option value="te">{t('language.te')}</option>
            <option value="hi">{t('language.hi')}</option>
          </select>
          <span className="app-pill">{t('app.pillFarmerFirst')}</span>
          <span className="app-pill">{t('app.pillSocial')}</span>
          <span className="app-pill">{t('app.pillWebMvp')}</span>
          {cart.length > 0 && (
            <span className="app-cart-pill">
              {t('app.cart')}: <strong>{cart.length}</strong>{' '}
              {cart.length > 1 ? t('app.cartItems') : t('app.cartItem')}
            </span>
          )}
        </div>
      </header>

      <NavBar activeTab={activeTab} onChangeTab={setActiveTab} tabs={TABS} />

      <main className="app-main">
        {activeTab === TABS.FEED && <Media posts={data.posts} />}

        {activeTab === TABS.KNOWLEDGE && (
          <Knowledge guides={data.guides} />
        )}

        {activeTab === TABS.EQUIPMENT && (
          <Equipment
            items={[...data.equipment, ...userEquipment]}
            onAddEquipment={handleAddEquipment}
          />
        )}

        {activeTab === TABS.LABOR && (
          <Labor
            laborProfiles={data.workers}
            jobs={jobs}
            onCreateJob={handleCreateJob}
          />
        )}

        {activeTab === TABS.PRODUCTS && (
          <Products products={data.products} />
        )}

        {activeTab === TABS.SALES && (
          <Sales
            items={[...data.salesItems, ...userSalesItems]}
            cart={cart}
            onAddToCart={handleAddToCart}
            onAddSalesItem={handleAddSalesItem}
          />
        )}

        {activeTab === TABS.LEARNING && (
          <Learning courses={data.courses} />
        )}

        {activeTab === TABS.COMMUNITY && <Community />}
      </main>

      <footer className="app-footer">
        <p className="muted">{t('app.footer')}</p>
      </footer>
    </div>
  );
}

export default App;
