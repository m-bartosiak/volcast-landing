---
title: "Batterie : heures creuses la nuit ou soleil du jour ?"
description: "La bonne réponse change chaque jour avec la prévision du lendemain. La règle pour ne pas payer au réseau l'énergie que le soleil fournira gratuitement."
lang: fr
draft: false
updated: 2026-08-14
category: "k3"
guide: "batterie-charger-sur-le-reseau-ou-au-soleil"
translationKey: "qa-night-vs-solar"
seo:
  ogTitle: "Charger la batterie la nuit ou attendre le soleil du lendemain ?"
---
Tout tient à une question : **le soleil de demain remplira-t-il la batterie de toute façon ?** Si la prévision dit oui, charger la nuit revient à remplacer du solaire gratuit par du courant payé. Si demain s'annonce gris, faire le plein pendant la plage creuse est tout bénéfice. La bonne réponse change réellement d'un jour à l'autre, et c'est pour cela qu'un réglage figé laisse toujours de l'argent sur la table.

## Pourquoi une stratégie fixe perd

Chargez toutes les nuits et, les jours de soleil, la batterie aborde la matinée déjà pleine : le surplus de la journée n'a nulle part où aller et part sur le réseau. Or, pour les contrats conclus depuis le 5 juin 2026, ce surplus est racheté 1,1 c€/kWh HT dans le cadre de l'obligation d'achat, une fraction de ce qu'a coûté la charge nocturne. Ne chargez jamais la nuit et, les journées grises d'hiver, vous achetez en heures pleines une énergie qu'une plage creuse aurait couverte. Chaque politique a raison une moitié de l'année et tort l'autre moitié.

En France, un élément supplémentaire bouscule l'habitude. Le volume d'heures creuses reste de 8 h par jour, mais la réforme décidée par la CRE et mise en œuvre par Enedis en redistribue le placement : au moins 5 heures creuses consécutives restent la nuit, de 23 h à 7 h, et jusqu'à 3 heures basculent l'après-midi, entre 11 h et 17 h, avec une saisonnalité qui concentre ces plages sur les mois les plus ensoleillés. La première vague, achevée en juin 2026, a concerné environ 1,7 million de foyers ; la seconde, environ 9,3 millions, s'étale de décembre 2026 à octobre 2027. Vous ne choisissez pas vos plages : Enedis les attribue selon le réseau local et votre fournisseur vous prévient environ un mois avant. Si vos heures creuses tombent désormais l'après-midi, elles recouvrent votre propre pic de production et le conseil classique s'inverse.

## Que faire

1. **Relevez vos plages réelles** : sur votre facture ou votre espace client, puis vérifiez si elles ont changé. Deux voisins peuvent avoir des horaires différents.
2. **Regardez la prévision chaque soir** : kWh attendus demain face à la capacité disponible de la batterie ; dix secondes suffisent pour la version manuelle.
3. **Fixez une cible, pas un interrupteur** : la plupart des onduleurs hybrides acceptent une consigne du type « charger à X % pour 7 h ». Faites varier X à l'inverse de la prévision, haut par journée grise, bas ou nul par grand soleil.
4. **Automatisez** : Home Assistant sait lire une prévision de production et fixer la cible de nuit tout seul ; la réponse sur les automatisations d'autoconsommation décrit le schéma.
