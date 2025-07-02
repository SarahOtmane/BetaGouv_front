import React from 'react';
import IntroBox from '../components/identifierMetiers/IntroBox';
import SiretDetails from '../components/identifierMetiers/SiretDetails';
import MetiersSelector from '../components/identifierMetiers/MetiersSelector';
import IdentifierMenu from '../components/identifierMetiers/IdentifierMenu';

const Identifier: React.FC = () => {
  return (
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

      {/* Contenu principal : SIRET + métiers */}
      <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
        <div className="fr-col-12 fr-col-md-5">
          <SiretDetails />
        </div>
        <div className="fr-col-12 fr-col-md-7">
          <MetiersSelector />
        </div>
      </div>
    </div>
  );
};

export default Identifier;
