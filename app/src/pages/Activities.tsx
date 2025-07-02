import React from 'react';
import IntroBox from '../components/identifierMetiers/IntroBox';
import IdentifierMenu from '../components/identifierMetiers/IdentifierMenu';
import { useNavigate } from 'react-router-dom';

const Activities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fr-container fr-mt-5w">
      {/* Bandeau haut */}
      <div className="fr-grid-row fr-grid-row--between fr-mb-3w">
        <div className="fr-col-12 fr-col-md-8">
          <IntroBox />
        </div>
        <div className="fr-col-12 fr-col-md-4 fr-text--right">
          <IdentifierMenu />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
        <div className="fr-col-12 fr-col-md-6">
          <iframe
            title="Carte des lycées"
            width="100%"
            height="300"
            src="https://www.openstreetmap.org/export/embed.html"
            style={{ border: '1px solid #ccc' }}
          ></iframe>
        </div>

        <div className="fr-col-12 fr-col-md-6">
          <h3 className="fr-text--md fr-mb-2w">
            3 lycées pro sont concernés par votre requête :
          </h3>

          <div className="fr-p-3w fr-background-alt-grey fr-mb-3w">
            <p><strong>Critère géographique :</strong> 3km</p>
            <p><strong>Métiers recherchés :</strong></p>
            <ul>
              <li><strong>Attaché(e) d’administration</strong></li>
              <li><strong>Ouvrier(e) paysagiste</strong></li>
            </ul>
          </div>

          <div className="fr-grid-row fr-mb-2w">
            <div className="fr-col-6">
              <p><strong>Ces lycées ont indiqué organiser :</strong></p>
              <ul>
                <li>Portes ouvertes</li>
                <li>TP déportés</li>
              </ul>
            </div>

            <div className="fr-col-6">
              <p><strong>Ces lycées ont indiqué couvrir :</strong></p>
              <ul>
                <li>Bac pro</li>
                <li>CAP</li>
              </ul>
            </div>
          </div>

          <button
            className="fr-btn fr-btn--primary"
            onClick={() => navigate('/activities/affiner')}
          >
            J’affine ma sélection de lycées à contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
