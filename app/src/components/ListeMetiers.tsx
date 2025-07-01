import React from 'react';

type ListeMetiersProps = {
  metiers: string[];
};

const ListeMetiers: React.FC<ListeMetiersProps> = ({ metiers }) => {
  if (metiers.length === 0) {
    return <p>Aucun métier sélectionné.</p>;
  }

  return (
    <ul className="fr-mt-2w fr-p-0">
      {metiers.map((metier, index) => (
        <li key={index} className="fr-mb-1w fr-py-1w fr-px-2w fr-background-alt-grey fr-radius-2w">
          {metier}
        </li>
      ))}
    </ul>
  );
};

export default ListeMetiers;
