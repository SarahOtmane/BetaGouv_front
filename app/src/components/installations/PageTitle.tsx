import React from 'react';
import HeaderMenu from '../metierscomponents/HeaderMenu'; // <- remonte d'un dossier

const PageTitle: React.FC = () => {
  return (
    <div className="fr-grid-row fr-grid-row--between fr-mb-3w">
      <div className="fr-col-12 fr-col-md-6">
        <h1 className="fr-h2">Je valorise mon lycée</h1>
      </div>
      <div className="fr-col-12 fr-col-md-6 fr-text--right">
        <HeaderMenu />
      </div>
    </div>
  );
};

export default PageTitle;
