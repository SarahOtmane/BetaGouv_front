import React from 'react';

const OutilsEtClasse: React.FC = () => {
  return (
    <section className="fr-grid-row fr-grid-row--gutters">
      <div className="fr-col-12 fr-col-md-6">
        <h3 className="fr-h5">Notre outillage spécialisé</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Laser_cutting_machine.jpg/640px-Laser_cutting_machine.jpg" alt="Outillage" className="fr-responsive-img" />
      </div>
      <div className="fr-col-12 fr-col-md-6">
        <h3 className="fr-h5">Notre classe flexible</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flexible_classroom_design.jpg/640px-Flexible_classroom_design.jpg" alt="Classe flexible" className="fr-responsive-img" />
      </div>
    </section>
  );
};

export default OutilsEtClasse;
