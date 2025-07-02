// src/pages/Installations.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import PageTitle from '../components/installations/PageTitle';
import FilAriane from '../components/metierscomponents/FilAriane';
import PresentationIntro from '../components/installations/PresentationIntro';
import GridMultimedia from '../components/installations/GridMultimedia';
import OutilsEtClasse from '../components/installations/OutilsEtClasse';
import HeaderMenu from '../components/metierscomponents/HeaderMenu';

const Installations: React.FC = () => {
  return (
    <>
      {/* Header complet */}
      <Header />

      <div className="fr-container fr-mt-5w">
        <div className="fr-grid-row fr-grid-row--between fr-mb-3w">
          <div className="fr-col-12 fr-col-md-6">
            <h1 className="fr-h2">Je valorise mon lycée</h1>
          </div>
          <div className="fr-col-12 fr-col-md-6 fr-text--right">
            <HeaderMenu />
          </div>
        </div>

        <FilAriane
          items={[
            { label: 'Mon Lycée', href: '#' },
            { label: 'Installations techniques' },
          ]}
        />

        <PresentationIntro />
        <GridMultimedia />
        <OutilsEtClasse />
      </div>

      {/* Footer complet */}
      <Footer />
    </>
  );
};

export default Installations;
