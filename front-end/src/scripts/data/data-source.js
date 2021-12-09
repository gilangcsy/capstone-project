class DataSource {
  static addUser() {
    return axios
      .post('http://localhost:3000/api/v1/users', {
        fullName: 'Ayub',
        email: 'ayubbkj@gmail.com',
        password: 'password',
        address: 'Jl. Kemerdekaan 12',
        gender: 'Men',
        birthOfDate: '2001-05-03',
        placeOfBirth: 'Bekasi',
        university: 'UPH',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
