import React, { useState } from 'react';
import ConnexionForm from '../components/auth/ConnexionForm';
import InscriptionForm from '../components/auth/InscriptionForm';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AuthEntreprise: React.FC = () => {
  const [tab, setTab] = useState<'connexion' | 'inscription'>('connexion');

  return (
    <>
      <Header />

      {/* Onglets sans wrapper supplémentaire */}
      <div className="fr-container fr-mt-8v">
        <div className="fr-grid-row fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
            <div className="fr-tabs fr-mb-4w">
              <ul className="fr-tabs__list" role="tablist">
                <li
                  role="tab"
                  className={`fr-tabs__tab ${tab === 'connexion' ? 'fr-tabs__tab--selected' : ''}`}
                >
                  <button className="fr-tabs__button" onClick={() => setTab('connexion')}>
                    Connexion
                  </button>
                </li>
                <li
                  role="tab"
                  className={`fr-tabs__tab ${tab === 'inscription' ? 'fr-tabs__tab--selected' : ''}`}
                >
                  <button className="fr-tabs__button" onClick={() => setTab('inscription')}>
                    Inscription
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaires directement rendus, avec leur propre structure */}
      {tab === 'connexion' ? <ConnexionForm /> : <InscriptionForm />}

      <Footer />
    </>
  );
};

export default AuthEntreprise;
