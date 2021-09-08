function SliderData(props) {
  const products = [
    {
      img: "/images/news1.jpg",
      title: "George Russell confirmé par Mercedes pour 2022",
      text: "Mercedes a officialisé la composition de son duo de pilotes pour la saison prochaine.",
      long: "Après avoir prolongé avec Lewis Hamilton pour deux années supplémentaires, l’écurie allemande a confirmé la venue d’une nouvelle recrue, George Russell, en lieu et place de Valtteri Bottas à partir de 2022. Toto Wolff, le patron de Mercedes, s’est déclaré enchanté de pouvoir accueillir un nouveau talent au sein de son équipe. Toto Wolff: 'Nous sommes ravis de confirmer que George Russell aura l’opportunité de franchir une nouvelle étape dans sa carrière en rejoignant Mercedes lors de la saison 2022.'",
      date: "Sun, 01 Aug 2021",
    },
    {
      img: "/images/news2.jpg",
      title: "Résultats du Grand Prix des Pays-Bas",
      text: "Max Verstappen a remporté le Grand Prix des Pays-Bas devant Lewis Hamilton et Valtteri Bottas.",
      long: "Ce résultat permet au Néerlandais de reprendre la tête du championnat du monde des pilotes pour 3 petits points. Pierre Gasly termine au pied du podium devant Charles Leclerc, Fernando Alonso, Carlos Sainz et Sergio Perez. Esteban Ocon  et Lando Norris complètent le top 10.",
      date: "Sun, 01 Aug 2021",
    },
    {
      img: "/images/news3.jpg",
      title: "Red Bull saisi la FIA au sujet de la légalité du moteur Mercedes",
      text: "Et une requête de plus !",
      long: "Selon Red Bull, Mercedes serait dans l’illégalité depuis le Grand Prix de Grande-Bretagne.L’écurie allemande est soupçonnée d’avoir augmenté la puissance de son moteur, ce qui est interdit au regard de la nouvelle réglementation. Les analystes de Red Bull se sont appuyés sur des données GPS pour appuyer leur argumentation. Il aurait ainsi été constaté que les flèches d’argent développeraient plus de puissance en sortie des virages lents. 20 chevaux auraient été gagnés selon les estimations. Toujours selon l’écurie autrichienne, les ingénieurs de Mercedes auraient pour cela, réussi à diminuer la température de l’air comprimé présent dans l’intercooler. Cela voudrait dire que les systèmes de capteurs de la FIA pourraient avoir été contournés à cet effet.",
      date: "1Sun, 01 Aug 2021",
    },
    {
      img: "/images/news4.jpg",
      title: "Kimi Raikkonen annonce son retrait définitif de la Formule 1",
      text: "Une page se tourne pour le vétéran de la Formule 1, Kimi Raikkonen, qui a annoncé sur les réseaux sociaux, l’arrêt de sa très longue carrière à compter de la fin de cette saison 2021.",
      long: "Lui qui est actuellement le dernier pilote à avoir été champion du monde au volant d’une Ferrari (c’était en 2007), pourrait poursuivre sa carrière dans le sport automobile et plus précisément, dans le championnat du monde des rallyes. Son écurie actuelle, Alfa Romeo, a immédiatement réagit à cette annonce en lui rendant hommage avec ces mots d’adieux : Dans notre sport, toute une époque touche vraiment à sa fin. Merci pour tout ! La Formule 1 ne sera plus jamais la même sans toi. Kiitos Kimi ! * La dernière phrase signifie “merci Kimi” en Finnois.",
      date: "Sun, 01 Aug 2021",
    },
    {
      img: "/images/news5.jpg",
      title: "Sebastian Vettel disqualifié du Grand Prix de Hongrie",
      text: "Comme on pouvait le craindre, Sebastian Vettel a perdu sa deuxième place chèrement acquise lors du Grand Prix de Hongrie.",
      long: "Après enquête des commissaires, il a été prouvé que le pilote allemand avait terminé la course avec seulement 300 grammes de carburant dans son réservoir au lieu d’1 litre préconisé. Cette sanction permet à Lewis Hamilton de s’octroyer la deuxième place et d’augmenter son avance au championnat du monde pilotes. L’écart entre le Britannique et son principal rival, Max Verstappen, est désormais de 8 points.",
      date: "Sun, 01 Aug 2021",
    },
  ];

  return products;
}

export default SliderData;
