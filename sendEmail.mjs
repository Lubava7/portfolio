import nodemailer from 'nodemailer';
// https://nodemailer.com/message/
// https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'Mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'joheunsaram@mail.ru',
      pass: 'AyyBDedZ6UaZVjf4ErB4',
    },
  });

  let info = await transporter.sendMail({
    from: 'joheunsaram@mail.ru',
    to: 'joheunsaram@mail.ru',
    subject: 'деплой портфолио',
    text: 'Деплой портфолио прошел успешно, можешь чекать, Любавка, вот тебе ссылка - https://lubava7.github.io/portfolio/',
  });

  console.log('Message sent: %s', info.messageId);
}

sendEmail().catch(console.error);
// нод мейлер КОМУС апп
// AyyBDedZ6UaZVjf4ErB4
