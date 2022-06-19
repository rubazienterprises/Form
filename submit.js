// const formData = document.getElementById("formData");
// new URLSearchParams(window.location.search).forEach((value, name) => {
//   formData.append(`${name}: ${value}`);
//   formData.append(document.createElement("br"));
// });

function myurlfunc() {
  const formData = document.getElementById("formData");
  const urlData = new URLSearchParams(window.location.search);
  const table = document.createElement("table");
  const th = document.createElement("th");
  const th2 = document.createElement("th");
  const elth = formData.appendChild(th);
  const elth2 = formData.appendChild(th2);
  elth.innerHTML = "Name";
  elth2.innerHTML = "Value";
  urlData.forEach((value, name) => {
    const tr = document.createElement("tr");
    formData.appendChild(tr);

    const td1 = document.createElement("td");
    let eltd1 = formData.appendChild(td1);
    eltd1.innerHTML = name;

    const td2 = document.createElement("td");
    let eltd2 = formData.appendChild(td2);
    eltd2.innerHTML = value;
  });
}

myurlfunc();
