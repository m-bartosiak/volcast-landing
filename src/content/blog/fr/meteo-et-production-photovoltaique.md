---
title: "Pourquoi la météo ne dit pas ce que produira le solaire"
description: "« Ensoleillé » ne veut pas dire « beaucoup de kWh » : irradiance, nébulosité, toiture et température, pourquoi le solaire a sa propre prévision."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "weather-vs-output"
seo:
  ogTitle: "Météo et production photovoltaïque : pourquoi elles diffèrent"
---
« Demain, grand soleil, 22 degrés » : et qu'est-ce que cela vous dit de la production de votre installation ? Étonnamment peu de choses. Une prévision météo et une prévision de production répondent à deux questions différentes, et passer de l'une à l'autre à l'œil produit des erreurs systématiques. Voici les trois raisons pour lesquelles les panneaux ont besoin de leur propre prévision.

## Raison 1 : les panneaux ne voient pas la nébulosité, ils voient l'irradiance

Les applications météo annoncent la nébulosité en pourcentage, et Météo-France la mesure en octas, c'est-à-dire en huitièmes de ciel couvert. Les panneaux, eux, réagissent à l'irradiance, la puissance du rayonnement en watts par mètre carré. Le lien entre les deux est lâche : un voile fin de cirrus à « 60 % de nébulosité » laisse passer bien plus d'énergie qu'une couche basse de stratus à ces mêmes 60 %. Ajoutez le rayonnement diffus : sous un ciel couvert mais lumineux, une installation tourne encore à 20 ou 30 % de sa puissance nominale avec la seule lumière diffusée, ce dont le mot « nuageux » affiché dans une application ne dit strictement rien.

## Raison 2 : votre toiture change tout

La même irradiance donne des kWh complètement différents selon la géométrie : orientation, inclinaison, découpage en strings, ombre de la cheminée à 15 h. Un champ est-ouest et un champ plein sud ne diffèrent pas seulement par le total journalier, mais par toute la forme de la courbe de production. Aucune prévision météo ne connaît votre toiture, et c'est pourtant la toiture qui décide du moment où vous avez réellement du surplus.

## Raison 3 : la température joue contre l'intuition

« Canicule égale grosse production » est le mythe le plus répandu. Les panneaux perdent environ 0,3 à 0,4 % de rendement par degré de température de cellule au-dessus de 25 °C, et les cellules atteignent 60 à 70 °C un midi de juillet. Les records tombent les journées de printemps ensoleillées, fraîches et ventées, pas dans la chaleur d'août, ce que « soleil, 33 °C » ne vous dira jamais.

## Petit glossaire : GHI, DNI, DHI, les trois nombres que voient vraiment les panneaux

Si ce n'est pas la nébulosité, alors quoi ? L'irradiance se décrit par trois composantes : le **GHI** (irradiance globale horizontale), le rayonnement total reçu sur un plan horizontal ; le **DNI** (irradiance normale directe), la composante directe, celle qui projette les ombres ; le **DHI** (irradiance diffuse horizontale), la lumière diffusée par les nuages et l'atmosphère. En plein soleil, le DNI domine ; sous un ciel couvert, vous produisez presque uniquement grâce au DHI, et c'est exactement pour cela que les panneaux produisent encore « sans soleil ». Un modèle de prévision combine ces trois valeurs pour obtenir le rayonnement qui arrive sur *votre* plan, incliné et orienté comme il l'est.

Comment ces composantes deviennent une prévision horaire en kWh pour une installation donnée, recalée sur les productions réellement mesurées, est décrit étape par étape dans le [guide de la prévision de production →](/blog/fr/prevision-production-photovoltaique). La seule chose à retenir ici : sans ces trois nombres, une « prévision solaire » n'est qu'une devinette.

## FAQ

**Peut-on convertir une prévision météo en production à la main ?**
Grossièrement, oui, pour un total journalier en plein soleil. La répartition horaire, les journées variables et les ombrages saisonniers demandent un modèle : à ce niveau, une estimation manuelle se trompe de plusieurs dizaines de pour cent.

**« Ciel dégagé » dans une application signifie-t-il production maximale ?**
Pas toujours : la brume, la pollution et les nuages hauts et fins amputent le DNI même à « 0 % de nébulosité », et la température de cellule fait le reste. D'où des écarts de 10 à 20 % entre deux journées également « dégagées ».

**D'où viennent les données satellite ?**
Les satellites météorologiques mesurent le rayonnement réfléchi par les nuages ; on en déduit ensuite l'énergie qui atteint le sol en chaque point de la grille.
