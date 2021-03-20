var xhr = new XMLHttpRequest();

const handlerSum = () => {
  const input = document.getElementById("input").value;
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      alert(xhr.responseText);
    }
  };
  if (!input || input.trim() === "") {
    xhr.open("GET", `http://localhost:3000/getData`);
  } else {
    xhr.open("GET", `http://localhost:3000/getData?number=${input}`);
  }
  xhr.send();
};
