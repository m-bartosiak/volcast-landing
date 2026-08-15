---
title: "Prix négatifs de l'électricité : ce que ça change en PV"
description: "Pourquoi le prix de l'électricité passe sous zéro, ce que ça change pour le surplus que vous injectez et comment tirer parti de ces heures chez vous."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "negative-prices"
seo:
  ogTitle: "Prix négatifs de l'électricité et photovoltaïque domestique"
---
Un prix négatif de l'électricité signifie que, pendant l'heure concernée, injecter sur le réseau *coûte* de l'argent au lieu d'en rapporter, et que soutirer est récompensé. Cela paraît absurde, mais c'est la conséquence logique d'un système électrique riche en solaire et en éolien : quand un beau milieu de journée de week-end rencontre une demande faible, la production dépasse la consommation et une partie des moyens ne peut pas baisser assez vite. Le prix descend sous zéro jusqu'à ce que quelqu'un consomme davantage ou produise moins.

## Ce qui se passe sur le marché français

En France, les prix horaires se forment sur le marché de gros, principalement sur EPEX SPOT pour la livraison du lendemain. RTE, gestionnaire du réseau de transport, doit maintenir en permanence l'équilibre entre injection et soutirage, et la CRE régule l'ensemble.

La particularité française tient à la structure du parc : un socle de production nucléaire important, peu modulable à très court terme, auquel s'ajoutent chaque année des gigawatts de solaire supplémentaires. Quand un week-end de printemps ensoleillé et venteux tombe sur une demande basse — pas de chauffage, pas de climatisation, industrie à l'arrêt —, l'offre déborde et le prix décroche. Ces épisodes, longtemps rares et cantonnés à quelques heures par an, se sont nettement multipliés au fil de la croissance du parc solaire, en France comme chez ses voisins.

## Ce que ça change pour vous, propriétaire d'une installation

Tout dépend de la façon dont votre production est valorisée, et il existe deux mondes très différents.

Si vous êtes en obligation d'achat — le cas de l'immense majorité des installations résidentielles —, vous vendez votre surplus à un tarif fixé par arrêté, indépendant du prix de marché heure par heure. Interrogé au Sénat le 2 juillet 2026 au sujet du nouveau tarif unique, le gouvernement a confirmé que ce tarif est versé aussi bien pendant les heures à prix positif que pendant les heures à prix négatif. Autrement dit, une heure de prix spot sous zéro ne vous retire rien directement.

Si votre production est valorisée au prix de marché — vente directe, agrégateur, installation plus puissante —, l'exposition est immédiate et une heure négative coûte réellement de l'argent.

Il existe par ailleurs, en Europe comme en France, des mécanismes qui suspendent la rémunération pendant les heures de prix négatif au-delà de certains seuils de puissance. Ces seuils changent au fil des arrêtés : ne les recopiez pas depuis un blog. Vérifiez le texte en vigueur sur Légifrance, ou la synthèse de photovoltaique.info, avant d'en tirer le moindre calcul.

La direction, elle, est universelle et ne dépend d'aucun de ces détails : **pendant les heures à prix négatif, l'énergie injectée ne vaut rien, ou moins que rien, pour le système électrique.** Et comme la revente du surplus ne pèse plus grand-chose dans l'économie d'une installation française depuis la réforme tarifaire de juin 2026, tout ce que vous autoconsommez ou stockez vaut mécaniquement davantage. Injecter sans réfléchir rapporte de moins en moins.

## Trois choses à faire tout de suite

**1. Déplacez vos consommations exactement dans ces heures-là.** Un prix négatif, c'est le système électrique qui dit « il y a trop d'énergie » : lave-linge, lave-vaisselle, ballon d'eau chaude au maximum, voiture branchée sur la borne. Ce qui relève de l'optimisation un jour normal devient une évidence dans ces heures-là.

**2. Chargez la batterie, au besoin depuis le réseau.** Si vous êtes sur une offre à prix horaire, soutirer pendant les heures négatives est de fait rémunéré. Une batterie remplie à ce moment-là se décharge ensuite dans la rampe chère du soir : de l'arbitrage à l'état pur.

**3. Limitez l'injection si votre onduleur le permet.** Certaines configurations autorisent à réduire ou annuler l'injection pendant les heures sans valeur, et à réorienter l'énergie vers la maison ou vers la batterie — un routeur solaire fait très bien ce travail sur un ballon d'eau chaude. C'est un réglage à cadrer avec votre installateur plutôt qu'à improviser : une limitation mal configurée vous fait aussi perdre de la production aux heures où elle valait quelque chose.

## Comment savoir à l'avance que ces heures arrivent ?

Les prix du lendemain sont publiés l'après-midi de la veille : les heures négatives sont visibles avant d'arriver. L'autre moitié du tableau, c'est votre propre production, car les prix négatifs tombent presque toujours sur des milieux de journée ensoleillés, c'est-à-dire précisément sur votre pic. Les prix, plus une [prévision horaire de votre installation →](/blog/fr/prevision-production-photovoltaique), donnent un plan de journée complet en cinq minutes le soir. La détection de bridage de Volcast signale par ailleurs les moments où votre installation est effectivement freinée : cela vaut la peine d'y jeter un œil, car ces épisodes deviennent ordinaires.

## Une tendance, pas un incident

Le nombre d'heures à prix très bas ou négatif augmente en Europe avec chaque gigawatt solaire installé, et la France n'y échappe pas — d'autant moins que son parc de production est peu modulable à court terme. Ce n'est pas une anomalie qu'il suffirait d'attendre : c'est la nouvelle structure du marché, et elle récompense les maisons flexibles, celles qui savent décaler, stocker et automatiser. C'est exactement ce qui fait grandir les systèmes de gestion de l'énergie domestique (EMS), qui prennent ces décisions à votre place.

## FAQ

**Une petite installation domestique risque-t-elle vraiment de payer pour injecter ?**
En obligation d'achat, non : le tarif est versé y compris pendant les heures à prix négatif. Les prélèvements directs concernent surtout les installations exposées au prix de marché sans filtre. Le message économique reste le même dans les deux cas : l'autoconsommation bat l'injection.

**Quand surviennent les prix négatifs ?**
Les week-ends et jours fériés ensoleillés, du printemps au début de l'été, généralement entre 11 h et 15 h, et tout particulièrement quand l'éolien produit beaucoup au même moment.

**Faut-il couper l'onduleur ?**
En général non : mieux vaut consommer cette énergie dans la maison. Limiter l'injection n'a de sens que là où injecter pendant les heures négatives vous coûte réellement quelque chose.
