import React, { useState } from 'react';

const SiretForm: React.FC = () => {
  const [siret, setSiret] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recherche pour SIRET :', siret);
    // Rediriger ou requête API ici
  };

  return (
    <form onSubmit={handleSubmit} className="fr-mt-3w">
      <div className="fr-input-group fr-mb-2w">
        <label className="fr-label" htmlFor="siret">
          Entrez le SIRET de votre établissement
        </label>
        <input
          className="fr-input"
          id="siret"
          type="text"
          value={siret}
          onChange={(e) => setSiret(e.target.value)}
          required
        />
      </div>
      <button className="fr-btn" type="submit">
        Trouver les lycées pro qui me correspondent
      </button>
    </form>
  );
};

export default SiretForm;
