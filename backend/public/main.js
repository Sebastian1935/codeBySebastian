window.onload = function () {
  fetch(
    "https://sebastian1935.github.io/codeBySebastian/backend/public/schedule"
  )
    .then((response) => response.json())
    .then((schedule) => {
      const scheduleTable = document.createElement("table");
      scheduleTable.classList.add("schedule-table");

      // Encabezados de la tabla

      // Cuerpo de la tabla
      const tableBody = document.createElement("tbody");
      for (const key in schedule) {
        if (schedule.hasOwnProperty(key)) {
          const row = document.createElement("tr");
          const cellKey = document.createElement("td");
          const cellValue = document.createElement("td");
          cellKey.textContent = key;
          let scheduleValue = schedule[key];

          // Agregar emoji dependiendo del valor
          switch (scheduleValue) {
            case "Noche":
              scheduleValue += " 🌜";
              break;
            case "Mañana":
              scheduleValue += " ☀️";
              break;
            case "Descanso":
              scheduleValue += " 😴";
              break;
            default:
              break;
          }

          cellValue.textContent = scheduleValue;
          row.appendChild(cellKey);
          row.appendChild(cellValue);
          tableBody.appendChild(row);
        }
      }
      scheduleTable.appendChild(tableBody);

      // Agregar la tabla al DOM
      const scheduleDiv = document.getElementById("schedule");
      scheduleDiv.appendChild(scheduleTable);
    })
    .catch((error) => console.error("Error:", error));
};
