---
title: "Batterie domestique : charger sur le réseau ou au soleil ?"
description: "Arbitrage domestique : quand charger la batterie sur le réseau en heures creuses et quand laisser la place au soleil, prévision de production à l'appui."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "battery"
seo:
  ogTitle: "Batterie domestique : charger sur le réseau ou au soleil ?"
---
La logique par défaut d'une batterie domestique est simple : on charge sur le surplus photovoltaïque de la mi-journée, on décharge le soir. La plupart des jours, cela suffit. Mais dès que votre contrat fait varier le prix du kWh au cours de la journée — heures pleines / heures creuses, option Tempo, ou une offre indexée sur le marché spot EPEX SPOT — un second jeu apparaît : l'arbitrage sur le prix, c'est-à-dire stocker de l'électricité achetée bon marché pour la consommer aux heures chères. Tout l'art consiste à savoir quel jeu jouer quel jour. La réponse tient dans deux prévisions : celle des prix, connue la veille, et celle de la production.

## Règle de base : le soleil passe avant

L'électricité de votre toiture est « gratuite » : chaque kWh solaire stocké puis consommé le soir vous évite d'acheter le même kWh au prix fort. Donc, si la prévision annonce que le surplus de demain remplira la batterie, **ne chargez pas sur le réseau pendant la nuit**. Sinon la batterie se réveille pleine d'énergie achetée, et le surplus de midi part sur le réseau pour quelques centimes. C'est l'erreur de débutant la plus répandue en matière d'arbitrage.

En France, cette règle pèse plus lourd qu'ailleurs depuis juin 2026. L'arrêté du 1er juin 2026, publié au Journal officiel du 4 juin 2026, a remplacé les grilles tarifaires trimestrielles par un tarif d'achat unique de 1,1 c€/kWh HT pour toutes les installations jusqu'à 100 kWc, indexé de 2 % par an sur les vingt ans du contrat. Auparavant, la vente du surplus d'une installation de 9 kWc ou moins était rémunérée 4,0 c€/kWh HT. Mettez ce chiffre à côté du prix du kWh de votre dernière facture : l'écart entre les deux est exactement ce que vaut chaque kWh que vous parvenez à autoconsommer au lieu d'injecter. C'est cet écart, et lui seul, qui fait passer le soleil avant le réseau.

Le tarif unique s'applique aux demandes complètes de raccordement déposées à partir du 5 juin 2026. Si votre contrat d'obligation d'achat est antérieur, la stratégie ne change pas, mais l'écart est plus étroit : prenez le tarif réellement inscrit sur votre contrat plutôt qu'un chiffre lu ailleurs.

## Quand la charge sur le réseau se justifie

**Cas 1 : ciel couvert demain et soirée chère.** Prévision de production basse — la batterie ne se remplira pas toute seule — et soirée en heures pleines, ou pire, journée rouge annoncée en option Tempo : chargez la nuit, dans le creux de prix, exactement le volume dont la soirée aura besoin. Le gain, c'est l'écart de prix moins les pertes du cycle aller-retour, de l'ordre de 10 à 15 %.

**Cas 2 : prix de marché nul ou négatif en milieu de journée.** Lors des week-ends ensoleillés de printemps, le prix spot sur EPEX SPOT tombe à zéro ou passe en dessous, alors que votre propre production ne suffit pas à saturer le chargeur. Compléter depuis le réseau à ce moment-là coûte alors quelques centimes, voire rapporte. Attention : ce signal n'existe que si votre contrat de fourniture est indexé sur le spot. Au tarif réglementé ou sur une offre à prix fixe, vous ne le verrez jamais passer.

**Cas 3 : une pointe de prix annoncée.** Une soirée froide et sans vent, un jour rouge Tempo annoncé la veille en fin de journée : entrez dans la soirée avec une batterie pleine, quelle que soit la source de charge. C'est en option Tempo que l'écart entre le kWh le plus cher et le kWh le moins cher est le plus large du paysage tarifaire français, et c'est donc le seul cas où l'arbitrage pur, sans soleil, se défend franchement. Les grilles évoluant, travaillez avec les prix en vigueur chez votre fournisseur, pas avec un chiffre lu sur un blog.

## La réforme des heures creuses change la donne

