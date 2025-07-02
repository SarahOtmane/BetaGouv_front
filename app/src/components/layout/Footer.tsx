// components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fr-footer" role="contentinfo" id="footer-7003">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <a
              id="footer-brand-link-7004"
              title="Retour à l’accueil du site - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
              href="/"
            >
              <p className="fr-logo">
                Intitulé
                <br />
                officiel
              </p>
            </a>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">Lorem [...] elit ut.</p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a
                  title="info.gouv.fr - nouvelle fenêtre"
                  id="footer__content-link-7005"
                  href="https://info.gouv.fr"
                  target="_blank"
                  rel="noopener external"
                  className="fr-footer__content-link"
                >
                  info.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  title="service-public.fr - nouvelle fenêtre"
                  id="footer__content-link-7006"
                  href="https://service-public.fr"
                  target="_blank"
                  rel="noopener external"
                  className="fr-footer__content-link"
                >
                  service-public.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  title="legifrance.gouv.fr - nouvelle fenêtre"
                  id="footer__content-link-7007"
                  href="https://legifrance.gouv.fr"
                  target="_blank"
                  rel="noopener external"
                  className="fr-footer__content-link"
                >
                  legifrance.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  title="data.gouv.fr - nouvelle fenêtre"
                  id="footer__content-link-7008"
                  href="https://data.gouv.fr"
                  target="_blank"
                  rel="noopener external"
                  className="fr-footer__content-link"
                >
                  data.gouv.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a id="footer__bottom-link-7009" href="[url - à modifier]" className="fr-footer__bottom-link">
                Plan du site
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a id="footer__bottom-link-7010" href="[url - à modifier]" className="fr-footer__bottom-link">
                Accessibilité : non/partiellement/totalement conforme
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a id="footer__bottom-link-7011" href="[url - à modifier]" className="fr-footer__bottom-link">
                Mentions légales
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a id="footer__bottom-link-7012" href="[url - à modifier]" className="fr-footer__bottom-link">
                Données personnelles
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a id="footer__bottom-link-7013" href="[url - à modifier]" className="fr-footer__bottom-link">
                Gestion des cookies
              </a>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont
              proposés sous{' '}
              <a
                href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                target="_blank"
                rel="noopener external"
                title="Licence etalab - nouvelle fenêtre"
              >
                licence etalab-2.0
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
