import React from 'react';

type InfosGeneralesProps = {
  nom: string;
  adresse: string;
  siteWeb: string;
  logoUrl: string;
};

const InfosGenerales: React.FC<InfosGeneralesProps> = ({
  nom,
  adresse,
  siteWeb,
  logoUrl,
}) => {
  return (
    <section className="fr-p-4w fr-background-alt-blue-france fr-radius-2w fr-mb-4w">
      <div className="fr-grid-row fr-grid-row--middle">
        <div className="fr-col-8">
          <h3 className="fr-text--xl fr-mb-2w">{nom}</h3>

          <div className="fr-grid-row fr-grid-row--middle fr-mb-1w">
            <div className="fr-col-3 fr-text--sm fr-text--bold">Adresse</div>
            <div className="fr-col-9 fr-text--sm">{adresse}</div>
          </div>

          <div className="fr-grid-row fr-grid-row--middle">
            <div className="fr-col-3 fr-text--sm fr-text--bold">Site web</div>
            <div className="fr-col-9">
              <a
                href={siteWeb}
                className="fr-link fr-text--sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteWeb}
              </a>
            </div>
          </div>
        </div>

        <div className="fr-col-4 fr-text--center">
          <img
            src={logoUrl}
            alt={`Logo de ${nom}`}
            className="fr-responsive-img fr-my-2w"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfosGenerales;
