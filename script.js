let colour = prompt("Enter a colour");

const root = document.documentElement;

// root.style.setProperty("--main-color",colour);

function isValidCSSColor(colour) {
    var s = new Option().style;
  s.color = colour;

  // return 'false' if color wasn't assigned
  return s.color == colour.toLowerCase();
}
if (isValidCSSColor(colour)) {
    document.documentElement.style.setProperty("--main-color", colour);
    if(colour == "black"){
        document.documentElement.style.setProperty("--bg","white");
        document.documentElement.style.setProperty("--eyes","white");
    }
} else {
    document.documentElement.style.setProperty("--main-color", "yellow");
}