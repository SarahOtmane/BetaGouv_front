import React from 'react';

const FilAriane: React.FC = () => {
  return (
    <nav role="navigation" className="fr-breadcrumb" aria-label="Fil d'ariane">
      <ol className="fr-breadcrumb__list">
        <li>
          <a className="fr-breadcrumb__link" href="#">
            Mon Lycée
          </a>
        </li>
        <li>
          <a className="fr-breadcrumb__link" aria-current="page">
            Carte d'identité du lycée
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default FilAriane;
