/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./ContactForm.css";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Votre message a été envoyé !");
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit} name="contact" method="post">
        <label htmlFor="name">Prénom, nom *</label>
        <input type="texte" name="name" placeholder="Champ obligatoire" />

        <label htmlFor="email">Email *</label>
        <input type="email" name="email" placeholder="Champ obligatoire" />

        <label htmlFor="objet">Objet *</label>
        <input type="objet" name="objet" placeholder="Champ obligatoire" />

        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Ecrire votre message ici" />

        <button type="submit">Envoyer </button>
      </form>
    </div>
  );
}
export default ContactForm;
