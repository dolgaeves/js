function analyzeArtifacts(artifacts) {
  // Ваше решение
  const arr = [];
  let i = 0;
  for (let key in artifacts) {
    console.log(
      `Артефакт ${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}, Показы - ${artifacts[key].exhibits}`
    );
    arr[i] = artifacts[key].exhibits;
    i++;
  }

  // console.log(arr);
  console.log();

  console.log(
    `Артефакты с наибольшим количеством показов (количество показов ${Math.max(
      ...arr
    )}):`
  );

  for (let key in artifacts) {
    if (artifacts[key].exhibits === Math.max(...arr)) {
      console.log(
        `${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}`
      );
    }
  }

  console.log();

  const types = {};

  for (let key in artifacts) {
    types[artifacts[key].type] = 0;
  }

  // console.log(types);

  console.log("Количество артефактов по типу:");

  for (let key in artifacts) {
    if (artifacts[key].type in types) {
      types[artifacts[key].type] += 1;
    }
  }

  for (key in types) {
    console.log(`${key}:`, types[key]);
  }
}

analyzeArtifacts({
  A101: { type: "метеорит", year: 1890, exhibits: 15 },
  A102: { type: "луноход", year: 1973, exhibits: 20 },
  A103: { type: "скафандр", year: 1969, exhibits: 12 },
  A104: { type: "спутник", year: 1957, exhibits: 20 },
  A105: { type: "луноход", year: 1971, exhibits: 10 },
});
