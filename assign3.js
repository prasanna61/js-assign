const countryInfoContainer = document.querySelector('.country-info');
async function fetchCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    const data = await response.json();
    const countryData = data[0];
    countryInfoContainer.innerHTML = `
      <h2>${countryData.name.common}</h2>
      <p>Capital: ${countryData.capital}</p>
      <p>Population: ${countryData.population.toLocaleString()}</p>
      <p>Region: ${countryData.region}</p>
      <p>Subregion: ${countryData.subregion}</p>
      <p>Flag:</p>
      <img src="${countryData.flags.png}" alt="Flag of ${countryData.name.common}" width="150">
    `;
  } catch (error) {
    console.error('Error fetching and displaying country data:', error);
    countryInfoContainer.innerHTML = '<p>Failed to fetch country data.</p>';
  }
}

fetchCountryData();
