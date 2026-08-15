---
title: "Pourquoi ma production plafonne-t-elle à midi ?"
description: "Un plateau au milieu de la journée, c'est l'écrêtage de l'onduleur ou une limite d'injection : un choix de conception, presque jamais une panne."
lang: fr
draft: false
updated: 2026-08-14
category: "k1"
guide: "prevision-production-photovoltaique"
translationKey: "qa-clipping"
seo:
  ogTitle: "Production plafonnée à midi : l'écrêtage expliqué"
---
Un plateau plat au sommet de votre courbe de production signifie que la puissance est **plafonnée : soit par la puissance nominale de l'onduleur (écrêtage), soit par une limite d'injection** fixée sur votre installation. Dans les deux cas le haut de la cloche est coupé et, dans la plupart des installations, il s'agit d'un choix de conception et non d'un défaut.

## Pourquoi cela arrive

**L'écrêtage de l'onduleur :** si vos modules totalisent plus que la puissance de l'onduleur (par exemple 6,5 kWc de modules sur un onduleur de 5 kW), les meilleurs jours le côté DC délivre plus que ce que l'onduleur sait convertir, et la sortie reste bloquée à son maximum. Ce surdimensionnement du champ PV est une pratique courante et généralement rentable, parce que les modules atteignent rarement leur puissance de plaque ; le détail est dans la réponse sur l'onduleur plus petit que les panneaux.

**L'écrêtement de l'injection :** votre onduleur peut être paramétré pour ne pas injecter au-delà d'une certaine puissance sur le réseau, jusqu'à l'injection nulle. C'est notamment le cas en autoconsommation totale sans injection, qui fait l'objet d'une convention spécifique avec Enedis. La valeur applicable chez vous figure dans votre convention de raccordement ou dans le paramétrage laissé par l'installateur.

Les deux se ressemblent mais ne se comportent pas pareil : l'écrêtage plafonne la production totale à la taille de l'onduleur, alors qu'une limite d'injection ne plafonne que ce qui part sur le réseau. Lancer le lave-vaisselle pendant le plateau augmente donc la production totale s'il s'agit d'une limite d'injection, et ne change rien s'il s'agit d'écrêtage.

## Que faire

1. **Comparez la hauteur du plateau à la puissance nominale AC de votre onduleur** : si les deux coïncident, c'est de l'écrêtage.
2. **Vérifiez si une limite d'injection est paramétrée** : un plateau nettement en dessous de la puissance de l'onduleur pointe presque toujours vers cela. Demandez confirmation à votre installateur ou à votre gestionnaire de réseau.
3. **Déplacez vos consommations dans les heures du plateau** : avec une limite d'injection, chaque kWh consommé au milieu de la journée est un kWh qui serait autrement perdu. Ballon d'eau chaude, lave-linge, recharge du véhicule électrique.
4. **Comparez votre production réelle à une prévision calculée sur votre installation** : une bonne prévision modélise aussi la courbe écrêtée, donc un plateau plus bas que celui attendu signale un vrai problème (ombrage, string en défaut) plutôt qu'un choix de conception.
