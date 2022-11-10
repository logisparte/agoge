# Technique de test

> Retourner à la [table des matières](./index.md)

- Doubles (substituts)
  - Bidon (_dummy_, passé en paramètre mais jamais utilisé)
  - Factice (_fake_, implémentation minimale fonctionnelle mais non-viable en production)
  - Remplaçant (_stub_, retourne des réponses pré-programmées lors de ses interactions)
  - Espion (_spy_, remplaçant qui enregistre ses interactions)
  - Acteur (_mock_, espion avec des attentes d'interaction pré-programmées)
- Génération automatique de tests (même test sur différentes valeurs)
- Objets d'abstractions d'interface utilisateur (_page objects_)
