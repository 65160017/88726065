const API_URL = "https://api.thedogapi.com/v1/";
const API_KEY =
  "live_isBR93hZ78iYCcSKdMl5yJwnDNj97xtRk6OlBggb1zN9WaU0SwM46YibUHxw4ROa";

function uploadImage() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  fetch(`${API_URL}images/upload`, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
    },
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

// id : IjWRvudOB
// id : cKU-hvnfl
