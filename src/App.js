import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getDataForLang } from './dataByLang';
import { api } from './api';
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
  const staticData = getDataForLang(i18n.language);
  const [activeTab, setActiveTab] = useState(TABS.FEED);
  const [cart, setCart] = useState([]);
  const [apiData, setApiData] = useState({
    posts: null,
    guides: null,
    equipment: null,
    workers: null,
    jobs: null,
    products: null,
    salesItems: null,
    courses: null,
  });
  const [apiError, setApiError] = useState(false); // used when API fails so we fall back to static data

  useEffect(() => {
    let cancelled = false;
    setApiError(false);
    Promise.all([
      api.getPosts(api.getClientId()).then((r) => ({ posts: r })).catch(() => null),
      api.getGuides().then((r) => ({ guides: r })).catch(() => null),
      api.getEquipment().then((r) => ({ equipment: r })).catch(() => null),
      api.getWorkers().then((r) => ({ workers: r })).catch(() => null),
      api.getJobs().then((r) => ({ jobs: r })).catch(() => null),
      api.getProducts().then((r) => ({ products: r })).catch(() => null),
      api.getSales().then((r) => ({ salesItems: r })).catch(() => null),
      api.getCourses().then((r) => ({ courses: r })).catch(() => null),
    ]).then((results) => {
      if (cancelled) return;
      const next = {};
      results.forEach((r) => r && Object.assign(next, r));
      if (Object.keys(next).length > 0) {
        setApiData((prev) => ({ ...prev, ...next }));
      } else {
        setApiError(true);
      }
    });
    return () => { cancelled = true; };
  }, []);

  const data = {
    posts: apiData.posts ?? staticData.posts,
    guides: apiData.guides ?? staticData.guides,
    equipment: apiData.equipment ?? staticData.equipment,
    workers: apiData.workers ?? staticData.workers,
    jobs: apiData.jobs ?? staticData.jobs,
    products: apiData.products ?? staticData.products,
    salesItems: apiData.salesItems ?? staticData.salesItems,
    courses: apiData.courses ?? staticData.courses,
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const handleCreateJob = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value.trim();
    const location = form.location.value.trim();
    const type = form.type.value.trim();
    if (!title || !location || !type) return;
    try {
      const created = await api.postJob({ title, location, type });
      setApiData((prev) => ({ ...prev, jobs: [...(prev.jobs || data.jobs), created] }));
      form.reset();
    } catch {
      setApiData((prev) => ({
        ...prev,
        jobs: [...(prev.jobs || data.jobs), { id: (prev.jobs?.length || 0) + 1, title, location, type }],
      }));
      form.reset();
    }
  };

  const handleAddSalesItem = async (item) => {
    try {
      const created = await api.postSalesItem(item);
      setApiData((prev) => ({ ...prev, salesItems: [...(prev.salesItems || data.salesItems), created] }));
    } catch {
      setApiData((prev) => ({
        ...prev,
        salesItems: [...(prev.salesItems || data.salesItems), { ...item, id: `user-sales-${Date.now()}` }],
      }));
    }
  };

  const handleAddEquipment = async (item) => {
    try {
      const created = await api.postEquipment(item);
      setApiData((prev) => ({ ...prev, equipment: [...(prev.equipment || data.equipment), created] }));
    } catch {
      setApiData((prev) => ({
        ...prev,
        equipment: [...(prev.equipment || data.equipment), { ...item, id: `user-equip-${Date.now()}` }],
      }));
    }
  };

  const refreshPosts = () => {
    api.getPosts(api.getClientId()).then((r) => setApiData((prev) => ({ ...prev, posts: r }))).catch(() => {});
  };

  return (
    <div className="app-root" data-offline={apiError || undefined}>
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
        {activeTab === TABS.FEED && <Media posts={data.posts} refreshPosts={refreshPosts} />}

        {activeTab === TABS.KNOWLEDGE && (
          <Knowledge guides={data.guides} />
        )}

        {activeTab === TABS.EQUIPMENT && (
          <Equipment
            items={data.equipment}
            onAddEquipment={handleAddEquipment}
          />
        )}

        {activeTab === TABS.LABOR && (
          <Labor
            laborProfiles={data.workers}
            jobs={data.jobs}
            onCreateJob={handleCreateJob}
          />
        )}

        {activeTab === TABS.PRODUCTS && (
          <Products products={data.products} />
        )}

        {activeTab === TABS.SALES && (
          <Sales
            items={data.salesItems}
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
