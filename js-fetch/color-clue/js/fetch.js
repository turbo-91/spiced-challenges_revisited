import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  try {
    const hexCode = getRandomHexCode();
    const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
    const response = await fetch(colorApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data", data);
    const closestHexCode = data.name.closest_named_hex;
    const closestName = data.name.value;
    console.log(closestHexCode);
    console.log(data.name.value);
    setColorToGuess(closestHexCode, closestName);
  } catch (error) {
    console.error("Failed to fetch color data:", error);
    // Handle the error appropriately, e.g., display a message to the user
  }
}
