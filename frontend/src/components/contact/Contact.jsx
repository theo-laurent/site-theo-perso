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
  return (
    <div className="containerContact">
      <h2>Me contacter</h2>
      <Form>
        <FormGroup className="mb-2">
          <FormLabel>Prénom</FormLabel>
          <FormControl required type="text" placeholder="Martin"></FormControl>
        </FormGroup>
        <FormGroup className="mb-2">
          <FormLabel>Nom</FormLabel>
          <FormControl required type="text" placeholder="Dupont"></FormControl>
        </FormGroup>
        <FormGroup className="mb-2">
          <FormLabel>Email</FormLabel>
          <FormControl
            required
            type="email"
            placeholder="email.test@hotmail.fr"
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Message</FormLabel>
          <FormControl
            required
            as="textarea"
            rows={4}
            placeholder="Votre message"
          ></FormControl>
        </FormGroup>
        <Button className="containerContact_btn">Envoyer</Button>
      </Form>
    </div>
  );
}
