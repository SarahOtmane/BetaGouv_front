// pages/AjouterImages.tsx
import React, { useState } from 'react';
import AddImageSection from '../components/addImages/AddImageSection';

const AjouterImages: React.FC = () => {
  const [token] = useState<string>('TON_TOKEN_ICI');

  const [imgOutillage, setImgOutillage] = useState<File[]>([]);
  const [imgPlateau, setImgPlateau] = useState<File[]>([]);
  const [imgClasse, setImgClasse] = useState<File[]>([]);

  const addFiles = (
    setter: React.Dispatch<React.SetStateAction<File[]>>,
    files: FileList
  ) => setter((prev) => [...prev, ...Array.from(files)]);

  const removeFileAtIndex = (
    setter: React.Dispatch<React.SetStateAction<File[]>>,
    index: number
  ) => setter((prev) => prev.filter((_, i) => i !== index));

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    imgOutillage.forEach((file) => formData.append('img_outillage', file));
    imgPlateau.forEach((file) => formData.append('img_plateau', file));
    imgClasse.forEach((file) => formData.append('img_class_flexible', file));

    try {
      const res = await fetch('http://localhost:3000/school/images', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      alert('Images envoyées avec succès');
      console.log(data);
    } catch (err) {
      alert("Erreur lors de l'envoi");
      console.error(err);
    }
  };

  return (
    <div className="fr-container fr-mt-5w fr-mb-8w">
      <h1 className="fr-h3 fr-mb-4w">Ajouter des images aux installations</h1>
      <form onSubmit={handleUpload}>
        <AddImageSection
          title="Images d’outillage"
          name="img_outillage"
          files={imgOutillage}
          onAddFiles={(f) => addFiles(setImgOutillage, f)}
          onRemoveFile={(i) => removeFileAtIndex(setImgOutillage, i)}
        />

        <AddImageSection
          title="Images de plateau technique"
          name="img_plateau"
          files={imgPlateau}
          onAddFiles={(f) => addFiles(setImgPlateau, f)}
          onRemoveFile={(i) => removeFileAtIndex(setImgPlateau, i)}
        />

        <AddImageSection
          title="Images de classe flexible"
          name="img_class_flexible"
          files={imgClasse}
          onAddFiles={(f) => addFiles(setImgClasse, f)}
          onRemoveFile={(i) => removeFileAtIndex(setImgClasse, i)}
        />

        <div className="fr-text--center fr-mt-6w">
          <button type="submit" className="fr-btn fr-btn--lg fr-btn--primary">
             Envoyer toutes les images
          </button>
        </div>
      </form>
    </div>
  );
};

export default AjouterImages;
