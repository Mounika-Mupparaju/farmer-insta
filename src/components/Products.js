import React from 'react';
import { useTranslation } from 'react-i18next';

function Products({ products }) {
  const { t } = useTranslation();
  return (
    <section className="section">
      <header className="section-header">
        <h2>{t('products.title')}</h2>
        <p>{t('products.description')}</p>
      </header>
      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="card">
            <h3>{product.name}</h3>
            <p className="muted">{product.crops}</p>
            <span
              className={
                (product.typeKey || product.type) === 'Organic'
                  ? 'pill pill-organic'
                  : 'pill pill-chemical'
              }
            >
              {product.type}
            </span>
            <h4 className="mt">{t('products.benefits')}</h4>
            <p>{product.benefits}</p>
            <h4 className="mt">{t('products.risksCautions')}</h4>
            <p className="muted">{product.risk}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;

