    function sendReservation(event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu một cách mặc định

        // Lấy giá trị từ các trường nhập liệu
        var name = document.querySelector('input[name="name"]').value;
        var phone_number = document.querySelector('input[name="phone_number"]').value;
        var adults = document.querySelector('select[name="adults"]').value;
        var childs = document.querySelector('select[name="childs"]').value;
        var rooms = document.querySelector('select[name="rooms"]').value;

        // Tạo đối tượng params chứa các giá trị đã lấy
        var params = {
            name: name,
            phone_number: phone_number,
            adults: adults,
            childs: childs,
            rooms: rooms
        };

        // Gửi email bằng EmailJS
        emailjs.send('service_7my96qd', 'template_jbf8iab', params)
            .then(function(response) {
                // Xóa nội dung của các trường nhập liệu
                document.querySelector('input[name="name"]').value = " ";
                document.querySelector('input[name="phone_number"]').value = " ";
                document.querySelector('select[name="adults"]').value = '1';
                document.querySelector('select[name="childs"]').value = '-';
                document.querySelector('select[name="rooms"]').value = '1';

                console.log(response);
                alert('Your reservation has been sent successfully!');
            })
            .catch(function(error) {
                console.log(error);
                alert('An error occurred while sending the reservation. Please try again later.');
            });
    }
