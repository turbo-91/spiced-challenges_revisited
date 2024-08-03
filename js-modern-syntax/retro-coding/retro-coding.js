function getNameAndCountry({ name, country }) {
  return [name, country];
}

function getRelocatedCity(
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) {
  let [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
}

////////////////// REWRITTEN FOR 2002 //////////////////////

function getNameAndCountry(obj) {
  return [obj.name, obj.country];
}

function getRelocatedCity(city1, city2) {
  // Check for default parameter
  if (typeof city2 === "undefined") {
    city2 = { name: "Berlin", country: "Germany" };
  }

  // Get name and country using traditional property access
  var nameAndCountry = getNameAndCountry(city2);
  var country = nameAndCountry[1];

  // Manually copy properties from city1 to a new object
  var relocatedCity = {};
  for (var key in city1) {
    if (city1.hasOwnProperty(key)) {
      relocatedCity[key] = city1[key];
    }
  }

  // Add/overwrite the country property
  relocatedCity.country = country;

  return relocatedCity;
}

// Example usage
var city1 = { name: "Paris", population: 2148327 };
var city2 = { name: "Berlin", country: "Germany" };

var result = getRelocatedCity(city1, city2);
console.log(result); // { name: "Paris", population: 2148327, country: "Germany" }
