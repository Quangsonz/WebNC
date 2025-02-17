document.addEventListener("DOMContentLoaded", () => {
    const productStars = document.querySelectorAll('.product-rating .star');
    const serviceStars = document.querySelectorAll('.service-rating .star');
    const productRatingInput = document.getElementById('productRating');
    const serviceRatingInput = document.getElementById('serviceRating');
    const productRatingText = document.querySelector('.product-rating .rating-text');
    const serviceRatingText = document.querySelector('.service-rating .rating-text');

    // Định nghĩa các mức đánh giá sao
    const ratingText = {
        1: 'Rất tệ',
        2: 'Không hài lòng',
        3: 'Bình thường',
        4: 'Tốt',
        5: 'Tuyệt vời'
    };

    // Xử lý sao đánh giá sản phẩm
    productStars.forEach(star => {
        star.addEventListener('click', (event) => {
            const rating = event.target.getAttribute('data-rating');
            productRatingInput.value = rating; // Set the product rating value
            updateStarStyles('product'); // Cập nhật màu sắc sao cho sản phẩm
            updateRatingText('product', rating); // Cập nhật thái độ cho sản phẩm
        });
    });

    // Xử lý sao đánh giá dịch vụ
    serviceStars.forEach(star => {
        star.addEventListener('click', (event) => {
            const rating = event.target.getAttribute('data-rating');
            serviceRatingInput.value = rating; // Set the service rating value
            updateStarStyles('service'); // Cập nhật màu sắc sao cho dịch vụ
            updateRatingText('service', rating); // Cập nhật thái độ cho dịch vụ
        });
    });

    // Cập nhật màu sắc sao theo mức đánh giá
    function updateStarStyles(type) {
        const starsToUpdate = type === 'product' ? productStars : serviceStars;
        const ratingValue = type === 'product' ? productRatingInput.value : serviceRatingInput.value;
        
        starsToUpdate.forEach(star => {
            const rating = star.getAttribute('data-rating');
            if (rating <= ratingValue) {
                star.classList.add('active'); // Tô màu các sao đã chọn
            } else {
                star.classList.remove('active'); // Xóa màu các sao không chọn
            }
        });
    }

    // Cập nhật chữ thái độ dưới mỗi nhóm sao
    function updateRatingText(type, rating) {
        const ratingTextElement = type === 'product' ? productRatingText : serviceRatingText;
        ratingTextElement.textContent = ratingText[rating]; // Cập nhật chữ thái độ
    }

    // Xử lý gửi form (AJAX)
    document.getElementById('reviewForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formData = new FormData(this);
        
        // Gửi dữ liệu review qua AJAX (thay thế URL bằng endpoint thực tế của bạn)
        fetch('/submit-review', { 
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Review submitted successfully:', data);
            alert('Cảm ơn bạn đã đánh giá sản phẩm!');
        })
        .catch(error => {
            console.error('Error submitting review:', error);
            alert('Đã có lỗi xảy ra. Vui lòng thử lại!');
        });
    });
});
