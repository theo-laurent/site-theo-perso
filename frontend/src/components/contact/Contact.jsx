// import react hook form pour controle des formulaires
import { useForm } from "react-hook-form";
//import emailjs pour transmettre mail
import emailjs from "emailjs-com";
//import react tastify pour notif message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
// import icon
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const toastifySuccess = () => {
    toast.success("Super, le message a bien été envoyé !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const toastifyError = () => {
    toast.error(
      "Oups, le message n'a pas pu être envoyé, si le problème persiste, contactez moi en utilisant l'email indiqué ! ",
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

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
        "user_G6oNKY5D2nwneA1FcDfIT",
        setLoading(true)
      )
      .then(function (res) {
        toastifySuccess();
        setLoading(false);
      })
      .catch(function (error) {
        toastifyError();
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Me contacter</h1>
      <div className="globalContact" id="contact">
        <div className="containerMap">
          <iframe
            title="maLocalisation"
            width="100%"
            height="400"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=boulogne%20sur%20mer+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>

        <div className="containerContact2">
          <div>
            <h5>
              <FaPhoneAlt className="mx-2" style={{ color: "#4C6C9D" }} />
              TELEPHONE
            </h5>
            <p>06.68.14.76.32</p>
          </div>

          <div>
            <h5>
              <FiMail className="mx-2" style={{ color: "#4C6C9D" }} />
              E-MAIL
            </h5>
            <p>laurent.theo@live.fr</p>
          </div>
        </div>

        <div className="containerContact">
          <Form onSubmit={handleSubmit(sendEmail)}>
            <FormGroup className="mb-2">
              <FormLabel>Prénom</FormLabel>
              <FormControl
                className="containerContact_input"
                required
                type="text"
                placeholder="Martin"
                {...register("prenom", { required: true })}
              ></FormControl>
            </FormGroup>
            <FormGroup className="mb-2">
              <FormLabel>Nom</FormLabel>
              <FormControl
                className="containerContact_input"
                required
                type="text"
                placeholder="Dupont"
                {...register("nom", { required: true })}
              ></FormControl>
            </FormGroup>
            <FormGroup className="mb-2">
              <FormLabel>Email</FormLabel>
              <FormControl
                className="containerContact_input"
                required
                type="email"
                placeholder="email.test@hotmail.fr"
                {...register("email", { required: true })}
              ></FormControl>
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Message</FormLabel>
              <FormControl
                className="containerContact_input"
                required
                as="textarea"
                rows={4}
                placeholder="Votre message"
                {...register("message", { required: true })}
              ></FormControl>
            </FormGroup>
            {loading ? (
              <div className="spinner-border mt-4"></div>
            ) : (
              <Button type="submit" className="containerContact_btn">
                Envoyer
              </Button>
            )}
          </Form>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}
