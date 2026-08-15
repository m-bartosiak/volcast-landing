---
title: "Les trois chiffres qui définissent votre installation PV"
description: "Inclinaison, orientation et puissance crête : un modèle physique n'a besoin que de ces trois nombres pour prévoir la production de votre installation."
date: 2026-03-24
tags: ["setup", "parameters", "getting-started", "pv-basics", "beginner"]
series: "fundamentals"
seriesOrder: 5
lang: fr
draft: false
seo:
  ogTitle: "Les trois chiffres qui définissent votre installation photovoltaïque (et pourquoi ils suffisent)"
  keywords: ["paramètres installation photovoltaïque", "configurer une prévision de production", "inclinaison orientation puissance crête", "configuration Volcast"]
relatedPosts: ["inclinaison-et-azimut-des-panneaux", "comment-fonctionne-un-panneau-solaire"]
---

La plupart des outils de prévision photovoltaïque réclament une liste interminable de paramètres, ou exigent des semaines d'historique de production avant de produire quoi que ce soit d'utile. Volcast demande trois chiffres, plus votre localisation — que votre téléphone connaît déjà. C'est tout.

Ce n'est pas une limitation, c'est un choix de conception qui découle du fonctionnement même de la modélisation physique. Voyons ce que chacun de ces trois nombres apprend au modèle, et pourquoi trois suffisent.

## Chiffre 1 : l'inclinaison

**De quoi s'agit-il :** l'angle de vos modules par rapport à l'horizontale, en degrés. 0° correspond à un module à plat, 90° à un module vertical.

**Ce que cela dit au modèle :** comment calculer l'angle d'incidence — l'angle entre les rayons solaires et la surface du module — à chaque instant de la journée. C'est ce qui détermine directement quelle part du rayonnement direct disponible votre module intercepte.

L'angle d'incidence alimente aussi le calcul de la **réflexion de Fresnel**. Aux angles rasants, quand la lumière frappe le verre presque de côté, une part croissante rebondit au lieu d'entrer dans la cellule. C'est exactement la physique qui rend la surface d'un lac miroitante au coucher du soleil.

**Comment le trouver :** si vos modules sont posés sur une toiture en pente, l'inclinaison est égale à la pente de toit. En France, la pente des toitures d'habitation se situe très souvent entre 30 et 35°, ce qui place la majorité des installations résidentielles à quelques degrés seulement de l'optimum. Si vous ignorez la pente de votre toit, une application inclinomètre posée contre le module donne la réponse en quelques secondes. Pour une toiture-terrasse ou une pose au sol, l'inclinaison est celle du châssis de montage.

**Sensibilité :** comme nous l'avons vu dans l'article précédent, le productible annuel varie lentement avec l'inclinaison. Une erreur de 5° modifie la production d'environ 1 à 2 %. Inutile de vous torturer : une estimation raisonnable convient parfaitement.

## Chiffre 2 : l'orientation (azimut)

**De quoi s'agit-il :** la direction vers laquelle regardent vos modules. Attention à une source de confusion très fréquente en France : les sites spécialisés comptent souvent l'azimut **depuis le sud** (plein sud = 0°, ouest = +90°, est = −90°), alors que Volcast, comme la plupart des outils et des API météo, le compte **depuis le nord** (plein sud = 180°, est = 90°, ouest = 270°). Les deux conventions décrivent la même chose ; il faut simplement savoir laquelle vous êtes en train de saisir. En cas de doute, raisonnez en mots — « sud », « sud-ouest » — puis convertissez.

**Ce que cela dit au modèle :** à quel moment de la journée vos modules reçoivent le plus de rayonnement direct. Un champ plein sud culmine au midi solaire. Un champ orienté à l'est culmine le matin. C'est ce paramètre qui donne sa forme à toute la courbe de production journalière.

L'orientation influence aussi la quantité de rayonnement réfléchi par le sol qui atteint le module — un champ tournant le dos à une surface enneigée perd cette réflexion — ainsi que la répartition du rayonnement diffus dans le champ de vision du module.

**Comment le trouver :** une application boussole, pointée dans la direction de vos modules, vous donne l'azimut. Vous pouvez aussi regarder votre toiture sur une vue satellite : dans l'hémisphère nord, le sud est vers le bas de l'image. Si votre installation est répartie en est-ouest, vous pouvez déclarer deux champs distincts dans Volcast.

**Sensibilité :** comme pour l'inclinaison, le productible annuel varie en douceur. Un écart de 30° par rapport au plein sud coûte environ 3 à 5 %. Même des modules plein est ou plein ouest captent encore 80 à 85 % du maximum théorique.

## Chiffre 3 : la puissance crête (kWc)

**De quoi s'agit-il :** la puissance nominale de votre installation, en kilowatts-crête (kWc). C'est la puissance délivrée en conditions de test standard (STC) : 1 000 W/m² d'irradiance, 25 °C de température de cellule, spectre solaire AM1.5.

