---
title: "Le voyage du rayonnement : du Soleil à votre panneau"
description: "Suivez un rayon de soleil du haut de l'atmosphère jusqu'à votre module incliné : diffusion, aérosols, nuages, réflexion au sol, puis électricité."
date: 2026-05-05
tags: ["irradiance", "atmospheric-physics", "solar-spectrum", "pv-physics", "forecasting"]
series: "deep-dives"
seriesOrder: 4
lang: fr
draft: false
seo:
  ogTitle: "De l'espace au panneau solaire — le voyage complet du rayonnement"
  keywords: ["irradiance solaire atmosphère", "comment la lumière atteint les panneaux solaires", "atténuation atmosphérique rayonnement", "étapes de modélisation de l'irradiance"]
relatedPosts: ["lumiere-directe-et-lumiere-diffuse", "nebulosite-variable-la-plus-difficile", "modeles-de-transposition"]
---

Un photon quitte la surface du Soleil à 300 000 km/s. Huit minutes et vingt secondes plus tard, il entre dans l'atmosphère terrestre. Ce qui lui arrive ensuite — dans les cent derniers kilomètres d'un trajet de 150 millions de kilomètres — décide s'il deviendra de l'électricité sur votre toit ou de la chaleur sur le bitume.

Voici la chaîne complète qu'une prévision fondée sur la physique doit modéliser.

## Étape 1 : l'irradiance extraterrestre

Au-dessus de l'atmosphère, le rayonnement solaire est remarquablement prévisible. La **constante solaire** — la puissance par mètre carré sur une surface perpendiculaire aux rayons du Soleil, à la distance moyenne Terre-Soleil — vaut environ 1 361 W/m².

Cette valeur varie légèrement (d'environ 3,4 %) du fait de l'orbite elliptique de la Terre. Nous sommes au plus près du Soleil début janvier (périhélie) et au plus loin début juillet (aphélie). De façon contre-intuitive, l'hémisphère nord reçoit donc un peu plus d'irradiance extraterrestre en hiver qu'en été. L'effet est faible, mais un modèle physique en tient compte.

L'émission solaire fluctue aussi avec le cycle de 11 ans des taches solaires, mais de moins de 0,1 % — négligeable pour la prévision de production.

## Étape 2 : la masse d'air et la longueur du trajet

La lumière entre dans l'atmosphère sous un angle fixé par la hauteur du Soleil. Quand le Soleil est à la verticale (angle zénithal de 0°), elle emprunte le trajet le plus court à travers l'atmosphère : c'est ce qu'on appelle la masse d'air 1 (AM1).

À mesure que le Soleil descend vers l'horizon, le trajet s'allonge. À 60° d'angle zénithal, la lumière traverse deux fois plus d'atmosphère (AM2). Au coucher du soleil, la masse d'air peut dépasser 30.

Plus d'atmosphère signifie plus d'atténuation. C'est pourquoi vos panneaux produisent bien moins à 7 h qu'à midi, même s'ils sont orientés à l'est : la lumière a été filtrée par davantage d'air. C'est aussi pourquoi les performances des modules sont mesurées à AM1.5 (Soleil à environ 48° de hauteur) — un compromis normalisé entre les conditions du zénith et celles de l'horizon.

## Étape 3 : la diffusion de Rayleigh

Les molécules de l'air (azote, oxygène) diffusent la lumière solaire. Les courtes longueurs d'onde (bleu, violet) sont bien plus diffusées que les longues (rouge). C'est pour cela que le ciel est bleu : vous voyez de la lumière de courte longueur d'onde diffusée dans toutes les directions.

Pour le photovoltaïque, la diffusion de Rayleigh redirige une partie du rayonnement direct vers le rayonnement diffus du ciel. L'effet se calcule à partir de la pression atmosphérique et de la hauteur du Soleil, avec des équations bien établies. Il réduit l'irradiance directe d'environ 10 à 15 % par ciel clair et bascule cette énergie dans la composante diffuse.

## Étape 4 : l'absorption et la diffusion par les aérosols

Les aérosols — poussières, particules de pollution, sel marin, fumées, pollens — diffusent et absorbent la lumière bien plus que les molécules d'air propre. Contrairement à la diffusion de Rayleigh, leurs effets dépendent fortement des conditions locales et sont plus difficiles à prévoir.

Dans un air maritime propre, l'épaisseur optique des aérosols (AOD) peut valoir 0,05 — à peine perceptible. Dans une ville continentale polluée pendant un épisode de smog, l'AOD peut atteindre 0,5 à 1,0, réduisant l'irradiance directe de 30 à 50 %.

En France, les valeurs typiques d'AOD vont de 0,1 (air d'hiver bien dégagé) à 0,3 (brumes estivales, épisodes de pollution). Les remontées de sable du Sahara touchent régulièrement le pays et font grimper l'AOD de façon marquée pendant quelques jours.

