import React, { useState } from 'react';

const options = [
  'Visiter le plateau technique',
  "Proposer une rencontre avec responsable d’établissement",
  'Proposer un TP déporté',
  'Organiser une découverte métier avec les élèves',
];

const ProposerProjet: React.FC = () => {
  const [selection, setSelection] = useState<string[]>([]);

  const toggle = (val: string) => {
    setSelection((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  return (
    <div className="fr-container fr-mt-5w fr-mb-8w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-8 fr-col-lg-6 fr-text--center">
          <h3 className="fr-text--md fr-mb-5w">
            Sélectionnez les actions que vous pouvez lui proposer, pour initier la relation
          </h3>

          <div className="fr-mb-6w fr-toggle-group">
            {options.map((opt, idx) => (
              <div key={idx} className="fr-toggle fr-mb-3w">
                <input
                  type="checkbox"
                  id={`opt-${idx}`}
                  className="fr-toggle__input"
                  checked={selection.includes(opt)}
                  onChange={() => toggle(opt)}
                />
                <label className="fr-toggle__label" htmlFor={`opt-${idx}`}>
                  {opt}
                </label>
              </div>
            ))}
          </div>

          <p className="fr-text--sm fr-mb-4w">
            Cette entreprise souhaite <strong>s’engager</strong> avec votre lycée professionnel,
            elle ne sait pas encore quoi faire, <strong>engagez-vous</strong> à la recontacter rapidement !
          </p>

          <div className="fr-grid-row fr-grid-row--center">
            <button className="fr-btn fr-btn--primary">Je propose un projet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposerProjet;
