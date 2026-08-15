---
title: "Inclinaison et azimut : leur poids réel sur la production"
description: "Deux angles décident de l'énergie que captent vos panneaux. Pourquoi ils comptent, et pourquoi la réalité est bien plus indulgente qu'on ne le croit."
date: 2026-04-07
tags: ["tilt", "azimuth", "panel-orientation", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 4
lang: fr
draft: false
seo:
  ogTitle: "Inclinaison et orientation des panneaux solaires : leur effet réel sur le productible"
  keywords: ["inclinaison panneaux solaires", "azimut panneau solaire", "orientation optimale panneaux solaires", "inclinaison optimale France"]
---

Quand vous configurez une prévision de production photovoltaïque — dans Volcast ou ailleurs — on vous demande deux nombres qui décrivent l'orientation de vos modules : l'inclinaison et l'azimut. Ces deux angles, combinés à votre position géographique, déterminent la relation géométrique entre vos panneaux et le Soleil tout au long de l'année.

Démystifions-les.

## L'inclinaison : l'écart à l'horizontale

L'inclinaison est l'angle entre la surface de votre panneau et le sol horizontal. Un module posé à plat a une inclinaison de 0°. Un module dressé comme un mur, 90°.

Dans l'hémisphère nord, la règle empirique classique veut que l'inclinaison optimale soit égale à la latitude. Lille, à environ 51° N, appellerait donc 51° d'inclinaison ; Marseille, à environ 43° N, en appellerait 43°. La logique physique existe : aux équinoxes, une inclinaison égale à la latitude place le panneau perpendiculaire aux rayons du Soleil au midi solaire.

Mais l'optimum réel est presque toujours **plus faible** : de l'ordre de 30 à 35° dans la moitié nord de la France, et plutôt autour de 30° dans le Midi. Pourquoi ?

D'abord, l'été pèse démesurément dans le productible annuel — journées longues, soleil plus fort — et le soleil d'été est haut dans le ciel. Une inclinaison plus faible capte mieux l'été, même si elle sacrifie un peu de collecte hivernale.

Ensuite, sous un climat où la couverture nuageuse est fréquente, une part importante de l'irradiance annuelle est diffuse. Le rayonnement diffus vient de toute la voûte céleste, et un panneau plus plat « voit » davantage de ciel. Un panneau très redressé pointe vers l'horizon et manque le diffus zénithal.

Enfin, l'autonettoyage. Les angles plus raides évacuent mieux la pluie, mais les modules modernes, avec leurs traitements anti-salissure, n'ont pas besoin d'une inclinaison extrême pour cela.

Une particularité française mérite d'être signalée ici : la pente de toit courante dans l'habitat individuel se situe le plus souvent entre 30 et 35°. Autrement dit, la grande majorité des toitures françaises sont déjà, par pure convention de charpente, à une inclinaison quasi optimale pour le photovoltaïque.

## L'azimut : la direction visée

L'azimut, c'est la direction vers laquelle regarde votre panneau. Attention, les conventions diffèrent, et c'est une source d'erreurs récurrente. La plupart des API et des modèles comptent l'azimut depuis le nord : 0° = nord, 90° = est, 180° = sud, 270° = ouest. Beaucoup de sites et d'outils français le comptent au contraire depuis le sud : plein sud = 0°, ouest = +90°, est = −90°. Vérifiez toujours quelle convention attend l'outil que vous remplissez, sinon vous risquez d'envoyer vos panneaux à l'opposé du Soleil.

Dans l'hémisphère nord, l'optimum de manuel est plein sud : la direction de l'arc le plus haut du Soleil, celle qui maximise l'irradiance quotidienne totale par ciel dégagé.

Mais il existe de bonnes raisons de s'en écarter.

**Le sud-ouest** décale le pic de production vers l'après-midi et le début de soirée, ce qui colle mieux au pic de consommation du foyer, quand vous rentrez, cuisinez et faites tourner les appareils. Pour qui cherche à maximiser son autoconsommation, cela peut valoir davantage que le maximum de productible annuel.

**Une répartition est-ouest** place des modules sur les deux versants du toit. On y perd peut-être 10 à 15 % de productible annuel par rapport à un plein sud optimal, mais la courbe journalière devient bien plus plate : plus de puissance le matin et le soir, moins de pointe à la mi-journée. Cela correspond mieux au profil de consommation d'un foyer, et cela réduit l'écrêtage si votre onduleur est sous-dimensionné par rapport à la puissance crête des modules.

## La surprise de la sensibilité

Voici le fait qui rassure la plupart des propriétaires d'installation : la production est bien moins sensible à l'orientation qu'on ne l'imagine.

Prenons une latitude moyenne pour la France, autour de 48° N. Un panneau incliné à 35° et orienté plein sud y est « optimal ». Regardons maintenant ce que coûtent les écarts.

Une inclinaison de 20° au lieu de 35° ne vous coûte qu'environ **3 à 5 %** de productible annuel. Une inclinaison de 45°, environ **2 à 3 %**. Vous disposez d'un large plateau de performance quasi optimale.

Un azimut de 150° (sud-sud-est) ou de 210° (sud-sud-ouest) au lieu de 180° coûte seulement **2 à 4 %** par an. Même plein est (90°) ou plein ouest (270°) ne coûte que **15 à 20 %** : il vous reste 80 à 85 % du maximum.

Le pire cas, un panneau parfaitement à plat (0° d'inclinaison), capte encore environ **88 à 91 %** de l'irradiance annuelle optimale sous les latitudes françaises. Les modules à plat perdent davantage par salissure et ne s'autonettoient pas, mais la pénalité purement géométrique reste modeste.

Traduction pratique : ne culpabilisez pas si votre toit n'est pas exactement plein sud à l'inclinaison de manuel. Dans la vraie vie, les contraintes de charpente, l'esthétique et les masques comptent bien plus que la course aux derniers pourcents de perfection géométrique. Et comme la pente de toit française tombe déjà au milieu du plateau, l'essentiel est souvent joué avant même que la question se pose.

## Pourquoi Volcast vous demande ces deux nombres

Malgré cette tolérance, l'inclinaison et l'azimut restent déterminants pour la prévision **heure par heure**. La forme de la courbe journalière, elle, change radicalement avec l'orientation.

Un panneau plein sud à 35° présente un pic marqué à la mi-journée. Un panneau plein est monte fort le matin et retombe après midi. Un panneau plein ouest fait l'inverse. Un panneau à plat donne une courbe symétrique, mais plus basse.

Ces différences de forme comptent dès que vous planifiez le lancement d'un gros appareil, la recharge d'un véhicule électrique, ou le moment où vous aurez du surplus à injecter.

Volcast utilise votre inclinaison et votre azimut pour calculer la **transposition** : comment la position du Soleil au fil de la journée se traduit en irradiance sur votre surface précise. Bien faire ce calcul, c'est passer d'une prévision « combien aujourd'hui » à une prévision « combien à 10 h, à 14 h, à 17 h ».

Combinés à votre localisation, qui fixe la course du Soleil, et à la puissance crête de vos modules, ces deux angles forment les trois nombres dont Volcast a besoin pour produire une prévision fondée sur la physique. Pas d'historique. Pas de période d'apprentissage. Juste de la géométrie, de la physique de l'atmosphère et votre configuration.
