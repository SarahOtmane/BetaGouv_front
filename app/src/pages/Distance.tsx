// src/pages/Distance.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import IntroBox from '../components/identifierMetiers/IntroBox';
import SiretDetails from '../components/identifierMetiers/SiretDetails';
import IdentifierMenu from '../components/identifierMetiers/IdentifierMenu';
import DistanceSelector from '../components/distance/DistanceSelector';

const Distance: React.FC = () => {
  return (
    <>
      {/* Header avec menu IdentifierMenu */}
      <Header />

      <div className="fr-container fr-mt-5w">
        {/* Bandeau haut */}
        <div className="fr-grid-row fr-grid-row--between fr-mb-3w">
          <div className="fr-col-12 fr-col-md-8">
            <IntroBox />
          </div>
          <div className="fr-col-12 fr-col-md-4 fr-text--right">
            <IdentifierMenu />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
          {/* Colonne gauche : SIRET */}
          <div className="fr-col-12 fr-col-md-5">
            <SiretDetails />
          </div>

          {/* Colonne droite : Distance */}
          <div className="fr-col-12 fr-col-md-7">
            <DistanceSelector />
          </div>
        </div>
      </div>

      {/* Footer complet */}
      <Footer />
    </>
  );
};

export default Distance;
