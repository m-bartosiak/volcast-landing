---
title: "Pompe à chaleur et photovoltaïque : synchroniser les deux"
description: "Décaler les cycles d'eau chaude de votre pompe à chaleur vers vos heures de production : programmation, contact SG Ready et pilotage sur prévision."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "heat-pump"
seo:
  ogTitle: "Pompe à chaleur et photovoltaïque : comment les synchroniser"
---
Une pompe à chaleur et des panneaux photovoltaïques forment un couple naturel, mais seulement si la PAC tourne pendant que le toit produit. Les programmes d'usine chauffent l'eau chaude sanitaire tôt le matin et en début de soirée : exactement aux heures où il n'y a pas de soleil. Remettre ces cycles dans le bon ordre est l'une des optimisations les plus simples, et l'une des rares qui se voient sur la facture.

## Le principe : votre ballon est une batterie thermique

Stocker de l'électricité coûte cher, stocker de la chaleur ne coûte presque rien. Un ballon d'eau chaude de 200 à 300 litres porté à une température plus élevée au milieu de la journée garde l'eau chaude jusqu'au lendemain matin. La stratégie tient en une phrase : **vous « surchargez » le ballon pendant la fenêtre de surplus, et vous vous contentez du maintien en dehors de cette fenêtre.** En pratique, une consigne de 46 à 48 °C la plus grande partie de la journée, relevée à 55 ou 60 °C dans les heures de production, disons entre 11 h et 15 h. La douche du soir tourne au soleil stocké.

## Trois niveaux de mise en œuvre

**Niveau 1 : la programmation intégrée.** Toutes les PAC disposent de programmes horaires : réglez une consigne d'eau chaude sanitaire plus élevée dans une fenêtre fixe en milieu de journée. Cela ne coûte rien et fonctionne dès aujourd'hui. La faiblesse est évidente : la fenêtre est rigide, la production ne l'est pas.

**Niveau 2 : l'entrée smart grid.** La plupart des pompes à chaleur des dix dernières années disposent d'un contact de type SG Ready : le fermer force un mode de surchauffe. Reliez-le à un relais commandé par votre domotique et la PAC se met à répondre à un signal « il y a du surplus ».

**Niveau 3 : le pilotage sur prévision.** C'est l'avantage décisif sur une logique qui ne regarde que le compteur : une prévision sait *à l'avance* si la journée comporte une fenêtre de surplus, et à quelles heures elle tombe. Un jour couvert, la PAC n'attend pas en vain un soleil qui ne viendra pas ; elle chauffe dans l'heure la moins chère du contrat. Dans Home Assistant, cela tient en deux briques : un capteur de prévision (Volcast expose l'énergie prévue pour aujourd'hui et pour demain, ainsi qu'un indicateur d'heure de pic, via HACS ; l'intégration demande un abonnement Premium) et une automatisation conditionnelle.

## Le cas français : cumulus, contacteur jour/nuit et heures creuses

Dans une maison française, le récepteur le plus facilement pilotable n'est pas toujours la PAC : c'est très souvent le cumulus, le ballon d'eau chaude électrique branché sur un contacteur jour/nuit au tableau. Ce contacteur a trois positions : arrêt, marche forcée et automatique. En position automatique, il suit le signal heures creuses envoyé par le compteur Linky, donc historiquement la nuit.

Pour faire chauffer ce ballon au soleil, deux approches. La plus brutale consiste à passer le contacteur en marche forcée au bon moment de la journée, manuellement ou via une prise pilotée. La plus propre consiste à remplacer la commande du contacteur par un relais piloté par la domotique ou par un routeur solaire, qui déclenche la chauffe quand le surplus dépasse un seuil. Dans les deux cas, une prévision de production évite le scénario le plus frustrant : couper les heures creuses de la nuit en comptant sur un soleil qui, le lendemain, ne se montre pas.

Or, la donne change en ce moment. La réforme des heures creuses décidée par la CRE dans le cadre du TURPE 7 et mise en œuvre par Enedis conserve le principe de 8 heures creuses par jour, mais en déplace une partie. Chaque client garde au moins 5 heures creuses consécutives la nuit, dans la plage 23 h - 7 h ; jusqu'à 3 heures peuvent basculer l'après-midi, dans la plage 11 h - 17 h. La réforme introduit également une saisonnalité : les heures d'après-midi se concentrent sur les mois les plus ensoleillés, et l'hiver les heures creuses peuvent être entièrement regroupées la nuit.

Deux choses à retenir avant d'automatiser. D'abord, vous ne choisissez pas vos plages : Enedis les attribue en fonction du réseau local, point de livraison par point de livraison, et votre fournisseur vous prévient environ un mois avant le changement. Votre voisin peut donc avoir des horaires différents des vôtres. Ensuite, le calendrier : une première vague, de novembre 2025 à juin 2026, a concerné 1,7 million de clients ; la seconde, qui porte sur 9,3 millions de clients, s'étale de décembre 2026 à octobre 2027, avec cette fois des heures creuses différentes l'été et l'hiver. À l'été 2026, la majorité des foyers a donc encore ses anciennes plages. Vérifiez les vôtres sur votre facture ou dans votre espace client avant d'écrire la moindre automatisation.

