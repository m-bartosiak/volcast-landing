---
title: "Le réglage volt-watt (P/U) : faut-il l'activer ?"
description: "Le réglage P(U) réduit progressivement la puissance de l'onduleur si la tension monte, au lieu de provoquer son découplage. Quand il fait gagner des kWh."
lang: fr
draft: false
updated: 2026-08-14
category: "k1"
guide: "prevision-production-photovoltaique"
translationKey: "qa-volt-watt"
seo:
  ogTitle: "Réglage volt-watt ou courbe P(U) : à quoi il sert vraiment"
---
Le réglage volt-watt, aussi appelé courbe P(U), fait **réduire progressivement la puissance de l'onduleur à mesure que la tension du réseau monte, au lieu de le déconnecter d'un coup** quand la limite est franchie. Si votre onduleur déclenche en surtension, l'activer permet en général de récupérer de l'énergie : perdre 20 à 30 % de puissance pendant quelques minutes vaut mieux que perdre 100 % pendant dix.

## Pourquoi cela aide

Un déclenchement franc en surtension fonctionne en tout ou rien : l'onduleur se met hors ligne, attend, se reconnecte, et redéclenche souvent quelques minutes plus tard. Le P(U) remplace cette falaise par une pente : quand la tension approche la limite, la puissance est rognée juste ce qu'il faut pour garder la liaison vivante. La plupart des onduleurs récents savent le faire, mais le réglage est très souvent laissé inactif par l'installateur.

Le compromis, dit honnêtement : le P(U) revient à écrêter en permanence un peu d'énergie les jours de tension haute pour éviter d'en perdre beaucoup. Il masque aussi le problème de réseau sous-jacent — raison pour laquelle il fonctionne mieux en complément d'un signalement formel au gestionnaire de réseau, et non à sa place.

## Que faire

1. **Vérifiez d'abord si votre onduleur déclenche réellement** : cherchez les codes de surtension dans le journal. Pas de déclenchement, rien à changer.
2. **Demandez à votre installateur d'activer le P(U)** avec des paramètres conformes à vos conditions de raccordement : c'est un réglage côté réseau, généralement protégé par un mot de passe installateur, et un mauvais paramétrage peut vous placer en dehors de votre convention de raccordement. Ne le modifiez pas vous-même.
3. **Continuez à signaler la surtension à votre gestionnaire de réseau** : le P(U) est un antidouleur, la correction du réseau est le remède.
4. **Surveillez l'effet dans vos données de production** : comparer la production à une prévision calculée sur votre installation montre si le bridage reste à quelques pour cent (acceptable) ou s'il augmente, auquel cas il est temps d'insister auprès du gestionnaire de réseau.