Voici une nuance française qu'aucune version anglophone de cet article n'a à traiter : vos heures creuses ne sont plus forcément la nuit. La CRE a décidé de redistribuer les plages horaires dans le cadre du TURPE 7, et Enedis met la réforme en œuvre. Le principe des 8 heures creuses par jour est conservé ; ce qui change, c'est leur position dans la journée. Chaque client garde au moins 5 heures creuses consécutives la nuit, dans la fenêtre 23 h – 7 h, et jusqu'à 3 heures peuvent être déplacées l'après-midi, dans la fenêtre 11 h – 17 h. Les horaires exacts sont attribués localement par Enedis selon la configuration du réseau : vous ne les choisissez pas, et votre voisin peut très bien avoir les siens.

La première phase, de novembre 2025 à juin 2026, a concerné 1,7 million de foyers. La seconde, de décembre 2026 à octobre 2027, en concernera 9,3 millions, avec cette fois des heures creuses différentes en été et en hiver. À l'été 2026, l'immense majorité des foyers est donc encore sur l'ancien découpage.

Pour une batterie, la conséquence est directe. Si une partie de vos heures creuses tombe entre 11 h et 17 h, « charger en heures creuses » revient à charger précisément au moment où votre toiture produit le plus. Le tarif bas et le soleil se recouvrent, et un onduleur programmé pour ne raisonner qu'en plages horaires ira acheter au réseau ce que le toit donnait gratuitement. Vérifiez vos plages sur votre facture ou dans votre espace client avant de programmer quoi que ce soit.

## L'algorithme du soir, en cinq étapes

1. Regardez ce que sera demain côté prix : couleur Tempo annoncée en fin d'après-midi, plages d'heures creuses, ou prix horaires si vous êtes sur une offre indexée.
2. Regardez la prévision de production de demain.
3. Surplus prévu supérieur ou égal à la capacité de la batterie → ne faites rien, le soleil s'en charge.
4. Sinon, calculez le déficit et programmez l'appoint sur les heures les moins chères de la nuit.
5. Couvrez toujours la pointe du soir depuis la batterie, jamais depuis le réseau.

À la main, cela prend deux minutes par jour. Cela devrait finir par tourner tout seul : cette boucle prix / prévision / pilotage de l'onduleur est exactement le métier d'un système de gestion de l'énergie domestique.

## Ce que les amateurs d'arbitrage oublient

Les pertes du cycle aller-retour mangent 10 à 15 % de chaque kWh « retourné » : l'arbitrage ne paie qu'à partir d'un écart de prix net, avec comme règle du pouce 25 à 30 % après pertes. Les cycles usent la batterie, même si les quelques milliers de cycles d'une chimie LiFePO4 rendent cette usure moins coûteuse qu'on ne le croit souvent.

Vérifiez enfin votre puissance de charge et, spécificité bien française, votre puissance souscrite. Le creux nocturne ne dure que quelques heures et le volume prévu doit y tenir. Surtout, une charge de batterie qui s'ajoute au ballon d'eau chaude et à la borne de recharge fait vite disjoncter un abonnement de 6 kVA : c'est le plafond réel de votre stratégie, bien avant l'onduleur.

Un mot de prudence propre au marché français, enfin. Le parc de batteries domestiques y est nettement moins développé qu'en Allemagne ou en Italie, et la fiscalité n'aide pas : la TVA à 5,5 % applicable depuis le 1er octobre 2025 aux installations photovoltaïques de 9 kWc ou moins en autoconsommation couvre les onduleurs et les systèmes de gestion de l'énergie, mais pas les batteries, qui restent au taux normal de 20 %. Une batterie se justifie donc d'abord par l'autoconsommation qu'elle permet, ensuite seulement par l'arbitrage tarifaire. Refaites le calcul avec vos propres prix plutôt que de reprendre celui d'un article écrit pour le marché britannique.

## FAQ

**A-t-on le droit de charger une batterie domestique depuis le réseau ?**
Techniquement, la plupart des systèmes hybrides en sont capables. Que la fonction soit activée dépend des réglages de l'onduleur et, parfois, du cadre contractuel de votre injection. Demandez à votre installateur ou à votre fournisseur avant de bâtir une stratégie dessus.

**À partir de quel écart de prix l'arbitrage devient-il intéressant ?**
Après pertes, à partir de 25 à 30 % d'écart environ entre l'heure de charge et l'heure de décharge. Un écart heures pleines / heures creuses ordinaire est souvent tout juste à la limite ; un jour rouge Tempo passe largement au-dessus.

**Faut-il vraiment faire tout cela à la main ?**
Aujourd'hui, en grande partie oui, ou de façon semi-automatique dans Home Assistant. Automatiser exactement cette boucle est le cœur du produit que nous construisons ensuite, Volcast EMS.
