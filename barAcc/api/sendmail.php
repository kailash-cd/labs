
<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "support@wilkd.com";
    $email_subject = "Your email subject line";

  $data = json_decode(file_get_contents("php://input"));
  $dataArray = (object) $data ;

    function died($error) {
        // your error code can go here
         $response = array(
                 'status' => -1,
                 'message' =>  $error
             );
         die();
    }


    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
        $response = array(
                         'status' => -1,
                         'message' =>  "mandatory parameters are missing"
                     );

echo json_encode($response);
exit(0);
    }


    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$dataArray->name)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    $response = array(
                                 'status' => -1,
                                 'message' =>  $error_message
                             );

echo json_encode($response);
exit(0);
  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$dataArray->name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
     $response = array(
                                      'status' => -1,
                                      'message' =>  $error_message
                                  );

echo json_encode($response);
exit(0);
  }

  if(!preg_match($string_exp,$dataArray->comments)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
     $response = array(
                                      'status' => -1,
                                      'message' =>  $error_message
                                  );

echo json_encode($response);
exit(0);
  }

  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
     $response = array(
                                      'status' => -1,
                                      'message' =>  $error_message
                                  );

echo json_encode($response);
exit(0);
  }


    $email_message = "Form details below.\n\n";


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }



    $email_message .= "First Name: ".clean_string($dataArray->name)."\n";
    $email_message .= "Email: ".clean_string($dataArray->email)."\n";
    $email_message .= "Comments: ".clean_string($dataArray->comments)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

//<!-- include your own success html here -->
 $response = array(
            'status' => 0,
            'member' => $dataArray->name,
            'message' => 'Thank you for contacting us. We will be in touch with you very soon.'
        );

}

echo json_encode($response);

?>