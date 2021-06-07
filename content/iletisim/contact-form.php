<?php
    $ziyaretci_ad = $_POST['username'];
    $ziyaretci_eposta = $_POST['email'];
    $mesaj = $_POST['message'];

    $email_from = "karadeniz@karadenizdanismanlik.com";
    $email_subject = "İletişim Formu Mesajı";
    $email_body = "Ziyaretçi Adı: $ziyaretci_ad.\n".
                    "Ziyaretçi E-posta: $ziyaretci_eposta.\n".
                    "Mesaj : $mesaj.\n";
    $to = "karadeniz@karadenizdanismanlik.com";

    $headers = "From : $email_from \r\n";

    $headers .= "Reply-to: $ziyaretci_eposta \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>