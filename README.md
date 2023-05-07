Live Website: https://abishrestha.com.np/automataGoL
---

# Conway's Game of Life
### Implemented using HTML/CSS/JS

- What is Conway's Game of Life? 
  - https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 
## Things I learned from this: 
- Cool trick to swtich 0 and 1
```
function changeColor() {
  const newState = 1 - state;
  state = newState;
  document.getElementById("colorbtn").innerText = "Change Color : " + color[newState];
}
```
- Familiarised with canvas, button element, DOM Manipulation  and Array in JS
- Automata, States and Transition Table

