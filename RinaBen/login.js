
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const loginButton = document.querySelector(".sign-in button");
// Bắt sự kiện click nút "Sign Up"
signUpButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Kiểm tra xem các trường đăng ký đã được điền đầy đủ hay chưa
  const signUpEmail = signUpForm.email.value;
  const signUpPassword = signUpForm.password.value;
  if (signUpEmail && signUpPassword) {
    // Đủ thông tin, chuyển sang form đăng nhập
    signUpForm.reset();
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
  } else {
    // Hiển thị thông báo lỗi nếu các trường chưa được điền đầy đủ
    alert('Vui lòng điền đầy đủ thông tin đăng ký.');
  }
});

// Bắt sự kiện click nút "Login"
loginButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Kiểm tra xem các trường đăng nhập đã được điền đầy đủ hay chưa
  const signInEmail = signInForm.email.value;
  const signInPassword = signInForm.password.value;
  if (signInEmail && signInPassword) {
    // Đủ thông tin, chuyển đến trang chủ (homepage)
    signInForm.reset();
    window.location.href = 'homepage.html'; // Thay đổi đường dẫn tới trang chủ thực tế của bạn
  } else {
    // Hiển thị thông báo lỗi nếu các trường chưa được điền đầy đủ
    alert('Vui lòng điền đầy đủ thông tin đăng nhập.');
  }
});