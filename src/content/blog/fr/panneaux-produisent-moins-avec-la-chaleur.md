---
title: "Pourquoi les panneaux produisent moins quand il fait chaud"
description: "La chaleur fait chuter le rendement des cellules. La physique du déclassement thermique, et pourquoi une journée d'avril dépasse une canicule d'août."
date: 2026-06-09
updated: 2026-08-14
author: "Michal"
tags: ["pv-physics", "temperature", "summer", "forecast-accuracy"]
series: "practical"
seriesOrder: 1
lang: fr
draft: false
seo:
  keywords: ["température panneau solaire", "coefficient de température", "pourquoi les panneaux produisent moins avec la chaleur", "rendement panneau solaire canicule"]
---

Cela paraît absurde, mais les journées les plus chaudes et les plus ensoleillées de l'année sont rarement vos meilleures journées de production. Une matinée lumineuse et fraîche d'avril ou de mai bat souvent un après-midi étouffant de fin juillet. La raison tient à un point de physique que la plupart des applications météo passent sous silence : une cellule photovoltaïque perd du rendement quand elle chauffe.

## Vos panneaux sont notés à 25 °C, pas sur une toiture

La puissance inscrite sur la fiche technique de votre module, disons 450 W, est mesurée dans les conditions STC (conditions de test standard) : 1 000 W/m² d'irradiance et une température de cellule d'exactement 25 °C. Ce chiffre est un repère de laboratoire, pas une promesse valable sur un toit en plein été. Sur le terrain, par une journée dégagée de juillet, les cellules à l'intérieur de vos modules atteignent sans difficulté 60 à 70 °C. C'est dans l'écart entre 25 °C et la réalité que disparaissent discrètement vos kilowattheures d'été.

## Le coefficient de température, en clair

Chaque module en silicium cristallin possède un coefficient de température de puissance. Pour les modules récents, il se situe autour de −0,3 à −0,4 %/°C. Traduit : pour chaque degré au-dessus de 25 °C, la puissance délivrée baisse d'environ un tiers de pour cent.

Faites le calcul un jour de chaleur. Si la cellule est à 65 °C, cela fait 40 degrés au-dessus du point de référence. Multipliez par 0,35 % et vous perdez environ 14 % de la puissance nominale, par un après-midi parfaitement dégagé et écrasé de soleil. Le rayonnement tombe à flots, et vos panneaux travaillent avec un handicap.

## La température de cellule n'est pas celle de l'air

Voici le piège : on regarde la température de l'air et on suppose que c'est ce que ressentent les modules. Ce n'est pas le cas. Un verre sombre en plein soleil monte bien plus haut que l'air ambiant. Des panneaux plaqués contre la couverture emprisonnent la chaleur en dessous et chauffent davantage encore. Une température de l'air de 30 °C signifie facilement des cellules à plus de 60 °C une fois que le soleil a tapé quelques heures.

Deux choses refroidissent les modules : le vent qui balaie leur surface, et l'air qui circule librement derrière eux. C'est pourquoi les installations au sol et les poses sur rails surélevés tournent en général plus fraîches, et produisent un peu plus, que des modules serrés contre une toiture brûlante.

## Le cas français : intégration au bâti et toitures sombres

Ce point mérite un développement en France, parce que l'intégration au bâti (IAB) y est bien plus répandue qu'ailleurs en Europe, souvent pour des raisons d'urbanisme : en secteur protégé ou sous l'avis des Architectes des Bâtiments de France, la mairie exige fréquemment que les modules soient encastrés dans le plan de la couverture plutôt que posés en surimposition.

Esthétiquement, c'est plus discret. Thermiquement, c'est un handicap. En surimposition, une lame d'air de quelques centimètres circule sous les modules et évacue une partie de la chaleur par convection. En intégration, cette lame d'air disparaît ou se réduit à presque rien, et la chaleur reste piégée entre le module et la sous-toiture. Selon les configurations, l'écart de température de cellule entre les deux poses se compte en plusieurs degrés, parfois une dizaine : soit, au coefficient de température habituel, quelques pour cent de production en moins sur les heures les plus chaudes.

Les toitures sombres, très courantes dans le Midi comme dans le Nord, aggravent le phénomène : une couverture qui chauffe fort réchauffe l'air résiduel sous les modules et limite encore le refroidissement.

Cela ne veut pas dire que l'intégration au bâti est un mauvais choix — c'est parfois la seule autorisée. Cela veut dire qu'une prévision honnête doit en tenir compte, et qu'il ne faut pas s'étonner qu'une installation intégrée reste légèrement en dessous d'une installation en surimposition strictement identique par ailleurs.

## Pourquoi les canicules ne sont pas des records

Mettez tout cela bout à bout et la journée de production idéale est lumineuse mais fraîche : soleil franc, air peu chaud, un peu de vent, et des modules qui restent proches de leur température de référence. Cela décrit le printemps bien mieux que le cœur de l'été.

En Occitanie, en Provence-Alpes-Côte d'Azur et dans la vallée du Rhône, les épisodes de canicule poussent régulièrement l'air à 35 voire 40 °C. Les cellules, elles, dépassent alors allègrement 70 °C, et la perte thermique atteint 15 à 18 % de la puissance nominale. Le ciel est parfaitement bleu, l'application météo annonce du grand soleil, et pourtant la puissance instantanée reste sous les valeurs d'une belle journée de mai à 18 °C. Beaucoup d'installations françaises signent leur record journalier en avril ou en mai, pas en août.

L'air frais combiné à un soleil déjà haut est une combinaison redoutable ; en montagne, la neige au sol peut même renvoyer un supplément de lumière sur les modules.

## Ce que cela change pour la prévision

C'est exactement là qu'une prévision fondée sur la physique se sépare d'une application météo reconditionnée. « Ciel dégagé » n'est pas synonyme de « production maximale ». Une prévision qui ne lit que la nébulosité surpromettra systématiquement les jours de forte chaleur, parce qu'elle ne tient jamais compte de l'échauffement des cellules.

Un modèle correct estime lui-même la température de cellule, à partir de l'irradiance reçue par le module, de la température de l'air et du vent, puis applique le coefficient de température avant de vous donner un chiffre. C'est pour cela que votre prévision pour une journée à 35 °C doit, à juste titre, se situer en dessous de votre prévision pour une journée aussi ensoleillée à 18 °C.

## Ce que vous pouvez faire, et ce que vous ne pouvez pas

On ne discute pas avec la thermodynamique, mais quelques détails aident à la marge. Préservez la circulation d'air derrière vos modules : ne les enfermez pas, et ne laissez pas les feuilles et les débris combler la lame d'air. Si votre installation est encore au stade du projet, une pose en surimposition avec un espacement correct tournera plus fraîche qu'une intégration au bâti, quand l'urbanisme local laisse le choix.

L'essentiel, malgré tout, reste la compréhension. La prochaine fois qu'une canicule s'installe et que votre production de midi reste un peu en dessous de ce qu'une fraîche journée de printemps avait délivré, vous saurez que votre installation ne défaille pas. Elle fait exactement ce que la physique prévoit.
