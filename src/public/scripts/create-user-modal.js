(function () {
  const submitButton = document.querySelector('.create-user-modal__button');

  submitButton.addEventListener('click', () => {
    createUser();
  });

  function createUser() {
    const currentFieldNames = ['name', 'email'];
    const [name, email] = getAllFields(currentFieldNames);

    console.log('email.value', email.value)
    console.log('name.value', name.value)
  }

  function getAllFields(currentFieldNames) {
    const fields = [];

    currentFieldNames.forEach(fieldName => {
      const currentField = document.querySelector(`.${fieldName} input`);
      fields.push(currentField);
    });

    return fields;
  }

})();