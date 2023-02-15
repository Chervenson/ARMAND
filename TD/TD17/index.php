<?php
function getFile($fileName){
    $file = fopen($fileName, 'r');
    while ( !feof($file)){
        $line[] =fgetcsv($file, 1024);
    }
    fclose($file);
    return $line;
}


?>

<hr>

<?php
echo "<table border=1>";
$fileName = getFile("adherent.csv");
foreach ($fileName as $line){
echo "<tr>
        <td>$line[0]</td>
        <td>$line[1]</td>
        <td>$line[2]</td>
        <td>$line[3]</td>
       
      </tr>";
}
echo "</table>";
?>
<hr>


<?php
echo "<table border=1>";
$fileName = getFile("auteur.csv");
foreach ($fileName as $line){
echo "<tr>
        <td>$line[0]</td>
        <td>$line[1]</td>
        <td>$line[2]</td>
        <td>$line[3]</td>
        <td>$line[4]</td>
       
      </tr>";
}
echo "</table>";
?>

<hr>

<?php
echo "<table border=1>";
$fileName = getFile("livre.csv");
foreach ($fileName as $line){
    if ($line[3]=="NULL"){
echo "<tr>
        <td>$line[0]</td>
        <td>$line[1]</td>
        <td>$line[2]</td>
        
       
      </tr>";
    }

   
}
echo "</table>";

echo "<table border=1>";
foreach ($fileName as $line){
    if ($line[3]!="NULL"){
echo "<tr>
        <td>$line[0]</td>
        <td>$line[1]</td>
        <td>$line[2]</td>
        
       
      </tr>";
    }

   
}
echo "</table>";

?>
<hr>
<?php

echo "<table border=1>";
$fileName = getFile("livre.csv");
foreach ($fileName as $line){
    echo "<tr>
        <td>$line[1]</td>
        <td>$line[4]</td>
    </tr>";
}
echo "</table>";




?>