Pour un propriétaire de panneaux, cette réforme a une conséquence contre-intuitive : si vos nouvelles heures creuses tombent à 13 h, elles coïncident avec votre pic de production. Le conseil classique « chauffez l'eau en heures creuses » devient alors ambigu, puisque les deux bonnes raisons de chauffer à ce moment-là se superposent. Ce que vous devez éviter, c'est de soutirer au réseau une énergie que votre toit vous donne déjà : la bonne consigne reste « chauffer sur le surplus quand il existe, sur les heures creuses sinon ».

Dernier cas à connaître : l'option Tempo. Le signal prix y est le plus marqué de toutes les offres réglementées, avec des jours de couleurs différentes et un écart considérable entre le plus cher et le moins cher. Les jours les plus chers tombent en hiver, précisément quand la PAC travaille le plus et que le toit produit le moins — c'est là que le pilotage a le plus de valeur : préchauffer la veille, remonter la consigne au milieu de la journée, effacer le soir. La couleur du lendemain étant connue la veille en fin d'après-midi, elle se combine très bien avec une prévision de production. Pour la grille tarifaire et le nombre de jours de chaque couleur, référez-vous à EDF : c'est la seule source à jour.

## Chauffage des locaux : plus de prudence que pour l'eau chaude

L'hiver est la saison ingrate : la pompe demande le maximum au moment où le toit donne le minimum. La prévision aide malgré tout. Lors des journées d'hiver ensoleillées, relevez la consigne d'ambiance de 1 à 1,5 °C au milieu de la journée et « garez » de la chaleur dans la dalle et dans les murs. L'efficacité de la manœuvre dépend entièrement de l'inertie thermique du bâtiment : dans une maison bien isolée avec un plancher chauffant, elle est étonnamment bonne.

Sur une PAC air/eau équipée d'un ballon tampon, le raisonnement est encore plus direct : le ballon tampon est un accumulateur, exactement comme le ballon d'eau chaude. Le charger quelques degrés plus haut pendant la fenêtre de production, puis laisser le circuit se vider dessus en fin de journée, revient à décaler la consommation sans toucher au confort.

## PAC air/air : l'été, le sujet devient la climatisation

Dans une bonne partie du pays, et de façon nette en Occitanie, en Provence et dans la vallée du Rhône, une PAC air/air travaille autant en rafraîchissement l'été qu'en chauffage l'hiver. Le même raisonnement s'applique, et il y est même plus favorable : les deux pics coïncident presque parfaitement, puisque la chaleur appelle de la climatisation aux heures où l'installation produit le plus.

Trois gestes concrets :

- **Pré-rafraîchissez pendant les heures de production.** Descendez de 1 à 1,5 °C entre 12 h et 16 h, quand le surplus existe, plutôt que de partir de zéro à 19 h avec une maison déjà chaude et un toit qui ne produit plus.
- **Exploitez l'inertie du bâtiment.** Volets et stores fermés aux heures les plus chaudes font durer beaucoup plus longtemps le frais accumulé ; sans eux, vous climatisez la rue.
- **Évitez le démarrage en soirée.** Un split qui se lance à 19 h ou 20 h fonctionne presque entièrement sur de l'électricité soutirée au réseau. L'avancer de quelques heures déplace le même confort vers l'autoconsommation.

Même un split sans domotique se gère : presque tous ont un programmateur hebdomadaire, et dans Home Assistant on les commande soit par intégration native, soit par un émetteur infrarouge relié à la même automatisation qui lit la prévision.

## Points de vigilance

**Légionelle :** si vous abaissez la température de base de l'eau chaude sanitaire, conservez le cycle hebdomadaire de montée en température (60 °C ou plus). **Cycles courts :** ne faites pas démarrer et s'arrêter la PAC autour du seuil de surplus ; une fenêtre longue vaut mieux que dix démarrages brefs. **COP :** chauffer l'eau à 60 °C fait chuter le rendement ; avec de l'énergie de surplus le compte reste bon, mais ne dépassez pas le besoin réel. **Puissance souscrite :** en 6 kVA, une PAC, un cumulus en marche forcée et une voiture en charge simultanés font disjoncter. Séquencez les usages au lieu de les empiler.

## FAQ

**Est-ce que ça marche avec n'importe quelle pompe à chaleur ?**
Par la programmation horaire, avec toutes. Par l'entrée smart grid, avec la plupart des modèles des dix dernières années environ. Par l'automatisation complète sur prévision, avec tout ce que vous pouvez atteindre depuis Home Assistant : intégration native, Modbus, ou pilotage de la résistance électrique d'appoint.

**Combien peut-on économiser ?**
Cela dépend de votre profil d'eau chaude : déplacer 3 à 5 kWh par jour du réseau vers le surplus représente, sur toute la saison de production, une économie mensuelle à deux chiffres.

**Et dans une maison sans photovoltaïque ?**
Le même mécanisme fonctionne sur le signal tarifaire : au lieu de viser la fenêtre de surplus, vous visez les heures les moins chères — heures creuses, jours bleus en Tempo, ou heures à prix bas si vous êtes sur une offre indexée sur le marché. Elles sont connues la veille, exactement comme une prévision de production.
