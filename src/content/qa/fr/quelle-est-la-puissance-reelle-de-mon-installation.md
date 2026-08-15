---
title: "Quelle est la puissance réelle de mon installation ?"
description: "La puissance en kWc est la somme des watts-crête de vos modules, pas celle de l'onduleur. Où lire le bon chiffre et comment repérer une saisie fausse."
lang: fr
draft: true
category: "k2"
guide: "trois-chiffres-installation-photovoltaique"
translationKey: "qa-real-kwp"
seo:
  ogTitle: "kWc ou kW onduleur : quel chiffre saisir vraiment"
---
La puissance de votre installation en kWc, c'est **la somme des watts-crête inscrits sur vos modules, et rien d'autre**. Douze modules de 510 W font un champ de 6,12 kWc — même si l'onduleur accroché au mur affiche 5 kW, même si le devis de l'installateur a arrondi à « 6 kW », et même si l'application livrée avec l'onduleur montre encore un autre chiffre. Les modules se comptent en watts-crête (Wc) de puissance continue ; l'onduleur, lui, est noté en watts de puissance alternative en sortie. Les deux ne répondent pas à la même question.

## Pourquoi les deux chiffres diffèrent volontairement

Un onduleur plus petit que le champ de modules relève de l'ingénierie courante, pas de l'erreur. Un ratio DC/AC compris entre 1,1 et 1,3 est la norme : les modules n'atteignent leur puissance de plaque qu'en conditions de laboratoire, si bien que dimensionner l'onduleur sur la pointe réelle plutôt que sur la pointe théorique ne coûte presque rien en énergie perdue et fait économiser du matériel. Votre champ écrêtera quelques heures par an, autour du midi solaire en été, et c'est un arbitrage que le concepteur a fait en connaissance de cause.

C'est précisément pour cette raison que la puissance de l'onduleur est le mauvais chiffre à saisir dans une prévision. Une prévision modélise la quantité de lumière que vos modules captent — une affaire de surface et de rendement, ce que décrit justement le kWc. L'onduleur n'intervient qu'ensuite, comme un plafond.

## Où trouver le chiffre honnête

La plaque signalétique se trouve au dos de chaque module, et la même valeur figure sur la fiche technique laissée par l'installateur. Multipliez cette puissance par le nombre de modules. Si votre toiture compte plusieurs groupes orientés différemment, faites la somme groupe par groupe — une prévision en a besoin séparément, parce qu'un string plein est et un string plein ouest ne culminent pas aux mêmes heures.

Deux sources qui vous égareront : l'application de l'onduleur, qui rapporte le plus souvent sa puissance alternative, et le chiffre affiché en gros sur votre contrat, arrondi pour la lisibilité.

## À quoi ressemble un kWc faux dans vos données

La signature, c'est un **rapport constant**, et c'est ce qui la distingue d'une erreur de météo. Prenez cinq à dix journées franchement dégagées, réparties sur deux mois, et divisez pour chacune votre production réelle par la prévision. Les ratés de météo se dispersent : un jour au-dessus, un jour en dessous. Un kWc faux, lui, ne se disperse pas — chaque journée claire retombe sur à peu près la même fraction, parce que l'erreur est un multiplicateur fixe appliqué à chaque heure de chaque journée.

Si ces journées claires se regroupent autour de 0,8, vous avez saisi environ 20 % de puissance de plus que vous n'en possédez. Si elles se regroupent autour de 1,2, vous en avez saisi trop peu — c'est ce qui arrive quand on tape les 5 kW de l'onduleur à la place des 6,12 kWc des modules.

## Que faire

1. **Comptez les modules et lisez une plaque signalétique** : nombre de modules multiplié par les watts, orientation de toiture par orientation de toiture. Cinq minutes de travail, pour le chiffre le plus important de toute votre configuration.
2. **Saisissez les watts-crête en continu, pas les kW de l'onduleur** : un écart de 10 à 30 % entre les deux est attendu et parfaitement correct.
3. **Vérifiez le rapport sur les journées claires avant d'accuser la prévision** : un décalage constant est une erreur de configuration, un décalage dispersé n'est que de la météo.
4. **Recontrôlez après chaque modification** : modules ajoutés, module remplacé, second champ posé. Une puissance saisie une fois et jamais revue se périme en silence.
