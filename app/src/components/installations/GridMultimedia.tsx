import React from 'react';

const GridMultimedia: React.FC = () => {
  return (
    <section className="fr-grid-row fr-grid-row--gutters fr-mb-5w">
      <div className="fr-col-12 fr-col-md-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Warehouse_pallet_rack.jpg/640px-Warehouse_pallet_rack.jpg" alt="Entrepôt logistique" className="fr-responsive-img" />
      </div>
      <div className="fr-col-12 fr-col-md-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cuisine_collective.jpg/640px-Cuisine_collective.jpg" alt="Cuisine d'application" className="fr-responsive-img" />
      </div>
      <div className="fr-col-12 fr-col-md-4 fr-text--center">
        <div className="fr-placeholder fr-my-2w" style={{ background: '#dedede', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '2rem' }}>▶</span>
        </div>
      </div>
    </section>
  );
};

export default GridMultimedia;
