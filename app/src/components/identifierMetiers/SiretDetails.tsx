import React from 'react';

const SiretDetails: React.FC = () => {
  return (
    <div className="fr-card fr-card--no-arrow fr-mb-4w">
      <div className="fr-card__body">
        <div className="fr-text--sm">
          <p><strong>SIRET :</strong> 120 027 016 00537</p>
          <p><strong>Enseigne :</strong> DIR REG PAYS DE LA LOIRE SIÈGE DE NANTES</p>
          <p><strong>Adresse :</strong> 105 RUE DES FRANÇAIS LIBRES - BP 67401 NANTES - 44274 NANTES CEDEX 2</p>
          <p><strong>Activité principale exercée :</strong> 84.11Z - Administration publique générale</p>

          <hr className="fr-hr fr-my-2w" />

          <p><strong>Siret du siège :</strong> 120 027 016 00563</p>
          <p><strong>Sigle :</strong> INSEE</p>
          <p><strong>Adresse du siège :</strong> IMMEUBLE WHITE, 88 AV VERDIER, CS 70058 MONTROUGE, 92541 MONTROUGE CEDEX</p>
          <p><strong>Catégorie juridique :</strong> 7120 - Service central d’un ministère</p>
          <p><strong>Activité principale exercée :</strong> 84.11Z - Administration publique générale</p>
        </div>
      </div>
    </div>
  );
};

export default SiretDetails;
