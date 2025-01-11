  let nam = prompt("Iltimos, ismingizni kiriting:");

  if (nam && nam.trim() !== "") {
      let Div = document.getElementById("a");
      let g = document.createElement("h1");
      g.textContent = `Assalomu alaykum, ${nam}!`;
      Div.appendChild(g);
  } else {
      alert("Ismingizni kiritishingiz kerak edi!");
  }