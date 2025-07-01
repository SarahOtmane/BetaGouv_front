import React from 'react';
import FilAriane from '../components/metierscomponents/FilAriane';
import PageTitle from '../components/installations/PageTitle';
import PresentationIntro from '../components/installations/PresentationIntro';
import GridMultimedia from '../components/installations/GridMultimedia';
import OutilsEtClasse from '../components/installations/OutilsEtClasse';

const Installations: React.FC = () => {
  return (
    <div className="fr-container fr-mt-5w">
      <PageTitle />

      <FilAriane
        items={[
            { label: 'Mon Lycée', href: '#' },
            { label: 'Installations techniques' }
        ]}
        />


      <PresentationIntro />

      <GridMultimedia />

      <OutilsEtClasse />
    </div>
  );
};

export default Installations;
