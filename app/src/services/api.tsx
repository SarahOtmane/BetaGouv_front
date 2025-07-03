// src/services/api.ts
export interface EntrepriseData {
  siret: string;
  siege: {
    siret: string;
    adresse: string;
  };
  nom_raison_sociale: string;
  enseigne?: string;
  activite_principale?: string;
  libelle_activite_principale?: string;
  categorie_juridique?: string;
  libelle_categorie_juridique?: string;
  etat_administratif?: string;
}

export const fetchEntrepriseBySiret = async (siret: string): Promise<EntrepriseData> => {
  const response = await fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${siret}&page=1&per_page=1`, {
    headers: {
      'accept': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response.json();
  if (data.results.length === 0) {
    throw new Error('Aucune entreprise trouvée avec ce SIRET');
  }

  return data.results[0];
};