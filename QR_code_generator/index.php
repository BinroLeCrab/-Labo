<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'lib/phpqrcode/qrlib.php'; //On inclut la librairie au projet

echo "<p>Hello World !</p>";

$csv = fopen('url_qrcodes_jld.csv', 'r');
$data = [];

if ($csv) {
    $row = 1;
    while (($fetchData = fgetcsv($csv, 1000, ",")) !== FALSE) {
        $num = count($fetchData);
        $row++;
        array_push($data, $fetchData);
    }
    fclose($csv);
}
unset($data[0]);
$data = array_values($data);

// print_r($data);
// echo"<br/>";

for ( $i = 0; $i < count($data); $i++ ) {

    // On crée notre QR Code et on le sauvegarde dans un fichier
    $filename = 'QR_code/'.$data[$i][0].'.png';
    QRcode::png($data[$i][1], $filename, 'L', 10, 2);

    echo "<p>".$data[$i][0] ."</p>\n";
}

echo '<p>Les QR Codes ont été générés avec succès !</p>';

?>