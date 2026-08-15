---
title: "Pourquoi ma batterie reste-t-elle toujours pleine ?"
description: "Une batterie constamment pleine ne rapporte plus rien : surplus d'été, réglages trop prudents, et parfois un bridage qui gaspille des kWh en silence."
lang: fr
draft: false
updated: 2026-08-14
category: "k3"
guide: "batterie-charger-sur-le-reseau-ou-au-soleil"
translationKey: "qa-battery-full"
seo:
  ogTitle: "Batterie à 100 % toute la journée : normale ou mal réglée ?"
---
Une batterie qui passe des semaines ensoleillées bloquée à 100 % signifie que **votre surplus dépasse largement ce qu'elle sait reporter sur la nuit** — situation courante en été, presque toujours amplifiée par des réglages prudents : charge dès le matin, ou réserve de nuit élevée. Elle n'est pas en panne, mais elle ne rapporte rien non plus, et combinée à un bridage de l'injection elle peut gaspiller de l'énergie bien réelle.

## Pourquoi cela arrive

En pleine saison, un champ PV ordinaire remplit la batterie domestique avant midi. Si la stratégie par défaut de l'onduleur est « batterie d'abord », il la charge aux heures matinales — exactement quand vous pourriez encore alimenter directement vos appareils — puis elle reste pleine pendant que le surplus de l'après-midi part sur le réseau de toute façon. La batterie ne cycle qu'une fraction de sa capacité et n'apporte presque rien.

La variante coûteuse : avec un bridage de l'injection, une batterie pleine supprime la seule soupape pour la production au-dessus du seuil, et l'onduleur écrête à la place. Ces kWh sont simplement perdus. Il y a aussi un enjeu de longévité : les cellules lithium vieillissent le plus vite maintenues à 100 % à la chaleur, donc un été à pleine charge est le pire état de repos que vous puissiez choisir.

## Ce qu'il faut faire

1. **Décalez la charge de la batterie vers le pic de midi** — la plupart des onduleurs hybrides savent privilégier les consommations et l'injection le matin, puis remplir la batterie avec le surplus qui serait écrêté ou mal payé.
2. **Baissez la réserve de nuit** — un plancher de 30 à 40 % se justifiait par la crainte des coupures ; si elles sont rares chez vous, 10 à 15 % remettent bien plus de capacité au travail chaque jour.
3. **Avec un bridage, jouez contre la prévision** — laissez assez de place libre pour absorber la fenêtre de production au-dessus du seuil ; une prévision calculée sur votre installation vous dit chaque matin quelle sera sa largeur.
4. **Demandez-vous si la batterie n'est pas simplement surdimensionnée** — si elle reste pleine toute l'année même après réglage, relisez la question du dimensionnement avant d'ajouter des panneaux pour « corriger » le problème.
