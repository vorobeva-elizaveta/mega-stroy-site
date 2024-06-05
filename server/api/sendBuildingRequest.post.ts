import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    let transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru', // Здесь указываем почтовый сервис (например, 'gmail' для Gmail),
      port: 465,
      secure: true,
      auth: {
          user: process.env.EMAIL_LOGIN, // Ваша почта
          pass: process.env.EMAIL_PASSWORD // Пароль от вашей почты
      }
    });
  
    const mailText = `Имя: ${body?.name} \nНомер телефона: ${body?.phone} 
    \nТип пользователя: ${!body.isLegalEntity ? 'Частное лицо' : 'Юридическое лицо'} 
    \nТип услуги: ${body.service=='building' ? 'Стройка нового здания' : body.service == 'repairing' ? 'Ремонт' : 'Пока не знает'}`
  
    // Настройка письма
    let mailOptions = {
        from: process.env.EMAIL_LOGIN, 
        to: 'vliza162@gmail.com',
        subject: 'Новая заявка с сайта', // Тема письма
        text: mailText // Текст письма
    };
  
    // Отправляем письмо
    await transporter.sendMail(mailOptions);
  
    return {
      status: 'ok'
    }
  } catch (error) {
    throw error
  }
})