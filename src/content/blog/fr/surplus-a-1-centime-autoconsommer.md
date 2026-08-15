---
title: "Surplus à 1,1 c€ : le plan pour autoconsommer plus"
description: "Le surplus n'est plus racheté que 1,1 c€/kWh. Voici comment calculer votre taux d'autoconsommation réel et quels appareils le font vraiment monter."
date: 2026-09-08
review: 2027-02-01
marketOnly: true
author: "Michał Bartosiak"
tags: []
lang: fr
draft: true
translationKey: "fr-surplus-autoconsommation"
seo:
  ogTitle: "Autoconsommation photovoltaïque : le calcul qui compte"
---

Vous avez un toit qui produit, et une seule question à trancher pour l'année qui vient : sur les kilowattheures que vos panneaux fabriquent, quelle proportion passe réellement par vos propres prises avant de repartir sur le réseau ? Depuis juin 2026, c'est à peu près la seule question qui déplace encore de l'argent chez un particulier. Vendre le surplus n'est plus un levier économique, c'est un lot de consolation. Tout le reste en découle, y compris l'heure à laquelle vous lancez le ballon d'eau chaude.

Le contexte réglementaire tient en quelques lignes, et il a déjà été commenté partout. L'arrêté tarifaire du 1er juin 2026, publié au Journal officiel le 4 juin 2026, s'applique aux demandes complètes de raccordement (DCR) déposées à partir du 5 juin 2026. Le surplus injecté y est racheté 1,1 c€/kWh HT, garanti vingt ans, indexé de 2 % par an, et ce tarif est gelé à la date de dépôt de la demande de raccordement. La prime à l'autoconsommation est supprimée pour ces mêmes dossiers, alors qu'elle atteignait encore 720 € pour 9 kWc au trimestre précédent. Et les installations jusqu'à 9 kWc ne relèvent plus de la vente totale : elles doivent être conçues en autoconsommation avec vente du surplus.

Une vérification avant tout le reste : si votre DCR a été déposée avant le 5 juin 2026, vos conditions d'origine sont gelées et vous les conservez. Le tarif d'achat et la prime du trimestre concerné restent les vôtres pour toute la durée du contrat. La suite vous concerne quand même, mais sans la même urgence.

## Le rapport qui décide de tout : un peu plus de dix-huit

Mettez les deux prix côte à côte. Un kilowattheure que vous consommez au moment où il est produit vous évite d'en acheter un : au tarif réglementé de vente, option Base, il valait 0,2001 € TTC en août 2026 pour un compteur de 3 ou 6 kVA. Un kilowattheure exporté vous rapporte 0,011 € HT. La division donne un peu plus de dix-huit.

Disons tout de suite ce que cette division a d'inconfortable, parce qu'on l'écrit rarement : **les deux nombres ne sont pas exprimés sur la même base**. Le prix d'achat est TTC, taxes et acheminement compris ; le tarif de rachat est HT. La comparaison reste juste du point de vue du foyer, puisque c'est bien une dépense TTC que vous évitez et une recette HT que vous encaissez, mais elle n'est pas homogène au sens comptable. Si vous voulez comparer deux quantités de même nature, comparez 0,011 € HT au prix HT de votre fourniture, et vous obtiendrez un rapport plus petit — toujours largement à l'avantage de l'autoconsommation, mais moins spectaculaire.

Ce qui compte en pratique, c'est l'écart, pas le rapport. Chaque kilowattheure que vous faites basculer de l'export vers votre propre consommation vaut **0,1891 €**, soit 0,2001 € que vous ne payez pas moins 0,011 € que vous ne touchez plus. Retenez ce nombre, tout ce qui suit s'y ramène. Un seul kilowattheure déplacé chaque jour, sur une année complète, représente environ 69 €.

Deux précisions honnêtes. D'abord, l'abonnement ne bouge pas : 190,32 € par an TTC en 6 kVA, que vous autoconsommiez tout ou rien. Le seul poste que vous pouvez attaquer est la part variable. Ensuite, le tarif réglementé bouge, lui. Il était à 0,1940 € TTC depuis le 1er février 2026, il est passé à 0,2001 € au 1er août 2026 dans le cadre d'une hausse moyenne de 2,5 % TTC, et la prochaine révision est fixée au 1er février 2027. À cette date, reprenez la soustraction avec le nouveau prix : le tarif de rachat, lui, ne progresse que de 2 % par an sur vingt ans, donc l'écart se creusera mécaniquement à chaque hausse du réglementé.

