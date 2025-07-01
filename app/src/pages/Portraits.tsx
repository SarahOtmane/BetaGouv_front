import React from 'react';
import FilAriane from '../components/metierscomponents/FilAriane';
import HeaderMenu from '../components/metierscomponents/HeaderMenu';
import PortraitsGrid from '../components/portraits/PortraitsGrid';

const Portraits: React.FC = () => {
  return (
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
          { label: 'Réussites & Portraits' },
        ]}
      />

      <PortraitsGrid />
    </div>
  );
};

export default Portraits;
