(function () {
  const submitButton = document.querySelector('.button');

  submitButton.addEventListener('click', login);

  async function login(event) {
    event.preventDefault();
    const nameInput = document.querySelector("[name='name']");

    if (nameInput && nameInput.value) {
      const signInPayload = {
        name: nameInput.value
      };

      const response = await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify(signInPayload),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const user = await response.json();

      if (user) { window.location.href = `http://localhost:8080/dashboard/${user._id}`; }
    }

  }
})();