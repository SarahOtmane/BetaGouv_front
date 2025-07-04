// src/components/identifierMetiers/SiretDetails.tsx
import React from 'react';

const SiretDetails: React.FC = () => {
  // Données statiques pour la démo
  const demoData = {
    searchedSiret: "12002701600357",
    entrepriseData: {
      enseigne: "DIRECCTE PAYS DE LA LOIRE",
      adresse: "105 RUE DES FRANÇAIS LIBRES, BP 67401, 44274 NANTES CEDEX 2",
      activite_principale: "84.11Z",
      libelle_activite_principale: "Administration publique générale",
      siege: {
        siret: "12002701600563",
        sigle: "INSEE",
        adresse: "IMMEUBLE WHITE, 88 AVENUE VERDIER, CS 70058, 92541 MONTROUGE CEDEX"
      },
      categorie_juridique: "7120",
      libelle_categorie_juridique: "Service central d'un ministère"
    }
  };

  const formatSiret = (siret: string) => {
    return `${siret.slice(0, 3)} ${siret.slice(3, 6)} ${siret.slice(6, 9)} ${siret.slice(9)}`;
  };

  return (
    <div className="fr-card fr-card--no-arrow fr-mb-2w" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="fr-card__body fr-p-2w">
        <div className="fr-text--xs"> {/* Taille de texte réduite */}
          {/* Section Établissement */}
          <h4 className="fr-h6 fr-mb-1w">Établissement</h4>
          
          <p className="fr-mb-1w"><strong>SIRET :</strong> {formatSiret(demoData.searchedSiret)}</p>
          
          <p className="fr-mb-1w"><strong>Enseigne :</strong> {demoData.entrepriseData.enseigne}</p>
          
          <p className="fr-mb-1w"><strong>Adresse :</strong><br />
            {demoData.entrepriseData.adresse.replaceAll(', ', '\n')}
          </p>
          
          <p className="fr-mb-1w">
            <strong>Activité :</strong> {demoData.entrepriseData.activite_principale} - {demoData.entrepriseData.libelle_activite_principale}
          </p>

          <hr className="fr-hr fr-my-2w" />

          {/* Section Siège */}
          <h4 className="fr-h6 fr-mb-1w">Siège</h4>
          
          <p className="fr-mb-1w"><strong>SIRET :</strong> {formatSiret(demoData.entrepriseData.siege.siret)}</p>
          
          <p className="fr-mb-1w"><strong>Sigle :</strong> {demoData.entrepriseData.siege.sigle}</p>
          
          <p className="fr-mb-1w"><strong>Adresse :</strong><br />
            {demoData.entrepriseData.siege.adresse.replaceAll(', ', '\n')}
          </p>
          
          <p className="fr-mb-1w">
            <strong>Catégorie :</strong> {demoData.entrepriseData.categorie_juridique} - {demoData.entrepriseData.libelle_categorie_juridique}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiretDetails;