---
title: "Ballon, lave-linge, lave-vaisselle : à quelle heure ?"
description: "À quelle heure lancer ballon, lave-linge et lave-vaisselle pour consommer votre solaire : une règle simple, des exemples horaires et les heures creuses."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "appliances"
seo:
  ogTitle: "Quand lancer ses appareils avec le photovoltaïque"
---
La réponse courte : **quand votre installation produit plus que la maison ne consomme**, en général quelque part entre 10 h et 15 h, mais les heures exactes dépendent de la météo, de la saison et de l'orientation des modules. Ce guide vous montre comment trouver cette fenêtre pour votre installation, au lieu de deviner.

## Pourquoi l'heure compte vraiment

L'électricité que vous soutirez du réseau, vous la payez au prix plein de la facture, abonnement, taxes et acheminement compris. L'électricité que vous injectez, elle, est rachetée 1,1 c€/kWh HT dans le cadre de l'obligation d'achat depuis le 5 juin 2026, tarif unique pour les installations jusqu'à 100 kWc, indexé de 2 % par an sur vingt ans. Concrètement, un kilowattheure consommé directement depuis le toit vaut plusieurs dizaines de fois le même kilowattheure injecté puis racheté le soir. Vous voulez votre chiffre exact ? Prenez le prix du kWh sur votre facture et divisez-le par 0,011 €.

Une précision utile : le comptage net n'existe pas en France. L'injection et le soutirage sont mesurés séparément, il n'y a donc aucune compensation automatique entre les deux. C'est bien pour cela que l'heure à laquelle tourne le ballon change quelque chose.

Ballon d'eau chaude, lave-linge, lave-vaisselle, sèche-linge et borne de recharge sont les consommations les plus faciles à déplacer dans une maison. Une simple résistance de 2 à 3 kW qui chauffe l'eau pendant 1 h 30 à 2 h, cela fait 3 à 6 kWh par jour : la passer du soir au milieu de journée se voit sur la facture à la fin du mois.

## Le cas français : heures pleines, heures creuses et la réforme en cours

C'est ici que le conseil générique traduit d'un blog étranger tombe à côté. L'option heures pleines / heures creuses donne 8 heures creuses par jour, et cette durée ne change pas. Ce qui change, c'est leur emplacement dans la journée. La CRE a décidé cette réforme dans le cadre du TURPE 7 et Enedis la met en œuvre depuis le 1er novembre 2025, avec un objectif assumé : déplacer de l'ordre de 5 GW de consommation vers l'après-midi des mois les plus ensoleillés, pour coller au pic de production photovoltaïque.

Le principe retenu tient en deux lignes. Chaque client garde au moins 5 heures creuses consécutives la nuit, entre 23 h et 7 h. Jusqu'à 3 heures creuses peuvent être déplacées vers l'après-midi, entre 11 h et 17 h, les horaires précis étant fixés localement par Enedis selon la configuration du réseau. Vous ne les choisissez pas : elles vous sont attribuées, et votre fournisseur vous prévient environ un mois avant le changement. Deux voisins peuvent donc avoir des plages différentes, ce qui rend inutile toute grille horaire « universelle » trouvée en ligne. Vos plages réelles figurent sur votre facture et dans votre espace client.

Le déploiement se fait en deux temps. La première phase, de novembre 2025 à juin 2026, a concerné 1,7 million de clients, avec les mêmes horaires toute l'année. La seconde, de décembre 2026 à octobre 2027, concernera 9,3 millions de clients, cette fois avec des heures creuses différentes en été et en hiver. À l'été 2026, la majorité des foyers est donc encore sur l'ancien découpage, et attend son tour.

Pour un producteur, la conséquence est contre-intuitive et vaut d'être posée noir sur blanc : **les nouvelles heures creuses de l'après-midi tombent en plein dans votre fenêtre de production**. Le vieux réflexe « je programme le ballon en heures creuses » finit alors par vous faire consommer du réseau au moment précis où votre toiture produit du surplus. La règle de lecture est simple :

- **Pendant vos heures de production**, la plage tarifaire ne compte presque pas. L'énergie autoconsommée n'est facturée à personne, donc elle bat toujours l'écart entre heures pleines et heures creuses. Le soleil gagne contre le tarif.
- **En dehors de vos heures de production**, ce sont les plages qui commandent : journées couvertes, soirées d'hiver, charges qui ne rentrent pas dans le surplus. Là, le lave-linge repart en heures creuses.

Si vous êtes sur une option à jours différenciés comme Tempo, l'écart de prix entre types de journée est encore plus marqué, mais la logique ne change pas : d'abord le surplus, ensuite la plage la moins chère.

## Règle n° 1 : ce n'est pas l'heure, c'est le surplus

Le conseil populaire « lancez tout entre 11 h et 14 h » ne marche qu'à moitié, parce que :

- **En avril**, une installation de 5 kWc plein sud peut avoir du surplus dès 9 h.
- **En novembre à Lille**, la même installation peut n'en avoir aucun, et chauffer l'eau à midi ne fait rien économiser.
- **Les champs est-ouest** ont deux bosses de production et une fenêtre de surplus plus longue mais plus basse.
- **Les journées variables** déplacent le pic de plusieurs heures, ou le laissent simplement trop bas pour une résistance de 3 kW.

La bonne question est ailleurs : *combien restera-t-il demain une fois la consommation de base couverte, et à quelles heures ?* C'est exactement ce à quoi répond une prévision de production horaire.

