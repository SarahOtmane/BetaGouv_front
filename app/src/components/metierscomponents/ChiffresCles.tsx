import React from 'react';

type ChiffreCle = {
  label: string;
  valeur: string | number;
};

type ChiffresClesProps = {
  donnees: ChiffreCle[];
};

const ChiffresCles: React.FC<ChiffresClesProps> = ({ donnees }) => {
  return (
    <section className="fr-mt-4w">
      <h3 className="fr-text--xl fr-mb-2w">Chiffres clés</h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        {donnees.map((item, index) => (
          <div key={index} className="fr-col-6 fr-col-md-4 fr-mb-2w">
            <div className="fr-p-3w fr-background-alt-grey fr-radius-2w fr-text--center">
              <p className="fr-text--lg fr-text--bold">{item.valeur}</p>
              <p className="fr-text--sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChiffresCles;
