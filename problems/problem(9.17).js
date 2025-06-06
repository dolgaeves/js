const referrerPercents = [3, 1, 0.5];

const order = {
  id: 245,
  totalPrice: 78202,
  user: {
    id: 531,
    name: "Павел",
    referrer: {
      id: 132,
      name: "Игорь",
      referrer: null,
      // referrer: {
      //   id: 33,
      //   name: "Иван",
      //   referrer: {
      //     id: 12,
      //     name: "Ольга",
      //     referrer: {
      //       id: 3,
      //       name: "Света",
      //       referrer: null,
      //     },
      //   },
      // },
    },
  },
  referrerPayouts() {
    // Ваш код здесь
    let arr = [];
    let user = this.user;
    let i = 0;
    while (user && i < referrerPercents.length) {
      arr.push({
        id: user.id,
        name: user.name,
        payout: (this.totalPrice * referrerPercents[i]) / 100,
      });
      user = user.referrer;
      i++;
    }
    return arr;
  },
};

console.log(order.referrerPayouts());
