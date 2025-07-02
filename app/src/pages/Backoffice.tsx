// src/pages/Backoffice.tsx
import React from 'react';
import IntroBox from '../components/backoffice/IntroBox';
import DemandeRow from '../components/backoffice/DemandeRow';

const demandes = [
  {
    id: 1,
    entreprise: 'Engie',
    secteur: 'BTP',
    action: 'Visite de site',
  },
  {
    id: 2,
    entreprise: 'PME du coin',
    secteur: 'Restauration',
    action: 'Prise de contact',
  },
  {
    id: 3,
    entreprise: 'PME B',
    secteur: 'Industrie',
    action: 'Mentorat, Alternance',
  },
];

const Backoffice: React.FC = () => {
  return (
    <div className="fr-container fr-mt-5w">
      <h1 className="fr-h3">Back office R BDE</h1>
      <p className="fr-text--sm fr-mb-4w">
        Retrouvez ici les demandes d’entreprises à traiter.
      </p>

      <IntroBox />

      <h2 className="fr-h4 fr-mt-5w fr-mb-2w">
        Souhaitez-vous accepter la demande ?
      </h2>

      <div className="fr-table fr-table--layout-fixed">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Entreprise</th>
              <th>Secteur</th>
              <th>Action</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande) => (
              <DemandeRow key={demande.id} {...demande} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backoffice;
