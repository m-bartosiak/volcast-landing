---
title: "Modèles de transposition : l'irradiance sur plan incliné"
description: "Les données météo décrivent une surface horizontale, vos modules sont inclinés. Le pont mathématique s'appelle transposition, et le choix du modèle pèse."
date: 2026-05-12
tags: ["transposition", "perez-model", "irradiance", "panel-orientation", "forecasting"]
series: "deep-dives"
seriesOrder: 5
lang: fr
draft: false
seo:
  ogTitle: "Les modèles de transposition expliqués — de l'irradiance horizontale à votre module incliné"
  keywords: ["modèle de transposition photovoltaïque", "modèle de Perez irradiance", "irradiance sur plan incliné", "calcul irradiance POA"]
relatedPosts: ["inclinaison-et-azimut-des-panneaux", "lumiere-directe-et-lumiere-diffuse", "irradiance-du-soleil-au-panneau"]
---

Les stations météo et les modèles NWP donnent le rayonnement solaire sur une surface horizontale. Vos modules, eux, sont inclinés à 30°, à 45°, ou posés sur une toiture en pente. L'étape mathématique qui convertit l'irradiance horizontale en ce que reçoit réellement votre plan incliné s'appelle la **transposition** — et c'est l'un des endroits où la prévision fondée sur la physique justifie son existence.

## Le problème

L'irradiance globale horizontale (GHI) est la mesure standard. C'est ce qu'enregistrent les pyranomètres des stations météo, ce que dérivent les estimations satellitaires, ce que calculent les modèles NWP.

Mais l'irradiance reçue par votre module incliné — l'**irradiance dans le plan des modules (POA)** — diffère du GHI. Par une journée d'hiver dégagée, un module incliné plein sud peut recevoir sensiblement *plus* d'irradiance qu'une surface horizontale, parce qu'il intercepte plus frontalement le soleil bas de saison. Par une journée d'été où le soleil passe presque à la verticale, le même module incliné peut recevoir un peu moins que l'horizontale, parce qu'il s'écarte de la direction du soleil de midi.

La relation entre GHI et POA dépend de la position du soleil (qui change à chaque minute), de l'inclinaison et de l'orientation de vos modules, et surtout de la répartition entre rayonnement direct et rayonnement diffus.

## Étape 1 : la décomposition

Avant de transposer, il faut séparer le GHI en ses composantes : l'irradiance normale directe (DNI) et l'irradiance diffuse horizontale (DHI). Si la source météo les fournit séparément, tant mieux. Si elle ne fournit que le GHI — cas fréquent —, il faut un **modèle de décomposition** pour estimer la répartition.

