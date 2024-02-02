document
  .getElementById("scheduleForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const scheduleData = {};
    formData.forEach((value, key) => {
      scheduleData[key] = value;
    });

    try {
      const response = await fetch(
        "https://sebastian1935.github.io/codeBySebastian/schedule",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scheduleData),
        }
      );
      if (response.ok) {
        showAlert("Horario guardado correctamente");
      } else {
        showError("Error al guardar el horario");
      }
    } catch (error) {
      showError("Error de red");
    }
  });
