// components/addImages/AddImageSection.tsx
import React, { useRef } from 'react';
import ImagePreview from './ImagePreview';

interface AddImageSectionProps {
  title: string;
  name: string;
  files: File[];
  onAddFiles: (files: FileList) => void;
  onRemoveFile: (index: number) => void;
}

const AddImageSection: React.FC<AddImageSectionProps> = ({
  title,
  name,
  files,
  onAddFiles,
  onRemoveFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) onAddFiles(e.target.files);
  };

  return (
    <section className="fr-mb-6w">
      <h2 className="fr-h5 fr-mb-2w">{title}</h2>

      <div className="fr-mb-3w">
        <button
          type="button"
          className="fr-btn fr-btn--secondary fr-icon-add-line fr-btn--icon-left"
          onClick={handleClick}
        >
          Ajouter une image
        </button>
        <input
          type="file"
          name={name}
          accept="image/*"
          ref={inputRef}
          onChange={handleChange}
          hidden
        />
      </div>

      <ImagePreview files={files} withLabels onRemove={onRemoveFile} />
    </section>
  );
};

export default AddImageSection;
