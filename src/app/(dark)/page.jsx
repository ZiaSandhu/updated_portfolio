"use client"
import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Blog from '@/components/dark/home/blog';
import ContactUs from '@/components/dark/contact/ContactUs';
import Info from '@/components/dark/contact/info';
import Footer from '@/components/dark/home/footer';
import NavTop from '@/components/dark/home/nav-top';
import Navbar from '@/components/dark/home/navbar';
import Portfolio from '@/components/dark/home/portfolio';
import Price from '@/components/dark/home/price';
import Profile from '@/components/dark/home/profile';
import Services from '@/components/dark/home/services';
import Skills from '@/components/dark/home/skills';
import Testimonials from '@/components/dark/home/testimonials';
import Script from 'next/script';
import React,{useState,useEffect} from 'react';
import { getMultipleCollections } from '@/utils/firebase';
function Dark() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const items = await getMultipleCollections();
      setData(items);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Cursor />
      <ContactUs />
     {!data && <LoadingScreen />}
      <ProgressScroll />

      <div>
        {/* <NavTop /> */}
        <main className="container mt-20">
          <Profile />
          <Navbar />
      {data &&    <section className="in-box">
            <Services data = {data.servicesItems} />
            <Skills data={data.skillItems} />
            <Portfolio data={data.portfolioItems} />
            {/* <Testimonials /> */}
            {/* <Price /> */}
            <Info />
            {/* <Blog /> */}
          </section>
          }
        </main>
        <Footer />
      </div>
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default Dark;
