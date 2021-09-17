import axios from "axios";
import { useForm } from "react-hook-form";
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

  const onSubmit = function (data) {
    let emailData = {
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      message: data.message,
    };

    axios
      .post("http://localhost:4200/email", emailData)
      .then(function (res) {
        return res.data;
      })
      .catch(function (error) {
        return error;
      });
  };

  return (
    <div className="containerContact">
      <h2>Me contacter</h2>
      <Form onClick={handleSubmit(onSubmit)}>
        <FormGroup className="mb-2">
          <FormLabel>Prénom</FormLabel>
          <FormControl
            type="text"
            placeholder="Martin"
            {...register("prenom", { required: true })}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-2">
          <FormLabel>Nom</FormLabel>
          <FormControl
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
        <Button className="containerContact_btn">Envoyer</Button>
      </Form>
    </div>
  );
}
