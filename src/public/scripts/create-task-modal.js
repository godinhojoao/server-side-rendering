(function () {
  const submitButton = document.querySelector('.create-task-modal__button');
  const buttonType = submitButton.classList.contains('edit-button') ? 'edit-button' : 'create-button';

  getSelectedStatus();

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    buttonType === 'edit-button' ? editTask() : createTask();
  });

  async function createTask() {
    const currentFieldNames = ['name', 'status'];
    const createTaskPayload = getPayload(currentFieldNames);

    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify(createTaskPayload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response) {
      handleResponse(response, 'Atividade cadastrada com sucesso!');
    }
  }

  async function editTask() {
    const currentFieldNames = ['name', 'status'];
    const editTaskPayload = getPayload(currentFieldNames);
    const taskId = window.location.pathname.split('/')[2];

    console.log('taskId', taskId)
    const response = await fetch(`/${taskId}`, {
      method: "PUT",
      body: JSON.stringify(editTaskPayload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response) {
      handleResponse(response, 'Atividade editada com sucesso!');
    }
  }

  function getPayload(currentFieldNames) {
    const payload = {};

    currentFieldNames.forEach(fieldName => {
      const currentField = document.querySelector(`[name='${fieldName}']`);
      payload[fieldName] = currentField.value;
    });

    return payload;
  }

  function getSelectedStatus() {
    const selectedStatus = document.querySelector('.selected');

    if (selectedStatus) {
      selectedStatus.selected = true;
    }
  }

  function handleResponse(response, successMessage) {
    if (response.status === 200 || response.ok) {
      alert(successMessage);
      setTimeout(() => {
        window.location.href = "http://localhost:8080/";
      }, 500);
    } else {
      alert('Houve um erro!');
    }
  }

})();