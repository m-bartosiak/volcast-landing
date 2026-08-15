---
title: "Chauffer le ballon d'eau chaude avec le surplus solaire"
description: "Le ballon est le stockage le moins cher que vous possédez déjà : minuterie, routeur solaire ou automatisation selon la prévision : le comparatif."
lang: fr
draft: false
updated: 2026-08-14
category: "k5"
guide: "quand-lancer-lave-linge-et-ballon"
translationKey: "qa-boiler-surplus"
seo:
  ogTitle: "Eau chaude et surplus solaire : trois niveaux de pilotage"
---
Le ballon d'eau chaude est **le stockage d'énergie le moins cher que vous possédez déjà** : 200 litres, c'est de l'ordre de 10 kWh sous forme de chaleur. Trois niveaux permettent d'y envoyer le surplus : une simple minuterie (gratuite, grossière), un routeur solaire (précis, mais du matériel à acheter), et une automatisation pilotée par la prévision via un relais connecté (précise *et* prédictive, et la moins chère si Home Assistant tourne déjà chez vous).

## Pourquoi c'est la première automatisation à construire

L'eau chaude sanitaire est une grosse charge entièrement décalable, avec son stockage intégré : personne ne se soucie de *quand* l'eau a été chauffée, seulement qu'elle soit chaude à l'heure de la douche. Et depuis le 5 juin 2026, l'arbitrage n'en est plus vraiment un : le surplus injecté est racheté 1,1 c€/kWh HT dans le cadre de l'obligation d'achat, alors que le même kilowattheure envoyé dans le ballon vous évite d'acheter un kWh au prix plein de votre facture. Le rapport ne se compte plus en « deux à trois fois », mais en dizaines de fois, tous les jours de l'été.

Les trois niveaux diffèrent par ce qu'ils savent. Une **minuterie** devine (« 11 h, c'est généralement ensoleillé ») et chauffe sur le réseau les jours gris. Un **routeur solaire** mesure l'injection en direct et module la résistance pour consommer exactement le surplus, mais il ne réagit qu'à l'instant présent. L'**automatisation pilotée par la prévision** ajoute le futur : chauffer à midi quand la journée annonce du surplus, se rabattre sur la fenêtre nocturne quand demain s'annonce couvert, et ne jamais chauffer deux fois.

## Le piège français : le contacteur jour/nuit

Dans la maison type, le cumulus est câblé sur un contacteur jour/nuit piloté par le signal heures creuses : il chauffe la nuit, quand les panneaux dorment. La réforme en cours brouille encore la lecture. Enedis déplace jusqu'à 3 heures creuses vers l'après-midi, dans la fenêtre 11 h-17 h, tout en garantissant au moins 5 heures creuses consécutives la nuit entre 23 h et 7 h. Vous ne choisissez pas vos plages : elles vous sont attribuées selon le réseau local, et deux voisins peuvent en avoir de différentes. Lisez les vôtres sur votre facture avant d'écrire la moindre automatisation.

## Ce qu'il faut faire

1. **Vérifiez le ballon et sa résistance** — n'importe quelle résistance électrique convient ; un ballon thermodynamique demande le bon relais ou son entrée de pilotage dédiée.
2. **Commencez dès aujourd'hui par la minuterie bête** — un créneau de midi en été capture déjà une part surprenante de la valeur, pour zéro euro.
3. **Passez ensuite à la mesure ou à la prévision** — soit un routeur solaire, soit un relais connecté plus une automatisation qui compare le surplus prévu au besoin du ballon (le schéma est décrit dans la réponse sur les automatisations d'autoconsommation).
4. **Ajoutez le repli des jours gris** — si la prévision n'annonce pas de surplus, chauffez pendant vos heures creuses ; cette seule règle est l'essentiel de ce qu'un routeur du commerce ne sait pas faire.
5. **Revérifiez vos plages heures creuses** — elles sont propres à votre point de livraison, et la réforme en cours a pu les déplacer sans que votre automatisation le sache.
