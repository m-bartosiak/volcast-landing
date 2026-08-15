---
title: "D'où viennent les prévisions météo : les modèles NWP"
description: "Votre prévision de production ne vaut que ce que vaut son entrée météo. Comment fonctionnent les modèles numériques et où ils pèchent pour le solaire."
date: 2026-04-21
tags: ["nwp", "weather-models", "gfs", "ecmwf", "icon", "forecasting"]
series: "deep-dives"
seriesOrder: 2
lang: fr
draft: false
seo:
  ogTitle: "Les modèles météo expliqués aux propriétaires de panneaux : GFS, ECMWF, ICON, ARPEGE, AROME"
  keywords: ["prévision numérique du temps solaire", "modèles météo GFS ECMWF ARPEGE", "AROME Météo-France solaire", "modèles NWP expliqués", "données météo photovoltaïque"]
---

Toute prévision de production photovoltaïque est, au fond, une prévision météo avec quelques étapes en plus. Vous pouvez disposer du modèle PV le plus sophistiqué du monde : si l'entrée météo annonce « ensoleillé » alors qu'il pleut, votre prévision de production sera fausse.

D'où viennent donc ces données météo ? Et pourquoi des sources différentes donnent-elles des résultats différents ?

## La machine météo mondiale

La prévision moderne repose sur la **prévision numérique du temps** (numerical weather prediction, NWP) : d'immenses simulations informatiques qui modélisent l'atmosphère entière à partir d'équations physiques. Ce ne sont pas de simples extrapolations des conditions du moment. Ce sont de véritables simulations de mécanique des fluides, qui résolvent les équations de Navier-Stokes pour l'écoulement atmosphérique, couplées à la thermodynamique, à la physique du rayonnement et aux processus liés à l'humidité.

Tout commence par l'**assimilation de données** : des milliards d'observations issues des satellites, des stations au sol, des radiosondages, des avions, des navires et des bouées océaniques sont injectées dans le modèle pour reconstituer l'état actuel de l'atmosphère. Le modèle avance ensuite dans le temps, calculant minute par minute l'évolution de cette atmosphère.

Les grands modèles qui alimentent la plupart des prévisions solaires sont les suivants.

**GFS (Global Forecast System)** — exploité par la NOAA, aux États-Unis. Gratuit et ouvert. Résolution de grille : environ 13 km (0,25°). Mise à jour toutes les 6 heures. Échéance jusqu'à 16 jours. Le GFS est le cheval de trait des données météo gratuites. Ses sorties utiles au solaire : nébulosité totale, température, vitesse du vent et flux de rayonnement solaire descendant, c'est-à-dire en pratique le GHI au sol.

**IFS / ECMWF (Centre européen pour les prévisions météorologiques à moyen terme)** — largement considéré comme le meilleur modèle global du monde. Résolution : environ 9 km (0,1°). Mise à jour toutes les 6 heures. Traitement supérieur des régimes météo européens. Les données ECMWF sont partiellement commerciales : la pleine résolution demande une licence payante, même si des produits à résolution dégradée restent librement accessibles. Le centre est né en Europe de l'Ouest, à Reading, et a depuis installé son site de calcul opérationnel à Bologne.

**ICON (Icosahedral Nonhydrostatic)** — exploité par le DWD, le service météorologique allemand. En données ouvertes depuis 2023. Version globale à environ 13 km, maille européenne à 6,5 km, maille allemande à 2,2 km. Particulièrement bon sur l'Europe centrale, et donc utile pour le quart nord-est de la France.

**ARPEGE** — le modèle global de Météo-France, à maille variable : la résolution se resserre au-dessus de la France métropolitaine, autour de 5 km, et se relâche à mesure qu'on s'en éloigne. C'est une singularité qui mérite d'être soulignée, car la France fait partie du très petit club de pays qui exploitent leur propre modèle global.

**AROME** — le modèle à aire limitée de Météo-France, à 1,3 km sur la France. À cette finesse, le modèle commence à représenter les brises de mer, les effets de relief et les cellules convectives isolées, c'est-à-dire précisément ce qui décide si votre après-midi sera dégagé ou non. Sa déclinaison AROME-PI est dédiée à la prévision immédiate.

## Ce que produisent réellement les modèles NWP

Pour la prévision solaire, les sorties critiques sont les suivantes.

**La nébulosité** — fournie en général comme fraction nuageuse totale (0 à 100 %), parfois découpée en couches haute, moyenne et basse. C'est de loin la variable la plus importante pour le photovoltaïque, et aussi la plus difficile à prévoir correctement.

**La température** — température de l'air à 2 mètres, utilisée pour estimer la température de cellule et appliquer les pertes thermiques à la production des modules.

**La vitesse et la direction du vent** — elles agissent sur la température de cellule par refroidissement convectif. Une journée ventée signifie des modules plus frais et un rendement légèrement supérieur.

