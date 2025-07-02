import React from 'react';
import Hero from '../components/home/Hero';
import SiretForm from '../components/home/SiretForm';
import IntroBloc from '../components/home/IntroBloc';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <main role="main" id="content">
        <div className="fr-container fr-mt-5w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-6">
              <IntroBloc />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <Hero />
              <SiretForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
