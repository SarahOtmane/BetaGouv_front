import React from 'react';

const ReussiteDuMois: React.FC = () => {
  return (
    <div className="fr-col-12 fr-col-md-4 fr-text--center">
      <h4 className="fr-text--md fr-mb-2w">Réussite du mois</h4>
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
        Ce mois-ci a eu lieu un Forum dédié à notre filière “filière”.<br />
        Les visiteurs ainsi que nos élèves ont pu échanger avec 15 entreprises du secteur.<br />
        Résultat : 10 stages à venir et 4 places en apprentissage !
      </p>
    </div>
  );
};

export default ReussiteDuMois;
