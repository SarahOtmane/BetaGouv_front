import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const IdentifierMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fr-btns-group fr-btns-group--inline fr-btns-group--right fr-mt-3w">
      <button
        className={`fr-btn fr-btn--sm ${isActive('/identifiermetiers') ? 'fr-btn--secondary' : 'fr-btn--tertiary'}`}
        onClick={() => navigate('/identifiermetiers')}
      >
        Métiers
      </button>
      <button
        className={`fr-btn fr-btn--sm ${isActive('/distance') ? 'fr-btn--secondary' : 'fr-btn--tertiary'}`}
        onClick={() => navigate('/distance')}
      >
        Distance
      </button>
      <button
        className={`fr-btn fr-btn--sm ${isActive('/activities') ? 'fr-btn--secondary' : 'fr-btn--tertiary'}`}
        onClick={() => navigate('/activities')}
      >
        Activités
      </button>
    </div>
  );
};

export default IdentifierMenu;
