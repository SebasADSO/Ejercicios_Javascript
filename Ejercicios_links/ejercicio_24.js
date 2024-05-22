// 24. Crear un objeto proxy usando la clase Proxy

const target = {
  name: "Sebas",
  age: 19,
};

const handler = {};

const proxy = new Proxy(target, handler);

console.log(proxy.name);
console.log(proxy.age);