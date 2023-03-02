<?php
    $postdata = file_get_contents("php://input");
    $mail1 = 'verkauf@das-meisterhaus.de';
    $mail2 = 'info@das-meisterhaus.de';
    $mail3 = 'julian.willner@das-meisterhaus.de';
    $subject = 'Kontaktanfrage';
    $from = "From: Meisterhaus Website <kontaktanfrage@das-meisterhaus.de>\r\n";
    $from .= "Content-Type: text/html\r\n";
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
    header("Access-Control-Allow-Origin: *");
    http_response_code(201);
    $result = '';
    foreach ($request as $key => $value) {
      $result .= "$key: $value <br>";
    }
    mail($mail1, $subject, $result, $from);
    mail($mail2, $subject, $result, $from);
    mail($mail3, $subject, $result, $from);
}
?>
