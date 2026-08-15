---
title: "Prévision solaire : modèle physique ou machine learning ?"
description: "Deux approches opposées pour prédire la production solaire : l'une modélise la physique, l'autre apprend des données. Ce que cela change pour vous."
date: 2026-04-14
tags: ["physics-model", "machine-learning", "forecasting", "methodology"]
series: "deep-dives"
seriesOrder: 1
lang: fr
draft: false
seo:
  ogTitle: "Prévision solaire physique ou machine learning : quelle approche est la plus précise ?"
  keywords: ["prévision de production photovoltaïque", "machine learning prévision solaire", "modèle physique photovoltaïque", "méthodes de prévision PV"]
---

Si vous cherchez « prévision de production photovoltaïque », vous tomberez sur des dizaines d'applications et de services. Tous promettent des prévisions justes. Mais sous le capot, ils reposent sur des approches fondamentalement différentes — et l'approche détermine quand la prévision fonctionne, quand elle échoue, et ce qu'elle exige de vous.

Les deux camps sont la **modélisation physique** et l'**apprentissage automatique** (machine learning, ML). Ce ne sont pas deux outils interchangeables pour le même travail : ils ne pensent pas le problème de la même façon.

## L'approche ML : apprendre de l'historique

Une prévision par apprentissage automatique fonctionne ainsi : on donne au modèle plusieurs mois de production historique de votre installation, accompagnés des données météo correspondantes. Le modèle en tire des régularités statistiques — « quand la température valait X, la nébulosité Y et le vent Z, cette installation produisait W watts ».

Plus vous lui donnez de données, mieux il apprend les particularités de votre installation : ombrages spécifiques, comportement de l'onduleur, effets de salissure, pertes en câble. Avec assez d'historique, il capture implicitement des effets qui seraient difficiles à modéliser explicitement.

Cela paraît puissant, et ça l'est — avec deux réserves majeures.

**Réserve n° 1 : le démarrage à froid.** Une installation neuve n'a pas d'historique. Le modèle ne peut pas apprendre ce qu'il n'a jamais vu. La plupart des prévisions ML réclament 2 à 6 mois de données avant de devenir fiables. Or c'est précisément la période où une prévision vous serait le plus utile, puisque vous découvrez encore votre installation — et pendant ce temps, vous n'obtenez rien d'exploitable.

**Réserve n° 2 : la dérive de distribution.** Un modèle ML suppose que l'avenir ressemble au passé. Quand les conditions changent d'une manière qu'il n'a jamais rencontrée, il extrapole mal. Une chute de neige printanière inattendue, une semaine d'hiver anormalement dégagée, un nouveau bâtiment qui projette une ombre l'après-midi : ce sont exactement les moments où vous voulez une prévision juste, et exactement ceux où le ML est le moins armé pour vous la donner.

## L'approche physique : partir des premiers principes

Une prévision fondée sur la physique procède autrement. Au lieu d'apprendre des corrélations statistiques, elle simule le processus physique qui transforme la lumière du Soleil en électricité.

La chaîne ressemble à ceci : partir de la position du Soleil, calculée par l'astronomie ; modéliser la traversée de l'atmosphère par le rayonnement solaire — diffusion, absorption, atténuation nuageuse ; décomposer le résultat en composantes directe et diffuse ; transposer ces composantes sur le plan incliné de vos modules ; calculer la température de cellule ; puis appliquer la conversion photovoltaïque avec ses pertes thermiques.

Chaque étape s'appuie sur des équations physiques bien établies. Le modèle de transposition de Perez ou de Hay-Davies. La transmission atmosphérique de Beer-Lambert. Le modèle de cellule à une diode. Ce ne sont ni des devinettes ni des approximations grossières : ce sont les équations qu'utilisent les ingénieurs pour dimensionner des centrales solaires.

Le modèle n'a besoin que de trois informations de votre part : l'inclinaison, l'azimut et la puissance crête. Avec votre localisation, pour la course du Soleil, et une prévision météo, pour les conditions atmosphériques, il calcule la production attendue à partir de zéro.

## Là où chaque approche brille

**Le ML est meilleur quand :**

Vous disposez de plusieurs années de données de production propres et de conditions stables. Le modèle a vu tous les régimes météo que connaît votre site. Rien n'a changé sur votre installation. Dans ce cas, le ML capture implicitement des micro-effets — un ombrage partiel à 15 h en décembre, un écrêtage d'onduleur à la pointe — qu'un modèle physique ne prendrait en compte qu'avec une configuration explicite.

