---
title: "Prévision de production photovoltaïque : les kWh de demain"
description: "Combien votre installation produira-t-elle demain ? Modèle physique, données des modèles météo et calibration : comment fonctionne une prévision fiable."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "forecast-hub"
seo:
  ogTitle: "Prévision de production photovoltaïque : les kWh de demain"
---
Combien votre installation produira-t-elle demain ? La plupart des propriétaires de panneaux répondent « ça dépend de la météo » et s'arrêtent là. Pourtant, une fois le modèle calibré, la production se prévoit avec une précision d'environ 85 % les jours ensoleillés, heure par heure. Il suffit de combiner les données d'irradiance issues des modèles météo (ensemble NWP) avec un modèle physique de votre installation précise : orientation, inclinaison, puissance et masques.

Cet article explique comment fonctionne une prévision de production professionnelle, pourquoi une simple application météo ne suffit pas, et comment utiliser une prévision au quotidien — pour consommer votre électricité au moment où vous l'avez, au lieu de l'injecter sur le réseau pour une fraction de sa valeur.

## Pourquoi une application météo ne suffit pas

« Grand soleil demain » ne dit presque rien sur le productible. Entre le bulletin météo et les kilowattheures qui sortent de votre toiture, il y a plusieurs couches de physique.

**L'irradiance n'est pas la nébulosité.** Les applications météo affichent un pourcentage de couverture nuageuse, mais les modules réagissent à l'irradiance — la puissance du rayonnement solaire qui atteint une surface, mesurée en W/m². Un voile mince de cirrus et une couche basse et dense de stratus peuvent tous deux valoir « 60 % de nuages » et donner une production du simple au double.

**La géométrie de votre toiture.** La même irradiance ne donne pas le même résultat sur un pan plein sud incliné à 35° et sur un champ est-ouest à 15°. Ajoutez la configuration des strings, les modules bifaciaux et — le facteur le plus souvent ignoré — le profil des masques : la cheminée, l'arbre du voisin ou la colline derrière laquelle le soleil disparaît à 16 h.

**La température joue contre vous.** Les modules perdent du rendement à mesure que la température de cellule monte (typiquement 0,3 à 0,4 % par degré au-dessus de 25 °C). C'est pourquoi les records de production tombent plus souvent une journée de printemps ensoleillée et fraîche qu'en plein mois de juillet.

Une bonne prévision de production doit donc parcourir toute la chaîne : **données d'irradiance des modèles météo (ensemble NWP) → modèle de position du soleil → géométrie et paramètres de votre installation → corrections de température et corrections spectrales → kWh pour chaque heure**.

## Comment fonctionne une prévision fondée sur la physique

Les systèmes modernes de prévision photovoltaïque, des outils pour centrales au sol aux applications pour particuliers, suivent tous le même schéma :

1. **Données d'entrée :** prévisions d'irradiance (GHI, DNI, DHI) issues d'un ensemble de modèles météo, complétées par les modèles numériques qui fournissent température et vent.
2. **Modèle de transposition :** conversion de l'irradiance du plan horizontal vers le plan de vos modules, pour la position du soleil à chaque heure.
3. **Modèle de l'installation :** puissance crête, rendement de l'onduleur, pertes système, ombrage en fonction de l'heure et de la saison.
4. **Résultat :** la courbe de production — aujourd'hui, demain, les jours suivants.

Un modèle « de série » comme celui-là est déjà correct. Mais chaque installation a ses particularités : des pertes légèrement différentes, un ombrage sous-estimé, des modules qui vieillissent à leur rythme. C'est là qu'intervient la seconde pièce.

## Calibration : une prévision qui apprend votre toiture

L'approche la plus efficace consiste à comparer la prévision à la production réelle et à corriger le modèle de façon systématique. Chez Volcast, nous le faisons avec un filtre de Kalman — un algorithme connu de la navigation par satellite qui, à chaque nouvelle mesure, met à jour les paramètres du modèle exactement à hauteur de la confiance que mérite cette mesure.

