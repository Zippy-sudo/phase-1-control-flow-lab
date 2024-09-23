function scuberGreetingForFeet(distanceInFeet){
  if (distanceInFeet > 2500){
    return "No can do."
  } else if (distanceInFeet <= 400) {
    return "This one is on me!";
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
    return "That will be twenty bucks.";
  } else return "I will gladly take your thirty bucks."

}

function ternaryCheckCity(cityName){
  if (cityName === "NYC"){
    return "Ok, sounds good."
  } else if (cityName !== "NYC") {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  let answer = "";
  switch (tip) {
    case "generous":
      answer = "Thank you so much.";
      break;
    case "not as generous":
      answer = "Thank you.";
      break;
    default:
      answer = "Bye."
  }
  return answer;
}