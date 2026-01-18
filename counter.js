let count = 0;

const countText = document.getElementById("countText");
const error = document.getElementById("error");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");

function updateUI() {
  countText.textContent = `Your current count is : ${count}`;

  if (count === 0) {
    decrementBtn.disabled = true;
    decrementBtn.title = "Action is disabled due to the value being zero";
    clearBtn.style.display = "none";
  } else {
    decrementBtn.disabled = false;
    decrementBtn.title = "";
    clearBtn.style.display = "inline-block";
  }
}

incrementBtn.addEventListener("click", () => {
  count++;
  error.textContent = "";
  updateUI();
});

decrementBtn.addEventListener("click", () => {
  if (count === 0) {
    error.textContent = "Error : Cannot go below 0";
    return;
  }
  count--;
  error.textContent = "";
  updateUI();
});

clearBtn.addEventListener("click", () => {
  count = 0;
  error.textContent = "";
  updateUI();
});

updateUI();
