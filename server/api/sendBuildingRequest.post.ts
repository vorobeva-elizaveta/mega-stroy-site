import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    if(!body) throw new Error('Body is null')
    console.log(process.env.EMAIL_LOGIN);
    console.log(process.env.EMAIL_PASSWORD);
    
    let transporter = nodemailer.createTransport({
      host: 'smtp.beget.com', // Здесь указываем почтовый сервис (например, 'gmail' для Gmail),
      port: 465,
      secure: true,
      auth: {
          user: process.env.EMAIL_LOGIN,
          pass: process.env.EMAIL_PASSWORD
      }
    });
  
    const mailText = `Имя: ${body?.name} \nНомер телефона: ${body?.phone} 
    \nТип пользователя: ${!body?.isLegalEntity ? 'Частное лицо' : 'Юридическое лицо'} 
    \nТип услуги: ${body?.service=='building' ? 'Стройка нового здания' : body?.service == 'repairing' ? 'Ремонт' : 'Пока не знает'}
    \nКомментарий: ${body?.description || 'Комментарий не указан' }`
  
    // Настройка письма
    let mailOptions = {
        from: process.env.EMAIL_LOGIN, 
        to: process.env.EMAIL_LOGIN,
        subject: 'Новая заявка с сайта', // Тема письма
        text: mailText // Текст письма
    };
  
    // Отправляем письмо
    await transporter?.sendMail(mailOptions);
  
    return {
      status: 'ok'
    }
  } catch (error) {
    throw error
  }
})