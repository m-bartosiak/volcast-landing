---
title: "Pourquoi la nébulosité est la variable la plus difficile"
description: "La température se prévoit, la position du soleil se calcule. Les nuages, eux, relèvent de la théorie du chaos : c'est là que loge l'erreur de prévision."
date: 2026-04-28
tags: ["clouds", "forecast-uncertainty", "irradiance", "weather", "forecasting"]
series: "deep-dives"
seriesOrder: 3
lang: fr
draft: false
seo:
  ogTitle: "Pourquoi les nuages sont le point dur de la prévision de production solaire"
  keywords: ["nébulosité prévision photovoltaïque", "incertitude prévision de production", "types de nuages production PV", "erreur de prévision nuages"]
relatedPosts: ["origine-des-previsions-meteo", "lumiere-directe-et-lumiere-diffuse", "nowcasting-day-ahead-et-semaine"]
---

Si vous avez déjà comparé une prévision de production à votre production réelle, vous avez sans doute repéré un schéma : les journées de ciel dégagé et les journées entièrement couvertes sont bien prévues. Les journées à passages nuageux, elles, sont un désastre.

Ce n'est pas un défaut du modèle de prévision. C'est une propriété fondamentale des nuages. Ils sont sans doute la chose la plus difficile à prévoir de toute la science de l'atmosphère — et il se trouve qu'ils sont aussi la variable la plus importante pour l'énergie solaire.

## Pourquoi les nuages ne sont pas comme les autres

Regardez les autres variables qui comptent pour la production photovoltaïque. La position du soleil relève de l'astronomie pure : elle se calcule à la seconde d'arc près, des siècles à l'avance. La température de l'air évolue progressivement et reste bien contrainte par les configurations météo de grande échelle ; une prévision de température pour le lendemain tombe généralement à 1 à 2 °C près.

Les nuages brisent ce schéma parce qu'ils se situent à l'intersection de plusieurs processus physiques, chacun opérant à une échelle différente. La dynamique atmosphérique de grande échelle détermine si une région se trouve sous un anticyclone (ciel clair) ou sous un système frontal (ciel couvert). Les processus de méso-échelle créent des bandes nuageuses organisées et des cellules convectives. La turbulence de micro-échelle fixe les bords exacts des nuages, leur épaisseur et leurs propriétés optiques.

Les modèles météo gèrent correctement la grande échelle. Ils peinent sur la méso-échelle et la micro-échelle — c'est-à-dire exactement l'échelle qui compte pour votre toiture.

## Tous les nuages ne se valent pas

Les différents types de nuages ont des effets très inégaux sur la production photovoltaïque, et posent des difficultés de prévision différentes.

**Cirrus** (hauts, fins, filamenteux) — réduisent le rayonnement direct de 10 à 30 % mais restent relativement transparents. Faciles à prévoir, car ils sont associés à des structures atmosphériques de grande échelle. Vos panneaux produisent encore correctement sous des cirrus.

**Stratus** (bas, uniformes, couverture grise) — bloquent l'essentiel du rayonnement direct et ne transmettent guère que du rayonnement diffus. Ils ramènent la production à 20 ou 40 % des valeurs de ciel clair. Relativement faciles à prévoir, parce que le stratus se forme dans des conditions prévisibles (inversions de température, fronts chauds) et persiste plusieurs heures.

**Cumulus** (bourgeonnants, cellules individuelles) — c'est là que la prévision s'effondre. Les cumulus sont convectifs : ils se forment quand la surface chauffe de façon inégale, créant des bulles d'air ascendantes qui condensent en altitude. Ils sont intrinsèquement chaotiques — de petites différences de chauffage du sol, d'humidité ou de cisaillement du vent produisent des champs nuageux complètement différents.

Un cumulus peut ombrer vos modules pendant 5 minutes, puis passer, vous laissant 15 minutes de plein soleil avant l'arrivée du suivant. Ce battement produit des variations de puissance rapides qu'aucun modèle météo tournant à 10 km de résolution ou plus ne peut capturer.

