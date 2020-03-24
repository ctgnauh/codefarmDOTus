import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Product from '@sections/Product';
import Comments from '@sections/Comments';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Product />
    <Comments />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
