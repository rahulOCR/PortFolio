<?php
header('Location:../html/');
$myfile = fopen("Data.txt", "w") or die("Unable to open file!");

fwrite($myfile, $_POST["Name"]);
fwrite($myfile, $_POST["Email"]);
fwrite($myfile, $_POST["Subject"]);
fwrite($myfile, $_POST["Message"]);
fclose($myfile);

?>
