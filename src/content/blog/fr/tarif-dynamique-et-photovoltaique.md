---
title: "Tarif dynamique et photovoltaïque : est-ce rentable ?"
description: "Prix indexé sur le spot, option heures creuses et Tempo : à qui profite vraiment un tarif dynamique quand on a des panneaux photovoltaïques chez soi ?"
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "dynamic-tariff"
seo:
  ogTitle: "Tarif dynamique et photovoltaïque : pour qui est-ce rentable ?"
---
Sur une offre indexée sur le marché, vous ne payez plus un prix du kWh fixé pour un an dans le contrat, mais un prix qui suit le marché de gros, auquel s'ajoutent l'acheminement, les taxes et la marge du fournisseur. Sur ce marché, le prix varie plusieurs fois dans la journée : les milieux de journée ensoleillés sont très bas, parfois négatifs, les soirées d'hiver très chères. Pour un consommateur moyen, c'est une loterie ; pour un propriétaire de panneaux qui dispose d'usages déplaçables ou d'une batterie, c'est un outil. Je l'écris en vivant depuis des années avec un prix qui change d'heure en heure.

## Comment ça marche en pratique

Le prix horaire se forme sur le marché de gros européen, principalement sur EPEX SPOT pour la livraison du lendemain, et les prix du lendemain sont **publiés l'après-midi de la veille**. C'est le cœur sous-estimé du modèle : chaque soir, vous pouvez planifier la journée entière qui suit. Les heures bon marché sont typiquement la nuit et les milieux de journée ensoleillés ; les heures chères sont les rampes du matin et du soir, grossièrement 7 h - 9 h et 18 h - 21 h.

Un mot de vocabulaire, parce qu'il crée régulièrement de la confusion. Sur le marché de l'électricité, on parle de marché « J-1 » : la veille pour le lendemain. Quand on parle de prévision de production, on dit au contraire « J+1 » : demain vu depuis aujourd'hui. Les deux désignent la même journée, vue de deux métiers différents.

## Les familles d'offres en France

En France, l'offre indexée à l'heure cohabite avec des options tarifaires beaucoup plus répandues, et il faut savoir laquelle vous avez avant d'automatiser quoi que ce soit.

**Base.** Un prix unique du kWh, quelle que soit l'heure. Rien à optimiser côté tarif : votre seul levier est l'autoconsommation.

**Heures pleines / heures creuses.** Huit heures creuses par jour à prix réduit. C'est ici que se joue le changement le plus important pour un producteur : la réforme des heures creuses, décidée par la CRE dans le cadre du TURPE 7 et mise en œuvre par Enedis, conserve les 8 heures mais en déplace une partie. Chaque client garde au moins 5 heures creuses consécutives la nuit, dans la plage 23 h - 7 h, et jusqu'à 3 heures peuvent basculer l'après-midi, dans la plage 11 h - 17 h. La réforme introduit aussi une saisonnalité, les heures d'après-midi se concentrant sur les mois les plus ensoleillés.

Vous ne choisissez pas vos plages : Enedis les attribue selon le réseau local, point de livraison par point de livraison, et votre fournisseur vous prévient environ un mois avant le changement. Deux voisins peuvent donc avoir des horaires différents. Le déploiement se fait en deux vagues : la première, de novembre 2025 à juin 2026, a concerné 1,7 million de clients ; la seconde, de décembre 2026 à octobre 2027, en concerne 9,3 millions, avec cette fois des heures creuses différentes l'été et l'hiver. À l'été 2026, la majorité des foyers a donc encore ses anciennes plages : vérifiez les vôtres sur votre facture avant de recopier le moindre conseil.

Pour un propriétaire de panneaux, cette réforme est une petite révolution silencieuse. Les nouvelles heures creuses d'après-midi tombent en plein dans le pic de production. Le conseil classique « lancez vos machines en heures creuses, donc la nuit » peut devenir exactement le mauvais conseil : si vos heures creuses sont désormais à 13 h, elles coïncident avec votre surplus, et vous auriez tort de payer au réseau ce que votre toit vous donne gratuitement.

**Tempo.** L'option où le signal prix est de loin le plus fort. L'année est découpée en jours de trois couleurs, du moins cher au plus cher, en nombre fixé à l'avance, avec un écart entre le jour le plus cher en heures pleines et le jour le moins cher en heures creuses sans équivalent parmi les offres réglementées. La couleur du lendemain est annoncée la veille en fin d'après-midi : exactement la même mécanique de planification que les prix spot, en beaucoup plus simple à automatiser. Pour la grille en vigueur et le nombre de jours de chaque couleur, référez-vous à EDF, seule source à jour.

**Offres indexées sur le spot.** Quelques fournisseurs proposent une indexation réellement horaire sur EPEX SPOT — Elmy, Octopus Energy France ou OhmEnergie, par exemple. Attention à la granularité : beaucoup d'offres dites « indexées » le sont sur une moyenne mensuelle, ce qui ne récompense aucun déplacement d'usage dans la journée. Regardez dans les conditions économiques quel indice est utilisé et à quel pas de temps. C'est la différence entre « je peux décaler heure par heure et le voir sur ma facture » et « je ne peux rien décaler du tout ».

