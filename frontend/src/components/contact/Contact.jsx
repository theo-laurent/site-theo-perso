import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
// import bootstrap pour form
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import css personnel
import "../contact/contact.css";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const sendEmail = function (data) {
    let emailData = {
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      message: data.message,
    };

    //RAJOUTE ERREUR + REGEX

    emailjs
      .send(
        "service_ioen4cy",
        "template_agfj4hi",
        emailData,
        "user_G6oNKY5D2nwneA1FcDfIT"
      )
      .then(function (res) {
        console.log(res);
        //AFFICHER UN MESSAGE COMME QUOI L EMAIL EST BIEN PARTI !
      })
      .catch(function (error) {
        return error;
      });
  };

  return (
    <div className="containerContact">
      <h2>Me contacter</h2>
      <Form onSubmit={handleSubmit(sendEmail)}>
        <FormGroup className="mb-2">
          <FormLabel>Prénom</FormLabel>
          <FormControl
            required
            type="text"
            placeholder="Martin"
            {...register("prenom", { required: true })}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-2">
          <FormLabel>Nom</FormLabel>
          <FormControl
            required
            type="text"
            placeholder="Dupont"
            {...register("nom", { required: true })}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-2">
          <FormLabel>Email</FormLabel>
          <FormControl
            required
            type="email"
            placeholder="email.test@hotmail.fr"
            {...register("email", { required: true })}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Message</FormLabel>
          <FormControl
            required
            as="textarea"
            rows={4}
            placeholder="Votre message"
            {...register("message", { required: true })}
          ></FormControl>
        </FormGroup>
        <Button type="submit" className="containerContact_btn">
          Envoyer
        </Button>
      </Form>
    </div>
  );
}