Les modèles de décomposition s'appuient principalement sur l'indice de ciel clair (le rapport entre le GHI au sol et l'irradiance extraterrestre). Un ciel dégagé a un indice élevé et une forte fraction directe. Un ciel couvert a un indice faible et une forte fraction diffuse. Les modèles d'Erbs, d'Orgill-Hollands et BRL font partie des approches de décomposition les plus utilisées.

Cette étape introduit de l'incertitude : un même GHI peut résulter de combinaisons très différentes de direct et de diffus. Une brume fine et uniforme et un champ de nuages fragmentés peuvent donner des GHI voisins, mais des valeurs de POA très différentes sur un plan incliné.

## Étape 2 : la transposition du rayonnement direct

La composante directe relève de la géométrie pure. Le DNI arrive depuis la direction du soleil. La fraction interceptée par votre plan incliné suit le **cosinus de l'angle d'incidence** — l'angle entre les rayons du soleil et la normale à la surface de vos modules.

Quand le soleil fait exactement face à vos modules (angle d'incidence de 0°), vous captez 100 % du DNI. À mesure que l'angle augmente, vous captez moins, en suivant une courbe en cosinus. À 60° d'angle d'incidence, vous ne captez plus que 50 %. À 90° (soleil parallèle au plan des modules), vous ne captez rien.

L'angle d'incidence dépend de votre inclinaison, de votre orientation et de la position du soleil — toutes calculables avec une grande précision. Cette composante de la transposition est essentiellement exacte.

## Étape 3 : la transposition du diffus — là où les modèles divergent

C'est la partie difficile. Le rayonnement diffus vient de la voûte céleste entière, mais pas de façon uniforme. Le ciel proche du soleil est plus lumineux que le ciel opposé. L'horizon est plus lumineux que le zénith dans certaines conditions. Les nuages créent des zones claires et des zones sombres.

Un plan incliné ne voit qu'une partie de la voûte céleste. Un module incliné à 35° « voit » moins de ciel derrière lui (sous la ligne d'horizon du module) et davantage de ciel devant. La quantité de rayonnement diffus qu'il reçoit dépend donc de la façon dont la luminance du ciel est répartie.

Les différents modèles de transposition ne font pas les mêmes hypothèses sur cette répartition.

**Modèle isotrope** — le plus simple. Il suppose que le rayonnement diffus est uniforme sur toute la voûte céleste. La surface inclinée en reçoit une fraction proportionnelle à son facteur de vue du ciel : (1 + cos(inclinaison)) / 2. Un module à plat (inclinaison de 0°) voit tout le ciel ; un module vertical en voit la moitié.

Ce modèle est trivial à calculer, mais systématiquement faux. Les ciels réels ne sont pas uniformes : ils sont plus lumineux autour du soleil et près de l'horizon.

**Modèle de Hay-Davies** — il ajoute une composante circumsolaire. Une partie du rayonnement diffus est traitée comme venant de la direction du soleil (comme le direct), le reste comme isotrope. Plus précis que le modèle isotrope, en particulier par ciel clair ou peu nuageux, où le renforcement circumsolaire est important.

**Modèle de Perez** — le plus utilisé dans l'industrie photovoltaïque. Il décompose le rayonnement diffus en trois composantes : un fond isotrope, un renforcement circumsolaire (la zone autour du soleil) et un renforcement d'horizon (une bande lumineuse le long de l'horizon, particulièrement nette par ciel clair). Il s'appuie sur des coefficients empiriques issus de vastes campagnes de mesure.

Le modèle de Perez apporte typiquement 5 à 10 % de précision en plus par rapport au modèle isotrope sur les surfaces inclinées, le gain étant maximal pour les fortes inclinaisons et les ciels dégagés. Pour les modules à plat ou par ciel couvert, tous les modèles convergent, parce que le ciel est alors réellement à peu près uniforme.

## Étape 4 : la composante réfléchie par le sol

La lumière qui se réfléchit sur le sol et atteint vos modules par en dessous ajoute une troisième contribution. Elle se calcule ainsi : GHI × albédo × (1 − cos(inclinaison)) / 2.

La réflectivité du sol (l'albédo) varie : neige fraîche 0,6 à 0,8, herbe verte 0,2, sol sombre 0,1, béton 0,3. Plus l'inclinaison est forte, plus la part réfléchie captée est importante.

Pour la plupart des installations, la réflexion du sol représente 2 à 5 % de l'irradiance POA totale. Sur un site enneigé avec des modules fortement inclinés, elle peut atteindre 10 à 15 % — un bonus non négligeable.

## Tout mettre ensemble

Irradiance POA totale = direct transposé + diffus transposé + réfléchi par le sol.

Ce nombre unique, calculé pour chaque heure (ou chaque quart d'heure) de la période de prévision, alimente le modèle de cellule photovoltaïque qui en déduit la production électrique. L'étape de transposition est celle où votre inclinaison et votre orientation deviennent déterminantes : elles façonnent toute la courbe de production journalière.

Un module plein sud incliné à 35° à Lyon présente un pic marqué autour du midi solaire. Un module orienté est culmine vers 9 h ou 10 h. Un module à plat donne une courbe large et plus basse. Ces formes déterminent directement le moment où programmer vos consommations lourdes, recharger un véhicule électrique ou anticiper un surplus à injecter.

Volcast met en œuvre le modèle de transposition de Perez. Pour chaque heure de prévision, il décompose l'irradiance du modèle météo en composantes directe et diffuse, calcule la position du soleil, détermine l'angle d'incidence sur votre plan incliné, applique le modèle diffus de Perez avec ses termes circumsolaire et d'horizon, ajoute la réflexion du sol, et aboutit à l'irradiance POA qui entre dans l'étape de conversion photovoltaïque.

Cela fait plus de calculs qu'une table de correspondance. Mais c'est précisément pour cela que la prévision reproduit correctement la forme de votre courbe de production journalière — et pas seulement son total.
