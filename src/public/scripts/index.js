(function () {
  const removeButtons = document.querySelectorAll('.dashboard__profiles__card__icon--remove-icon');
  const editButtons = document.querySelectorAll('.dashboard__profiles__card__icon--edit-icon');

  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', (event) => {
      const taskId = event.target.parentElement.id;
      removeTask(taskId);
    });
  });

  editButtons.forEach(editButton => {
    editButton.addEventListener('click', (event) => {
      const taskId = event.target.parentElement.id;
      editTask(taskId);
    });
  })

  async function removeTask(taskId) {
    const response = await fetch(`/${taskId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response) {
      handleResponse(response);
    }
  }

  function editTask(taskId) {
    if (taskId) {
      window.location.href = `http://localhost:8080/editar-atividade/${taskId}`;
    }
  }

  function handleResponse(response) {
    if (response.status === 204 || response.ok) {
      alert('Atividade deletada com sucesso!');
      setTimeout(() => {
        window.location.href = "http://localhost:8080/";
      }, 500);
    } else {
      alert('Houve um erro!');
    }
  }
})();