// src/components/backoffice/IntroBox.tsx
import React from 'react';

const IntroBox: React.FC = () => {
  return (
    <div className="fr-alert fr-alert--info fr-alert--sm fr-mb-4w">
      <p role="status">
        💡 <strong>Vous avez des nouvelles demandes</strong> 💡
      </p>
    </div>
  );
};

export default IntroBox;
