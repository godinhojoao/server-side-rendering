(function () {
  const submitButton = document.querySelector('.create-task-modal__button');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('dale');
    createTask();
  });

  async function createTask() {
    const currentFieldNames = ['name', 'status'];
    const [name, status] = getAllFields(currentFieldNames);
    const createTaskPayload = {
      name: name.value,
      status: status.value
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        body: JSON.stringify(createTaskPayload),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response) {
        alert('Atividade cadastrada com sucesso!');
        setTimeout(() => {
          // window.location.href = "http://localhost:8080/";
        }, 500);
      }
    } catch (error) {
      alert('Houve um erro!');
    }
  }

  function getAllFields(currentFieldNames) {
    const fields = [];

    currentFieldNames.forEach(fieldName => {
      const currentField = document.querySelector(`[name='${fieldName}']`);
      fields.push(currentField);
    });

    return fields;
  }

})();