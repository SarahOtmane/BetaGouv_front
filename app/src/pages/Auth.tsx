import React, { useState } from 'react';
import ConnexionForm from '../components/auth/ConnexionForm';
import InscriptionForm from '../components/auth/InscriptionForm';

const Auth: React.FC = () => {
  const [tab, setTab] = useState<'connexion' | 'inscription'>('connexion');

  return (
    <div className="fr-container fr-my-6w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-6">
          <h1 className="fr-h3 fr-text--center fr-mb-3w">Bienvenue</h1>

          <div className="fr-tabs fr-mb-4w">
            <ul className="fr-tabs__list" role="tablist">
              <li role="tab" className={`fr-tabs__tab ${tab === 'connexion' ? 'fr-tabs__tab--selected' : ''}`}>
                <button className="fr-tabs__button" onClick={() => setTab('connexion')}>
                  Connexion
                </button>
              </li>
              <li role="tab" className={`fr-tabs__tab ${tab === 'inscription' ? 'fr-tabs__tab--selected' : ''}`}>
                <button className="fr-tabs__button" onClick={() => setTab('inscription')}>
                  Inscription
                </button>
              </li>
            </ul>
          </div>

          {tab === 'connexion' ? <ConnexionForm /> : <InscriptionForm />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