**Le rayonnement solaire au sol** — certains modèles sortent directement l'irradiance globale horizontale (GHI) ou ses composantes. C'est la variable la plus directement utile, mais elle est calculée à l'intérieur du modèle à partir des mêmes données nuageuses et atmosphériques : elle hérite donc de leurs incertitudes.

**L'humidité et la charge en aérosols** — elles influent sur la transparence de l'atmosphère et sur le rapport entre rayonnement direct et rayonnement diffus.

## Le problème de la résolution

Quand on dit que le GFS a « 13 km de résolution », cela signifie que chaque maille fait environ 13 km sur 13 km. Le modèle calcule un seul jeu de conditions atmosphériques pour toute cette surface.

Votre installation occupe peut-être 40 mètres carrés.

Ce décalage d'échelle a des conséquences bien réelles. Un cumulus de 2 km de large peut ombrer vos panneaux pendant vingt minutes ; mais s'il se trouve dans une maille par ailleurs dégagée, le modèle annoncera peut-être 10 % de nébulosité pour l'ensemble de la maille — ce qui se traduit par une réduction douce et moyennée de l'irradiance, pas par le tout ou rien que vous vivez réellement.

Une résolution plus fine aide. La maille AROME à 1,3 km, ou la maille allemande d'ICON à 2,2 km, commencent à résoudre les cellules convectives individuelles. Mais même 1,3 km reste énorme comparé à une toiture.

C'est pour cela que **toute prévision solaire comporte un plancher d'incertitude** qu'aucun raffinement du modèle PV ne peut franchir. Le modèle météo ne voit tout simplement pas ce qui se passe chez vous avec la finesse que vos panneaux, eux, subissent.

## Horizon de prévision et décroissance de la précision

La qualité d'un modèle NWP se dégrade avec l'échéance, et la vitesse de dégradation dépend de la variable.

**La température** est relativement stable. À J+1, l'écart est en général de 1 à 2 °C, et même à trois jours la prévision reste raisonnable. La température évolue lentement et reste contrainte par les structures atmosphériques de grande échelle.

**La nébulosité** se dégrade beaucoup plus vite. Les prévisions de couverture nuageuse à J+1 sont utiles, mais souvent décalées en horaire et en intensité. À J+3, les prévisions nuageuses précises ne sont plus fiables : le modèle peut vous dire « passages nuageux », pas si le nuage sera au-dessus de votre toit à 14 h.

**L'irradiance solaire** hérite de l'incertitude de la nébulosité. À J+1, le total journalier tombe en moyenne à 15 ou 20 % près. Heure par heure, l'écart peut dépasser 50 % dans les situations de ciel changeant.

Ce profil de décroissance change la façon d'utiliser une prévision. À J+1 : planifiez vos consommations. À trois jours : planification grossière seulement. À une semaine : une tendance générale, au mieux.

## Les cycles de mise à jour

Les modèles globaux tournent en général toutes les 6 heures (00, 06, 12 et 18 UTC). Chaque calcul demande 1 à 3 heures : au moment où les données deviennent disponibles, elles ont déjà quelques heures d'âge. Une prévision issue du run de 00 UTC peut n'être publiée qu'à 03 h ou 04 h UTC.

Pour le solaire, cela signifie que la prévision du matin pour « aujourd'hui » repose sur un état atmosphérique vieux de plusieurs heures. Or les conditions peuvent changer, en particulier pour les nuages convectifs qui se développent rapidement les après-midis de printemps et d'été.

Certains modèles régionaux tournent plus souvent — toutes les heures, ou toutes les 3 heures — et fournissent des données plus fraîches, mais sur une zone géographique plus réduite. AROME est ainsi rafraîchi bien plus fréquemment qu'ARPEGE, ce qui en fait une entrée précieuse pour la journée en cours.

## Pourquoi plusieurs modèles valent mieux qu'un

Aucun modèle NWP n'est le meilleur partout et en toutes circonstances. Le GFS peut battre l'ECMWF sur une trajectoire de perturbation donnée. AROME peut voir une dissipation de stratus matinal dans la vallée du Rhône que le GFS rate complètement. La performance d'un modèle varie selon la saison, le régime météo et la géographie.

Les systèmes de prévision sérieux utilisent des **ensembles multi-modèles** : ils mélangent les sorties de plusieurs modèles NWP pour réduire les biais systématiques. Certains font aussi tourner des **prévisions d'ensemble** au sein d'un même modèle — on perturbe légèrement les conditions initiales et on relance la simulation plusieurs fois, afin d'estimer l'incertitude de la prévision.

Pour vous, consommateur de prévision solaire, la leçon pratique est simple : ne faites confiance à aucune source météo de façon absolue. La meilleure prévision utilise les meilleures données disponibles pour votre région et votre horizon, et, idéalement, reconnaît l'incertitude que ses entrées météo lui imposent.

Comprendre d'où viennent les données météo ne rendra pas votre prévision plus juste — mais cela vous aidera à comprendre pourquoi certains jours elle tombe pile et d'autres jours elle passe à côté. Le maillon faible, ce n'est pas le modèle PV. C'est l'atmosphère.
