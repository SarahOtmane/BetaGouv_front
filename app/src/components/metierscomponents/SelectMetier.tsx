import React, { useState } from 'react';

type SelectMetierProps = {
  options: string[];
  onAddMetier: (metier: string) => void;
};

const SelectMetier: React.FC<SelectMetierProps> = ({ options, onAddMetier }) => {
  const [selected, setSelected] = useState<string>('');

  const handleAdd = () => {
    if (selected && !options.includes(selected)) return;
    onAddMetier(selected);
    setSelected('');
  };

  return (
    <div className="fr-mb-4w">
      <label className="fr-label" htmlFor="select-metier">
        Ajouter un métier
      </label>
      <div className="fr-select-group">
        <select
          id="select-metier"
          className="fr-select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Sélectionner un métier</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <button
        className="fr-btn fr-mt-2w"
        onClick={handleAdd}
        disabled={!selected}
      >
        Ajouter
      </button>
    </div>
  );
};

export default SelectMetier;
