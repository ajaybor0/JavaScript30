const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));


## Update CSS Variable with JS

It's a CSS variable project that can be updated CSS variable with JavaScript meaning that when you update a variable in CSS everywhere on the page that variable is reference will update itself.

## Lessons Learned

    - document.querySelectorAll()
    - this
    - dataset
    - document.documentElement
    - setProperty()
    - forEach()
    - Arrow function
    - addEventListener()
