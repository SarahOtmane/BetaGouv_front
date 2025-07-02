import React from 'react';
import IntroBox from '../components/identifierMetiers/IntroBox';
import IdentifierMenu from '../components/identifierMetiers/IdentifierMenu';

const RefineContact: React.FC = () => {
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
      <h3 className="fr-h4 fr-mt-5w">Vous souhaitez développer une relation de long terme ?</h3>
      <p className="fr-text--sm fr-mb-4w">
        Cet assistant va vous permettre de construire votre projet, et vous orienter vers le bon niveau d’interlocuteur.
        Néanmoins, le champ des possibles est large : si votre souhait d’action ne figure pas ici, construisez l’action avec votre futur lycée professionnel partenaire !
      </p>

      <h4 className="fr-h5 fr-mb-2w">En tant qu’entreprise, je souhaite :</h4>

      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <ul className="fr-checkbox-group">
            <li>
              <input type="checkbox" id="visit" />
              <label htmlFor="visit">Organiser des visites de site dans mon entreprise</label>
            </li>
            <li>
              <input type="checkbox" id="present" />
              <label htmlFor="present">Venir présenter mon entreprise et ses métiers</label>
            </li>
            <li>
              <input type="checkbox" id="stagiaire" />
              <label htmlFor="stagiaire">Accueillir un stagiaire</label>
            </li>
            <li>
              <input type="checkbox" id="alternant" />
              <label htmlFor="alternant">Accueillir un alternant</label>
            </li>
          </ul>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <ul className="fr-checkbox-group">
            <li>
              <input type="checkbox" id="evenements" />
              <label htmlFor="evenements">Participer aux événements de l’établissement</label>
            </li>
            <li>
              <input type="checkbox" id="mentorat" />
              <label htmlFor="mentorat">Faire du mentorat auprès d’élèves</label>
            </li>
            <li>
              <input type="checkbox" id="partenariat" />
              <label htmlFor="partenariat">Mettre en place un partenariat</label>
            </li>
            <li>
              <input type="checkbox" id="autre" />
              <label htmlFor="autre">Autre : précisez…</label>
            </li>
          </ul>
        </div>
      </div>

      <div className="fr-mt-4w fr-text--center">
        <p className="fr-text--md fr-mb-2w">Je souhaite être mis en relation avec :</p>
        <div className="fr-btns-group fr-btns-group--inline">
          <button className="fr-btn fr-btn--secondary">Interlocuteur unique</button>
          <button className="fr-btn fr-btn--secondary">Tous les interlocuteurs</button>
        </div>
      </div>
    </div>
  );
};

export default RefineContact;
