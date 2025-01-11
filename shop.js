document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Add a scrolled class to header on scroll
  document.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
  });
  const orderButtons = document.querySelectorAll('.order-btn');
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalPrice = document.getElementById('modal-price');
const quantityInput = document.getElementById('quantity');
const orderBtnModal = document.getElementById('order-btn-modal');

// Hiển thị modal khi nhấn nút "Đặt hàng"
orderButtons.forEach(button => {
  button.addEventListener('click', function() {
    const title = button.getAttribute('data-title');
    const price = parseFloat(button.getAttribute('data-price'));  // Chuyển giá trị thành số thực
    const img = button.getAttribute('data-img');
    
    // Cập nhật thông tin trong modal
    modalTitle.textContent = title;
    modalPrice.textContent = `Price: $${price.toFixed(2)}`;  // Hiển thị giá với 2 chữ số thập phân
    modalImage.src = img;
    
    // Cập nhật giá trị ban đầu của số lượng
    quantityInput.value = 1;
    
    // Lưu giá trị sản phẩm để tính giá đúng
    quantityInput.setAttribute('data-price', price);

    // Hiển thị modal
    modal.style.display = 'flex';
  });
});

// Đóng modal khi nhấn vào nút đóng (×)
closeModal.addEventListener('click', function() {
  modal.style.display = 'none'; // Đóng modal
});

// Đóng modal nếu nhấn vào ngoài modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Đóng modal nếu nhấn ngoài modal
  }
});

// Xử lý thay đổi số lượng và tính toán giá tiền trong modal
quantityInput.addEventListener('input', function() {
  const price = parseFloat(quantityInput.getAttribute('data-price')); // Lấy giá trị sản phẩm từ thuộc tính data-price
  const quantity = parseInt(quantityInput.value, 10);  // Lấy số lượng
  const totalPrice = price * quantity;  // Tính tổng tiền
  modalPrice.textContent = `Price: $${totalPrice.toFixed(2)}`; // Cập nhật lại giá
});

// Xử lý nút "Đặt hàng" trong modal
orderBtnModal.addEventListener('click', function() {
  const quantity = quantityInput.value;
  const title = modalTitle.textContent;
  const totalPrice = modalPrice.textContent;
  
  alert(`Đặt hàng thành công!\nSản phẩm: ${title}\nSố lượng: ${quantity}\n${totalPrice}`);
  
  // Đóng modal sau khi đặt hàng
  modal.style.display = 'none';
});
