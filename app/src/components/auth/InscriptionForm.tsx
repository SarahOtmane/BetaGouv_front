import React from 'react';

const InscriptionForm: React.FC = () => {
  return (
    <main role="main" id="content">
      {/* Intro */}
      <div className="fr-container fr-mt-8v fr-mt-md-14v fr-mb-2v fr-mb-md-8v">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
            <h1 className="fr-h2">Création de compte sur Mon Service</h1>
            <p className="fr-text--lead">
              Chapô — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="fr-container fr-container--fluid fr-mb-md-14v">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
            <div className="fr-background-alt--grey fr-px-md-0 fr-pt-10v fr-pt-md-14v fr-pb-6v fr-pb-md-10v">
              <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                <div className="fr-col-12 fr-col-md-10 fr-col-lg-9">
                  
                  {/* FranceConnect */}
                  <div className="fr-mb-6v">
                    <h2 className="fr-h5">Se créer un compte avec FranceConnect</h2>
                    <p className="fr-text--sm">
                      FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion aux services en ligne.
                    </p>
                    <div className="fr-connect-group">
                      <button className="fr-connect" type="button">
                        <span className="fr-connect__login">S’identifier avec</span>
                        <span className="fr-connect__brand">FranceConnect</span>
                      </button>
                      <p>
                        <a
                          href="https://franceconnect.gouv.fr/"
                          target="_blank"
                          rel="noopener"
                          title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre"
                        >
                          Qu’est-ce que FranceConnect ?
                        </a>
                      </p>
                    </div>
                  </div>

                  <p className="fr-hr-or">ou</p>

                  {/* Formulaire d’inscription */}
                  <form className="fr-mb-0 fr-fieldset" id="login-9484">
                    <fieldset
                      className="fr-mb-0 fr-fieldset"
                      id="login-9484-fieldset"
                      aria-labelledby="login-9484-fieldset-legend login-9484-fieldset-messages"
                    >
                      <legend className="fr-fieldset__legend" id="login-9484-fieldset-legend">
                        <h2 className="fr-h5">Se créer un compte en choisissant un identifiant</h2>
                      </legend>

                      <div className="fr-fieldset__element">
                        <p className="fr-text--sm">
                          Description — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="fr-fieldset__element">
                        <p className="fr-hint-text">
                          Sauf mention contraire, tous les champs sont obligatoires.
                        </p>
                      </div>

                      {/* Email */}
                      <div className="fr-fieldset__element">
                        <div className="fr-input-group" id="input-group-9488">
                          <label className="fr-label" htmlFor="username-9480">
                            Identifiant
                            <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
                          </label>
                          <input
                            className="fr-input"
                            id="username-9480"
                            name="username"
                            type="email"
                            autoCapitalize="off"
                            autoCorrect="off"
                            required
                          />
                          <div className="fr-messages-group" id="username-9480-messages" aria-live="polite" />
                        </div>
                      </div>

                      {/* Mot de passe */}
                      <div className="fr-fieldset__element">
                        <div className="fr-password" id="password-9481">
                          <label className="fr-password__label fr-label" htmlFor="password-9481-input">
                            Mot de passe
                          </label>
                          <div className="fr-input-wrap">
                            <input
                              className="fr-password__input fr-input"
                              id="password-9481-input"
                              name="password"
                              type="password"
                              autoCapitalize="off"
                              autoCorrect="off"
                              autoComplete="new-password"
                              required
                            />
                          </div>
                          <div className="fr-messages-group" id="password-9481-input-messages" aria-live="polite">
                            <p className="fr-message">Votre mot de passe doit contenir :</p>
                            <p className="fr-message fr-message--info">12 caractères minimum</p>
                            <p className="fr-message fr-message--info">1 caractère spécial minimum</p>
                            <p className="fr-message fr-message--info">1 chiffre minimum</p>
                          </div>
                          <div className="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
                            <input type="checkbox" id="password-9481-show" />
                            <label className="fr-label" htmlFor="password-9481-show">
                              Afficher
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* CNIL mentions */}
                      <div className="fr-fieldset__element">
                        <div className="fr-checkbox-group fr-checkbox-group--sm">
                          <input id="checkbox-cnil-9482" type="checkbox" required />
                          <label className="fr-label" htmlFor="checkbox-cnil-9482">
                            Mention CNIL — Lorem ipsum dolor sit amet, consectetur adipiscing est
                          </label>
                          <div className="fr-messages-group" id="checkbox-cnil-9482-messages" aria-live="polite" />
                        </div>
                      </div>

                      <div className="fr-fieldset__element">
                        <div className="fr-checkbox-group fr-checkbox-group--sm">
                          <input id="checkbox-cnil-9483" type="checkbox" />
                          <label className="fr-label" htmlFor="checkbox-cnil-9483">
                            Mention CNIL — Lorem ipsum dolor sit amet, consectetur adipiscing est
                          </label>
                          <div className="fr-messages-group" id="checkbox-cnil-9483-messages" aria-live="polite" />
                        </div>
                      </div>

                      {/* Bouton */}
                      <div className="fr-fieldset__element">
                        <ul className="fr-mt-2v fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
                          <li>
                            <button type="submit" className="fr-btn">Valider</button>
                          </li>
                        </ul>
                      </div>

                      <div className="fr-messages-group" id="login-9484-fieldset-messages" aria-live="polite" />
                    </fieldset>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InscriptionForm;
