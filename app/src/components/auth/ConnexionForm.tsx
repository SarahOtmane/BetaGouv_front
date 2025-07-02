import React from 'react';

const ConnexionForm: React.FC = () => {
  return (
    <main role="main" id="content">
      <div className="fr-container fr-container--fluid fr-mb-md-14v">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
            <div className="fr-container fr-background-alt--grey fr-px-md-0 fr-pt-10v fr-pt-md-14v fr-pb-6v fr-pb-md-10v">
              <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                <div className="fr-col-12 fr-col-md-9 fr-col-lg-8">

                  <h1 className="fr-h4">Connexion à Mon Service</h1>

                  <div className="fr-mb-6v">
                    <h2 className="fr-h5">Se connecter avec FranceConnect</h2>
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

                  <form id="login-8781">
                    <fieldset
                      className="fr-fieldset"
                      id="login-8781-fieldset"
                      aria-labelledby="login-8781-fieldset-legend login-8781-fieldset-messages"
                    >
                      <legend className="fr-fieldset__legend" id="login-8781-fieldset-legend">
                        <h2 className="fr-h5">Se connecter avec son compte</h2>
                      </legend>

                      <div className="fr-fieldset__element">
                        <fieldset
                          className="fr-mb-n4v fr-fieldset"
                          id="credentials"
                          aria-labelledby="credentials-legend credentials-messages"
                        >
                          <legend className="fr-sr-only" id="credentials-legend">
                            identifiants
                          </legend>

                          {/* Identifiant */}
                          <div className="fr-fieldset__element">
                            <div className="fr-input-group" id="input-group-8783">
                              <label className="fr-label" htmlFor="username-8778">
                                Identifiant
                                <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
                              </label>
                              <input
                                className="fr-input"
                                id="username-8778"
                                name="username"
                                type="email"
                                autoCapitalize="off"
                                autoCorrect="off"
                                autoComplete="username"
                                required
                                aria-describedby="username-8778-messages"
                              />
                              <div className="fr-messages-group" id="username-8778-messages" aria-live="polite" />
                            </div>
                          </div>

                          {/* Mot de passe */}
                          <div className="fr-fieldset__element">
                            <div className="fr-password" id="password-8779">
                              <label className="fr-password__label fr-label" htmlFor="password-8779-input">
                                Mot de passe
                              </label>
                              <div className="fr-input-wrap">
                                <input
                                  className="fr-password__input fr-input"
                                  type="password"
                                  id="password-8779-input"
                                  name="password"
                                  autoCapitalize="off"
                                  autoCorrect="off"
                                  autoComplete="current-password"
                                  required
                                  aria-describedby="password-8779-input-messages"
                                />
                              </div>
                              <div className="fr-messages-group" id="password-8779-input-messages" aria-live="polite" />
                              <div className="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
                                <input type="checkbox" id="password-8779-show" />
                                <label className="fr-label" htmlFor="password-8779-show">Afficher</label>
                              </div>
                              <p>
                                <a href="#" className="fr-link">Mot de passe oublié ?</a>
                              </p>
                            </div>
                          </div>

                          <div className="fr-messages-group" id="credentials-messages" aria-live="polite" />
                        </fieldset>
                      </div>

                      {/* Se souvenir de moi */}
                      <div className="fr-fieldset__element">
                        <div className="fr-checkbox-group fr-checkbox-group--sm">
                          <input type="checkbox" name="remember" id="remember-8780" />
                          <label className="fr-label" htmlFor="remember-8780">
                            Se souvenir de moi
                          </label>
                          <div className="fr-messages-group" id="remember-8780-messages" aria-live="polite" />
                        </div>
                      </div>

                      {/* Bouton Se connecter */}
                      <div className="fr-fieldset__element">
                        <ul className="fr-btns-group">
                          <li>
                            <button type="submit" className="fr-btn fr-mt-2v">Se connecter</button>
                          </li>
                        </ul>
                      </div>

                      <div className="fr-messages-group" id="login-8781-fieldset-messages" aria-live="polite" />
                    </fieldset>
                  </form>

                  <hr />
                  <h2 className="fr-h5">Vous n’avez pas de compte ?</h2>
                  <ul className="fr-btns-group">
                    <li>
                      <button type="button" className="fr-btn fr-btn--secondary">
                        Créer un compte
                      </button>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConnexionForm;
