# Frontend React App – Dev Environment (Docker + Vite)

Ce projet est une application React (avec Vite, TypeScript et TailwindCSS) configurée pour être lancée dans un environnement de développement Dockerisé.

---

## 🚀 Lancement avec Docker

### 1. Cloner le projet

```bash
git clone https://github.com/SarahOtmane/BetaGouv_front.git
cd BetaGouv_front
```

### 2. Installer les dépendances
```bash
docker run -ti --rm -v $PWD:/app -w /app node:20.17-slim /bin/sh
cd app
npm install
exit
```
### 3. Lancer le build
```bash
docker compose -f compose-dev.yml up --build
```

### 4. Gestion des dépendances
Les dépendances sont installées dans l’image Docker. Si tu ajoutes de nouvelles dépendances :
```bash
docker exec -it front-web-dev-1 sh
npm install <nom-du-paquet>
```

### 5. DSFR
Pour pouvoir visualiser les pages d'exemple, suivez ces étapes
```bash
docker exec -it front-web-dev-1 sh
cd node_modules/@gouvfr/dsfr/
npm run serve
````
Les pages sont disponibles à l'url http://localhost:8080/example/