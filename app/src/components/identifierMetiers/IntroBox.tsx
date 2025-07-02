import React from 'react';

const IntroBox: React.FC = () => {
  return (
    <div className="fr-alert fr-alert--info fr-mb-4w">
      <h2 className="fr-alert__title">Identifier le(s) lycée(s) pro qui me correspondent</h2>
      <p>
        Cet assistant va vous permettre d’identifier les établissements qui ont la plus forte
        probabilité d’avoir des élèves en lien avec vos métiers.
      </p>
    </div>
  );
};

export default IntroBox;
