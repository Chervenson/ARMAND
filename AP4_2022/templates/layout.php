<?php
session_start(); 
?>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <title><?= $title ?></title>
      <link href="style.css" rel="stylesheet" /> 
   </head>

   <body>
   <div id="container">
         <!-- zone de connexion -->
         
         <form method="POST">
         <h1>Connexion</h1>
         
         <label><b>Nom d'utilisateur</b></label>
         <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>

         <label><b>Mot de passe</b></label>
         <input type="password" placeholder="Entrer le mot de passe" name="password" required>

         <input type="submit" name='submit' value='CONNEXION' >
    
         </form>

         <?php
          if (isset($_POST['submit']))
          {
            $login = $_POST['username'];
            $mdp = $_POST['password'];
           // echo "login=$login <br> mdp=$mdp";
            $user=Test_connexion($login,$mdp);

            if($_SESSION["login"]==0)
            {
               echo "la connexon a echouer";
            }
            else
            {
              
               $_SESSION["prenom"]=$user['prenom'];  
               $_SESSION["nom"]=$user['nom'];
               $_SESSION["email"]=$user['email'];
               
               echo "Vous êtes connecté en tant que ".$_SESSION["nom"]. $_SESSION["prenom"]."<br> <br>";
               echo "<FORM method='post' action='index.php'> <button type=submit name='deco'> DECONNEXION </button> </form>";

                                       
            }
          }

         ?>
         </div>
         
      <?= $content ?>

   </body>
</html>
