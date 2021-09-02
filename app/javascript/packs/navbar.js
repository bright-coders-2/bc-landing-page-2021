document.addEventListener("turbolinks:load", function () {
  let images = ["/assets/list.svg", "/assets/close.svg"];
  let logos = ["assets/BCnameLogo.png","assets/BCsingleLogo.png"];
  let imageIndex = 0;
  let logoId = document.getElementById("logo");
  let className = document.getElementById("button");
  className.onclick = function () {
    if (imageIndex == 0) {
      logoId.className = 'logo-open';
    } else {
      logoId.className = 'logo-closed';
    }
    imageIndex = (imageIndex + images.length + 1) % (images.length);
    document.getElementById("logo").setAttribute('src', logos[imageIndex]);
    document.getElementById("image").setAttribute('src', images[imageIndex]);
  }
});
