import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axiosConfig'; // utilise ton axios configuré

interface Props {
  role: 'company' | 'school';
}

const InscriptionForm: React.FC<Props> = ({ role }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone_number: '',
    name: '',
    rue: '',
    code_postal: '',
    ville: '',
    pays: '',
    SIRET: '',
    activite_principale: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSIRETChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const siret = e.target.value;
    setFormData({ ...formData, SIRET: siret });

    if (siret.length === 14) {
      try {
        const res = await axios.get(`/api/siret/${siret}`);
        const data = res.data;
        setFormData((prev) => ({
          ...prev,
          name: data.name || '',
          activite_principale: data.activite_principale || '',
          rue: data.rue || '',
          code_postal: data.code_postal || '',
          ville: data.ville || '',
          pays: data.pays || '',
        }));
      } catch (err) {
        console.error('Erreur SIRET :', err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('/register', { ...formData, role });
      alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');

      // Redirection selon le rôle
      if (role === 'school') {
        navigate('/auth_lycee');
      } else {
        navigate('/auth_entreprise');
      }
    } catch (err: any) {
      console.error('Erreur inscription :', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Erreur lors de l’inscription');
    }
  };

  return (
    <main role="main" id="content">
      {/* Intro */}
      <div className="fr-container fr-mt-8v fr-mt-md-14v fr-mb-2v fr-mb-md-8v">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
            <h1 className="fr-h2">Création de compte sur Mon Service</h1>
            <p className="fr-text--lead">Créer votre compte pour accéder au service</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="fr-container fr-container--fluid fr-mb-md-14v">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
            <div className="fr-background-alt--grey fr-px-md-0 fr-pt-10v fr-pt-md-14v fr-pb-6v fr-pb-md-10v">
              <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                <div className="fr-col-12 fr-col-md-10 fr-col-lg-9">

                  {/* FranceConnect */}
                  <div className="fr-mb-6v">
                    <h2 className="fr-h5">Se créer un compte avec FranceConnect</h2>
                    <p className="fr-text--sm">
                      FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion aux services en ligne.
                    </p>
                    <div className="fr-connect-group">
                      <button className="fr-connect" type="button">
                        <span className="fr-connect__login">S’identifier avec</span>
                        <span className="fr-connect__brand">FranceConnect</span>
                      </button>
                      <p>
                        <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener">
                          Qu’est-ce que FranceConnect ?
                        </a>
                      </p>
                    </div>
                  </div>

                  <p className="fr-hr-or">ou</p>

                  {/* Formulaire d’inscription */}
                  <form className="fr-mb-0 fr-fieldset" onSubmit={handleSubmit}>
                    <fieldset className="fr-fieldset">
                      <legend className="fr-fieldset__legend">
                        <h2 className="fr-h5">Se créer un compte en choisissant un identifiant</h2>
                      </legend>

                      {/* Tous les inputs inchangés */}
                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="email">Email</label>
                        <input className="fr-input" type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="password">Mot de passe</label>
                        <input className="fr-input" type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="phone_number">Téléphone</label>
                        <input className="fr-input" type="tel" name="phone_number" id="phone_number" value={formData.phone_number} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="SIRET">SIRET</label>
                        <input className="fr-input" name="SIRET" id="SIRET" value={formData.SIRET} onChange={handleSIRETChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="name">Nom</label>
                        <input className="fr-input" name="name" id="name" value={formData.name} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="rue">Rue</label>
                        <input className="fr-input" name="rue" id="rue" value={formData.rue} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="code_postal">Code postal</label>
                        <input className="fr-input" name="code_postal" id="code_postal" value={formData.code_postal} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="ville">Ville</label>
                        <input className="fr-input" name="ville" id="ville" value={formData.ville} onChange={handleChange} required />
                      </div>

                      <div className="fr-fieldset__element">
                        <label className="fr-label" htmlFor="pays">Pays</label>
                        <input className="fr-input" name="pays" id="pays" value={formData.pays} onChange={handleChange} required />
                      </div>

                      {role === 'company' && (
                        <div className="fr-fieldset__element">
                          <label className="fr-label" htmlFor="activite_principale">Activité principale</label>
                          <input className="fr-input" name="activite_principale" id="activite_principale" value={formData.activite_principale} onChange={handleChange} />
                        </div>
                      )}

                      <div className="fr-fieldset__element">
                        <button type="submit" className="fr-btn">Valider</button>
                      </div>
                    </fieldset>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InscriptionForm;