## À qui ça profite

**C'est rentable si au moins une de ces conditions est vraie :** vous avez des panneaux (votre production couvre de toute façon le milieu de journée), vous pouvez déplacer de gros usages (eau chaude, lave-linge, lave-vaisselle, voiture électrique), vous avez une batterie (arbitrage : charger bon marché, décharger cher), ou vous chauffez avec une pompe à chaleur équipée d'un ballon tampon.

**Ce n'est pas rentable si :** vos consommations sont immobiles et calées sur les pointes de prix, vous préférez une facture prévisible à l'optimisation, une minute de planification par jour vous agace, ou votre offre est indexée sur une moyenne mensuelle et ne récompense donc pas le déplacement horaire.

## Une vraie journée sur un prix qui bouge

Journée ensoleillée : pendant la nuit, tout ce qui doit être prêt au matin se charge dans le creux le moins cher ; dans la journée, la maison vit sur sa propre production, avec l'eau chaude, le lave-vaisselle et la recharge de la voiture dans le pic de production ; pendant la rampe chère du soir, presque rien ne démarre, parce que tout ce qui comptait est déjà fait. Journée couverte : le plan s'inverse, et les gros usages migrent vers les heures les moins chères du contrat.

La donnée décisive n'est pas unique, il y en a deux à croiser : **les prix de demain** (connus) et **la production de demain** (prévue). Ensemble seulement, elles répondent à la question de savoir si l'eau chauffe au soleil à 13 h ou sur du réseau bon marché à 3 h du matin. Automatiser exactement cette boucle, c'est le métier des systèmes de gestion de l'énergie domestique (EMS) ; je le fais pour l'instant de façon semi-automatique dans Home Assistant, avec les capteurs de prévision de Volcast (l'intégration demande un abonnement Premium).

## Les risques, dits clairement

Les prix peuvent aussi flamber : une soirée froide et sans vent vaut plusieurs fois le prix moyen. Sans flexibilité, un tarif indexé peut revenir *plus* cher qu'un prix fixe. Règle empirique : ne basculez que si vous pouvez déplacer au moins 30 à 40 % de votre consommation, ou si une batterie aplatit les pointes à votre place.

Un second risque, très français celui-là : la puissance souscrite. Avec les 6 ou 9 kVA typiques d'une maison — et parfois 3 kVA seulement dans un ancien appartement — vous ne pouvez pas lancer ensemble le ballon, le four et la recharge de la voiture pour profiter d'une heure bon marché. Dépasser fait disjoncter. Le plan de journée se construit donc en séquence, pas en parallèle.

## Et le surplus que vous injectez ?

C'est le point où les articles traduits de l'anglais induisent en erreur, parce qu'en France les deux relations sont totalement séparées : le prix que vous payez pour l'électricité soutirée vous lie à votre fournisseur, tandis que la rémunération de l'électricité injectée vous lie à l'acheteur en obligation d'achat. Changer d'offre de fourniture ne touche pas votre contrat de vente du surplus.

Depuis le 5 juin 2026, l'arrêté S21 modifié fixe un tarif d'achat unique de 1,1 c€/kWh HT pour toutes les installations jusqu'à 100 kWc, quel que soit le mode de vente. Le contrat court sur 20 ans à compter de la mise en service, et le tarif est revalorisé de 2 % par an. Deux détails à connaître : la production rémunérée est plafonnée à 1 600 heures par an et par kWc installé, et les installations d'au plus 9 kWc n'ont accès à l'obligation d'achat qu'en autoconsommation avec vente du surplus. La prime à l'autoconsommation, elle, a été supprimée pour les demandes complètes de raccordement déposées à partir du 5 juin 2026.

La conséquence pour ce qui nous occupe est nette : à 1,1 c€/kWh, revendre son surplus ne pèse pratiquement plus rien face au prix du kWh sur votre facture. L'écart entre les deux est devenu très large, et il pousse toute la rentabilité du côté de l'autoconsommation. C'est précisément ce qui rend le pilotage des usages — et donc la prévision de production — beaucoup plus intéressant qu'il y a deux ans. Les conditions évoluent : vérifiez toujours l'arrêté en vigueur avant de bâtir un calcul dessus, seul le texte publié au Journal officiel fait foi.

## FAQ

**Avec un tarif dynamique, puis-je toujours vendre mon surplus ?**
Oui. La vente du surplus relève de votre contrat d'obligation d'achat et reste indépendante de l'offre de fourniture ; le tarif dynamique change surtout ce que vous payez sur l'électricité que vous soutirez.

**Où voir les prix de demain ?**
Dans l'application de votre fournisseur si l'offre est horaire, ou sur les publications du marché de gros pour le lendemain, disponibles chaque après-midi pour le jour suivant. En Tempo, c'est la couleur du lendemain qui joue ce rôle, annoncée elle aussi la veille.

**Que se passe-t-il pendant les prix négatifs ?**
Soutirer devient de fait avantageux : c'est l'heure idéale pour charger une batterie et lancer les gros usages. J'en parle ici : [prix négatifs de l'électricité →](/blog/fr/prix-negatifs-electricite-et-solaire).
