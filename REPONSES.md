# Réponses de compréhension — TP React

1. Qu’est-ce que React et quelle est sa différence avec JavaScript vanilla ?

React est une bibliothèque JavaScript qui permet de créer une interface avec des composants.
En JavaScript vanilla, on modifie directement les éléments du DOM.
Avec React, l’interface se met à jour automatiquement lorsque les données changent.

 2. Quel est le rôle du DOM virtuel ?

Le DOM virtuel est une représentation du DOM conservée par React.
Quand une donnée change, React compare l’ancienne interface avec la nouvelle.
Il modifie seulement les éléments nécessaires dans le vrai DOM.

3. Quelle est la différence entre une prop et un state ?

Une prop est une donnée envoyée d’un composant parent vers un composant enfant.
Par exemple, `titre` est une prop envoyée au composant `Header`.
Un state est une donnée interne qui peut changer, comme `recherche` dans `App`.

4. Pourquoi utilise-t-on des fichiers `.tsx` ?

Un fichier `.ts` contient seulement du code TypeScript.
Un fichier `.tsx` peut aussi contenir du JSX, comme `<Header />` ou `<button>`.
Les composants React qui retournent du JSX doivent donc utiliser l’extension `.tsx`.

5. Quel est le rôle du tableau `[]` dans `useEffect` ?

Le tableau vide indique que le `useEffect` doit s’exécuter une seule fois.
Il s’exécute lorsque le composant apparaît dans la page.
La liste des tâches l’utilise pour éviter de demander les données continuellement.

6. Comment gérez-vous l’appel d’une API ?

J’utilise un état pour le chargement, un autre pour les erreurs et un autre pour les données.
Pendant la demande, le message « Chargement » est affiché.
Si la demande réussit, les données sont affichées, sinon un message d’erreur apparaît.

7. Quels sont trois dossiers importants dans un projet Vite React ?

Le dossier `src/components` contient les composants réutilisables de l’application.
Le dossier `src/data` contient les données locales utilisées par les composants.
Le dossier `public` contient les fichiers statiques accessibles publiquement.