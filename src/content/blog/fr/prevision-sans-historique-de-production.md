---
title: "Une installation neuve n'a pas besoin d'historique"
description: "La plupart des outils de prévision réclament des mois de données. Un modèle physique fonctionne dès le premier jour : voici pourquoi et ce que ça change."
date: 2026-05-26
tags: ["cold-start", "new-installation", "physics-model", "onboarding", "forecasting"]
series: "deep-dives"
seriesOrder: 7
lang: fr
draft: false
seo:
  ogTitle: "Aucun historique nécessaire : pourquoi la prévision physique fonctionne dès le premier jour"
  keywords: ["prévision production installation neuve", "prévision solaire sans historique", "démarrage à froid prévision photovoltaïque", "modèle physique sans données"]
relatedPosts: ["prevision-solaire-physique-ou-machine-learning", "trois-chiffres-installation-photovoltaique", "modeles-de-transposition"]
---

Vos panneaux viennent d'être posés. L'onduleur tourne, l'application affiche la production en temps réel, et vous avez hâte de voir ce que ça donne. Une question arrive tout de suite : combien vais-je produire demain ? Puis-je organiser mes consommations autour de la prévision ?

Si vous utilisez un outil fondé sur l'apprentissage automatique (*machine learning*), la réponse est : patientez. Revenez dans deux ou trois mois, quand nous aurons assez de données pour apprendre le comportement de votre installation.

Si vous utilisez un outil fondé sur la physique comme Volcast, la réponse est : tout de suite. Voici la courbe de production horaire de demain.

Cet avantage au démarrage — le fameux « cold start » — n'est pas un argument commercial. C'est la conséquence directe de la façon dont les deux approches fonctionnent.

## Pourquoi le machine learning a besoin de données d'apprentissage

Un modèle d'apprentissage automatique est, au fond, un détecteur de motifs. Il apprend les relations entre des entrées (les conditions météo) et des sorties (votre production) en observant de nombreux exemples. Sans exemples, il n'a rien à quoi se raccrocher.

Regardez ce que le modèle doit apprendre pour votre installation en particulier : combien vous produisez par ciel dégagé aux différentes périodes de l'année (ce qui capture l'orientation de vos modules, leur inclinaison et les ombrages fixes). Comment la température affecte vos panneaux précis (ce qui dépend de leur coefficient de température, de leur mode de pose et de leur ventilation). Comment la nébulosité se traduit en baisse de production (ce qui dépend de votre orientation et des régimes nuageux habituels de votre commune).

Chacun de ces points exige des données couvrant des conditions différentes. Pour apprendre la variation saisonnière, le modèle a idéalement besoin d'une année complète. Pour apprendre le comportement sous les nuages, il lui faut des dizaines de journées couvertes. Pour caractériser les effets thermiques, il lui faut des journées chaudes et des journées froides à irradiance comparable.

En pratique, la plupart des modèles statistiques deviennent « utilisables » après deux ou trois mois et « bons » après six à douze mois. Avant cela, ils sont soit indisponibles, soit en train de deviner à partir d'installations voisines : ce qui est déjà une forme d'approximation physique, en plus grossier.

## Pourquoi la physique n'a pas besoin d'historique

Un modèle physique n'apprend pas le comportement de votre installation par l'observation. Il le *calcule* à partir de premiers principes.

À partir de votre inclinaison, il sait exactement comment les rayons du soleil rencontrent vos modules à chaque instant de chaque jour de l'année. C'est de la géométrie, pas de la statistique.

À partir de votre orientation, il sait à quel moment vos panneaux font face au soleil le plus directement, ce qui dessine la forme de la courbe journalière. De la trigonométrie pure.

À partir de votre puissance crête, il connaît le facteur d'échelle entre l'irradiance reçue et la puissance électrique produite. Un seul nombre, qui résume la surface et le rendement des modules.

À partir de votre localisation, il calcule la course du soleil (astronomie), sélectionne le point de grille pertinent du modèle météo et applique des modèles atmosphériques calés sur des décennies de mesures : pas vos mesures à vous, mais la physique atmosphérique fondamentale, valable partout sur Terre.

Le coefficient de température ? Les modules en silicium cristallin se regroupent étroitement entre −0,35 et −0,45 %/°C. Retenir la valeur typique de −0,4 %/°C introduit au pire 1 à 2 % d'écart les jours de température extrême. C'est en dessous de l'incertitude de la prévision météo elle-même.

