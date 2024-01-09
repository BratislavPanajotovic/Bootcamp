import { generateImage } from "./general.js";
function generateList(parent) {
  let ul = document.createElement("ul");
  parent.appendChild(ul);
  return ul;
}
function generateListItem(parent, src) {
  let li = document.createElement("li");
  img = generateImage(src);
  li.appendChild(img);
  parent.appendChild(li);
  return li;
}
export { generateList, generateListItem };
