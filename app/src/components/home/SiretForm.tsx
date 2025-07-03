// src/components/identifierMetiers/SiretForm.tsx
import React, { useState } from 'react';
import { fetchEntrepriseBySiret } from '../../services/api';

interface SiretFormProps {
  onSearch: (data: any) => void;
  onError: (error: string) => void;
}

const SiretForm: React.FC<SiretFormProps> = ({ onSearch, onError }) => {
  const [siret, setSiret] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const cleanedSiret = siret.replace(/\s/g, '');
      const entrepriseData = await fetchEntrepriseBySiret(cleanedSiret);
      onSearch(entrepriseData);
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Une erreur inconnue est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="fr-mt-3w">
      <div className="fr-input-group fr-mb-2w">
        <label className="fr-label" htmlFor="siret">
          Entrez le SIRET de votre établissement
        </label>
        <input
          className="fr-input"
          id="siret"
          type="text"
          value={siret}
          onChange={(e) => setSiret(e.target.value)}
          required
          pattern="\d{14}"
          title="Le SIRET doit contenir 14 chiffres"
          placeholder="12345678901234"
        />
      </div>
      <button className="fr-btn" type="submit" disabled={isLoading}>
        {isLoading ? 'Recherche en cours...' : 'Trouver les lycées pro qui me correspondent'}
      </button>
    </form>
  );
};

export default SiretForm;