import React from 'react';

const ConnexionForm: React.FC = () => {
  return (
    <form className="fr-mb-4w">
      <div className="fr-input-group fr-mb-3w">
        <label className="fr-label" htmlFor="email">Adresse email</label>
        <input className="fr-input" type="email" id="email" required />
      </div>

      <div className="fr-input-group fr-mb-3w">
        <label className="fr-label" htmlFor="password">Mot de passe</label>
        <input className="fr-input" type="password" id="password" required />
      </div>

      <button type="submit" className="fr-btn">Se connecter</button>
    </form>
  );
};

export default ConnexionForm;
