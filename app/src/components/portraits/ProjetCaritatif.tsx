import React from 'react';

const ProjetCaritatif: React.FC = () => {
  return (
    <div className="fr-col-12 fr-col-md-4 fr-text--center">
      <h4 className="fr-text--md fr-mb-2w">Projet</h4>
      <div
        style={{
          backgroundColor: '#D8D8D8',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <i className="ri-image-line" style={{ fontSize: '3rem' }}></i>
      </div>
      <p className="fr-text--sm fr-mt-2w">
        Dans le cadre de leur projet caritatif, nos élèves de Terminale AGORA recherchent des entreprises partenaires pour réaliser des dons !
        <br />Votre aide serait précieuse.
      </p>
    </div>
  );
};

export default ProjetCaritatif;
