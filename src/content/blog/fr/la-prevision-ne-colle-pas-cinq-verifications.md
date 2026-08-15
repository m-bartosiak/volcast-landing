---
title: "Prévision solaire décalée : 5 vérifications dans l'ordre"
description: "Avant d'accuser le modèle, écartez les quatre causes qui ressemblent à une erreur de prévision sans en être une. Un dernier test tranche le reste."
date: 2026-09-15
author: "Michał Bartosiak"
tags: []
lang: fr
draft: true
translationKey: "forecast-troubleshooting"
seo:
  ogTitle: "Votre prévision solaire ne colle pas à la réalité ? Vérifiez ces 5 points"
---
Quand la production et la prévision divergent, le modèle est le suspect évident, et le plus souvent le mauvais. Quatre des cinq causes les plus fréquentes sont des propriétés de votre installation dont la prévision n'a jamais été informée, et chacune laisse une empreinte différente de celle d'une vraie erreur météo. Prenez-les dans cet ordre — le moins coûteux et le plus probable d'abord — et la cinquième étape vous dira si ce qui reste vient réellement du ciel.

## 1. La puissance crête que vous avez saisie

Commencez par là : c'est la cause la plus fréquente et cela prend cinq minutes. Une prévision modélise la lumière que captent vos modules ; elle a donc besoin des watts-crête des modules, pas du calibre de l'onduleur. Douze modules de 510 W forment un champ de 6,12 kWc, même si un onduleur de 5 kW est accroché au mur.

L'empreinte est un **rapport constant** : chaque journée claire tombe à peu près à la même fraction de la prévision, parce qu'une puissance crête fausse agit comme un multiplicateur fixe sur toutes les heures. Si vos journées claires se regroupent autour de 0,8 ou autour de 1,2, arrêtez votre lecture ici et corrigez le chiffre — tout ce qui suit reste du bruit tant que ce n'est pas fait. La méthode complète est dans [comment connaître la puissance réelle de votre installation](/blog/fr/q/quelle-est-la-puissance-reelle-de-mon-installation/).

## 2. L'écrêtage à l'onduleur

Si l'écart n'apparaît qu'autour de midi, les jours les plus ensoleillés, et que votre courbe de production présente un sommet plat au lieu d'un pic, vous ne regardez pas une erreur de prévision. Vous regardez l'onduleur faire son travail : un champ plus puissant que l'onduleur est un dimensionnement standard, et il rogne une poignée d'heures par an.

Deux questions traitent ce point en détail — [pourquoi la production plafonne à midi](/blog/fr/q/production-solaire-plafonnee-a-midi/) et [si un onduleur plus petit que les panneaux est une erreur](/blog/fr/q/onduleur-plus-petit-que-les-panneaux/). En résumé : un sommet plat est une décision de dimensionnement, pas une panne, et la prévision ne peut en tenir compte que si elle connaît la limite de l'onduleur.

## 3. Les ombrages que le modèle ne voit pas

Une prévision sait où se trouve le soleil. Elle ne sait rien de la cheminée du voisin, du noyer, ni de la lucarne trois mètres plus à l'ouest. Les masques proches sont invisibles pour tout modèle à qui on ne les a pas explicitement décrits.

L'empreinte diffère des deux premières : l'erreur n'est **pas constante, mais elle revient à la même heure de la journée**. Le matin colle à la prévision, l'après-midi décroche, et cela se répète sur chaque journée claire de la même saison. Prenez cinq journées claires, comparez heure par heure plutôt qu'en totaux journaliers, et la forme trahit le coupable : une somme quotidienne masque précisément ce que vous cherchez.

Le plus déroutant est que cette forme se déplace au fil de l'année, parce que la hauteur du soleil change. Une ombre qui ne coûte rien en juin peut dévorer tout l'après-midi en octobre.

## 4. Salissure, neige et tout ce qui s'accumule lentement

L'encrassement a la signature la plus caractéristique de toutes : **une dérive lente, toujours dans le même sens**. Pas une mauvaise journée, pas une mauvaise semaine — un rapport qui valait 1,0 en avril et vaut 0,92 en juillet, sans le moindre événement à désigner. Pollen, poussière après une période sèche, sel près du littoral, fientes d'oiseaux sur un seul champ.

La neige est l'inverse : totale, évidente, et elle se résout d'elle-même. Elle mérite d'être citée seulement parce qu'un champ partiellement couvert peut produire si peu qu'on en conclut à une panne.

Le test est simple. Notez votre meilleure journée de ciel clair chaque mois. Cette courbe de référence personnelle rend la dérive visible comme aucune comparaison au jour le jour ne le fera, et elle repère aussi la vraie dégradation sur plusieurs années.

## 5. Maintenant, était-ce la météo ?

Si les quatre points précédents sont écartés, vous pouvez enfin poser la question correctement — et la réponse honnête est que les prévisions sont bel et bien moins bonnes sous les nuages.

Mesuré sur les relevés de production de nos propres utilisateurs : les jours de ciel clair, l'erreur médiane tourne autour de **10 %**, tandis que les jours de ciel entièrement couvert elle s'approche de **18 %**. Par forte nébulosité, environ **28 %** des journées manquent la cible de plus de 30 % dans un sens ou dans l'autre, contre **8 %** des journées claires. Point important : le biais médian reste proche de zéro dans chaque classe de temps — sous les nuages, la prévision ne surestime ni ne sous-estime systématiquement, elle devient simplement plus bruitée.

Cette distinction est tout l'intérêt de l'étape. **La dispersion, c'est la météo. Un décalage constant, c'est la configuration.** Si vos erreurs sont grandes mais tombent des deux côtés sur un grand nombre de journées, vous tenez la réponse et il n'y a rien à corriger. Si elles penchent toujours du même côté, retournez à l'étape 1.

Deux remarques pour comparer tout cela avec les chiffres publiés par les fournisseurs. La plupart des annonces de précision du secteur portent sur l'irradiance, ou sur la production agrégée d'un parc entier — deux grandeurs bien plus faciles à prévoir que les kilowattheures quotidiens d'une seule toiture. Et une journée isolée ne prouve rien, dans un sens comme dans l'autre : il faut des semaines de journées avant qu'une moyenne signifie quelque chose.

## Ce qu'il faut faire

1. **Corrigez la puissance crête en premier.** Nombre de modules multiplié par la puissance de l'étiquette, orientation par orientation. Rien d'autre ne vaut la peine d'être mesuré tant que ce chiffre est faux.
2. **Séparez les journées claires des journées couvertes** avant de calculer la moindre moyenne. Les mélanger produit un nombre qui ne décrit ni les unes ni les autres.
3. **Comparez heure par heure quand le total journalier paraît correct.** L'ombrage et l'écrêtage se cachent tous deux à l'intérieur d'une somme quotidienne d'apparence irréprochable.
4. **Notez votre meilleure journée claire chaque mois.** C'est l'instrument le moins cher dont vous disposez pour attraper une dérive lente.
5. **Jugez sur des semaines, pas sur des journées.** Et pour le fond du sujet, commencez par [comment vérifier que votre installation fonctionne](/blog/fr/q/verifier-que-son-installation-fonctionne/) et [pourquoi les panneaux n'atteignent jamais leur puissance nominale](/blog/fr/q/puissance-nominale-jamais-atteinte/).
