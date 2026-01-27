// Функция получения данных о товаре с сервера
export default async function fetchData() {
  const responce = await fetch("./data/data.json", {
    headers: {
      email: "babinas@icloud.com",
    },
  });
  const data = await responce.json();
  return data;
}
