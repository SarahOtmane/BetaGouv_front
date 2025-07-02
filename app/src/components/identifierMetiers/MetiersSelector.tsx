import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const metiersList = [
  "Attaché/Attachée d’administration",
  'Bibliothécaire',
  'Chargé/Chargée de communication interne',
  'Conseiller/Conseillère en environnement',
  'Ouvrier/Ouvrière paysagiste',
  'Responsable de la collecte des déchets ménagers',
];

const MetiersSelector: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [customMetier, setCustomMetier] = useState('');
  const navigate = useNavigate();

  const toggleCheckbox = (metier: string) => {
    setSelected((prev) =>
      prev.includes(metier)
        ? prev.filter((m) => m !== metier)
        : prev.length < 3
          ? [...prev, metier]
          : prev
    );
  };

  const handleNext = () => {
    if (selected.length || customMetier.trim()) {
      navigate('/distance');
    }
  };

  return (
    <div>
      <p className="fr-text--sm fr-mb-2w">
        Nous avons identifié 6 métiers principaux correspondant à l’activité principale de votre établissement.
      </p>
      <p className="fr-text--xs fr-mb-3w">
        Sélectionnez au maximum 3 métier(s) concerné(s) ou saisissez le(s) dans le champ prévu.
      </p>

      <div className="fr-checkbox-group">
        {metiersList.map((metier, i) => (
          <div className="fr-checkbox-group fr-mb-1w" key={i}>
            <input
              type="checkbox"
              id={`metier-${i}`}
              checked={selected.includes(metier)}
              onChange={() => toggleCheckbox(metier)}
            />
            <label className="fr-label" htmlFor={`metier-${i}`}>{metier}</label>
          </div>
        ))}
      </div>

      <div className="fr-input-group fr-mt-3w">
        <label className="fr-label" htmlFor="custom-metier">Saisir le métier (si non listé)</label>
        <input
          type="text"
          className="fr-input"
          id="custom-metier"
          value={customMetier}
          onChange={(e) => setCustomMetier(e.target.value)}
          placeholder="Ex : Technicien réseaux"
        />
      </div>

      <button
        className="fr-btn fr-mt-4w"
        disabled={!selected.length && !customMetier}
        onClick={handleNext}
      >
        Choisir l’échelle géographique
      </button>
    </div>
  );
};

export default MetiersSelector;
