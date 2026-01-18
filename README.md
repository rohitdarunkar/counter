📊 Counter App

A simple, interactive counter application built with HTML, CSS, and JavaScript. Users can increase or decrease a count value, reset it, and receive validation feedback when an invalid action is performed.

🖥️ Live Demo: https://counter-4lf.pages.dev/

🚀 Features

1.✅ Increment the counter

2.✅ Decrement the counter

3.❌ Prevent decrementing below 0

4.🛑 Shows error message when invalid

5.🔁 Clear button to reset count

6.🎯 Disabled state and cursor feedback for invalid actions

7.👍 Intuitive UI and simple interaction


🧱 Usage

1.Clone the repository.

2.Open index.html in the browser.

3.Click the buttons to manipulate the counter:

4.Increment increases the count.

5.Decrement decreases the count (but cannot go below 0).

6.Clear resets the count to 0.


📁 Project Structure
counter/
├── index.html         # Main HTML page
├── style.css          # Styles for UI
├── script.js          # Interactive logic
└── README.md          # Project documentation


💡 Visual Behavior

1.The current count is displayed as text.

2.The Decrement button is disabled when the count is 0.

3.If the user tries to decrement at 0, an error message appears in red:

4.🚫 “Error : Cannot go below 0”

5.The Clear button is hidden when the count is 0 and shown otherwise.


🧠 Code Overview

HTML

-Contains a heading, counter display, and buttons.

-All elements targetable via unique IDs.

CSS

-Provides layout, spacing, colors, and disabled button cursor styles.

JavaScript

-Handles increment, decrement, clear logic

-Updates UI dynamically based on state

-Shows/hides buttons and error messages appropriately


🛠 Example Code Snippet
incrementBtn.addEventListener("click", () => {
  count++;
  clearError();
  updateUI();
});

decrementBtn.addEventListener("click", () => {
  if (count === 0) {
    showError("Error : Cannot go below 0");
    return;
  }
  count--;
  clearError();
  updateUI();
});



📌 Notes

1.Works in all modern browsers

2.No external libraries required

3.Light-weight and mobile-ready

