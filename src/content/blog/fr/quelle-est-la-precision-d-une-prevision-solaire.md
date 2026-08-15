---
title: "Quelle est vraiment la précision d'une prévision solaire ?"
description: "Mesuré sur 10 331 jours de production réelle : l'erreur médiane journalière, ce que les nuages y changent, et comment calculer le chiffre pour votre toit."
date: 2026-09-22
author: "Michał Bartosiak"
tags: []
lang: fr
draft: true
translationKey: "forecast-accuracy"
seo:
  ogTitle: "Quelle est la précision d'une prévision de production solaire ?"
---
La réponse courte, pour une toiture unique, mesurée sur les relevés de production de nos propres utilisateurs : **l'erreur médiane journalière tourne autour de 10 % par ciel clair et autour de 18 % par ciel entièrement couvert**. Un seul chiffre par journée, qui compare la prévision du jour aux kilowattheures que l'onduleur a réellement produits — pas l'irradiance, pas une moyenne de parc, et pas un meilleur cas.

La plupart des chiffres de précision publiés ne se comparent pas à celui-là, et la raison compte davantage que les chiffres eux-mêmes.

## Ce que fait vraiment l'erreur quand les nuages arrivent

![Erreur médiane journalière de prévision selon la nébulosité, avant et après calibration, mesurée sur 10 331 jours](/img/blog/forecast-error-by-cloud-fr.webp)

La cohorte compte 137 installations disposant d'au moins 20 jours de données et d'au moins cinq journées claires. Quinze autres ont été écartées parce que leur rapport prévision/production par ciel clair sortait de la plage 0,75–1,33 : c'est la signature d'une puissance mal saisie, pas d'une erreur de prévision. Les garder faisait passer la part de journées claires manquées de plus de 30 % de 8 % à 14 %.

Deux choses se lisent sur ce graphique, et la seconde est celle que presque personne ne publie.

La première : l'erreur monte régulièrement avec la nébulosité, de 9,7 % dans la classe la plus dégagée à 18,2 % dans la plus couverte. Pas de décrochage brutal, pas de surprise — une pente régulière, parce que les passages nuageux sont sincèrement la chose la plus difficile à prévoir de tout ce problème.

La seconde : **le biais médian reste compris entre 0,96 et 1,01 dans chaque classe**. Le biais, c'est la direction ; l'erreur, c'est la taille. Un modèle qui surestimerait systématiquement sous les nuages ferait dériver ce rapport nettement en dessous de 1, et ce n'est pas le cas ici. Autrement dit, quand votre prévision se trompe un jour couvert, elle a à peu près autant de chances d'avoir visé trop haut que trop bas. Sous mauvais temps, la prévision ne devient pas pessimiste — elle devient plus dispersée.

La distinction n'a rien d'académique. Une erreur aléatoire se compense sur une semaine, et c'est précisément pour cela qu'une planification hebdomadaire tient debout là où une journée isolée échoue. Une erreur systématique, elle, ne se compense jamais : c'est celle qui mérite qu'on la traque.

## Pourquoi comparer avec les chiffres des fournisseurs est surtout un piège

On trouve dans le secteur des annonces de précision de 5 à 15 %. La plupart mesurent quelque chose de plus facile que votre toit.

Prévoir l'irradiance est plus simple que prévoir la production, parce que l'exercice s'arrête juste avant la partie sale : votre inclinaison, le point d'écrêtage de votre onduleur, vos ombrages, le coefficient de température. Prévoir un agrégat de parc est plus simple que prévoir un site unique, parce que les erreurs de cent toitures se neutralisent entre elles — c'est mécaniquement ce que fait une moyenne, et cela flatte le chiffre dans de grandes proportions. Quant à une précision annoncée sur les seules journées de ciel clair, c'est encore une autre affirmation.

La nôtre est la version difficile de la mesure : une toiture, une journée, des kilowattheures réels. Quand vous comparez, la seule question qui vaille est de savoir ce qui a été mesuré exactement.

## La partie que vous pouvez vérifier vous-même

Rien de ce qui précède ne vaut grand-chose si vous ne pouvez pas le contrôler. Voici donc la méthode — c'est la même que celle que nous utilisons en interne.

1. **Prenez au moins quatre semaines de journées.** En dessous, vous mesurez la météo, pas la précision. Une seule mauvaise journée ne prouve rien, ni dans un sens ni dans l'autre.
2. **Pour chaque journée, calculez |prévision − réel| ÷ réel.** C'est l'erreur relative absolue du jour. Prenez la médiane de ces valeurs, pas la moyenne : sinon une journée d'orage écrase à elle seule tout le résultat.
3. **Séparez les journées claires des journées couvertes** avant de moyenner quoi que ce soit. Les mélanger produit un nombre qui ne décrit ni les unes ni les autres, et c'est de loin l'erreur la plus fréquente dans ces comparaisons.
4. **Vérifiez la direction à part.** Faites la moyenne de prévision ÷ réel sur vos journées claires. Un résultat proche de 1,0 signifie que la taille de votre installation est correctement saisie. Un résultat systématiquement voisin de 0,8 ou de 1,2 signifie qu'elle ne l'est pas, et aucun modèle de prévision ne corrigera cela à votre place.

L'étape 4 est l'origine réelle de la plupart des résultats décevants. Un décalage constant est un problème de configuration déguisé en problème de prévision, et il vaut mieux l'écarter avant de juger quoi que ce soit d'autre.

## Ce qu'apporte la calibration

Les barres indigo du graphique correspondent au modèle physique brut ; les vertes, à l'état obtenu une fois que la boucle de calibration a observé votre toiture pendant une quinzaine de jours. L'écart est constant — deux à trois points dans chaque classe de temps, soit un effet plus important que la différence entre deux fournisseurs de prévision concurrents.

C'est aussi pourquoi une précision annoncée au premier jour ne signifie pas grand-chose. Un modèle qui n'a jamais vu votre installation travaille à partir de la puissance, de l'inclinaison et de l'orientation que vous avez déclarées — des approximations d'une vraie toiture, avec une vraie cheminée dessus.

## Le résumé honnête

Pour une toiture unique, sur des kilowattheures journaliers, sur toute la gamme des conditions météo : **la journée médiane tombe à environ 11 à 18 % près selon la nébulosité**, sans penchant systématique dans un sens ou dans l'autre, et environ 8 % des journées claires comme 28 % des journées fortement couvertes manquent la cible de plus de 30 %.

C'est assez bon pour caler un lave-linge, une recharge de véhicule électrique ou un cycle de pompe à chaleur sur la fenêtre de production de demain. Ce n'est pas assez bon pour arbitrer un achat d'énergie sur le chiffre d'une seule journée, et quiconque vous affirme le contraire, à propos de n'importe quelle prévision, a quelque chose à vous vendre.