**Cumulonimbus** (nuages d'orage à fort développement vertical) — réduisent l'irradiance à presque zéro pendant leur passage et s'accompagnent de phénomènes violents. Les orages eux-mêmes sont partiellement prévisibles (instabilité atmosphérique, humidité, forçage), mais leur heure et leur localisation exactes ne le sont pas.

## Le problème des passages nuageux

Le pire des scénarios pour la prévision de production n'est pas la journée entièrement couverte : c'est la journée à passages nuageux. Et c'est précisément la situation la plus fréquente sous de nombreux climats, y compris en France métropolitaine.

Par une journée à passages nuageux, l'irradiance chez vous fluctue violemment. À un instant donné, vous recevez 900 W/m² de rayonnement direct. Deux minutes plus tard, un nuage passe et vous êtes à 200 W/m² de diffus seul. Deux minutes après, vous pouvez monter à 1 100 W/m² par effet de rehaussement (*cloud enhancement*) — une pointe brève au-dessus de la valeur de ciel clair, quand le rayonnement direct s'ajoute à la lumière réfléchie par les bords des nuages voisins.

Un modèle météo, lui, voit cette journée comme « 50 % de nébulosité, 600 W/m² d'irradiance moyenne ». Cette moyenne est à peu près juste pour un cumul horaire, mais la réalité instantanée n'a rien d'un 600 W/m² lisse.

Pour le pilotage d'une batterie, la recharge d'un véhicule électrique ou toute application qui s'intéresse à la puissance à un instant précis plutôt qu'à l'énergie sur une heure, ce lissage est une vraie limite.

## Pourquoi les modèles peinent

Les modèles de prévision numérique du temps (NWP) représentent les nuages par des **schémas de paramétrisation** — des recettes mathématiques simplifiées qui estiment les propriétés nuageuses à partir de variables de plus grande échelle, celles que le modèle sait résoudre. Le modèle connaît la température, l'humidité et les mouvements verticaux en chaque point de grille. La paramétrisation convertit ces grandeurs en fraction nuageuse, contenu en eau liquide et épaisseur optique.

Ces paramétrisations sont des approximations. Elles fonctionnent statistiquement : moyennées sur beaucoup de mailles et beaucoup de jours, les propriétés nuageuses sont à peu près justes. Mais pour une maille donnée à une heure donnée, le nuage paramétré peut être largement faux.

Le défi de fond est celui de l'**échelle** : les nuages convectifs se forment à des échelles de quelques centaines de mètres à quelques kilomètres, alors que les modèles globaux ont des mailles de 10 à 25 km. Un modèle ne peut pas simuler ce qu'il ne résout pas. Les modèles régionaux à haute résolution (maille de 2 à 3 km) commencent à représenter des cellules convectives individuelles, mais ils ne couvrent que des domaines et des horizons limités.

## Ce que cela change pour votre prévision

Les conséquences pratiques sont les suivantes.

**Les cumuls journaliers** sont prévus correctement. Même si le modèle se trompe sur le calendrier des nuages, la fraction nuageuse totale sur une journée est généralement à peu près juste. Une prévision de production journalière pour le lendemain tombe typiquement à 15 ou 25 % près.

**Les profils horaires de puissance** sont bien plus difficiles. La prévision peut placer le pic à 13 h alors que la réalité culmine à 11 h, parce qu'un système nuageux est arrivé plus tôt que modélisé. Le cumul d'énergie peut rester proche, mais le calage horaire est faux.

**Les variations infrahoraires** sont pour l'essentiel imprévisibles au-delà des 30 à 60 prochaines minutes. C'est le domaine de la prévision immédiate (*nowcasting*) : suivre les nuages en temps réel à partir d'images satellite, de capteurs au sol ou de caméras de ciel, plutôt que de s'appuyer sur les modèles NWP.

**Les journées claires et les journées couvertes** sont bien prévues, parce qu'elles correspondent à des états atmosphériques stables. Le modèle capture la configuration de grande échelle qui produit ces conditions. Ce sont les situations transitoires et mélangées qui le mettent en défaut.

Volcast traite ce sujet honnêtement. Le modèle physique produit la meilleure estimation possible à partir des données météo disponibles, mais il ne prétend pas prédire des variations de puissance à 5 minutes lors d'un après-midi à passages nuageux. Cela demanderait un outil d'une tout autre nature, qui observe le ciel en temps réel au lieu de le simuler à partir de modèles météo.

L'objectif est de vous donner une estimation de production utile pour le lendemain et une forme de courbe horaire fidèle — et d'être transparent sur l'endroit où se loge l'incertitude. Sans grand suspense : elle se loge dans les nuages.
