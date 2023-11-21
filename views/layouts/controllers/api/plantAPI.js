function retrievePlantInfo(x, y) {
    const common_name = getElementById('common_name');
    const other_name  = getElementById('other_name');
    const cycle = getElementById('cycle') y;
    const url = `ttps://perenual.com/api/species-list?key=sk-l9HY654e6939256ac2895`;

const fetchSpeciesList = async (sunlight, watering, poisonous, edible, cycle, indoor) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const url = new URL(`https://perenual.com/api/species-list?key=sk-l9HY654e6939256ac2895
    `);
    if (sunlight) url.searchParams.append('sunlight', sunlight);
    if (watering) url.searchParams.append('watering', watering);
    if (poisonous !== null) url.searchParams.append('poisonous', poisonous);
    if (edible !== null) url.searchParams.append('edible', edible);
    if (cycle) url.searchParams.append('cycle', cycle);
    if (indoor !== null) url.searchParams.append('indoor', indoor);
    try {
      const response = await fetch(url, requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };
  fetchSpeciesList('full_sun', 'frequent', 1, 1, 'annual', 1);

  mport fetch from "node-fetch";
import readline from "readline";
const baseURL = "https://perenual.com/api/species-list";
const apiKey = process.env.API_KEY;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, (ans) => resolve(ans)));
}
async function getUserInput() {
  let userInput = {};
  userInput.sunlight = await askQuestion("Enter sunlight preference: ");
  userInput.watering = await askQuestion("Enter watering frequency: ");
  userInput.poisonous = await askQuestion("Is it poisonous (0/1): ");
  userInput.edible = await askQuestion("Is it edible (0/1): ");
  userInput.cycle = await askQuestion("Enter plant cycle: ");
  userInput.indoor = await askQuestion("Is it an indoor plant (0/1): ");
  return userInput;
}
async function fetchSpecies(userInput) {
  const url = new URL(baseURL);
  url.searchParams.append("key", apiKey);
  Object.keys(userInput).forEach((key) => {
    if (userInput[key] !== "") {
      url.searchParams.append(key, userInput[key]);
    }
  });
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    if (result && Array.isArray(result)) {
      result.forEach((species, index) => {
        console.log(`Species ${index + 1}:`);
        console.log(`Name: ${species.name}`);
        console.log(`Sunlight: ${species.sunlight}`);
        console.log(`Watering: ${species.watering}`);
        console.log("-------------------------");
      });
    } else {
      console.log("No species found");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
getUserInput()
  .then((userInput) => fetchSpecies(userInput))
  .finally(() => rl.close());