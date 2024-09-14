//https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

import { FormData } from "@/app/contact/contactUsForm";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
