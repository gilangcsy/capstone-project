import ApiSource from '../data/api-source';

function register() {
  document.addEventListener('DOMContentLoaded', () => {
    const fullName = document.getElementById('nama');
    const email = document.getElementById('email');
    const hashedPassword = document.getElementById('password');
    const address = document.getElementById('alamat');
    const birthOfDate = document.getElementById('tanggal');
    const placeOfBirth = document.getElementById('lahir');
    const gender = document.querySelector(
      'input[type=radio][name=gender]:checked'
    );
    const university = document.getElementById('kampus');
    const buttonAdd = document.getElementById('add-user');

    buttonAdd.addEventListener('click', function (e) {
      e.preventDefault();
      const user = {
        fullName: fullName.value,
        email: email.value,
        password: hashedPassword.value,
        address: address.value,
        birthOfDate: birthOfDate.value,
        placeOfBirth: placeOfBirth.value,
        gender: gender.value,
        university: university.value,
      };
      ApiSource.register(user);
    });
  });
}

export default register;
