---
title: "Recharger sa voiture électrique avec ses panneaux solaires"
description: "Recharger son véhicule électrique sur le surplus solaire : seuils de puissance, puissance souscrite en kVA et planification par prévision horaire."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "ev-charging"
seo:
  ogTitle: "Recharger sa voiture électrique avec le solaire"
---
Une voiture électrique est le plus gros consommateur d'un foyer : une seule charge, de 20 à 60 kWh, peut dépasser la consommation quotidienne de tout le reste de la maison réuni. C'est aussi, pour cette raison, la plus grosse opportunité : chaque kilowattheure pris sur votre toiture plutôt que sur le réseau vous fait gagner tout l'écart entre le prix plein du kWh de votre facture et les 1,1 c€/kWh HT auxquels le surplus est racheté depuis le 5 juin 2026. Le problème : un véhicule électrique ne sirote pas l'électricité, il l'avale. C'est là que la planification commence.

## Le problème du seuil

La recharge monophasée démarre autour de 1,4 kW (6 A), le réglage courant se situe à 3,7 kW (16 A), et le triphasé monte à 11 kW. Une installation de 5 kWc un midi d'avril délivre peut-être 4 kW, dont la maison prélève déjà 0,5 à 1 kW de consommation de base. Le surplus réel tourne donc souvent autour de 2,5 à 3,5 kW : assez pour charger, mais seulement si vous visez juste. Branchez à l'aveugle à 17 h et vous rechargez du réseau.

## La contrainte française : la puissance souscrite

Avant même de parler de surplus, il y a un plafond dur : la puissance souscrite de votre contrat, exprimée en kVA et inscrite sur votre facture. Le cas le plus fréquent en maison individuelle est 6 ou 9 kVA, et l'on trouve encore du 3 kVA dans des logements anciens. Cette puissance limite tout ce qui traverse votre tableau au même instant, production comprise ou non : si la borne tire 7 kW pendant qu'un four et une plaque à induction fonctionnent, le disjoncteur de branchement coupe, et il coupe toute la maison.

Deux conséquences pratiques. D'abord, une borne de 11 kW n'a de sens qu'avec un abonnement triphasé dimensionné en conséquence ; sur du 6 kVA monophasé, le plafond réaliste est plutôt 3,7 kW. Ensuite, une recharge pilotée sur le surplus est structurellement plus sûre qu'une recharge à puissance fixe, puisqu'elle redescend d'elle-même quand la maison consomme. Si vous envisagez d'augmenter la puissance souscrite, comparez le surcoût annuel de l'abonnement avec ce que vous gagneriez réellement : bien souvent, moduler la charge coûte moins cher qu'augmenter le contrat.

Côté matériel, l'entrée de gamme est la prise renforcée, du type Green'Up, qui monte à environ 3,2 kW (14 A) pour un coût sans commune mesure avec une borne : c'est souvent suffisant pour absorber une bosse de mi-journée. Au-dessus, les bornes courantes en France (Wallbox, Zaptec, Easee, Schneider EVlink, Hager witty, Legrand) proposent presque toutes un pilotage de la puissance, condition indispensable à la recharge sur surplus. L'installation d'une borne relève de la qualification IRVE.

## Trois stratégies

**Le « samedi ensoleillé ».** La plus simple : la voiture reste à la maison le week-end, la prévision annonce plus de 25 kWh, vous branchez pendant le pic prévu avec un courant calé sur le surplus attendu, par exemple 3,7 kW pendant 4 à 5 heures. Ne demande rien de plus qu'une borne à puissance réglable.

**La stratégie mixte.** En semaine, la voiture se recharge la nuit en heures creuses, mais uniquement « jusqu'à l'autonomie du trajet domicile-travail » ; le complément attend la prochaine belle journée. Un coup d'œil le soir à la prévision du lendemain décide de la marge de batterie à laisser au soleil.

**La recharge automatique sur surplus.** L'objectif final : une borne en mode photovoltaïque, native ou pilotée par Home Assistant ou EVCC, qui module en continu le courant de charge sur le surplus mesuré. C'est là que la résolution de la prévision paie : l'API de Volcast (Premium) fournit 288 points de 5 minutes par jour, si bien que l'automatisation sait si le nuage qui arrive dans 20 minutes est une ombre passagère ou la fin de la fenêtre, et n'interrompt pas la session pour rien.

## Le calcul

10 kWh rechargés au soleil plutôt qu'au réseau, cela représente dix fois le prix du kWh de votre facture, moins les 11 centimes de rachat que vous n'aurez pas touchés. Autrement dit, l'économie est à quelques centimes près celle de dix kilowattheures achetés. Sur 1 000 km par mois, soit environ 170 kWh, avec la moitié de la recharge faite sur le surplus, cela devient une somme mensuelle qui compte, à laquelle s'ajoute la part non chiffrable : rouler sur l'énergie que vous avez récoltée vous-même.

## FAQ

**Peut-on recharger sur le surplus depuis une simple prise ?**
Oui. Une prise domestique tient environ 2,3 kW (10 A) et une prise renforcée type Green'Up environ 3,2 kW, ce qui correspond justement à des surplus modérés. C'est lent, mais pour une voiture garée à la maison toute la journée, c'est souvent la manière la plus efficace d'absorber la bosse de mi-journée. Utilisez un circuit dédié, jamais une rallonge ni une multiprise.

**Recharger la voiture ou la batterie de la maison en premier ?**
Si la voiture doit être rechargée de toute façon : la voiture. Cela évite une double conversion et des cycles de batterie. La batterie domestique reprend l'avantage quand la voiture n'est pas là pendant les heures de production.

**Quelle puissance reste-t-il pour la recharge ?**
Le surplus, c'est la production du moment moins la consommation de la maison. Vous le lisez sur un compteur bidirectionnel ou dans le tableau de bord Énergie ; la prévision horaire, elle, vous dit ce qu'il vaudra demain.
