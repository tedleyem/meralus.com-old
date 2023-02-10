import { NextSeoProps } from 'next-seo';

const seoConfig: NextSeoProps = {
  title: 'Tedley Meralus',
  description: 'I’m Tedley and I’m a Software & Devops engineer.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meralus.com',
    siteName: 'Tedley Meralus',
    images: [
      {
        url: '',
        width: 1200,
        height: 600,
        alt: 'I’m Tedley and I’m a Software & Devops engineer.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@techdadteddy',
    site: '@techdadteddy',
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
