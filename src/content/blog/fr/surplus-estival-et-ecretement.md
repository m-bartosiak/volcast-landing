---
title: "Trop de soleil ? Surplus d'été, prix négatifs, écrêtement"
description: "Écrêtage de l'onduleur, bridage du réseau, prix négatifs sur EPEX SPOT : comment transformer le surplus de midi en économies au lieu de le laisser filer."
date: 2026-06-16
updated: 2026-08-14
author: "Michal"
tags: ["curtailment", "dynamic-tariff", "self-consumption", "summer"]
series: "practical"
seriesOrder: 2
lang: fr
draft: false
seo:
  keywords: ["écrêtement production solaire", "écrêtage onduleur", "prix négatifs électricité", "tarif dynamique solaire", "surplus solaire été"]
---

Il y a un problème que la plupart des nouveaux propriétaires d'installation ne voient pas venir : non pas trop peu de soleil, mais trop. Un midi d'été dégagé, vos panneaux tournent à plein régime alors que la maison ne consomme presque rien : pas de chauffage, lumières éteintes, personne à la maison. Toute cette énergie doit aller quelque part, et la réponse est parfois « nulle part d'utile ».

## Deux façons très différentes de perdre de la production

Il faut commencer par séparer deux phénomènes qui se ressemblent mais n'ont rien à voir.

Le premier est l'écrêtage de l'onduleur. Si la puissance crête de votre champ de modules dépasse la puissance de sortie alternative de l'onduleur — un choix courant et parfaitement délibéré — l'onduleur plafonne simplement ce qu'il injecte quand le champ dépasse sa limite. Par ciel dégagé, votre courbe de production présente alors un sommet plat, pile à la puissance nominale de l'onduleur. C'est le plus souvent voulu et sans gravité : le surdimensionnement DC va chercher davantage de production les jours couverts et aux heures de bord de journée.

Le second est l'écrêtement de l'injection, aussi appelé bridage, et celui-là est moins bénin. Il arrive que le réseau ne puisse pas absorber ce que vous injectez. La tension sur votre départ basse tension monte parce que toutes les installations du quartier poussent en même temps, une limite d'injection définie au raccordement entre en action, ou le gestionnaire de réseau envoie un signal de réduction. Votre onduleur baisse docilement sa puissance pour maintenir la tension dans les limites réglementaires. Les conditions étaient idéales, et pourtant le compteur dit autre chose.

Le vocabulaire compte ici, parce qu'il est facile de tout mélanger : l'écrêtage est interne à l'onduleur, l'écrêtement (ou bridage) vient du réseau, et l'effacement désigne encore autre chose — la réduction volontaire d'une consommation, pas d'une production.

## Comment savoir laquelle des deux vous observez

L'écrêtage se reconnaît à une ligne parfaitement plate, exactement à la puissance nominale de votre onduleur, les jours lumineux. L'écrêtement ressemble à autre chose : une puissance maintenue en dessous de ce que la météo justifierait, souvent autour de midi les journées ensoleillées à faible consommation locale, parfois accompagnée d'une tension de réseau anormalement élevée.

Savoir faire la différence a une vraie valeur, parce que l'écrêtement se confond aisément avec une installation qui sous-performe : elle fonctionne très bien, elle est simplement retenue de l'extérieur. C'est précisément ce que la détection d'écrêtement de Volcast sert à signaler, pour que vous ne partiez pas chasser une panne qui n'existe pas.

## Les prix négatifs ne sont plus une curiosité

Il y a par-dessus tout cela une torsion économique. Les journées à la fois ensoleillées, ventées et peu consommatrices, les prix de gros de l'électricité s'effondrent, parfois sous zéro. Ce qui n'était qu'un titre de presse allemand il y a quelques années est devenu un phénomène régulier sur EPEX SPOT, y compris en France, où une production photovoltaïque en forte croissance rencontre un socle de production nucléaire peu flexible. RTE, gestionnaire du réseau de transport, doit alors équilibrer un système où l'offre dépasse largement la demande sur quelques heures de milieu de journée.

