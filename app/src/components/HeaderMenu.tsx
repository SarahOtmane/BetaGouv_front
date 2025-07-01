import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { label: 'Métiers', path: '/metiers' },
  { label: 'Installations', path: '/installations' },
  { label: 'Portraits', path: '/portraits' },
  { label: 'Actions', path: '/actions' },
  { label: 'Partenaires', path: '/partenaires' },
];

const HeaderMenu: React.FC = () => {
  return (
    <div className="fr-tabs">
      <ul className="fr-tabs__list" role="tablist" aria-label="Navigation">
        {tabs.map((tab, index) => (
          <li className="fr-tabs__tab" role="tab" key={index}>
            <Link to={tab.path} className="fr-tabs__button" role="tab">
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
