import React, { useState } from 'react';
import HeaderMenu from '../components/metierscomponents/HeaderMenu';
import FilAriane from '../components/metierscomponents/FilAriane';
import SelectMetier from '../components/metierscomponents/SelectMetier';
import ListeMetiers from '../components/metierscomponents/ListeMetiers';
import InfosGenerales from '../components/metierscomponents/InfosGenerales';
import ChiffresCles from '../components/metierscomponents/ChiffresCles';

const optionsMetiers = [
  'Hôtellerie Restauration',
  'Gestion Relation Client',
  'Métiers du sport',
  'Métiers du numérique',
];

const chiffres = [
  { label: 'Élèves', valeur: 1200 },
  { label: 'Apprentis', valeur: 400 },
  { label: 'Taux de réussite', valeur: '95%' },
  { label: 'Enseignants', valeur: 85 },
  { label: 'Formations', valeur: 35 },
];

const Metiers: React.FC = () => {
  const [metiers, setMetiers] = useState<string[]>([]);

  const handleAddMetier = (metier: string) => {
    if (!metiers.includes(metier)) {
      setMetiers((prev) => [...prev, metier]);
    }
  };

  return (
    <div className="fr-container fr-mt-5w">
  <div className="fr-grid-row fr-grid-row--between fr-mb-3w">
    <div className="fr-col-12 fr-col-md-6">
      <h1 className="fr-h2">Je valorise mon lycée</h1>
    </div>
    <div className="fr-col-12 fr-col-md-6 fr-text--right">
      <HeaderMenu />
    </div>
  </div>

  <FilAriane />

  <div className="fr-grid-row fr-grid-row--gutters fr-mt-5w">
    {/* Colonne gauche */}
    <div className="fr-col-12 fr-col-md-6">
      <h2 className="fr-h4">Métiers sélectionnés</h2>
      <ListeMetiers metiers={metiers} />

      <h2 className="fr-h4 fr-mt-4w">Ajouter un métier</h2>
      <SelectMetier options={optionsMetiers} onAddMetier={handleAddMetier} />
    </div>

    {/* Colonne droite */}
    <div className="fr-col-12 fr-col-md-6">
      <InfosGenerales
        nom="Lycée Jean Moulin"
        adresse="15 rue de la Liberté, 75010 Paris"
        siteWeb="https://www.lycee-jean-moulin.fr"
        logoUrl="https://upload.wikimedia.org/wikipedia/commons/6/6e/Logo-academie-paris.svg"
      />
      <ChiffresCles donnees={chiffres} />
    </div>
  </div>
</div>

  );
};

export default Metiers;
