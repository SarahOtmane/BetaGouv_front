// src/pages/Identifier.tsx
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import IntroBox from '../components/identifierMetiers/IntroBox';
import SiretForm from '../components/home/SiretForm';
import SiretDetails from '../components/identifierMetiers/SiretDetails';
import MetiersSelector from '../components/identifierMetiers/MetiersSelector';
import IdentifierMenu from '../components/identifierMetiers/IdentifierMenu';

const Identifier: React.FC = () => {
  const [entrepriseData, setEntrepriseData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (data: any) => {
    setEntrepriseData(data);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setEntrepriseData(null);
  };

  return (
    <>
      <Header />

      <div className="fr-container fr-mt-5w">
        {/* Ligne supérieure : Intro + Menu aligné à droite */}
        <div className="fr-grid-row fr-grid-row--between fr-mb-3w">
          <div className="fr-col-12 fr-col-md-8">
            <IntroBox />
          </div>
          <div className="fr-col-12 fr-col-md-4 fr-text--right">
            <IdentifierMenu />
          </div>
        </div>

        {/* Formulaire SIRET */}
        <div className="fr-mt-3w">
          <SiretForm onSearch={handleSearch} onError={handleError} />
          {error && <div className="fr-alert fr-alert--error fr-mt-2w">{error}</div>}
        </div>

        {/* Contenu principal : SIRET + métiers */}
        {entrepriseData && (
          <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
            <div className="fr-col-12 fr-col-md-5">
              <SiretDetails data={entrepriseData} />
            </div>
            <div className="fr-col-12 fr-col-md-7">
              <MetiersSelector siret={entrepriseData.siret} />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Identifier;