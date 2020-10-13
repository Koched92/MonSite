<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {

        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $contact = $form->getData();

            //envoi de mail
            $message = (new \Swift_Message('Nouveau Contact'))

            //on attribue l'expéditeur
            ->setFrom($contact['mail'])

            //on attribue le destinataire
            ->setTo('hichem.koched@gmail.com')

            //on crée le message avec la vue twig
            ->setBody(
                $this->renderView('emails/contactMail.html.twig', compact('contact')
                ),
                'text/html'
            );
            // on envoie le message
            $mailer->send($message);

            $this->addFlash('success', 'Le message a bien été envoyé');
            return $this->redirectToRoute('contact');

        }
        return $this->render('contact/contact.html.twig', [
            'contactForm' =>  $form->createView(),
        ]);
    }
}
