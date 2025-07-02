import React from 'react';

const IntroBloc: React.FC = () => {
  return (
    <div className="fr-text--sm">
      <div className="fr-mb-2w fr-background-alt-grey fr-p-3w fr-radius-2w">
        <strong>Le lycée professionnel</strong> propose un enseignement en alternance avec
        l’entreprise et ses métiers, dans divers secteurs et à différents niveaux de formation.
      </div>

      <div className="fr-mb-2w fr-background-alt-grey fr-p-3w fr-radius-2w">
        La voie professionnelle permet à des jeunes de X à XX ans
        <strong> d’acquérir des connaissances et des compétences dans un domaine professionnel.</strong>
      </div>

      <div className="fr-background-alt-grey fr-p-3w fr-radius-2w">
        Les élèves préparent après la 3e un CAP ou un baccalauréat professionnel :
        <ul className="fr-pl-2w">
          <li><strong>CAP</strong> – conduit principalement à la vie active</li>
          <li><strong>BAC PRO</strong> – permet l’insertion dans la vie active ou la poursuite d’études</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroBloc;
