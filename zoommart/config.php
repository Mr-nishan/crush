<?php
// Database configuration
$servername = "localhost"; // Hostname
$username = "root";        // Database username (root)
$password = "";            // No password
$dbname = "mart";          // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}
?>
