<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Manejo de preflight request (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Solo permitir peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// Obtener datos del cuerpo de la petición (JSON)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Si no es JSON, intentar con $_POST
if (!$data) {
    $data = $_POST;
}

$nombre = $data['nombre'] ?? '';
$apellido = $data['apellido'] ?? '';
$correo = $data['correo'] ?? '';
$telefono = $data['telefono'] ?? '';
$mensaje = $data['mensaje'] ?? '';

// Validación básica
if (empty($nombre) || empty($correo) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(["error" => "Faltan campos obligatorios"]);
    exit;
}

// Cargar PHPMailer
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'Contact@prestigeyachtsdetailing.com';
    $mail->Password   = '6>aW$MXW';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Destinatarios
    $mail->setFrom('Contact@prestigeyachtsdetailing.com', 'Prestige Yachts Detailing');
    $mail->addAddress('Contact@prestigeyachtsdetailing.com', 'Admin');
    $mail->addReplyTo($correo, "$nombre $apellido");

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = "Nuevo mensaje de contacto: $nombre $apellido";
    $mail->Body    = "
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> $nombre $apellido</p>
        <p><strong>Email:</strong> $correo</p>
        <p><strong>Teléfono:</strong> $telefono</p>
        <p><strong>Mensaje:</strong></p>
        <p>" . nl2br(htmlspecialchars($mensaje)) . "</p>
    ";
    $mail->AltBody = "Nombre: $nombre $apellido\nEmail: $correo\nTeléfono: $telefono\nMensaje:\n$mensaje";

    $mail->send();
    // Respondemos con 204 No Content en caso de éxito
    http_response_code(204);
} catch (Exception $e) {
    // Loggear el error
    error_log("Mailer Error: {$mail->ErrorInfo}");
    http_response_code(500);
    echo json_encode(["error" => "Ocurrió un error al enviar el mensaje. Inténtelo de nuevo más tarde."]);
}
