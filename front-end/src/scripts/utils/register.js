function register() {
  const registerUrl = 'http://localhost:3000/api/v1/users/';

  const addUser = async (user) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(registerUrl, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
    } catch (error) {
      showResponseMessage(error);
    }
  };
  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const fullName = document.querySelector('#nama').value;
    const email = document.querySelector('#email').value;
    const hashedPassword = document.querySelector('#password').value;
    const address = document.querySelector('#alamat').value;
    const birthOfDate = document.querySelector('#tanggal').value;
    const placeOfBirth = document.querySelector('#lahir').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const university = document.querySelector('#kampus').value;
    const buttonAdd = document.querySelector('#add-user').value;

    buttonAdd.addEventListener('click', function () {
      const user = {
        fullName: fullName,
        email: email,
        password: hashedPassword,
        address: address,
        birthOfDate: birthOfDate,
        placeOfBirth: placeOfBirth,
        gender: gender,
        university: university,
      };
      addUser(user);
    });
  });
}

export default register;
