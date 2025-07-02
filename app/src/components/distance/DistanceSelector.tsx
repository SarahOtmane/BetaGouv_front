import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DistanceSelector: React.FC = () => {
  const [adresse, setAdresse] = useState('105 rue des Français Libres, 44274 Nantes');
  const [perimetre, setPerimetre] = useState('3km');
  const [otherOption, setOtherOption] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/activities');
  };

  return (
    <section>
      <h3 className="fr-text--lg fr-mb-1w">
        Indiquez la distance géographique autour de l'adresse de votre établissement.
      </h3>
      <p className="fr-text--sm fr-mb-2w">
        Les lycéens ont une mobilité limitée, soyez réaliste (sauf si vous proposez des alternatives transports ou logement)
      </p>

      <div className="fr-input-group fr-mb-2w">
        <label htmlFor="adresse" className="fr-label">Adresse</label>
        <input
          id="adresse"
          type="text"
          className="fr-input"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
      </div>

      <fieldset className="fr-fieldset fr-mb-3w">
        <legend className="fr-text--sm fr-mb-1w">Préciser un périmètre géographique autour de mon établissement</legend>
        <div className="fr-btns-group fr-btns-group--inline fr-btns-group--sm">
          {['500m', '3km', '10km', '30km', '50km'].map((val) => (
            <button
              key={val}
              type="button"
              className={`fr-btn ${perimetre === val ? 'fr-btn--secondary' : 'fr-btn--tertiary'}`}
              onClick={() => setPerimetre(val)}
            >
              {val}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="fr-fieldset fr-mb-4w">
        <legend className="fr-text--sm">Autres options</legend>
        <div className="fr-fieldset__content">
          {[
            {
              id: 'local',
              label: 'Élargir le recrutement localement, au-delà du bassin d’emploi (département, région)',
            },
            {
              id: 'national',
              label: 'Envisager un recrutement à l’échelle nationale',
            },
            {
              id: 'carte',
              label: 'Tracer ma zone sur la carte',
            },
          ].map(({ id, label }) => (
            <div className="fr-radio-group" key={id}>
              <input
                type="radio"
                id={id}
                name="other"
                checked={otherOption === id}
                onChange={() => setOtherOption(id)}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </fieldset>

      <button className="fr-btn fr-btn--primary" onClick={handleNext}>
        Identifier les lycées
      </button>
    </section>
  );
};

export default DistanceSelector;
