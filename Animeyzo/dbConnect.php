<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "anime";
$conn = new mysqli ($dbServername, $dbUsername, $dbPassword, $dbName);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `contactus`(`Full_Name`, `E-mail`, `PhoneNo`, `message`) VALUES ('atgs','dagsda', 426342,'valhue-3' );";

if ($conn->query($sql) === TRUE) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<form action="/Contact_Handler.php" method="post">
  <input type="text" id="fname" name="fullName" placeholder="Full Name ...">

  <input type="text" id="email" name="email" placeholder="E-mail ...">

  <input type="text" id="phone" name="phone" placeholder="Phone Number ...">


  <!-- <label for="subject">Subject</label> -->
  <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
  <br>
  <button class="button button3" onclick="anime()" style="  padding: 12px 55px; "><strong>Submit</strong></button>
  <br>
  <!-- <input type="submit" value="Submit"> -->
</form>

  </body>
</html>
