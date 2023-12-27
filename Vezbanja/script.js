let student = {
  ime: "Milos",
  prezime: "Milosevic",
  godinaStudija: 3,
  ocene: [7, 6, 9, 8, 10, 7, 8, 6, 9, 10, 7],
  prosecan: () => {
    let prosecanStudent = true;
    this.ocene.forEach((ocena) => {
      if (ocena == 6 || ocena == 10) {
        prosecanStudent = false;
      }
    });
  },

  ekstra: () => {
    let broj9 = 0;
    let broj10 = 0;
    this.ocene.forEach((e) => {
      if (e == 9) {
        broj9++;
      } else if (e == 10) {
        broj10++;
      }
    });
    duploVeci = broj10 > broj9 * 2;
  },
};
