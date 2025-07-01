import React from 'react';
import PageTitle from '../components/installations/PageTitle'; 
import FilAriane from '../components/metierscomponents/FilAriane';
import ActionsChecklist from '../components/actions/ActionsChecklist';
import ActionsProgrammes from '../components/actions/ActionsProgrammes';
import CalendrierStages from '../components/actions/CalendrierStages';

const Actions: React.FC = () => {
  return (
    <div className="fr-container fr-mt-5w">
        <PageTitle />
      <FilAriane items={[
        { label: 'Mon lycée', href: '#' },
        { label: 'Les formats proposés par le lycée' }
      ]} />

      <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
        <div className="fr-col-12 fr-col-md-6">
          <ActionsChecklist />
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <ActionsProgrammes />
          <CalendrierStages />
        </div>
      </div>
    </div>
  );
};

export default Actions;
