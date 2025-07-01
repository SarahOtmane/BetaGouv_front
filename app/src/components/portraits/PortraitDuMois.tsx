import React from 'react';

const PortraitDuMois: React.FC = () => {
  return (
    <div className="fr-col-12 fr-col-md-4 fr-text--center">
      <h4 className="fr-text--md fr-mb-2w">Portrait du mois</h4>
      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: '#E5E5E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <i className="ri-user-fill" style={{ fontSize: '3rem' }}></i>
      </div>
      <p className="fr-text--sm fr-mt-2w">
        "Élève" est un ancien élève du lycée, au sortir de son Bac Pro,<br />
        il a été embauché chez “entreprise” suite à son apprentissage
      </p>
    </div>
  );
};

export default PortraitDuMois;
