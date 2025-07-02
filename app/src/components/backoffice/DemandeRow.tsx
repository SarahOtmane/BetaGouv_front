import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
  entreprise: string;
  secteur: string;
  action: string;
};

const DemandeRow: React.FC<Props> = ({ id, entreprise, secteur, action }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/backoffice/demande/${id}`);
  };

  const handleProposerProjet = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/backoffice/proposer-projet');
  };

  return (
    <tr
      onClick={handleRowClick}
      style={{ cursor: 'pointer' }}
      className="fr-background-alt-grey--hover"
    >
      <td>
        <input type="checkbox" onClick={(e) => e.stopPropagation()} />
      </td>
      <td>{entreprise}</td>
      <td>{secteur}</td>
      <td>{action}</td>
      <td>
        <button
          className="fr-btn fr-btn--sm fr-btn--primary fr-mr-1w"
          onClick={handleProposerProjet}
        >
          C’est dans mon périmètre
        </button>
      </td>
      <td>
        <button
          className="fr-btn fr-btn--sm fr-btn--secondary fr-mr-1w"
          onClick={(e) => e.stopPropagation()}
        >
          Je renvoie vers un autre R BDE
        </button>
      </td>
      <td>
        <button
          className="fr-btn fr-btn--sm fr-btn--info"
          onClick={(e) => e.stopPropagation()}
        >
          Je travaille en réseau BDE
        </button>
      </td>
    </tr>
  );
};

export default DemandeRow;
