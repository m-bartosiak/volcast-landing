---
title: "Lumière directe et diffuse : produire même sous les nuages"
description: "Tout le rayonnement solaire ne se vaut pas : comprendre ses trois composantes explique pourquoi vos panneaux produisent encore sous un ciel couvert."
date: 2026-03-31
tags: ["irradiance", "diffuse-radiation", "direct-beam", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 3
lang: fr
draft: false
seo:
  ogTitle: "Rayonnement direct et diffus : pourquoi vos panneaux produisent par ciel couvert"
  keywords: ["rayonnement direct et diffus", "panneaux solaires ciel couvert", "irradiance diffuse", "GHI DNI DHI expliqués"]
---

L'une des questions qui revient le plus souvent chez ceux qui viennent d'équiper leur toiture : « mes panneaux produisent-ils quelque chose quand le ciel est couvert ? » La réponse est oui, et parfois bien plus que vous ne l'imaginez. Pour comprendre pourquoi, il faut savoir que la lumière qui arrive sur votre toit n'est pas une chose unique. Ce sont trois choses.

## Les trois composantes du rayonnement solaire

Chaque watt d'énergie solaire qui atteint votre module y parvient par l'un de ces trois chemins.

### L'irradiance normale directe (DNI)

C'est la lumière qui voyage en ligne droite du Soleil jusqu'à votre panneau, sans être diffusée ni absorbée. Par ciel dégagé, c'est la composante dominante : cette lumière aux ombres nettes, celle qui chauffe les surfaces et vous fait plisser les yeux.

Le DNI est très directionnel. Il dépend fortement de l'angle entre votre panneau et le Soleil. Un module pointé droit vers le Soleil reçoit le DNI maximal ; un module placé de biais en reçoit proportionnellement moins, selon la loi du cosinus.

Par une journée parfaitement dégagée, au midi solaire en France métropolitaine, le DNI peut dépasser 800 à 900 W/m² sur une surface perpendiculaire au Soleil.

### L'irradiance diffuse horizontale (DHI)

C'est la lumière qui a été diffusée par l'atmosphère : par les molécules d'air (diffusion de Rayleigh), par les aérosols (poussières, pollution) et surtout par les nuages. Au lieu d'arriver d'une seule direction, le rayonnement diffus provient de toute la voûte céleste.

Par ciel dégagé, le DHI reste modeste : de l'ordre de 80 à 150 W/m². Mais par ciel couvert, il devient la **seule** source d'irradiance, et il peut encore délivrer 100 à 300 W/m² selon l'épaisseur et le type de nuages.

C'est pour cela que vos panneaux produisent encore les jours couverts. Même quand une couche nuageuse épaisse bloque toute trace de rayonnement direct, le ciel continue de diffuser de la lumière vers le sol, depuis toutes les directions à la fois.

### Le rayonnement réfléchi par le sol

La troisième composante, c'est la lumière qui rebondit sur le sol ou sur les surfaces environnantes avant d'atteindre votre panneau. Elle est plus faible que les deux autres, mais pas négligeable, surtout si vos modules sont inclinés — ils interceptent alors davantage de lumière réfléchie — et si le sol est très réfléchissant.

La neige fraîche renvoie 60 à 80 % de la lumière incidente. L'herbe verte, environ 20 %. Une terre sombre ou un enrobé : 10 à 15 %. Dans les pays nordiques en hiver, ou en montagne sous la neige, la réflexion au sol peut augmenter la production de façon très sensible.

Ce pouvoir réfléchissant du sol s'appelle l'**albédo**, et nous reviendrons sur son importance géographique dans un prochain article.

## Le GHI : le chiffre que vous voyez le plus souvent

La plupart des stations météo et des sources de données solaires publient l'**irradiance globale horizontale (GHI)** : la puissance solaire totale reçue par une surface plane horizontale. Le GHI vaut simplement :

**GHI = DNI × cos(angle zénithal) + DHI**

C'est la grandeur standard, mais ce n'est pas ce que reçoit votre panneau incliné. Passer du GHI à l'irradiance sur votre surface inclinée demande un **modèle de transposition** : une étape mathématique qui sépare les composantes, puis les recombine pour l'orientation de vos modules. Nous y consacrerons un article entier.

## Ce que le rapport direct/diffus change

La répartition entre rayonnement direct et rayonnement diffus varie énormément selon les conditions, et c'est là que la prévision devient intéressante.

**Ciel dégagé :** 70 à 85 % de direct, 15 à 30 % de diffus. L'orientation des panneaux compte énormément.

**Passages nuageux :** 30 à 60 % de direct, 40 à 70 % de diffus. Fluctuations violentes au fil des nuages. Vous pouvez voir la puissance varier de 50 % en quelques minutes.

**Ciel couvert :** 0 à 10 % de direct, 90 à 100 % de diffus. L'inclinaison compte beaucoup moins, puisque la lumière vient de partout. Un panneau à plat et un panneau à 35° reçoivent des quantités voisines.

**Voile de cirrus :** 50 à 70 % de direct, 30 à 50 % de diffus. Ces nuages hauts et fins agissent comme un filtre naturel : ils réduisent doucement le DNI tout en augmentant le DHI.

Cela a une conséquence pratique : sous un climat qui compte beaucoup de journées couvertes — le nord de la France en novembre, par exemple — l'inclinaison optimale est en réalité plus faible que ne le suggéreraient les calculs théoriques pour ciel clair, parce que vous collectez surtout du rayonnement diffus.

## La surprise des ciels changeants

Certains jours de ciel changeant, vous pouvez voir la puissance instantanée grimper *au-dessus* de la valeur attendue par ciel clair. On appelle ce phénomène le *cloud enhancement*, ou surintensité de bord de nuage : la lumière réfléchie par les bords des nuages s'ajoute au rayonnement direct et crée brièvement des niveaux d'irradiance impossibles à atteindre sous un ciel parfaitement dégagé.

Le phénomène est réel et bien documenté dans la littérature. Votre onduleur peut afficher pendant quelques instants une puissance supérieure à la puissance crête de vos modules. Ce n'est pas une erreur de mesure : c'est la physique qui, pour une fois, joue en votre faveur.

## Pourquoi cela compte pour la prévision

Un modèle de prévision qui se contente d'annoncer « combien de lumière au total », sans décomposer entre direct et diffus, commet des erreurs systématiques.

Il **surestime** la production des jours couverts pour des panneaux très inclinés, qui manquent une bonne partie du diffus venant de la portion de ciel opposée.

Il **sous-estime** la production des jours couverts pour des panneaux plus plats, qui collectent efficacement le diffus sur toute la voûte céleste.

Et il rate complètement la **volatilité des ciels changeants**, celle qui provoque les variations rapides de puissance.

Volcast traite chaque composante séparément. La prévision météo fournit la nébulosité et les données atmosphériques ; le moteur physique décompose le tout en DNI et DHI ; le modèle de transposition ramène ces valeurs sur votre plan incliné ; puis le modèle PV calcule la production électrique qui en résulte.

C'est plus complexe qu'une simple table de correspondance, mais c'est ainsi que fonctionne réellement la physique — et c'est pour cela que la prévision reste juste, que votre journée soit ensoleillée, couverte ou chaotiquement mélangée.
