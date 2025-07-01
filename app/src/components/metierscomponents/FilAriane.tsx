import React from 'react';

type FilArianeItem = {
  label: string;
  href?: string;
};

type FilArianeProps = {
  items: FilArianeItem[];
};

const FilAriane: React.FC<FilArianeProps> = ({ items }) => {
  return (
    <nav role="navigation" className="fr-breadcrumb" aria-label="Fil d'ariane">
      <ol className="fr-breadcrumb__list">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a className="fr-breadcrumb__link" href={item.href}>
                {item.label}
              </a>
            ) : (
              <a className="fr-breadcrumb__link" aria-current="page">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default FilAriane;
