document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    if (email.trim() === "") {
      alert("Vui lòng nhập email!");
    } else {
      alert("Liên kết đặt lại mật khẩu đã được gửi đến " + email);
      window.location.href = "login.html";
    }
  });
