import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); // redirection après déconnexion, modifie si besoin
  };

  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            {/* Branding */}
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    Intitulé
                    <br />
                    officiel
                  </p>
                </div>

                <div className="fr-header__navbar">
                  <button
                    data-fr-opened="false"
                    aria-controls="modal-2215"
                    title="Menu"
                    type="button"
                    id="button-2216"
                    className="fr-btn--menu fr-btn"
                  >
                    Menu
                  </button>
                </div>
              </div>

              <div className="fr-header__service">
                <Link
                  to="/"
                  title="Accueil - Nom du site / service - Nom de l’entité"
                >
                  <p className="fr-header__service-title">
                    LYCEE PRO
                  </p>
                </Link>
                <p className="fr-header__service-tagline">
                  baseline - précisions sur l‘organisation
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <ul className="fr-btns-group">
                  {!isLoggedIn ? (
                    <>
                      <li>
                        <Link to="/auth_lycee" className="fr-btn fr-btn--briefcase">
                          Espace lycée
                        </Link>
                      </li>
                      <li>
                        <Link to="/auth_entreprise" className="fr-btn fr-btn--account">
                          Espace entreprise
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <button
                        className="fr-btn fr-btn--secondary"
                        onClick={handleLogout}
                      >
                        Déconnexion
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Optional children (menus) */}
          {children && <div className="fr-mt-3w">{children}</div>}
        </div>
      </div>

      {/* Menu modal (à compléter plus tard) */}
      <div
        className="fr-header__menu fr-modal"
        id="modal-2215"
        aria-labelledby="button-2216"
      >
        <div className="fr-container">
          <button
            aria-controls="modal-2215"
            title="Fermer"
            type="button"
            id="button-2217"
            className="fr-btn--close fr-btn"
          >
            Fermer
          </button>
          <div className="fr-header__menu-links"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
