# Frontend React App – Dev Environment (Docker + Vite)

Ce projet est une application React (avec Vite, TypeScript et TailwindCSS) configurée pour être lancée dans un environnement de développement Dockerisé.

---

## 🚀 Lancement avec Docker

### 1. Cloner le projet

```bash
git clone https://github.com/SarahOtmane/BetaGouv_front.git
cd BetaGouv_front
```

### 2. Cloner le projet
```bash
docker compose -f compose-dev.yml up --build
```

### 3. Gestion des dépendances
Les dépendances sont installées dans l’image Docker. Si tu ajoutes de nouvelles dépendances :
```bash
docker exec -it front-web-dev-1 sh
npm install <nom-du-paquet>
```