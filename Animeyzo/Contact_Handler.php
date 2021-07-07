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
$firstname = $_POST['fullName'];
$email= $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$sql = "INSERT INTO `contactus`(`Full_Name`, `E-mail`, `PhoneNo`, `message`) VALUES ('$firstname','$email', $phone,'$subject' );";

if ($conn->query($sql) === TRUE) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: GroupProject.html");
?>
