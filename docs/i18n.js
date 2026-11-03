// Traductions des pages de compte (adresse confirmée, nouveau mot de passe) dans les 12 langues de l'app.
// La page s'affiche dans la langue du navigateur, en anglais si elle n'est pas traduite.
const SERENEYE_I18N = {
  fr: {
    account: "Compte Sereneye", problem: "Un problème ? Écris à", support: "Assistance", offline: "Pas de connexion à Internet. Vérifie ta connexion puis réessaie.",
    confirmH1: "Confirmation de l'adresse", confirmTitle: "Adresse confirmée", expiredTitle: "Lien expiré",
    okH2: "Ton adresse est confirmée", okP: "Ton compte Sereneye est prêt. Pour commencer :", ok1: "Retourne dans l'app Sereneye.", ok2: "Choisis « Se connecter », puis entre ton adresse et ton mot de passe.",
    expH2: "Ce lien n'est plus valable", expP1: "Il a déjà servi ou il a expiré. <strong>Si tu as déjà confirmé ton adresse</strong>, connecte-toi simplement dans Sereneye.", expP2: "Sinon, demande un nouveau lien :",
    emailLabel: "Adresse e-mail du compte", resendBtn: "Renvoyer l'e-mail de confirmation", sending: "Envoi…", sent: "C'est envoyé ! Regarde ta boîte de réception (et les courriers indésirables).", rate: "Trop de demandes. Réessaie dans une minute.", sendFail: "L'envoi n'a pas fonctionné ({0}). Vérifie l'adresse, puis réessaie.",
    pwH1: "Nouveau mot de passe", pwTitle: "Nouveau mot de passe", pwNew: "Nouveau mot de passe", pwConfirm: "Confirmation", pwPlaceholder: "6 caractères minimum", save: "Enregistrer", saving: "Enregistrement…",
    pwDone: "C'est fait : ton mot de passe a été changé. Retourne dans Sereneye et connecte-toi avec ce nouveau mot de passe.",
    pwExpired: "Ce lien a expiré ou a déjà servi. Dans Sereneye, clique à nouveau sur « Mot de passe oublié ? » pour recevoir un nouveau lien.", pwInvalid: "Ce lien n'est pas valide. Dans Sereneye, clique sur « Mot de passe oublié ? » pour recevoir un lien par e-mail.",
    min6: "Le mot de passe doit faire au moins 6 caractères.", mismatch: "Les deux mots de passe ne sont pas identiques.", same: "Choisis un mot de passe différent de l'ancien.", weak: "Mot de passe trop faible : 6 caractères minimum.", linkExpired: "Ce lien a expiré. Redemande un e-mail depuis Sereneye (« Mot de passe oublié ? »).", error: "Une erreur est survenue ({0}). Réessaie dans un instant.",
  },
  en: {
    account: "Sereneye account", problem: "A problem? Write to", support: "Support", offline: "No internet connection. Check your connection and try again.",
    confirmH1: "Email confirmation", confirmTitle: "Email confirmed", expiredTitle: "Link expired",
    okH2: "Your email is confirmed", okP: "Your Sereneye account is ready. To get started:", ok1: "Go back to the Sereneye app.", ok2: "Choose “Sign in”, then enter your email and password.",
    expH2: "This link is no longer valid", expP1: "It has already been used or has expired. <strong>If you've already confirmed your email</strong>, just sign in to Sereneye.", expP2: "Otherwise, request a new link:",
    emailLabel: "Account email address", resendBtn: "Resend confirmation email", sending: "Sending…", sent: "Sent! Check your inbox (and your spam folder).", rate: "Too many requests. Try again in a minute.", sendFail: "Sending failed ({0}). Check the address, then try again.",
    pwH1: "New password", pwTitle: "New password", pwNew: "New password", pwConfirm: "Confirm", pwPlaceholder: "6 characters minimum", save: "Save", saving: "Saving…",
    pwDone: "Done: your password has been changed. Go back to Sereneye and sign in with your new password.",
    pwExpired: "This link has expired or has already been used. In Sereneye, click “Forgot password?” again to get a new link.", pwInvalid: "This link isn't valid. In Sereneye, click “Forgot password?” to get a link by email.",
    min6: "The password must be at least 6 characters.", mismatch: "The two passwords don't match.", same: "Choose a password different from your old one.", weak: "Password too weak: 6 characters minimum.", linkExpired: "This link has expired. Request a new email from Sereneye (“Forgot password?”).", error: "Something went wrong ({0}). Try again in a moment.",
  },
  es: {
    account: "Cuenta de Sereneye", problem: "¿Algún problema? Escribe a", support: "Soporte", offline: "Sin conexión a internet. Comprueba tu conexión e inténtalo de nuevo.",
    confirmH1: "Confirmación del correo", confirmTitle: "Correo confirmado", expiredTitle: "Enlace caducado",
    okH2: "Tu correo está confirmado", okP: "Tu cuenta de Sereneye está lista. Para empezar:", ok1: "Vuelve a la app Sereneye.", ok2: "Elige «Iniciar sesión» e introduce tu correo y tu contraseña.",
    expH2: "Este enlace ya no es válido", expP1: "Ya se ha usado o ha caducado. <strong>Si ya confirmaste tu correo</strong>, simplemente inicia sesión en Sereneye.", expP2: "Si no, solicita un nuevo enlace:",
    emailLabel: "Correo de la cuenta", resendBtn: "Reenviar el correo de confirmación", sending: "Enviando…", sent: "¡Enviado! Revisa tu bandeja de entrada (y la carpeta de spam).", rate: "Demasiadas solicitudes. Inténtalo de nuevo en un minuto.", sendFail: "No se pudo enviar ({0}). Comprueba la dirección e inténtalo de nuevo.",
    pwH1: "Nueva contraseña", pwTitle: "Nueva contraseña", pwNew: "Nueva contraseña", pwConfirm: "Confirmación", pwPlaceholder: "6 caracteres como mínimo", save: "Guardar", saving: "Guardando…",
    pwDone: "Listo: tu contraseña se ha cambiado. Vuelve a Sereneye e inicia sesión con la nueva contraseña.",
    pwExpired: "Este enlace ha caducado o ya se ha usado. En Sereneye, vuelve a hacer clic en «¿Olvidaste la contraseña?» para recibir un nuevo enlace.", pwInvalid: "Este enlace no es válido. En Sereneye, haz clic en «¿Olvidaste la contraseña?» para recibir un enlace por correo.",
    min6: "La contraseña debe tener al menos 6 caracteres.", mismatch: "Las dos contraseñas no coinciden.", same: "Elige una contraseña distinta de la anterior.", weak: "Contraseña demasiado débil: 6 caracteres como mínimo.", linkExpired: "Este enlace ha caducado. Solicita un nuevo correo desde Sereneye («¿Olvidaste la contraseña?»).", error: "Se ha producido un error ({0}). Inténtalo de nuevo en un momento.",
  },
  de: {
    account: "Sereneye-Konto", problem: "Ein Problem? Schreib an", support: "Support", offline: "Keine Internetverbindung. Prüfe deine Verbindung und versuche es erneut.",
    confirmH1: "E-Mail-Bestätigung", confirmTitle: "E-Mail bestätigt", expiredTitle: "Link abgelaufen",
    okH2: "Deine E-Mail ist bestätigt", okP: "Dein Sereneye-Konto ist bereit. So geht’s los:", ok1: "Kehre zur Sereneye-App zurück.", ok2: "Wähle „Anmelden“ und gib deine E-Mail und dein Passwort ein.",
    expH2: "Dieser Link ist nicht mehr gültig", expP1: "Er wurde bereits verwendet oder ist abgelaufen. <strong>Wenn du deine E-Mail schon bestätigt hast</strong>, melde dich einfach in Sereneye an.", expP2: "Andernfalls fordere einen neuen Link an:",
    emailLabel: "E-Mail-Adresse des Kontos", resendBtn: "Bestätigungs-E-Mail erneut senden", sending: "Wird gesendet …", sent: "Gesendet! Sieh in deinem Posteingang (und im Spam-Ordner) nach.", rate: "Zu viele Anfragen. Versuche es in einer Minute erneut.", sendFail: "Senden fehlgeschlagen ({0}). Prüfe die Adresse und versuche es erneut.",
    pwH1: "Neues Passwort", pwTitle: "Neues Passwort", pwNew: "Neues Passwort", pwConfirm: "Bestätigung", pwPlaceholder: "Mindestens 6 Zeichen", save: "Speichern", saving: "Wird gespeichert …",
    pwDone: "Erledigt: Dein Passwort wurde geändert. Kehre zu Sereneye zurück und melde dich mit dem neuen Passwort an.",
    pwExpired: "Dieser Link ist abgelaufen oder wurde bereits verwendet. Klicke in Sereneye erneut auf „Passwort vergessen?“, um einen neuen Link zu erhalten.", pwInvalid: "Dieser Link ist ungültig. Klicke in Sereneye auf „Passwort vergessen?“, um einen Link per E-Mail zu erhalten.",
    min6: "Das Passwort muss mindestens 6 Zeichen haben.", mismatch: "Die beiden Passwörter stimmen nicht überein.", same: "Wähle ein anderes Passwort als das alte.", weak: "Passwort zu schwach: mindestens 6 Zeichen.", linkExpired: "Dieser Link ist abgelaufen. Fordere in Sereneye eine neue E-Mail an („Passwort vergessen?“).", error: "Ein Fehler ist aufgetreten ({0}). Versuche es gleich noch einmal.",
  },
  it: {
    account: "Account Sereneye", problem: "Un problema? Scrivi a", support: "Assistenza", offline: "Nessuna connessione a internet. Controlla la connessione e riprova.",
    confirmH1: "Conferma dell'indirizzo", confirmTitle: "Indirizzo confermato", expiredTitle: "Link scaduto",
    okH2: "Il tuo indirizzo è confermato", okP: "Il tuo account Sereneye è pronto. Per iniziare:", ok1: "Torna all'app Sereneye.", ok2: "Scegli «Accedi», poi inserisci il tuo indirizzo e la password.",
    expH2: "Questo link non è più valido", expP1: "È già stato usato o è scaduto. <strong>Se hai già confermato il tuo indirizzo</strong>, accedi semplicemente a Sereneye.", expP2: "Altrimenti, richiedi un nuovo link:",
    emailLabel: "Indirizzo e-mail dell'account", resendBtn: "Invia di nuovo l'e-mail di conferma", sending: "Invio…", sent: "Inviata! Controlla la posta in arrivo (e la cartella spam).", rate: "Troppe richieste. Riprova tra un minuto.", sendFail: "Invio non riuscito ({0}). Controlla l'indirizzo e riprova.",
    pwH1: "Nuova password", pwTitle: "Nuova password", pwNew: "Nuova password", pwConfirm: "Conferma", pwPlaceholder: "Almeno 6 caratteri", save: "Salva", saving: "Salvataggio…",
    pwDone: "Fatto: la password è stata cambiata. Torna a Sereneye e accedi con la nuova password.",
    pwExpired: "Questo link è scaduto o è già stato usato. In Sereneye, clicca di nuovo su «Password dimenticata?» per ricevere un nuovo link.", pwInvalid: "Questo link non è valido. In Sereneye, clicca su «Password dimenticata?» per ricevere un link via e-mail.",
    min6: "La password deve avere almeno 6 caratteri.", mismatch: "Le due password non coincidono.", same: "Scegli una password diversa dalla precedente.", weak: "Password troppo debole: almeno 6 caratteri.", linkExpired: "Questo link è scaduto. Richiedi una nuova e-mail da Sereneye («Password dimenticata?»).", error: "Si è verificato un errore ({0}). Riprova tra un attimo.",
  },
  "pt-BR": {
    account: "Conta do Sereneye", problem: "Algum problema? Escreva para", support: "Suporte", offline: "Sem conexão com a internet. Verifique sua conexão e tente novamente.",
    confirmH1: "Confirmação do e-mail", confirmTitle: "E-mail confirmado", expiredTitle: "Link expirado",
    okH2: "Seu e-mail está confirmado", okP: "Sua conta do Sereneye está pronta. Para começar:", ok1: "Volte ao app Sereneye.", ok2: "Escolha “Entrar” e digite seu e-mail e sua senha.",
    expH2: "Este link não é mais válido", expP1: "Ele já foi usado ou expirou. <strong>Se você já confirmou seu e-mail</strong>, basta entrar no Sereneye.", expP2: "Caso contrário, peça um novo link:",
    emailLabel: "E-mail da conta", resendBtn: "Reenviar o e-mail de confirmação", sending: "Enviando…", sent: "Enviado! Confira sua caixa de entrada (e a pasta de spam).", rate: "Muitas solicitações. Tente novamente em um minuto.", sendFail: "Falha no envio ({0}). Verifique o endereço e tente novamente.",
    pwH1: "Nova senha", pwTitle: "Nova senha", pwNew: "Nova senha", pwConfirm: "Confirmação", pwPlaceholder: "Mínimo de 6 caracteres", save: "Salvar", saving: "Salvando…",
    pwDone: "Pronto: sua senha foi alterada. Volte ao Sereneye e entre com a nova senha.",
    pwExpired: "Este link expirou ou já foi usado. No Sereneye, clique novamente em “Esqueceu a senha?” para receber um novo link.", pwInvalid: "Este link não é válido. No Sereneye, clique em “Esqueceu a senha?” para receber um link por e-mail.",
    min6: "A senha deve ter pelo menos 6 caracteres.", mismatch: "As duas senhas não coincidem.", same: "Escolha uma senha diferente da anterior.", weak: "Senha muito fraca: mínimo de 6 caracteres.", linkExpired: "Este link expirou. Peça um novo e-mail no Sereneye (“Esqueceu a senha?”).", error: "Ocorreu um erro ({0}). Tente novamente em instantes.",
  },
  nl: {
    account: "Sereneye-account", problem: "Een probleem? Mail naar", support: "Ondersteuning", offline: "Geen internetverbinding. Controleer je verbinding en probeer het opnieuw.",
    confirmH1: "E-mailbevestiging", confirmTitle: "E-mail bevestigd", expiredTitle: "Link verlopen",
    okH2: "Je e-mailadres is bevestigd", okP: "Je Sereneye-account is klaar. Zo begin je:", ok1: "Ga terug naar de Sereneye-app.", ok2: "Kies 'Inloggen' en voer je e-mailadres en wachtwoord in.",
    expH2: "Deze link is niet meer geldig", expP1: "Hij is al gebruikt of verlopen. <strong>Heb je je e-mailadres al bevestigd</strong>, log dan gewoon in bij Sereneye.", expP2: "Vraag anders een nieuwe link aan:",
    emailLabel: "E-mailadres van het account", resendBtn: "Bevestigingsmail opnieuw sturen", sending: "Versturen…", sent: "Verstuurd! Kijk in je inbox (en je spammap).", rate: "Te veel verzoeken. Probeer het over een minuut opnieuw.", sendFail: "Versturen mislukt ({0}). Controleer het adres en probeer het opnieuw.",
    pwH1: "Nieuw wachtwoord", pwTitle: "Nieuw wachtwoord", pwNew: "Nieuw wachtwoord", pwConfirm: "Bevestiging", pwPlaceholder: "Minimaal 6 tekens", save: "Bewaren", saving: "Bewaren…",
    pwDone: "Klaar: je wachtwoord is gewijzigd. Ga terug naar Sereneye en log in met je nieuwe wachtwoord.",
    pwExpired: "Deze link is verlopen of al gebruikt. Klik in Sereneye opnieuw op 'Wachtwoord vergeten?' voor een nieuwe link.", pwInvalid: "Deze link is ongeldig. Klik in Sereneye op 'Wachtwoord vergeten?' om een link per e-mail te ontvangen.",
    min6: "Het wachtwoord moet minimaal 6 tekens hebben.", mismatch: "De twee wachtwoorden komen niet overeen.", same: "Kies een ander wachtwoord dan je oude.", weak: "Wachtwoord te zwak: minimaal 6 tekens.", linkExpired: "Deze link is verlopen. Vraag in Sereneye een nieuwe e-mail aan ('Wachtwoord vergeten?').", error: "Er is iets misgegaan ({0}). Probeer het zo opnieuw.",
  },
  ja: {
    account: "Sereneyeアカウント", problem: "お困りの場合は次の宛先までご連絡ください：", support: "サポート", offline: "インターネットに接続されていません。接続を確認してもう一度お試しください。",
    confirmH1: "メールアドレスの確認", confirmTitle: "メールアドレスを確認しました", expiredTitle: "リンクの有効期限切れ",
    okH2: "メールアドレスを確認しました", okP: "Sereneyeアカウントの準備ができました。始めるには：", ok1: "Sereneye Appに戻ります。", ok2: "「サインイン」を選び、メールアドレスとパスワードを入力します。",
    expH2: "このリンクは無効になりました", expP1: "すでに使用されたか、有効期限が切れています。<strong>すでにメールアドレスを確認済みの場合</strong>は、Sereneyeにサインインしてください。", expP2: "そうでない場合は、新しいリンクをリクエストしてください：",
    emailLabel: "アカウントのメールアドレス", resendBtn: "確認メールを再送信", sending: "送信中…", sent: "送信しました！受信トレイ（と迷惑メールフォルダ）を確認してください。", rate: "リクエストが多すぎます。1分後にもう一度お試しください。", sendFail: "送信できませんでした（{0}）。アドレスを確認してもう一度お試しください。",
    pwH1: "新しいパスワード", pwTitle: "新しいパスワード", pwNew: "新しいパスワード", pwConfirm: "確認", pwPlaceholder: "6文字以上", save: "保存", saving: "保存中…",
    pwDone: "完了しました。パスワードが変更されました。Sereneyeに戻り、新しいパスワードでサインインしてください。",
    pwExpired: "このリンクは有効期限が切れたか、すでに使用されています。Sereneyeでもう一度「パスワードをお忘れですか？」をクリックして、新しいリンクを受け取ってください。", pwInvalid: "このリンクは無効です。Sereneyeで「パスワードをお忘れですか？」をクリックすると、メールでリンクが届きます。",
    min6: "パスワードは6文字以上にしてください。", mismatch: "2つのパスワードが一致しません。", same: "以前とは異なるパスワードを選んでください。", weak: "パスワードが弱すぎます：6文字以上にしてください。", linkExpired: "このリンクは有効期限が切れています。Sereneyeから新しいメールをリクエストしてください（「パスワードをお忘れですか？」）。", error: "エラーが発生しました（{0}）。しばらくしてからもう一度お試しください。",
  },
  "zh-Hans": {
    account: "Sereneye 账户", problem: "遇到问题？请写信至", support: "支持", offline: "没有网络连接。请检查网络后重试。",
    confirmH1: "确认电子邮件地址", confirmTitle: "电子邮件已确认", expiredTitle: "链接已过期",
    okH2: "你的电子邮件已确认", okP: "你的 Sereneye 账户已准备就绪。开始使用：", ok1: "返回 Sereneye App。", ok2: "选择“登录”，然后输入你的电子邮件和密码。",
    expH2: "此链接已失效", expP1: "它已被使用或已过期。<strong>如果你已确认电子邮件</strong>，直接登录 Sereneye 即可。", expP2: "否则，请申请新的链接：",
    emailLabel: "账户电子邮件地址", resendBtn: "重新发送确认邮件", sending: "正在发送…", sent: "已发送！请查看收件箱（以及垃圾邮件文件夹）。", rate: "请求过多。请一分钟后再试。", sendFail: "发送失败（{0}）。请检查地址后重试。",
    pwH1: "新密码", pwTitle: "新密码", pwNew: "新密码", pwConfirm: "确认", pwPlaceholder: "至少 6 个字符", save: "保存", saving: "正在保存…",
    pwDone: "完成：你的密码已更改。请返回 Sereneye，用新密码登录。",
    pwExpired: "此链接已过期或已被使用。请在 Sereneye 中再次点按“忘记密码？”以获取新链接。", pwInvalid: "此链接无效。请在 Sereneye 中点按“忘记密码？”，通过邮件获取链接。",
    min6: "密码至少需要 6 个字符。", mismatch: "两次输入的密码不一致。", same: "请选择与旧密码不同的密码。", weak: "密码太弱：至少需要 6 个字符。", linkExpired: "此链接已过期。请在 Sereneye 中重新申请邮件（“忘记密码？”）。", error: "发生错误（{0}）。请稍后再试。",
  },
  ko: {
    account: "Sereneye 계정", problem: "문제가 있으신가요? 문의:", support: "지원", offline: "인터넷에 연결되어 있지 않습니다. 연결을 확인한 후 다시 시도하세요.",
    confirmH1: "이메일 주소 확인", confirmTitle: "이메일 확인 완료", expiredTitle: "링크 만료",
    okH2: "이메일이 확인되었습니다", okP: "Sereneye 계정이 준비되었습니다. 시작하려면:", ok1: "Sereneye 앱으로 돌아가세요.", ok2: "‘로그인’을 선택한 다음 이메일과 암호를 입력하세요.",
    expH2: "이 링크는 더 이상 유효하지 않습니다", expP1: "이미 사용되었거나 만료되었습니다. <strong>이미 이메일을 확인했다면</strong> Sereneye에 로그인하기만 하면 됩니다.", expP2: "그렇지 않다면 새 링크를 요청하세요:",
    emailLabel: "계정 이메일 주소", resendBtn: "확인 이메일 다시 보내기", sending: "보내는 중…", sent: "보냈습니다! 받은편지함(과 스팸 폴더)을 확인하세요.", rate: "요청이 너무 많습니다. 1분 후 다시 시도하세요.", sendFail: "보내지 못했습니다({0}). 주소를 확인한 후 다시 시도하세요.",
    pwH1: "새 암호", pwTitle: "새 암호", pwNew: "새 암호", pwConfirm: "확인", pwPlaceholder: "최소 6자", save: "저장", saving: "저장 중…",
    pwDone: "완료: 암호가 변경되었습니다. Sereneye로 돌아가 새 암호로 로그인하세요.",
    pwExpired: "이 링크는 만료되었거나 이미 사용되었습니다. Sereneye에서 ‘암호를 잊으셨나요?’를 다시 클릭하여 새 링크를 받으세요.", pwInvalid: "이 링크는 유효하지 않습니다. Sereneye에서 ‘암호를 잊으셨나요?’를 클릭하면 이메일로 링크를 받을 수 있습니다.",
    min6: "암호는 최소 6자 이상이어야 합니다.", mismatch: "두 암호가 일치하지 않습니다.", same: "이전과 다른 암호를 선택하세요.", weak: "암호가 너무 약합니다: 최소 6자 이상이어야 합니다.", linkExpired: "이 링크는 만료되었습니다. Sereneye에서 새 이메일을 요청하세요(‘암호를 잊으셨나요?’).", error: "오류가 발생했습니다({0}). 잠시 후 다시 시도하세요.",
  },
  ru: {
    account: "Учетная запись Sereneye", problem: "Возникла проблема? Пишите на", support: "Поддержка", offline: "Нет подключения к интернету. Проверьте подключение и повторите попытку.",
    confirmH1: "Подтверждение адреса", confirmTitle: "Адрес подтвержден", expiredTitle: "Ссылка устарела",
    okH2: "Ваш адрес подтвержден", okP: "Учетная запись Sereneye готова. Чтобы начать:", ok1: "Вернитесь в приложение Sereneye.", ok2: "Выберите «Войти» и введите свой e-mail и пароль.",
    expH2: "Эта ссылка больше не действует", expP1: "Она уже использована или устарела. <strong>Если вы уже подтвердили адрес</strong>, просто войдите в Sereneye.", expP2: "Иначе запросите новую ссылку:",
    emailLabel: "E-mail учетной записи", resendBtn: "Отправить письмо повторно", sending: "Отправка…", sent: "Отправлено! Проверьте папку «Входящие» (и «Спам»).", rate: "Слишком много запросов. Повторите через минуту.", sendFail: "Не удалось отправить ({0}). Проверьте адрес и повторите попытку.",
    pwH1: "Новый пароль", pwTitle: "Новый пароль", pwNew: "Новый пароль", pwConfirm: "Подтверждение", pwPlaceholder: "Минимум 6 символов", save: "Сохранить", saving: "Сохранение…",
    pwDone: "Готово: пароль изменен. Вернитесь в Sereneye и войдите с новым паролем.",
    pwExpired: "Эта ссылка устарела или уже использована. В Sereneye снова нажмите «Забыли пароль?», чтобы получить новую ссылку.", pwInvalid: "Эта ссылка недействительна. В Sereneye нажмите «Забыли пароль?», чтобы получить ссылку по почте.",
    min6: "Пароль должен содержать не менее 6 символов.", mismatch: "Пароли не совпадают.", same: "Выберите пароль, отличный от прежнего.", weak: "Слишком простой пароль: минимум 6 символов.", linkExpired: "Эта ссылка устарела. Запросите новое письмо в Sereneye («Забыли пароль?»).", error: "Произошла ошибка ({0}). Повторите попытку чуть позже.",
  },
  tr: {
    account: "Sereneye hesabı", problem: "Bir sorun mu var? Yazın:", support: "Destek", offline: "İnternet bağlantısı yok. Bağlantınızı kontrol edip yeniden deneyin.",
    confirmH1: "E-posta onayı", confirmTitle: "E-posta onaylandı", expiredTitle: "Bağlantının süresi doldu",
    okH2: "E-postanız onaylandı", okP: "Sereneye hesabınız hazır. Başlamak için:", ok1: "Sereneye uygulamasına geri dönün.", ok2: "“Giriş yap”ı seçin, ardından e-postanızı ve parolanızı girin.",
    expH2: "Bu bağlantı artık geçerli değil", expP1: "Zaten kullanılmış veya süresi dolmuş. <strong>E-postanızı zaten onayladıysanız</strong> Sereneye’a giriş yapmanız yeterli.", expP2: "Aksi halde yeni bir bağlantı isteyin:",
    emailLabel: "Hesabın e-posta adresi", resendBtn: "Onay e-postasını yeniden gönder", sending: "Gönderiliyor…", sent: "Gönderildi! Gelen kutunuzu (ve istenmeyen klasörünü) kontrol edin.", rate: "Çok fazla istek. Bir dakika sonra yeniden deneyin.", sendFail: "Gönderilemedi ({0}). Adresi kontrol edip yeniden deneyin.",
    pwH1: "Yeni parola", pwTitle: "Yeni parola", pwNew: "Yeni parola", pwConfirm: "Onay", pwPlaceholder: "En az 6 karakter", save: "Kaydet", saving: "Kaydediliyor…",
    pwDone: "Tamam: parolanız değiştirildi. Sereneye’a dönün ve yeni parolanızla giriş yapın.",
    pwExpired: "Bu bağlantının süresi dolmuş veya zaten kullanılmış. Yeni bir bağlantı almak için Sereneye’da yeniden “Parolanızı mı unuttunuz?” bağlantısını tıklayın.", pwInvalid: "Bu bağlantı geçerli değil. E-postayla bağlantı almak için Sereneye’da “Parolanızı mı unuttunuz?” bağlantısını tıklayın.",
    min6: "Parola en az 6 karakter olmalıdır.", mismatch: "İki parola eşleşmiyor.", same: "Eskisinden farklı bir parola seçin.", weak: "Parola çok zayıf: en az 6 karakter.", linkExpired: "Bu bağlantının süresi doldu. Sereneye’dan yeni bir e-posta isteyin (“Parolanızı mı unuttunuz?”).", error: "Bir hata oluştu ({0}). Biraz sonra yeniden deneyin.",
  },
};

/// Langue du navigateur → textes (anglais par défaut). t("clé", valeur) remplace {0}.
const SERENEYE_LANG = (() => {
  for (const l of navigator.languages || [navigator.language || "en"]) {
    if (SERENEYE_I18N[l]) return l;
    if (/^zh(-CN|-SG|-Hans)/i.test(l)) return "zh-Hans";
    if (/^pt/i.test(l)) return "pt-BR";
    const base = l.split("-")[0];
    if (SERENEYE_I18N[base]) return base;
  }
  return "en";
})();
function t(key, arg) {
  const s = SERENEYE_I18N[SERENEYE_LANG][key] ?? SERENEYE_I18N.en[key];
  return arg === undefined ? s : s.replace("{0}", arg);
}
/// Remplit les éléments marqués data-i18n (texte) et data-i18n-placeholder.
function translatePage() {
  document.documentElement.lang = SERENEYE_LANG;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}
