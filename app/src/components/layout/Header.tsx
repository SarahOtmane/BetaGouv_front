// components/layout/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">INTITULÉ<br />OFFICIEL</p>
                </div>
              </div>
              <div className="fr-header__service">
                <Link to="/">
                  <p className="fr-header__service-title">Nom du site / service</p>
                </Link>
                <p className="fr-header__service-tagline">baseline - précisions sur l’organisation</p>
              </div>
            </div>

            <div className="fr-header__tools">
              <ul className="fr-links-group">
                <li><Link to="/contact" className="fr-link fr-icon-mail-line">Contact</Link></li>
                <li><Link to="/recruteur" className="fr-link fr-icon-briefcase-line">Espace recruteur</Link></li>
                <li><Link to="/espace" className="fr-link fr-icon-account-line">Espace particulier</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