## Calculez votre taux réel, pas celui d'un article

Je ne vous donnerai pas de moyenne nationale du taux d'autoconsommation. Les chiffres qui circulent recouvrent des maisons, des tailles d'installation et des modes de vie trop différents pour dire quoi que ce soit d'utile sur la vôtre, et le seul nombre qui décide de votre facture est le vôtre. Il se calcule en dix minutes, avec deux relevés que vous possédez déjà.

**Ce dont vous avez besoin :**

- **P**, la production sur la période — le compteur d'énergie totale de votre onduleur, ou son application constructeur.
- **I**, l'énergie injectée sur la même période — elle figure sur le décompte de votre acheteur (EDF OA ou un acheteur alternatif), c'est la quantité qui vous a été payée.
- **S**, l'énergie soutirée sur la même période — sur votre facture de fourniture.

**Les deux taux, à ne pas confondre :**

- L'énergie autoconsommée vaut **A = P − I**.
- Le **taux d'autoconsommation** vaut **A / P**. Il répond à : quelle part de ma production reste chez moi ?
- Le **taux d'autoproduction** vaut **A / (A + S)**. Il répond à : quelle part de ma consommation vient de mon toit ?

Ces deux taux évoluent en sens contraire quand on agrandit une installation, et confondre les deux est l'erreur la plus fréquente dans les discussions de forum. Agrandir le champ fait monter l'autoproduction et descendre l'autoconsommation. Déplacer un usage fait monter les deux — c'est précisément ce qui rend le décalage d'usage supérieur à l'ajout de panneaux dans le contexte actuel.

**Trois précautions de mesure.** La production lue à l'onduleur et l'injection comptée au compteur ne sont pas mesurées au même endroit du circuit ; attendez-vous à un léger écart entre les deux relevés et ne construisez rien sur la troisième décimale. Ne calculez pas seulement sur douze mois : une moyenne annuelle mélange un mois de juin où vous exportez massivement et un mois de décembre où vous n'exportez presque rien, et la moyenne ne ressemble à aucun des deux. Refaites le calcul sur un mois d'été et un mois d'hiver séparément, c'est là que les décisions apparaissent. Enfin, si vous voulez descendre à l'heure plutôt qu'au mois, activez la courbe de charge dans votre espace client Enedis : elle vous montre les heures précises où vous soutirez alors que le toit produit, et ce sont exactement ces heures-là que vous allez attaquer.

## Quels appareils font vraiment bouger le chiffre

La règle de tri est unique : un appareil ne compte que si vous pouvez le faire tourner **pendant que le surplus existe**. Sa puissance importe peu, c'est l'énergie journalière déplaçable qui compte. Multipliez-la par 0,1891 € et vous avez la valeur d'une journée, à multiplier ensuite par le nombre de jours où le surplus est réellement là chez vous.

Plutôt que de vous donner des consommations moyennes qui ne seront pas les vôtres, voici où trouver vos propres nombres :

| Poste | Où lire votre chiffre | Déplaçable ? |
|---|---|---|
| Ballon d'eau chaude électrique | Volume réellement soutiré par jour × écart de température × 1,163 Wh par litre et par degré | Oui, entièrement, c'est le meilleur candidat |
| Recharge du véhicule électrique | Consommation aux 100 km de l'ordinateur de bord × kilomètres parcourus | Oui, si vous êtes à la maison en journée ou si la charge est pilotée |
| Pompe à chaleur, climatisation | Compteur dédié ou sous-comptage au tableau | Partiellement, en surchauffant ou pré-rafraîchissant à la mi-journée |
| Lave-linge, lave-vaisselle, sèche-linge | Étiquette énergie, en kWh par cycle | Oui, mais l'énergie en jeu est plus faible que celle du ballon |
| Talon de la maison (veilles, box, froid) | Le creux nocturne de votre courbe de charge | Non, et il n'y a rien à y gagner |

Le ballon arrive en tête pour une raison arithmétique. Prenez un exemple purement illustratif, à remplacer par vos propres valeurs : 150 litres renouvelés par jour, réchauffés de 15 à 55 °C. Avec 1,163 Wh par litre et par degré, qui est la capacité thermique de l'eau et non un chiffre de marché, cela fait 150 × 40 × 1,163 = environ 7 kWh. Déplacés du réseau vers le surplus, ils valent 1,32 € pour la journée. Aucun cycle de lave-vaisselle ne joue dans cette catégorie. Si votre cumulus est encore piloté par le contacteur jour/nuit, il chauffe la nuit, c'est-à-dire au pire moment possible pour un producteur — le sujet est traité en détail dans [Ballon, lave-linge, lave-vaisselle : à quelle heure ? →](/blog/fr/quand-lancer-lave-linge-et-ballon).

