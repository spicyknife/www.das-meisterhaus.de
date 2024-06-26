<?php
    $postdata = file_get_contents("php://input");
    $mail = 'verkauf@das-meisterhaus.de';
    $subject = 'Kontaktanfrage';
    $from = "From: Meisterhaus Website <kontaktanfrage@das-meisterhaus.de>\r\n";
    $from .= "Content-Type: text/html\r\n";
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata, true);

  // Validate.
    header("Access-Control-Allow-Origin: *");
    http_response_code(201);
    $result = '';
    foreach ($request as $key => $value) {
      if (is_array($value) && !array_is_list($value)) {
        foreach ($value as $innerKey => $innerValue) {
            if (is_array($innerValue) && !array_is_list($innerValue)) {
                foreach ($innerValue as $moreInnerKey => $moreInnerValue) {
                    $result .= "$moreInnerKey: $moreInnerValue <br>";
                }
            }
            else {
              $result .= "$innerKey: $innerValue <br>";
            }
        }
    }
    else {
      $result .= "$key: $value <br>";
    }
    }

    mail($mail,$subject, $result, $from);

}
?>
