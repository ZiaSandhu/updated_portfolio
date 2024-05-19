import generateStylesheetObject from '@/Common/generateStylesheetsObject';
import Lines from '@/components/Common/Lines';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Zia Ur Rehman - Full Stack Web Developer',
  description: 'Zia Ur Rehman is a full stack web developer specializing in crafting modern, responsive, and user-friendly websites and web applications.',
  keywords: 'Zia Ur Rehman, Full Stack Developer, Web Developer, Portfolio, JavaScript, React, Node.js, Web Development',
  author: 'Zia Ur Rehman',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    // appleTouchIcon: '/assets/imgs/apple-touch-icon.png', // optional: for iOS devices
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
  openGraph: {
    title: 'Zia Ur Rehman - Full Stack Web Developer',
    type: 'website',
    url: 'https://ziaportfolio0.web.app', // replace with your website URL
    image: '/assets/imgs/og-image.jpg', // replace with a link to your Open Graph image
    description: 'Zia Ur Rehman is a full stack web developer specializing in modern, responsive, and user-friendly web applications.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle', // replace with your Twitter handle
    creator: '@your_twitter_handle', // replace with your Twitter handle
    title: 'Zia Ur Rehman - Full Stack Web Developer',
    description: 'Zia Ur Rehman is a full stack web developer specializing in modern, responsive, and user-friendly web applications.',
    image: '/assets/imgs/twitter-card-image.jpg', // replace with a link to your Twitter card image
  },
};

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta charSet={metadata.charset} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        {/* <link rel="apple-touch-icon" href={metadata.icons.appleTouchIcon} /> */}
        {metadata.icons.other}
        {/* Open Graph Metadata */}
        {/* <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} /> */}
      </head>
      <body className="sub-bg">
        <Lines />
        <div>
          <main>{children}</main>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}

export default Layout;
