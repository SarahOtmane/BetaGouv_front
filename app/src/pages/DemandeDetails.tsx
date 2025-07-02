import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyData = {
  1: {
    entreprise: 'Engie',
    secteur: 'BTP',
    actions: ['Visite de site', 'Alternance'],
    contact: {
      nom: 'Mr Elec',
      role: 'Gestionnaire RH',
      tel: '06 06 06 06 06',
      mail: 'gazelec@mon-entreprise.com',
    },
  },
};

const DemandeDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const demande = dummyData[Number(id) as 1];

  if (!demande) return <p>Demande non trouvée</p>;

  return (
    <div className="fr-container fr-mt-5w">
      <div
        className="fr-mx-auto"
        style={{
          maxWidth: '700px',
          textAlign: 'center',
        }}
      >
        <h4 className="fr-h5 fr-mb-3w">
          Une entreprise vous a sollicité, débutez la collaboration !
        </h4>

        <p className="fr-mb-3w">
          <strong>{demande.entreprise}</strong>, entreprise spécialisée dans le{' '}
          <strong>{demande.secteur}</strong>, souhaite prendre contact avec vous
          dans le cadre de l’action suivante :
        </p>

        <ul className="fr-mb-4w fr-text--left" style={{ margin: '0 auto', maxWidth: '400px' }}>
          {demande.actions.map((a, i) => (
            <li key={i}>
              <strong>{a}</strong>
            </li>
          ))}
        </ul>

        <p className="fr-mb-1w">Voici les coordonnées de la personne à recontacter :</p>
        <p className="fr-text--sm fr-mb-1w">
          {demande.contact.nom}, {demande.contact.role} <br />
          Numéro : {demande.contact.tel} <br />
          Mail : {demande.contact.mail}
        </p>

        <p className="fr-mt-3w fr-mb-4w">Adresse du site : ___________________________</p>

        <p className="fr-text--sm fr-mb-4w">
          Cette entreprise souhaite <strong>s’engager</strong> avec votre lycée professionnel,
          <br />
          engagez-vous à la recontacter rapidement !
        </p>

        <div className="fr-btns-group fr-btns-group--inline fr-btns-group--center">
          <button
            className="fr-btn fr-btn--primary"
            onClick={() => navigate('/backoffice/proposer-projet')}
          >
            Ok je prends contact
          </button>
          <button className="fr-btn fr-btn--secondary">
            Finalement ce n’est pas pour moi
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemandeDetails;
