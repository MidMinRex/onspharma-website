import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { Toaster } from 'sonner';
import { COMPANY_INFO, PRODUCTS, PRODUCT_PATH_PREFIX, SITE_URL, getProductPath, type Product } from './constants';
import logoIcon from './assets/logo-icon.png';

const PRODUCT_IDS = new Set(PRODUCTS.map((product) => product.id));

const normalizePathname = (pathname: string) => {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

const resolveRoute = (pathname: string) => {
  const cleanPath = normalizePathname(pathname);

  if (cleanPath === '/') return { page: 'home', productId: '' };
  if (cleanPath === '/about') return { page: 'about', productId: '' };
  if (cleanPath === '/contact') return { page: 'contact', productId: '' };
  if (cleanPath === PRODUCT_PATH_PREFIX) return { page: 'products', productId: '' };

  if (cleanPath.startsWith(`${PRODUCT_PATH_PREFIX}/`)) {
    const slug = decodeURIComponent(cleanPath.slice(`${PRODUCT_PATH_PREFIX}/`.length));
    if (PRODUCT_IDS.has(slug)) {
      return { page: 'product-detail', productId: slug };
    }
    return { page: 'products', productId: '' };
  }

  return { page: 'home', productId: '' };
};

const getPathForPage = (page: string, productId?: string) => {
  switch (page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'products':
      return PRODUCT_PATH_PREFIX;
    case 'contact':
      return '/contact';
    case 'product-detail':
      return productId ? getProductPath(productId) : PRODUCT_PATH_PREFIX;
    default:
      return '/';
  }
};

const buildMetaDescription = (text: string, maxLength = 155) => {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 3).trimEnd()}...`;
};

const setMetaDescription = (content: string) => {
  const normalized = buildMetaDescription(content);
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', normalized);
};

const setMetaTag = (key: string, content: string, attr: 'name' | 'property' = 'name') => {
  let meta = document.querySelector(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const setCanonicalUrl = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

const toAbsoluteUrl = (url: string) => {
  if (!url) return SITE_URL;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/')) return `${SITE_URL}${url}`;
  return `${SITE_URL}/${url}`;
};

const setJsonLd = (id: string, data: Record<string, unknown> | null) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    if (script) {
      script.remove();
    }
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.id = id;
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
};

const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: SITE_URL,
  logo: toAbsoluteUrl(logoIcon),
  description: COMPANY_INFO.tagline,
  address: COMPANY_INFO.contact.address,
  email: COMPANY_INFO.contact.email,
  telephone: COMPANY_INFO.contact.phone,
  foundingDate: String(COMPANY_INFO.established),
});

const getProductSchema = (product: Product, canonicalUrl: string) => {
  const dosageForm = product.composition?.[0];
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    category: product.category,
    url: canonicalUrl,
  };

  if (dosageForm) {
    schema.additionalProperty = [
      {
        '@type': 'PropertyValue',
        name: 'Dosage Form',
        value: dosageForm,
      },
    ];
  }

  return schema;
};

const getPageMeta = (page: string, productId: string) => {
  if (page === 'product-detail') {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (product) {
      return {
        title: `${product.name} | ${COMPANY_INFO.name}`,
        description: `${product.name} by ${COMPANY_INFO.name}. ${product.description}`,
      };
    }
  }

  switch (page) {
    case 'products':
      return {
        title: `Products | ${COMPANY_INFO.name}`,
        description: `Browse the pharmaceutical portfolio distributed by ${COMPANY_INFO.name}.`,
      };
    case 'about':
      return {
        title: `About | ${COMPANY_INFO.name}`,
        description: `${COMPANY_INFO.name} is a pharmaceutical wholesale and distribution company based in ${COMPANY_INFO.location}.`,
      };
    case 'contact':
      return {
        title: `Contact | ${COMPANY_INFO.name}`,
        description: `Contact ${COMPANY_INFO.name} for wholesale inquiries and distribution partnerships.`,
      };
    default:
      return {
        title: `${COMPANY_INFO.name} | Pharmaceutical Distribution`,
        description: `${COMPANY_INFO.name} is a pharmaceutical wholesale and distribution company based in ${COMPANY_INFO.location}. ${COMPANY_INFO.tagline}`,
      };
  }
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('');

  // Scroll to top on page or product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProductId]);

  // Initialize from URL
  useEffect(() => {
    const { page, productId } = resolveRoute(window.location.pathname);
    setActivePage(page);
    setSelectedProductId(productId);
    const normalizedPath = getPathForPage(page, productId);
    window.history.replaceState({ page, productId }, '', normalizedPath);
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const { page, productId } = resolveRoute(window.location.pathname);
      setActivePage(page);
      setSelectedProductId(productId);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document meta
  useEffect(() => {
    const { title, description } = getPageMeta(activePage, selectedProductId);
    const canonicalUrl = `${SITE_URL}${getPathForPage(activePage, selectedProductId)}`;
    document.title = title;
    setMetaDescription(description);
    setCanonicalUrl(canonicalUrl);
    setMetaTag('robots', 'index,follow');
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', buildMetaDescription(description), 'property');
    setMetaTag('og:type', activePage === 'product-detail' ? 'product' : 'website', 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:site_name', COMPANY_INFO.name, 'property');
    setMetaTag('twitter:card', 'summary');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', buildMetaDescription(description));

    const product = activePage === 'product-detail'
      ? PRODUCTS.find((item) => item.id === selectedProductId)
      : undefined;

    setJsonLd('ons-org-schema', getOrganizationSchema());
    if (product) {
      setJsonLd('ons-product-schema', getProductSchema(product, canonicalUrl));
    } else {
      setJsonLd('ons-product-schema', null);
    }
  }, [activePage, selectedProductId]);

  const handleSetActivePage = (page: string, productId?: string) => {
    const nextProductId = productId || '';
    const path = getPathForPage(page, nextProductId);
    window.history.pushState({ page, productId: nextProductId }, '', path);
    setActivePage(page);
    setSelectedProductId(nextProductId);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handleSetActivePage} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products setActivePage={handleSetActivePage} />;
      case 'product-detail':
        return <ProductDetail productId={selectedProductId} setActivePage={handleSetActivePage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={handleSetActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC] font-sans selection:bg-[#00A4BD]/20 selection:text-[#002D62] ui-enhanced">
      <Navbar activePage={activePage} setActivePage={handleSetActivePage} />

      <div className="pt-4">
        {renderPage()}
      </div>

      <Footer setActivePage={handleSetActivePage} />

      <Toaster position="top-right" richColors />
    </div>
  );
}
