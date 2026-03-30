En un directorio nuevo en la raíz del proyecto generar una api rest en PHP simple que va ser usada en un sitio web alojado en hostinger que contenga un solo endpoint que reciba en ese método vía post nombre, apellido, correo, teléfono y mensaje, el objetivo de esta api es que reciba información de un formulario de contactos de una página web para enviar información vía correo a un Mail de Contactos utilizando PHPMailer tomar esta código como ejemplo para hacer el envío del mail

```php
<?php  
ini\_set('display\_errors', 1);  
ini\_set('display\_startup\_errors', 1);  
error\_reporting(E\_ALL);

require 'vendor/autoload.php';  
use PHPMailer\\PHPMailer\\PHPMailer;  
use PHPMailer\\PHPMailer\\SMTP;  
use PHPMailer\\PHPMailer\\Exception;

$mail \= new PHPMailer(true);  
$mail\-\>isSMTP();  
$mail\-\>SMTPDebug \= 2;  
$mail\-\>Host \= 'smtp.hostinger.com';  
$mail\-\>SMTPAuth \= true;  
$mail\-\>SMTPSecure \= PHPMailer::ENCRYPTION\_STARTTLS; *// Asegurar la conexión*  
$mail\-\>Port \= 587;  
$mail\-\>Username \= 'Contact@prestigeyachtsdetailing.com';  
$mail\-\>Password \= '6\>aW$MXW';  
$mail\-\>setFrom('contact@prestigeyachtsdetailing.com', 'tu nombre');  
$mail\-\>addReplyTo('contact@prestigeyachtsdetailing.com', 'tu nombre');  
$mail\-\>addAddress('laynerker.gdl@gmail.com', 'nombre destinatario');  
$mail\-\>Subject \= 'Comprobando si PHPMailer funciona';  
$mail\-\>Body \= 'Esto es sólo el cuerpo del mensaje en texto plano';  
*//$mail-\>addAttachment('attachment.txt');*  
if (\!$mail\-\>send()) {  
echo 'Mailer Error:'. $mail\-\>ErrorInfo;  
} else {  
echo '¡El mensaje de correo electrónico se ha enviado\!';  
}  
?>
```

la respuesta de este correo tiene que ser un 204 porque no necesita un body de respuesta, si tiene algún error si, seria genial escribirlo en un log y responder al usuario con el código que corresponde.

esta api será utilizada por la página de contactos al momento de solicitar información al dale al botón “Send Message” la idea es hacer un request desde esta página a la api y si todo esta ok mostrarle un mensaje temporal al usuario que le indique si mensaje a sido enviado pero si no porque la api dio error notificar al usuario que ocurrió un error al enviar su consulta.

nota: al hacer el request a la api no es necesario que pagina se refresque, es decir, que no quiero que sea un salto de pagina para obtener los datos al formulario y enviarlo a la api  
