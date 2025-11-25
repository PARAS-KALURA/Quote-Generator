const input = document.getElementById("text");
const newQ = document.querySelector(".btn-new");
const copyBtn = document.querySelector(".btn-copy");

newQ.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQ);

async function getQuote() {
    input.textContent = "Loading quote...";

    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();

        // Zenquotes returns an array, so we use data[0].q
        input.textContent = `${data[0].q} — ${data[0].a}`;
    } 
    catch (error) {
        input.textContent = "Error fetching quote. Try again!";
    }
}

function copyQ() {
    navigator.clipboard.writeText(input.textContent);
    alert("copied");
}