En pratique : vous saisissez votre production quotidienne réelle et, au bout de deux à trois semaines, le modèle « sait » sur votre installation des choses qu'aucune fiche technique ne contient — l'effet réel de l'ombrage d'automne, les pertes effectives de l'onduleur, la dégradation des modules. Sur ma propre installation de 5,2 kWc, la prévision pour le lendemain, une fois calibrée, se trompe de moins de 10 % les jours ensoleillés.

![Prévision et production réelle comparées sur 14 jours, installation de 5,2 kWc : la calibration de Kalman ramène l'erreur sous les 10 %](/img/blog/forecast-vs-actual-14d-fr.webp)

## À quoi sert vraiment une prévision de production

**Planifier vos consommations.** Depuis l'arrêté du 1er juin 2026 (publié au JORF du 4 juin 2026), le surplus injecté est racheté 1,1 c€/kWh HT dans le cadre de l'obligation d'achat, pour toutes les installations jusqu'à 100 kWc. Mettez ce chiffre en face du prix du kWh de votre facture : le rapport que vous obtenez est votre multiplicateur personnel, et il est massivement en faveur de l'autoconsommation. Si vous savez que le surplus de demain tombe entre 11 h et 14 h, c'est dans cette fenêtre que doivent démarrer le ballon d'eau chaude, le lave-linge, le lave-vaisselle et la recharge de la voiture. Le détail ici : [Ballon, lave-linge, lave-vaisselle : à quelle heure ? →](/blog/fr/quand-lancer-lave-linge-et-ballon).

**Automatiser la maison.** La prévision peut alimenter Home Assistant et piloter les appareils automatiquement : la résistance du ballon ne démarre que si un surplus est prévu, la pompe à chaleur décale ses cycles d'eau chaude dans le pic de production.

**Surveiller la santé de l'installation.** Si la production réelle s'écarte systématiquement de la prévision calibrée, quelque chose ne va pas : modules encrassés, arbre qui a poussé, string qui faiblit. La prévision est le point de repère que l'application de votre onduleur, qui ne montre que le passé, ne vous donne jamais.

## Démarrer en 5 minutes

1. Installez une application dotée d'une prévision fondée sur la physique — [Volcast](https://volcast.app/fr/) est gratuit pour commencer (prévision à 2 jours) et fonctionne avec **n'importe quelle** installation : aucun identifiant d'onduleur, aucune clé API, aucune liaison cloud avec votre matériel.
2. Saisissez vos paramètres : orientation, inclinaison, puissance et, si vous le souhaitez, la répartition des strings et le profil des masques.
3. Vous avez une prévision horaire dès le premier jour ; en saisissant votre production réelle, vous activez la calibration automatique, qui ajuste le modèle à votre toiture semaine après semaine.

## FAQ

**Quelle précision peut atteindre une prévision de production photovoltaïque ?**
Après calibration, typiquement autour de 85 % les jours ensoleillés. Les journées les plus difficiles sont celles à cumulus rapides : même les meilleurs modèles y dispersent davantage, même si le total journalier reste en général fiable.

**Faut-il un accès à l'onduleur pour prévoir la production ?**
Non. La prévision se construit à partir des données des modèles météo (ensemble NWP) et des paramètres de votre installation. L'accès à l'onduleur sert uniquement à enregistrer automatiquement la production réelle pour la calibration — la saisir à la main une fois par jour fonctionne tout aussi bien.

**Quelle différence entre une prévision d'irradiance et une prévision de production ?**
Une prévision d'irradiance indique la quantité d'énergie solaire qui va arriver. Une prévision de production la fait passer par la géométrie et les paramètres de votre installation précise, et restitue les kilowattheures qui sortent de votre toit.

**Une prévision fonctionne-t-elle en hiver ?**
Oui. L'hiver compte davantage de journées couvertes, avec une erreur relative plus élevée, mais c'est justement là que la prévision vaut le plus : elle signale les rares journées ensoleillées sur lesquelles il vaut la peine de décaler vos consommations.
