import React from 'react';
import PortraitDuMois from './PortraitDuMois';
import ReussiteDuMois from './ReussiteDuMois';
import ProjetCaritatif from './ProjetCaritatif';

const PortraitsGrid: React.FC = () => {
  return (
    <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
      <PortraitDuMois />
      <ReussiteDuMois />
      <ProjetCaritatif />
    </div>
  );
};

export default PortraitsGrid;
