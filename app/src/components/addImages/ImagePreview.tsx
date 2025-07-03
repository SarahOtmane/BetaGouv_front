// components/addImages/ImagePreview.tsx
import React from 'react';

interface Props {
  files: File[];
  withLabels?: boolean;
  onRemove?: (index: number) => void;
}

const ImagePreview: React.FC<Props> = ({ files, withLabels = false, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <div className="fr-grid-row fr-grid-row--gutters fr-mt-2w">
      {files.map((file, index) => (
        <div key={index} className="fr-col-6 fr-col-md-3">
          <div className="fr-card fr-card--no-border">
            <div className="fr-card__body fr-p-1w fr-text--center">
              {withLabels && (
                <p className="fr-text--xs fr-mb-1w">
                  <strong>Image {index + 1}</strong>
                </p>
              )}
              <img
                src={URL.createObjectURL(file)}
                alt={`Image ${index + 1}`}
                className="fr-responsive-img"
                style={{ objectFit: 'cover', height: '130px', width: '100%', borderRadius: '0.25rem' }}
              />
              {onRemove && (
                <button
                  type="button"
                  className="fr-btn fr-btn--tertiary-no-outline fr-btn--sm fr-mt-1w"
                  onClick={() => onRemove(index)}
                >
                   Retirer
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