## Comment je fais chez moi (installation de 5,2 kWc)

Chaque soir, un coup d'œil à la prévision du lendemain. Trois scénarios :

**Journée dégagée, prévision au-delà de 25 kWh.** Le ballon démarre à 10 h 30, le lave-linge à midi, le lave-vaisselle à 13 h 30 : tout tient dans le surplus, et il en reste largement à injecter.

**Journée variable, 10 à 15 kWh.** Je prends les deux heures les plus fortes de la prévision horaire, par exemple entre 12 h et 14 h, et je n'y mets que le ballon. Le linge attend une meilleure journée, ou part la nuit en heures creuses.

**Journée couverte, moins de 6 kWh.** Inutile de se raconter des histoires : l'eau chaude se fait simplement dans la plage tarifaire la moins chère.

L'intérêt, c'est que la décision prend 30 secondes le soir, au lieu de rester le matin à la fenêtre à interpréter les nuages. J'utilise [Volcast](https://volcast.app/fr/) pour cela : l'application affiche une prévision horaire pour mon installation précise (orientation, inclinaison, masques), et la notification du soir avec la prévision du lendemain me sauve quand le temps bascule.

![Courbe horaire de production photovoltaïque par ciel dégagé, avec la fenêtre de surplus de la mi-journée mise en évidence](/img/blog/hourly-surplus-fr.webp)

## Le cumulus, le contacteur jour/nuit et le surplus

Dans la maison française type, le chauffe-eau électrique est câblé sur un contacteur jour/nuit piloté par le signal heures creuses. C'est le consommateur pilotable le plus courant du pays, et aussi le plus mal placé quand on produit son électricité : il se déclenche la nuit, quand les panneaux dorment.

Trois niveaux de correction, du plus simple au plus abouti :

1. **La position forcée.** Le contacteur a trois positions : automatique, arrêt, marche forcée. Basculer en marche forcée un midi ensoleillé, c'est zéro euro d'investissement pour un gain immédiat. À réserver aux jours où la prévision est franche.
2. **La commande horaire.** Un module ou un interrupteur horaire pilotable en amont du contacteur, réglé sur la fenêtre de production, et le cumulus chauffe au soleil tous les jours sans intervention.
3. **Le routeur solaire.** Il mesure l'injection en temps réel et envoie dans la résistance exactement la puissance excédentaire, watt par watt. C'est la solution la plus fine, très répandue dans la communauté française, et celle qui tolère le mieux les journées variables.

Dans les trois cas, laissez une sécurité : si la journée s'est révélée trop faible, le ballon doit pouvoir rattraper la nuit suivante en heures creuses. Une eau chaude à 40 °C un mercredi soir coûte plus cher en confort que les quelques centimes économisés.

## Niveau supérieur : automatiser au lieu de se souvenir

Avec Home Assistant, tout cela se gère seul : la prévision entre dans le système comme un capteur et une automatisation enclenche la résistance via une prise pilotable ou un contacteur dès que la production prévue pour l'heure suivante dépasse un seuil. Résultat : l'eau chauffe au soleil sans que vous touchiez à quoi que ce soit, et l'automatisation se replie sur la plage tarifaire la moins chère les journées couvertes.

Volcast propose une intégration officielle pour Home Assistant (installation via HACS en trois clics, Premium requis) : les capteurs d'énergie du jour, d'énergie de demain, de puissance instantanée et l'indicateur de pic de production apparaissent directement dans l'Energy Dashboard.

Pas de Home Assistant ? Les notifications de l'application et une simple prise programmable réglée le soir vous amènent presque au même résultat.

## Tableau récapitulatif

| Appareil | Puissance | Quand le lancer |
|---|---|---|
| Ballon d'eau chaude / résistance | 2-3 kW | Au centre de la fenêtre de surplus ; priorité n° 1, la charge la plus grosse et la plus souple |
| Lave-linge | 0,5-2 kW | En début de fenêtre ; un programme à basse température, c'est un appel de puissance plus faible |
| Lave-vaisselle | 1-2 kW | Après le lave-linge, toujours dans la fenêtre ; le mode éco dure plus longtemps mais plus à plat |
| Sèche-linge | 1,5-3 kW | Uniquement les journées à gros surplus |
| Recharge du véhicule électrique | 3,7-11 kW | Un sujet à part : demande le plus gros surplus et une puissance souscrite suffisante |

## FAQ

**L'autoconsommation vaut-elle vraiment mieux que l'injection ?**
Presque toujours. Avec un rachat du surplus à 1,1 c€/kWh HT face au prix plein du kWh sur votre facture, le rapport se compte en dizaines. Faites le calcul avec vos propres chiffres, il est sans appel.

**À quelle heure une installation produit-elle le plus ?**
Les installations plein sud culminent typiquement entre 11 h et 14 h en heure d'été ; les champs est-ouest ont deux pics, à peu près entre 9 h et 11 h puis entre 14 h et 16 h. Le pic réel de la journée, c'est la prévision horaire qui le donne : les nuages peuvent le déplacer largement.

**Est-ce que ça a du sens de tout allumer à midi ?**
Seulement si la somme des puissances tient dans le surplus. Si ballon plus lave-linge plus lave-vaisselle dépassent la production du moment, la différence vient du réseau au prix fort, et vous risquez en plus de faire disjoncter si votre puissance souscrite est juste. Mieux vaut faire passer les appareils les uns après les autres à travers la fenêtre de surplus.
