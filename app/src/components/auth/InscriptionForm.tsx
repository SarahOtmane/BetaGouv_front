import React from 'react';

const InscriptionForm: React.FC = () => {
  return (
    <form className="fr-mb-4w">
      <div className="fr-input-group fr-mb-3w">
        <label className="fr-label" htmlFor="prenom">Prénom</label>
        <input className="fr-input" type="text" id="prenom" required />
      </div>

      <div className="fr-input-group fr-mb-3w">
        <label className="fr-label" htmlFor="nom">Nom</label>
        <input className="fr-input" type="text" id="nom" required />
      </div>

      <div className="fr-input-group fr-mb-3w">
        <label className="fr-label" htmlFor="email">Adresse email</label>
        <input className="fr-input" type="email" id="email" required />
      </div>

      <div className="fr-input-group fr-mb-3w">
        <label className="fr-label" htmlFor="password">Mot de passe</label>
        <input className="fr-input" type="password" id="password" required />
      </div>

      <button type="submit" className="fr-btn">Créer un compte</button>
    </form>
  );
};

export default InscriptionForm;
