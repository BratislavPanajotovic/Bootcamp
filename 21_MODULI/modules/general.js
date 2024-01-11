function generateImage(src) {
  let img = document.createElement("img");
  img.src = src;
  img.classList.add("slika");
  img.style.width = "200px";
  img.style.height = "200px";
  return img;
}
export default generateImage;
