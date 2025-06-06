function transformArrToObject(arr) {
  const user = {};
  const userKeysNEntries = [];
  for (let i = 0; i < arr.length; i++) {
    userKeysNEntries.push(Object.values(arr[i]));
  }
  for (let i = 0; i < userKeysNEntries.length; i++) {
    user[userKeysNEntries[i][0]] = userKeysNEntries[i][1];
  }
  return user;
}

const arr = [
  { name: "name", value: "Анатолий" },
  { name: "age", value: 40 },
];

console.log(transformArrToObject(arr)); // {name: 'Анатолий', age: 40}
