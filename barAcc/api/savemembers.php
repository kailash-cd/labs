<?php
//header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $data = json_decode(file_get_contents("php://input"));
  //print_r($data);
  $dataArray = (object) $data ;
//printf("Name: %s contact: %s\n\n", $dataArray->name, $dataArray->contact);

$servername = "localhost";
$username = "sanwalk_baracc";
$password = "Welcome@12#";
$dbname = "sanwalk_baracc";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    $error = ("Connection failed: " . $conn->connect_error);
    $response = array(
             'status' => -1,
             'message' => $error
         );
}

$sql = "INSERT INTO members (code, name,email, designation,sodowo,contact,picpath)
VALUES ('$dataArray->code', '$dataArray->name', '$dataArray->email', '$dataArray->designation', '$dataArray->sowodo',$dataArray->contact,'$dataArray->picPath')";

if ($conn->query($sql) === TRUE) {
    //echo "New record created successfully";
    $response = array(
            'status' => 0,
            'member' => $dataArray->name,
            'message' => 'member saved successfully'
        );
} else {
     $error =  "Error: " . $sql . "<br>" . $conn->error;
     $response = array(
                 'status' => -1,
                 'message' => $error
             );
}

$conn->close();

}else {
 //echo "invalid request method";
  $response = array(
         'status' => -1,
         'message' => 'invalid request method'
     );
}

echo json_encode($response);

?>