**Et voici la contrepartie, qu'on oublie systématiquement.** Les 0,1891 € ne sont acquis que si le kilowattheure aurait vraiment été exporté sans vous. S'il n'y a pas de surplus à l'heure où vous lancez la machine, vous ne gagnez rien : vous achetez au réseau exactement ce que vous auriez acheté plus tard, et si vous avez quitté vos heures creuses pour le faire, vous perdez la différence. Déplacer un usage vers midi un jour couvert de décembre est une opération à somme négative. C'est pour cela que la question « y aura-t-il du surplus demain, et entre quelles heures ? » est le vrai préalable, et c'est ce que fournit une [prévision de production](/blog/fr/prevision-production-photovoltaique) horaire calculée pour votre orientation, votre inclinaison et vos masques ; [Volcast](https://volcast.app/fr/) en publie une pour l'installation que vous déclarez.

## Le plafond de 1 600 heures par kWc

Voici le détail que presque personne n'explique et qui mérite deux minutes. L'énergie rachetée dans le cadre de l'obligation d'achat est plafonnée à **1 600 heures par an et par kWc installé**. Pour une installation de 6 kWc, cela signifie au plus 9 600 kWh achetés dans l'année ; pour 9 kWc, 14 400 kWh. Au-delà, l'énergie que vous injectez ne vous est plus payée.

Ce plafond porte sur l'énergie **injectée**, pas sur ce que vous produisez. Deux conséquences en découlent. D'une part, plus votre taux d'autoconsommation est élevé, plus vous vous en éloignez : c'est un plafond qui ne mord que sur les installations qui exportent la quasi-totalité de leur production. D'autre part, il pousse dans le même sens que le reste de l'arrêté. Combiné à la disparition de la vente totale sous 9 kWc, il ferme définitivement le modèle du grand toit dimensionné pour vendre. Pour savoir si vous en êtes proche, comparez simplement votre **I** annuel, celui que vous venez de relever, à 1 600 × votre puissance en kWc. Et si vous approchez du plafond, faites confirmer par votre acheteur la manière exacte dont il est appliqué à votre contrat.

## Le plan, dans l'ordre

1. **Vérifiez la date de votre DCR.** Avant le 5 juin 2026, vos conditions sont gelées et votre calcul de rentabilité n'a pas changé. À partir du 5 juin 2026, le rachat est à 1,1 c€/kWh HT et il n'y a plus de prime.
2. **Relevez P, I et S** sur les douze derniers mois, puis séparément sur un mois d'été et un mois d'hiver. Calculez A = P − I, puis votre taux d'autoconsommation A / P et votre taux d'autoproduction A / (A + S).
3. **Comparez votre I annuel à 1 600 × votre puissance en kWc** pour savoir si le plafond vous concerne.
4. **Listez vos usages déplaçables en kWh par jour**, en lisant vos propres compteurs plutôt que des moyennes. Ballon d'abord, véhicule ensuite, pompe à chaleur, puis l'électroménager.
5. **Chiffrez chaque geste** : kWh déplacés × 0,1891 €, multiplié par le nombre de jours où le surplus existe vraiment. Un kWh par jour déplacé toute l'année vaut environ 69 €.
6. **Commencez par le ballon d'eau chaude.** Sortir le cumulus du contacteur jour/nuit pour le faire chauffer dans la fenêtre de production est le geste au meilleur rapport effort/euro de toute la liste.
7. **Ne déplacez que si le surplus existe.** Les jours couverts, le décalage d'usage ne rapporte rien et peut coûter la différence entre heures pleines et heures creuses. Décidez la veille, sur une prévision, pas sur l'horloge.
8. **Reprenez la soustraction le 1er février 2027**, à la prochaine révision du tarif réglementé. Le prix d'achat montera plus vite que le tarif de rachat, qui n'est indexé que de 2 % par an, et la valeur de chaque kilowattheure autoconsommé augmentera d'autant.

Si vous cherchez ensuite les leviers concrets pour faire monter le taux que vous venez de calculer, la suite logique est [Augmenter son autoconsommation : 7 leviers concrets →](/blog/fr/augmenter-son-autoconsommation-solaire).
