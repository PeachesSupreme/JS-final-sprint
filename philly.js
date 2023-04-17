fetch("philly.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((philly) => {
      console.log(getFullName(philly));
      console.log(getAge(philly));
      console.log(shouldRetire(philly));
      console.log(getHobbies(philly));
      console.log(livingSit(philly));
    });
  });

function getFullName(philly) {
  return `${philly.fName} ${philly.lName}`;
}
function getAge(philly) {
  return `${philly.fName} is ${philly.age} years old.`;
}

function shouldRetire(philly) {
  if (philly.age > 60) {
    return `${philly.fName} should retire.`;
  } else {
    return `${philly.fName} should not reitre yet`;
  }
}

function getHobbies(philly) {
  return `${philly.fName} likes  ${philly.hobbies}.`;

  function getJob(philly) {
    return `${philly.fName} holds the position of ${philly.occupation} at Paddy's Pub`;
  }
}

function livingSit(philly) {
  if (philly.livingSituation === "Homeless") {
    return `${philly.fName} is having a rough go on the streets.`;
  } else {
    return ` The living situation of ${philly.fName}: ${philly.livingSituation}`;
  }
}

const logsDiv = document.getElementById("logs");

fetch("philly.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((philly) => {
      logsDiv.innerHTML += `<p>${getFullName(philly)}</p>`;
      logsDiv.innerHTML += `<p>${getAge(philly)}</p>`;
      logsDiv.innerHTML += `<p>${shouldRetire(philly)}</p>`;
      logsDiv.innerHTML += `<p>${getHobbies(philly)}</p>`;
      logsDiv.innerHTML += `<p>${livingSit(philly)}</p>`;
    });
  });
