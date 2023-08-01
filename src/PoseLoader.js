export async function loader() {
  const data = await fetch(
    "https://yoga-api-nzy4.onrender.com/v1/categories"
  ).then((res) => res.json());
  console.log(data);
  return data;
}
