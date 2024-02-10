const OpenMe = () => {
  document.getElementById("hamburger").style.display = "flex";
  document.getElementById("close").style.display = "initial";
  document.getElementById("mobile").style.display = "none";
};
const CloseMe = () => {
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("mobile").style.display = "initial";
};