Le ML excelle aussi en prévision à très court terme, de quelques minutes à quelques heures, lorsqu'il reçoit la production en temps réel. Si vos panneaux produisent 3,2 kW à l'instant présent et que le ciel est dégagé, un modèle ML extrapole assez bien l'heure qui vient, sans avoir besoin de comprendre pourquoi.

**La physique est meilleure quand :**

Votre installation est neuve. Vous avez modifié quelque chose : ajout de modules, nouvel ombrage. Les conditions sortent de l'ordinaire. Vous voulez une prévision dans un lieu ou un climat que le modèle n'a jamais vus. Vous voulez la forme de la courbe heure par heure, pas seulement des totaux journaliers. Vous ne souhaitez pas confier des mois de données de production à un tiers.

Les modèles physiques sont aussi plus transparents. Quand la prévision se trompe, vous pouvez diagnostiquer pourquoi : la prévision météo était-elle fausse ? Le modèle thermique imprécis ? La décomposition de l'irradiance mauvaise ? Avec le ML, l'erreur est opaque : le modèle s'est trompé parce qu'il s'est trompé.

## La voie hybride

L'approche la plus solide combine les deux. On prend la physique comme fondation : elle apporte la compréhension structurelle de la façon dont la lumière devient de l'électricité. Puis on utilise le ML pour recaler — si le modèle physique surestime systématiquement de 5 % pour votre installation, une fine couche d'apprentissage peut apprendre cette correction.

Vous obtenez ainsi l'avantage de démarrage de la physique, qui fonctionne dès le premier jour, et la capacité du ML à s'adapter dans le temps aux particularités de votre installation.

Volcast part de la physique. Dès votre première prévision, le modèle déroule toute la chaîne de simulation physique. Il n'a pas besoin de voir ce que vos panneaux ont fait le mois dernier pour prédire ce qu'ils feront demain. Les lois de la physique n'ont pas de période d'apprentissage.

## La question de la précision

On demande souvent : « laquelle est la plus précise ? » La réponse honnête, c'est que cela dépend de l'horizon de prévision et de ce que vous appelez précision.

Pour la **prévision à J+1**, les deux approches sont d'abord limitées par l'incertitude météo, pas par le modèle PV. Physique ou ML, si la météo annonce « ciel dégagé » et qu'il pleut, votre prévision de production sera fausse. La méthode de modélisation PV pèse moins que la qualité de l'entrée météo.

Pour la **forme de la courbe horaire**, la physique a tendance à l'emporter. Elle modélise correctement la montée du matin, le pic au midi solaire et la décrue du soir, à partir de la géométrie. Le ML peut apprendre cette forme, mais il lui faut voir assez de jours pour couvrir la variation saisonnière.

Pour l'**estimation du productible à long terme**, la physique est plus robuste, parce qu'elle ne surapprend pas les régimes météo d'une période particulière.

Pour le **nowcasting** — la prévision immédiate, les 15 à 60 prochaines minutes — le ML alimenté en données temps réel l'emporte généralement, car il réagit aux conditions du moment plus vite qu'un modèle physique nourri de mises à jour météo toutes les six heures.

La vraie question n'est donc pas « laquelle est la plus précise », mais « laquelle me donne une prévision utile avec ce dont je dispose aujourd'hui ». Si vous avez des années de données et une installation stable, le ML peut être excellent. Si vous démarrez, ou si vous voulez de la transparence, la physique est la bonne fondation.

## Ce que cela change pour vous

Pour un propriétaire d'installation, l'approche retenue par votre outil de prévision a des conséquences très concrètes.

Avec un outil fondé sur la physique, vous avez une prévision opérationnelle dès le premier jour. Pas d'attente. Pas d'export de données depuis le portail de votre onduleur. Pas besoin de confier votre historique de production à un tiers.

Vous obtenez aussi une prévision sur laquelle vous pouvez raisonner. Si elle annonce 25 kWh pour demain et que vous n'en récoltez que 18, vous pouvez vérifier : la météo a-t-elle dévié de ce qui était prévu ? Y a-t-il eu un ombrage imprévu ? Le modèle physique vous donne un cadre pour comprendre l'écart.

C'est le type de prévision que propose Volcast — et dans les articles suivants, nous détaillerons chaque étape de la chaîne de simulation physique.
