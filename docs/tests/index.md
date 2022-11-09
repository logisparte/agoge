# Tests

Formation sur les tests automatisés et le développement dirigé par les tests (_test-driven
development_)

## Table des matières

1. [Introduction](./introduction.md)
   - Pourquoi écrire des tests
   - Comment écrire des tests
2. [Taxonomie](./taxonomie.md)
   - Interlocuteur, sujet et portée
   - Pyramide des tests
   - Principaux types
     - Unitaire
     - Intégration
     - Composante
     - Interface utilisateur (graphique, ligne de commande, programmable, etc.)
     - Bout en bout
     - Acceptation
   - Autres types
     - Contrat
     - Seuils (performance, poids, etc.)
     - Installation/Vérification
     - Stress
3. [Critères d'évaluation](./evaluation.md)
   - Forme d'un test
     - Mise en place
     - Action
     - Assertion
   - Critères de qualité
     - Respect du type (interlocuteur, sujet, portée)
     - Déterminisme
       - Auto-validant (succès ou échec)
       - Répétable (même résultat)
       - Indépendant (autres tests, autre machine, autre moment, autre endroit, etc.)
     - Efficacité
       - Performant (rapidité, mémoire, etc.)
       - Sans empreinte (mémoire, fichiers, etc.)
       - Automatisé
     - Maintenabilité
       - Lisibilité (format, conventions, etc.)
       - Comportement VS implémentation
   - Métriques
     - Couverture de code
     - Temps d'exécution
4. [Techniques](./techniques.md)
   - Doubles (substituts)
     - Bidon (_dummy_, passé en paramètre mais jamais utilisé)
     - Factice (_fake_, implémentation minimale fonctionnelle mais non-viable en production)
     - Remplaçant (_stub_, retourne des réponses pré-programmées lors de ses interactions)
     - Espion (_spy_, remplaçant qui enregistre ses interactions)
     - Acteur (_mock_, espion avec des attentes d'interaction pré-programmées)
   - Génération automatique de tests (même test sur différentes valeurs)
   - Objets d'abstractions d'interface utilisateur (_page objects_)
5. [Développement dirigé par les tests (_test-driven development_)](./tdd.md)
   - Boucle de développement
     - Écrire un test qui échoue
     - Faire passer le test
     - Refactorer
   - Philosophie
     - Architecte vs jardinier
     - Découvrir le design naturel VS imposer un design
     - Robustesse