Le rendement de l'onduleur ? Les onduleurs modernes travaillent entre 96 et 98 % sur l'essentiel de leur plage de puissance. Retenir 97 % suffit largement pour prévoir.

Les pertes câbles ? Typiquement 1 à 3 %, à peu près constantes. Elles rabotent le résultat de façon uniforme, sans déformer l'allure de la prévision.

Aucun de ces paramètres n'exige d'observer votre installation. Ce sont des propriétés physiques que l'on peut estimer à partir de connaissances générales avec une exactitude acceptable pour prévoir.

## Le premier jour, concrètement

Voici ce qui se passe quand vous configurez Volcast le jour même de la mise en service :

Vous saisissez trois nombres : inclinaison, orientation, puissance crête. Votre téléphone fournit la localisation. En quelques secondes, le modèle déroule la simulation physique complète pour la prévision du lendemain : calcul de la position du soleil, récupération des données du modèle météo, modélisation du rayonnement atmosphérique, décomposition de l'irradiance, transposition de Perez sur votre plan incliné, déclassement thermique et estimation de la puissance délivrée.

Vous obtenez une courbe de production horaire pour demain. Elle montre la montée du matin à partir du lever du soleil, le maximum autour du midi solaire (décalé par votre orientation), la décroissance de l'après-midi, et le total journalier estimé.

Cette prévision est-elle parfaite ? Non. Elle porte toute l'incertitude de la prévision météo sous-jacente, essentiellement celle des nuages. Mais elle est physiquement fondée. La forme de la courbe est juste, parce que la géométrie ne ment pas. Le niveau est calé sur votre puissance crête. Les effets thermiques sont modélisés depuis la thermodynamique.

À comparer avec « merci de patienter trois mois ». Pour un nouveau propriétaire impatient de comprendre son installation, cette attente est une éternité.

## Quand l'historique aide vraiment

Cela ne veut pas dire que les données historiques ne servent à rien. Si vous utilisez Volcast depuis six mois et que vous constatez une surestimation systématique de 8 %, cela vous dit quelque chose : peut-être un ombrage non déclaré, peut-être une orientation réelle un peu différente de celle saisie, peut-être un onduleur qui écrête plus tôt que le modèle ne le suppose.

Le modèle physique fournit la référence. La comparaison historique fournit le recalage. Ensemble, ils sont plus précis que chacun séparément.

Les prochaines versions de Volcast pourront intégrer davantage cette auto-calibration, en utilisant vos données de production réelles (si vous choisissez de les partager) pour affiner les paramètres du modèle physique. Mais le mot important est « affiner ». La physique vous amène à 90-95 % du résultat dès le premier jour. La calibration polit les derniers pourcents.

## Ce que cela implique plus largement

L'avantage au démarrage n'est pas qu'une question de confort. Il a des conséquences sur tout l'écosystème de la prévision solaire.

**Accessibilité :** une prévision qui fonctionne immédiatement est une prévision qui fonctionne pour tout le monde, y compris ceux qui viennent de faire poser des panneaux, ceux qui ont changé de plateforme d'onduleur, ou ceux qui n'ont simplement aucune envie de gérer des exports et des imports de fichiers.

**Confidentialité :** une prévision physique n'a pas besoin de votre historique de production. Vos paramètres d'installation (inclinaison, orientation, puissance) ne sont pas des données sensibles : ils se lisent sur une photo satellite de votre toiture. Vous obtenez une prévision sans céder vos habitudes de consommation.

**Robustesse :** quand quelque chose change — vous ajoutez des modules, un arbre pousse, votre onduleur est remplacé — un modèle physique s'ajuste immédiatement avec les nouveaux paramètres. Un modèle statistique doit réapprendre, parfois depuis zéro.

**Passage à l'échelle :** un modèle physique produit une prévision pour n'importe quel point du globe à partir de trois entrées. Aucune donnée d'apprentissage à accumuler pour chaque nouvelle installation, région ou pays.

C'est pour cela que Volcast a choisi l'approche physique d'abord. Les lois de la thermodynamique, de l'optique et de la physique des semi-conducteurs n'ont pas de période d'apprentissage. Elles fonctionnent dès le premier jour, partout, pour toutes les installations.

Trois nombres. Aucun historique. Juste dès la première prévision.
