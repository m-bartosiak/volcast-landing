---
title: "Quel contrat d'électricité avec solaire et batterie ?"
description: "Avec une batterie, le bon contrat est celui dont l'écart de prix est le plus large, pas le prix le plus bas : Base, heures creuses, Tempo, offres indexées."
lang: fr
draft: false
updated: 2026-08-14
category: "k4"
guide: "tarif-dynamique-et-photovoltaique"
translationKey: "qa-best-tariff"
seo:
  ogTitle: "Le bon contrat avec solaire et batterie : comment comparer"
---
Avec une batterie dans la maison, le contrat gagnant n'est presque jamais celui qui affiche le prix du kWh le plus bas, mais **celui dont l'écart entre heures chères et heures bon marché est le plus large et le plus exploitable**, puisque la batterie vous laisse acheter dans le creux et sauter la pointe. Comparez sur l'écart que vous savez capter, pas sur le prix unitaire de couverture.

## Pourquoi le stockage change le classement

L'option Base rend votre profil de consommation sans importance : un seul prix, aucune place pour la stratégie. Les offres qui distinguent des plages horaires paient au contraire la flexibilité, et une maison solaire avec batterie est le client le plus flexible qui soit. Trois familles à comparer côté réglementé — Base, heures pleines / heures creuses, et Tempo avec ses jours bleu, blanc et rouge, qui produit l'écart le plus large du marché français. À côté, les offres indexées sur le marché de gros EPEX SPOT (Elmy, Octopus Energy France, OhmEnergie) répercutent le prix heure par heure.

Un point purement français change le calcul : la réforme des heures creuses. Le principe des 8 heures creuses par jour est conservé, chaque client garde au moins 5 heures creuses consécutives la nuit dans la fenêtre 23 h - 7 h, et jusqu'à 3 heures basculent l'après-midi entre 11 h et 17 h. La première vague, 1,7 million de clients, s'est déroulée de novembre 2025 à juin 2026 ; la seconde, 9,3 millions de clients, démarre en décembre 2026. Vous ne choisissez pas vos plages : Enedis les attribue selon le réseau local. Si les vôtres tombent en pleine production, charger la batterie au réseau à ce moment-là n'a plus de sens, c'est le soleil qui doit la remplir.

Dernier point, souvent confondu : la revente du surplus ne fait pas partie du contrat de fourniture. Elle relève d'un contrat d'obligation d'achat séparé, et changer de fournisseur n'y touche pas.

## Ce qu'il faut faire

1. **Rejouez un mois réel contre chaque offre candidate** — vos courbes de soutirage et d'injection passées dans chaque grille valent mieux que n'importe quelle page commerciale. Les données sont dans votre espace client Enedis (courbe de charge Linky) ou dans Home Assistant.
2. **Notez trois chiffres par offre** : prix de la fenêtre bon marché, c'est-à-dire le coût de recharge de la batterie, prix de la pointe que vous évitez, et granularité de l'indexation (horaire, par plages, ou moyenne mensuelle).
3. **Vérifiez vos contraintes** — vos plages horaires réelles figurent sur la facture et dans l'espace client, votre puissance souscrite en kVA limite ce que vous pouvez lancer en même temps, et une offre indexée vous expose aux pointes de prix des semaines grises.
4. **Faites descendre le choix dans l'automatisation** — le contrat ne rapporte que si la charge suit à la fois les prix et la production attendue demain ; une prévision calculée sur votre installation plus deux règles simples captent l'essentiel.