Si vous avez souscrit une offre indexée sur le spot — Elmy, Octopus Energy France ou OhmEnergie proposent ce type de contrat — vous le ressentez directement : le prix d'achat de midi peut tomber à presque rien, occasionnellement en négatif, ce qui revient à être payé pour consommer. Même sans offre indexée, l'option Tempo joue un rôle voisin en donnant des jours bleus très bon marché et des jours rouges très chers, avec l'écart légal le plus large disponible en France.

## Ce que vaut désormais votre surplus

Il faut être clair sur l'ordre de grandeur, parce qu'il a changé récemment et qu'il modifie complètement l'arbitrage.

Depuis le 5 juin 2026, un tarif d'achat unique de 1,1 c€/kWh hors taxes s'applique à toutes les installations jusqu'à 100 kWc, quelle que soit leur puissance (arrêté du 1er juin 2026, publié au JORF du 4 juin 2026). Ce tarif est indexé de 2 % par an sur toute la durée du contrat d'obligation d'achat, qui reste de 20 ans à compter de la mise en service. Pour mémoire, la vente de surplus des installations jusqu'à 9 kWc était rémunérée 4,0 c€/kWh avant cette date.

Comparez maintenant ce chiffre au prix du kWh qui figure sur votre propre facture : c'est le seul repère qui compte, et il n'est pas du même ordre. Autrement dit, chaque kilowattheure que vous consommez chez vous vaut désormais bien davantage que le même kilowattheure injecté sur le réseau. Deux détails complètent le tableau : la production rémunérée est plafonnée à 1 600 heures par an et par kWc installé, et le tarif d'achat est versé y compris pendant les heures où le prix spot est négatif — l'installation résidentielle sous obligation d'achat n'est donc pas exposée aux prix négatifs comme l'est un producteur rémunéré au marché.

Ces montants et ces règles peuvent évoluer : en cas de doute sur votre situation, référez-vous à l'arrêté en vigueur sur Légifrance, aux publications de la CRE et aux fiches de photovoltaique.info plutôt qu'à un chiffre lu sur un forum.

## Transformer le surplus en quelque chose d'utile

L'idée est donc d'arrêter de laisser l'énergie de midi s'échapper à vil prix et de commencer à l'absorber vous-même. Chargez la batterie domestique. Chauffez le ballon d'eau chaude. Rafraîchissez ou préchauffez la maison avant les heures chères du soir. Rechargez le véhicule électrique. Faites tourner la pompe de la piscine, le lave-vaisselle, le lave-linge. Tout ce qui est déplaçable, poussez-le dans la fenêtre de surplus.

Si vous êtes sur une offre indexée, la logique s'étend au réseau lui-même : quand les prix de midi frôlent zéro ou passent en négatif, il peut être rentable de soutirer, y compris pour charger la batterie sur le réseau, puis de s'appuyer sur cette énergie stockée quand les prix remontent le soir.

Un point mérite d'être noté pour la France : la réforme des heures creuses menée par Enedis déplace jusqu'à trois heures creuses entre 11 h et 17 h, précisément pour faire coïncider la consommation avec le pic de production solaire. Selon la phase de déploiement qui vous concerne, vos heures creuses de l'après-midi peuvent déjà tomber en plein dans votre fenêtre de surplus : vérifiez vos plages horaires réelles sur votre compteur Linky ou auprès de votre fournisseur avant de programmer quoi que ce soit.

## Planifier plutôt que subir

Le meilleur de l'affaire, c'est que rien de tout cela n'a besoin d'être deviné. La fenêtre de surplus de demain est prévisible, et une prévision à plusieurs jours vous laisse organiser toute la semaine autour d'elle : empilez les usages lourds et déplaçables sur les journées à fort surplus, levez le pied sur les journées couvertes. Le trop-plein de soleil cesse alors d'être un problème pour devenir l'énergie la moins chère que vous achèterez de l'année.
