export const fetchBillions = async () => {
  return await (
    await fetch("https://billions-api.nomadcoders.workers.dev/")
  ).json();
};

export const fetchBillionPerson = async (name: string) => {
  return await (
    await fetch(` https://billions-api.nomadcoders.workers.dev/person/${name}`)
  ).json();
};

export const fetchBillion = async (name: string) => {
  return await (
    await fetch(`https://billions-api.nomadcoders.workers.dev/person/${name}`)
  ).json();
};

// const API_KEY = "10923b261ba94d897ac6b81148314a3f";
// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
//   ).json();
//   return {
//     props: {
//       results: results,
//     },
//   };
// }