Notez bien l'unité : en français, on écrit **kWc**, pour kilowatt-crête. C'est exactement la même grandeur que celle notée avec un « p » de *peak* dans les documentations anglophones, mais cette notation-là n'a pas cours ici — et la voir dans un texte français est le signe d'une traduction bâclée.

**Ce que cela dit au modèle :** le facteur d'échelle de tout le calcul. Le moteur physique détermine quelle fraction de l'irradiance STC atteint votre plan incliné à un instant donné, applique les pertes thermiques et optiques, puis multiplie par votre puissance crête pour obtenir la puissance attendue en watts.

Dans un modèle physique, la puissance crête est le pont entre le modèle d'irradiance, qui produit des W/m² utilisables, et la production électrique, qui est ce qui vous intéresse. Elle résume en un seul nombre le rendement des modules, la surface totale et les caractéristiques des cellules.

**Comment la trouver :** elle figure sur votre devis ou votre contrat d'installation, sur l'écran de votre onduleur, ou sur l'étiquette au dos des modules. Valeurs résidentielles courantes : 3 à 15 kWc. Une installation de 10 modules de 400 Wc fait 4,0 kWc.

**Sensibilité :** c'est le chiffre à ne pas rater. Une erreur de 10 % sur la puissance crête donne une erreur de 10 % sur la prévision : la relation est linéaire. Heureusement, c'est aussi le chiffre le plus facile à connaître exactement, puisqu'il est écrit noir sur blanc sur vos documents.

## Et la localisation ?

La localisation est techniquement une quatrième entrée, mais Volcast la récupère automatiquement depuis le GPS de votre téléphone, ou vous laisse la pointer sur une carte. À partir de vos coordonnées, le modèle déduit tout ce qu'il doit savoir de la course du soleil : déclinaison solaire, angles horaires, heures de lever et de coucher du soleil, hauteur et azimut du soleil à chaque instant de l'année.

La localisation sert aussi à choisir le point de grille de la prévision météo. Les données des modèles météo arrivent sur une grille géographique — typiquement 0,1 à 0,25° de maille pour les modèles régionaux — et votre position détermine quelles mailles sont utilisées et comment elles sont interpolées.

## Pourquoi pas davantage de paramètres ?

Vous vous demandez peut-être : le modèle ne devrait-il pas connaître votre marque de modules, le rendement de votre onduleur, les pertes de câblage ou vos ombrages ?

Voici le point essentiel : pour une **prévision**, les paramètres supplémentaires ont un rendement décroissant.

**La marque et le modèle de panneau** n'agissent guère que sur la puissance crête, que vous fournissez déjà, et sur le coefficient de température. Or les coefficients de température des modules au silicium se regroupent étroitement entre −0,35 et −0,45 %/°C. Utiliser la moyenne introduit peut-être 1 à 2 % d'erreur lors des journées chaudes : du bruit, comparé à l'incertitude météo.

**Le rendement de l'onduleur**, supérieur à 96-98 % sur les modèles modernes, correspond à 2 à 4 % de pertes. L'écart entre marques est minuscule, peut-être 1 % entre un bon et un excellent onduleur. Là encore, sous le niveau de bruit de la prévision météo.

**Les pertes de câblage** valent typiquement 1 à 3 % et restent assez constantes. Elles décalent tout de la même façon, sans modifier la forme de la prévision.

**L'ombrage** est le seul paramètre qui compte vraiment et que les trois chiffres ne capturent pas. Si vous subissez des masques significatifs — arbres, cheminée, bâtiments voisins — votre production réelle sera systématiquement inférieure à la prévision. C'est une limite connue : Volcast vous donne le maximum théorique pour votre orientation, à vous d'ajuster mentalement pour les masques que vous connaissez. Une modélisation des ombrages pourra arriver dans de futures versions.

La philosophie est la suivante : **capturer la physique qui compte le plus avec le moins d'entrées possible**. Inclinaison, orientation et puissance crête vous amènent à 90-95 % de précision. Les 5 à 10 % restants viennent de facteurs soit difficiles à mesurer précisément — ombrages, salissures — soit si peu variables d'une installation à l'autre qu'une moyenne suffit, comme les coefficients de température ou le rendement des onduleurs.

## La comparaison avec le machine learning

Cette simplicité est un avantage direct sur les approches par apprentissage automatique. Un modèle de machine learning a besoin de semaines ou de mois d'historique de production pour apprendre ce que fait votre installation dans telles ou telles conditions. Tant qu'il n'a pas ces données, il ne peut rien prévoir. Et si les conditions changent — un arbre qui grandit et crée un nouveau masque, la dégradation des modules, l'ajout de panneaux — il lui faut du temps pour réapprendre.

La physique, elle, n'a pas de période d'apprentissage. Avec trois chiffres et une prévision météo, elle calcule la production attendue à partir des premiers principes : les mêmes qui régissaient l'énergie solaire bien avant que vos modules ne sortent d'usine.

C'est toute la force d'une modélisation de la physique plutôt que d'un ajustement sur les données.
