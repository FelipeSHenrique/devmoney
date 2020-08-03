let BASE = 'http://economia.awesomeapi.com.br/json';

export default {
  getAllCoins: async () => {
    const res = await fetch(BASE + '/all');
    const json = res.json();
    return json;
  }
}