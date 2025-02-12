


function imgGallery() {
  const mainImg = document.querySelector('.details_img');
  smallImg = document.querySelectorAll('.details_small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src; 
    });
  });
}

imgGallery();
