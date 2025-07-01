import React from 'react';

const actions = [
  "Visiter le plateau technique",
  "Participer à la professionnalisation de vos futurs employés",
  "Proposer un TP déporté",
  "Organiser une découverte métier avec les élèves",
];

const ActionsChecklist: React.FC = () => {
  return (
    <div>
      <h3 className="fr-text--md fr-mb-2w">Les actions à proposer aux entreprises</h3>
      <ul className="fr-p-0 fr-m-0">
        {actions.map((action, index) => (
          <li key={index} className="fr-mb-1w">
            <div className="fr-toggle">
              <input type="checkbox" id={`action-${index}`} className="fr-toggle__input" defaultChecked={index < 3} />
              <label className="fr-toggle__label" htmlFor={`action-${index}`}>
                {action}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionsChecklist;
