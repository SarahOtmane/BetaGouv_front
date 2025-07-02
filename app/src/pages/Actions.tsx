import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeaderMenu from '../components/metierscomponents/HeaderMenu';

import PageTitle from '../components/installations/PageTitle';
import FilAriane from '../components/metierscomponents/FilAriane';
import ActionsChecklist from '../components/actions/ActionsChecklist';
import ActionsProgrammes from '../components/actions/ActionsProgrammes';
import CalendrierStages from '../components/actions/CalendrierStages';

const Actions: React.FC = () => {
  return (
    <>
      {/* Header complet avec menu */}
      <Header>
      </Header>

      {/* Contenu principal */}
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
            { label: 'Les formats proposés par le lycée' },
          ]}
        />

        <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
          <div className="fr-col-12 fr-col-md-6">
            <ActionsChecklist />
          </div>
          <div className="fr-col-12 fr-col-md-6">
            <ActionsProgrammes />
            <CalendrierStages />
          </div>
        </div>
      </div>

      {/* Footer complet */}
      <Footer />
    </>
  );
};

export default Actions;
