document.addEventListener("turbolinks:load", function () {
  let images = ["/assets/list.svg", "/assets/close.svg"];
  let logos = ["assets/BCnameLogo.png","assets/BCsingleLogo.png"];
  let imageIndex = 0;
  let logoId = document.getElementById("logo");
  let className = document.getElementById("button");
  let logoContainer = document.getElementById("logo-container");
  className.onclick = function () {
    if (imageIndex == 0) {
      logoId.className = 'logo-open';
      logoContainer.className = 'logo-container-open';
    } else {
      logoId.className = 'logo-closed';
      logoContainer.className = 'logo-container-close';
    }
    imageIndex = (imageIndex + images.length + 1) % (images.length);
    document.getElementById("logo").setAttribute('src', logos[imageIndex]);
    document.getElementById("image").setAttribute('src', images[imageIndex]);
  }

  window.addEventListener("resize", function(){
    if (window.matchMedia("(min-width: 992px)").matches){
      document.getElementById("logo").setAttribute('src', logos[0]);
    }else{
      if (!document.getElementById('button').classList.contains('collapsed')) {
        document.getElementById("logo").setAttribute('src', logos[1]);
      }
    }
  });
});
