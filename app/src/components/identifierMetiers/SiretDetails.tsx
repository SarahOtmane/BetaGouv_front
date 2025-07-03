// src/components/identifierMetiers/SiretDetails.tsx
import React from 'react';

interface SiretDetailsProps {
  data?: {
    siret: string;
    enseigne?: string;
    nom_raison_sociale: string;
    adresse?: string;
    activite_principale?: string;
    libelle_activite_principale?: string;
    siege: {
      siret: string;
      adresse: string;
    };
    categorie_juridique?: string;
    libelle_categorie_juridique?: string;
  };
}

const SiretDetails: React.FC<SiretDetailsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="fr-card fr-card--no-arrow fr-mb-4w">
      <div className="fr-card__body">
        <div className="fr-text--sm">
          <p><strong>SIRET :</strong> {data.siret}</p>
          {data.enseigne && <p><strong>Enseigne :</strong> {data.enseigne}</p>}
          <p><strong>Nom :</strong> {data.nom_raison_sociale}</p>
          {data.adresse && <p><strong>Adresse :</strong> {data.adresse}</p>}
          {data.activite_principale && (
            <p>
              <strong>Activité principale exercée :</strong> {data.activite_principale} - {data.libelle_activite_principale}
            </p>
          )}

          <hr className="fr-hr fr-my-2w" />

          <p><strong>Siret du siège :</strong> {data.siege.siret}</p>
          <p><strong>Adresse du siège :</strong> {data.siege.adresse}</p>
          {data.categorie_juridique && (
            <p>
              <strong>Catégorie juridique :</strong> {data.categorie_juridique} - {data.libelle_categorie_juridique}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiretDetails;