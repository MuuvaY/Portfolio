<?php 
          if (isset($_POST["message"])) {
            $userNom = $_POST["nom"];
            $userPrenom = $_POST["prenom"];
            $email = $_POST["email"];
            $userObjet = $_POST['objet'];
            $message = $_POST["message"];
        
            // Adresse e-mail de l'expéditeur
            $fromEmail = $email;
        
            // Nom de l'expéditeur
            $fromName = $userNom;
        
            $subject = $userObjet;
        
            // Corps du message
            $messageBody = "Ce message vous a été envoyé via la page contact de votre portfolio\n"
                . "Nom : " . $userNom . "\n"
                . "Prénom : " . $userPrenom . "\n"
                . "Email : " . $email . "\n"
                . "Objet : " . $userObjet . "\n"
                . "Message : " . $message;
        
            // En-têtes de l'e-mail
            $headers = "From: " . $fromName . " <" . $fromEmail . ">\r\n";
            $headers .= "Reply-To: " . $userNom . " <" . $email . ">\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
            // Adresse de destination
            $toEmail = "mariusyvt@gmail.com";
        
            // Envoi de l'e-mail
            $retour = mail($toEmail, $subject, $messageBody, $headers);
        
            if ($retour) {
                echo "Votre message a été envoyé avec succès."; 
                header('location: index.html');
                exit();
            } else {
                echo "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.";
            }
        }
        ?>