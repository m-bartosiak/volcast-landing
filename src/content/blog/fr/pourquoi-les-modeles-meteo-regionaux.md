---
title: "Pourquoi un modèle météo global ne suffit pas en solaire"
description: "Les modèles globaux lissent les nuages qui déterminent votre production. Pourquoi AROME et les modèles régionaux rendent la prévision solaire plus juste."
date: 2026-07-28
author: "Michal"
tags: ["forecasting", "nwp", "weather-models", "accuracy"]
series: "geographic"
seriesOrder: 2
lang: fr
draft: false
seo:
  keywords: ["prévision numérique du temps", "modèle météo régional", "AROME Météo-France", "précision de la prévision solaire", "ARPEGE modèle global"]
---

Toute prévision de production photovoltaïque commence par un modèle météo, et tous les modèles météo ne regardent pas votre ciel de la même façon. L'écart entre un modèle global et un modèle régional à haute résolution, c'est souvent l'écart entre une prévision qui attrape les nuages de cet après-midi et une prévision qui les manque complètement.

## Les modèles globaux : la vue grand angle

Les modèles globaux comme l'IFS du Centre européen (ECMWF) ou le GFS de la NOAA couvrent la planète entière. Cette portée a un prix : la résolution. Avec une maille de l'ordre de 9 à 25 km, ils traitent comme uniforme tout ce qui se trouve à l'intérieur d'une case. Pour les grandes structures météo à plusieurs jours d'échéance, cela suffit largement. Pour le solaire, où un seul cumulus qui dérive au-dessus de votre toiture décide de votre après-midi, c'est un flou.

La France a ici une particularité qui mérite d'être signalée : ARPEGE, le modèle global de Météo-France, est à maille variable. Sa résolution se resserre au-dessus de la métropole, autour de 5 km, et se relâche à mesure qu'on s'en éloigne. Peu de pays exploitent leur propre modèle global ; c'est déjà une entrée météo plus fine qu'un global classique, mais cela reste une vue d'ensemble.

## Les modèles régionaux : le gros plan

C'est là que les modèles régionaux à haute résolution justifient leur existence. Météo-France fait tourner AROME à 1,3 km sur la France métropolitaine, l'une des mailles les plus fines d'Europe pour un modèle opérationnel. Le DWD allemand exploite ICON-D2 à environ 2 km sur l'Europe centrale, utile pour le quart nord-est du pays ; les services nordiques et néerlandais partagent le système HARMONIE-AROME. À ces résolutions, les modèles commencent à résoudre les traits de côte, le relief et, surtout, les cellules convectives qui se développent un après-midi d'été.

AROME possède en plus une déclinaison dédiée à la prévision immédiate, AROME-PI, rafraîchie bien plus souvent et conçue pour les prochaines heures. Pour un propriétaire de panneaux, c'est exactement la fenêtre qui compte au moment de décider si l'on lance le lave-vaisselle maintenant ou dans deux heures.

## Les nuages font tout le match

Pour le solaire, l'heure et l'endroit des nuages sont tout, et la convection estivale est précisément le type de nuage qu'un modèle global grossier gère le plus mal. Un modèle à 1,3 km sait placer un développement nuageux au-dessus de la bonne vallée à peu près à la bonne heure. Un modèle à 25 km ne peut vous dire qu'une chose : la région sera « partiellement nuageuse ». Une seule de ces deux informations sert à programmer votre batterie et votre machine à laver.

La géographie française rend l'écart encore plus visible :

- le mistral dans la vallée du Rhône et la tramontane en Languedoc dégagent le ciel en quelques heures, le long de couloirs de quelques dizaines de kilomètres qu'une maille de 25 km ne distingue même pas ;
- la brise de mer sur la façade atlantique fait entrer des nuages bas en matinée, puis repousse la convection vers l'intérieur des terres l'après-midi ;
- les brouillards de vallée dans les Alpes et le Jura peuvent bloquer une installation toute une matinée, alors que quelques centaines de mètres plus haut le ciel est parfaitement dégagé ;
- entre la Bretagne et la Provence, ce ne sont pas seulement des moyennes annuelles différentes, ce sont des régimes nuageux différents, que le même modèle global décrit avec la même grossièreté.

## Le compromis, et la réponse

Les modèles régionaux ne sont pas un gain gratuit. Ils couvrent des échéances plus courtes, de quelques heures à deux ou trois jours, quand les modèles globaux portent à dix jours et au-delà. La réponse honnête n'est donc pas d'en choisir un ; c'est de les combiner. On utilise le modèle régional fin là où il existe pour le court terme, AROME sur la France et AROME-PI pour les prochaines heures, et on retombe sur le modèle global pour la vue longue.

C'est précisément pour cela qu'un bon moteur de prévision s'appuie sur plusieurs modèles à la fois et choisit la meilleure source disponible pour votre région et votre horizon de prévision, plutôt que de faire confiance à un flux global unique pour tout le monde sur Terre.

La meilleure prévision pour votre toiture n'est pas celle qui a la plus grande carte. C'est celle qui sait à quel modèle se fier pour votre morceau de ciel, et à quel moment.
