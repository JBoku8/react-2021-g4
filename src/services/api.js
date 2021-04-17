const baseUrl = 'https://jsonplaceholder.typicode.com';

export class API_SERVICE {
  static getNoteList({ callback, start = 0, limit = 9 }) {
    const url = `${baseUrl}/todos??_start=${start}&_limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        callback(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  static async getNoteListAsync({ start = 0, limit = 9 }) {
    const url = `${baseUrl}/todos??_start=${start}&_limit=${limit}`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    } catch (err) {}
  }
}

export default API_SERVICE;
