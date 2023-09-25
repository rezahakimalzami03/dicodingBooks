import cocktails from './cocktails';

class DataSource {
  static searchCocktail(keyword) {
    return new Promise ((resolve, reject) => {
      const filteredCocktails = cocktails.filter(cocktail => cocktail.name.toUpperCase().includes(keyword.toUpperCase()));
  
      if (filteredCocktails.length) {
        resolve(filteredCocktails);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
};

export default DataSource;  