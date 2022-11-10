# Introduction

> Retourner à la [table des matières](./index.md)

## Pourquoi écrire des tests

Il est essentiel de valider le fonctionnement d'un logiciel avant de le mettre en production.

Pour ce faire, l'approche la plus élémentaire est de simplement l'essayer manuellement. Dans
certains cas peu complexes et non-critiques, cela peut être tout à fait acceptable.

Cependant, pour des logiciels de plus grande envergure, cette approche rencontre vite des
limitations. En effet, plus les cas d'usages se multiplient, plus il est long et difficile pour
quelqu'un de vérifier manuellement si le logiciel fonctionne tel que prévu et d'établir un
diagnostique précis dans le cas contraire. Pour ces raisons, l'approche manuelle ne peut faire
partie d'une pratique professionnelle sérieuse.

Une méthode plus rigoureuse et efficace est d'utiliser un ordinateur pour essayer le logiciel de
manière automatisée. En d'autres mots, il s'agit d'écire un logiciel secondaire qui teste le
logiciel principal. Une multitude de cas d'usages et de comportements différents peuvent ainsi
être vérifés rapidement. En outre, en faisant dépendre le code source des tests directement du
code source principal, on permet alors une granularité de test si fine qu'il devient très facile
d'établir un diagnostique précis en cas d'échec d'un test.

- Empirique vs mathématique, méthode scientifique (socratique)
- Filet de sécurité = confiance = vitesse
- Documentation
- Impose une certaine modularité au design du code source = clarté = vitesse

## Comment écrire des tests

Pour ce faire, l'approche la plus courante est d'appliquer la méthode scientifique à l'essai du
logiciel. , c'est à dire de

formuler une prédiction, effectuer une expérience, observer le résultat et conclure ou non sur
son bon fonctionnement.

D'une manière ou une autre, il faut donc "essayer" le code.

S'il fonctionne, on poursuit le développement, sinon on le modifie et on le réessaye

Quand ça marche pas comme on veut, on fait une modification et on recommence jusqu'à ce que ça
marche.

Sans le savoir, on