Les modèles NWP intègrent des prévisions d'aérosols, mais elles sont plus grossières que les variables météorologiques classiques. La plupart des prévisions de production utilisent des données d'aérosols climatologiques (moyennes mensuelles) plutôt que des prévisions en temps réel.

## Étape 5 : l'ozone et l'absorption gazeuse

L'ozone stratosphérique absorbe le rayonnement ultraviolet — essentiel pour le vivant, moins pour le photovoltaïque, puisque la plupart des photons UV portent de toute façon plus d'énergie que la largeur de bande interdite du silicium (l'excédent se dissipe en chaleur par thermalisation).

La vapeur d'eau dans la troposphère absorbe certaines longueurs d'onde infrarouges et crée des bandes d'absorption qui réduisent l'irradiance totale. L'effet dépend de la quantité d'eau précipitable, qui varie avec l'humidité et figure dans les sorties des modèles NWP.

Le CO₂, le méthane et les autres gaz à effet de serre ont des effets d'absorption mineurs à des longueurs d'onde précises. Ils sont pour l'essentiel constants et déjà intégrés aux modèles atmosphériques standards.

## Étape 6 : l'atténuation par les nuages

Les nuages sont le principal modificateur de l'irradiance au sol, et nous avons consacré un article entier à leur complexité. Dans la chaîne du rayonnement, ils agissent à la fois comme absorbeurs et comme diffuseurs : ils réduisent fortement le rayonnement direct tout en en convertissant une partie en rayonnement diffus.

La physique est complexe : l'épaisseur optique d'un nuage dépend du contenu en eau liquide, de la distribution de taille des gouttelettes et de l'extension verticale du nuage. Un cirrus fin peut avoir une épaisseur optique de 0,5 à 2 et laisser passer l'essentiel de la lumière. Un cumulonimbus épais peut dépasser 100 et bloquer pratiquement tout le rayonnement direct.

Un modèle physique a besoin des propriétés optiques des nuages issues de la prévision météo. La plupart des modèles NWP fournissent une fraction de couverture nuageuse totale, et certains le contenu en eau nuageuse, à partir duquel on peut estimer l'épaisseur optique.

## Étape 7 : l'arrivée au sol — le GHI

Après avoir survécu à l'atmosphère, le rayonnement solaire arrive au sol sous la forme de l'**irradiance globale horizontale (GHI)** — la puissance solaire totale reçue par une surface horizontale. C'est la somme du rayonnement direct (projeté sur l'horizontale) et du rayonnement diffus du ciel.

Par une journée d'été dégagée aux latitudes françaises, le GHI de pointe atteint environ 850 à 1 000 W/m². Par ciel couvert, il peut tomber à 100 ou 300 W/m². Ce sont ces valeurs que mesurent les stations météo et que prévoient les modèles NWP.

Mais le GHI n'est pas ce que reçoivent vos panneaux — parce que vos panneaux ne sont pas horizontaux. Convertir le GHI en irradiance sur votre plan incliné demande une étape supplémentaire.

## Étape 8 : la transposition sur votre plan incliné

Cette dernière étape — détaillée dans l'article suivant — part des composantes horizontales du rayonnement (direct et diffus) et calcule ce qui arrive réellement sur votre orientation de modules. Elle tient compte de l'angle d'incidence du rayonnement direct, du facteur de vue du ciel pour le diffus, et du rayonnement réfléchi par le sol selon son albédo.

C'est à l'étape de transposition que votre inclinaison et votre orientation pèsent le plus. Un module plein sud incliné à 35° à Lyon reçoit un profil d'irradiance très différent d'un module orienté ouest incliné à 20°, alors que tous deux sont sous le même ciel.

## La chaîne complète

En résumé : irradiance extraterrestre → atténuation par la masse d'air → diffusion de Rayleigh → effets des aérosols → absorption gazeuse → atténuation par les nuages → GHI au sol → transposition sur le plan incliné → correction de température de cellule → production électrique.

Chaque étape est gouvernée par la physique. Chaque étape introduit un peu d'incertitude. Le résultat cumulé est une prévision qui capture le comportement fondamental du système, tout en héritant des limites de la prévision météo — principalement sur les nuages.

C'est ce que Volcast calcule pour chaque heure de chaque prévision. Pas une table de correspondance. Pas une régression statistique. La chaîne physique réelle, calculée à partir de vos trois paramètres d'entrée et des meilleures données météo disponibles.
