const getUserGender = type => {
  switch (type) {
    case 'MALE':
      return 'Laki-laki';
    case 'FEMALE':
      return 'Perempuan';
    default:
      return '';
  }
};

export default getUserGender;
