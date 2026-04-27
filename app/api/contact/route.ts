import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Si tienes RESEND_API_KEY, usa Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

        // Enviar email al admin
        await resend.emails.send({
          from: 'contacto@nvrobraforma.com',
          to: 'nvrobraforma@gmail.com',
          subject: `Nuevo mensaje de contacto: ${subject}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        })

        // Enviar confirmación al usuario
        await resend.emails.send({
          from: 'contacto@nvrobraforma.com',
          to: email,
          subject: 'Hemos recibido tu mensaje - NVR Obraforma',
          html: `
            <h2>Hola ${name},</h2>
            <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
            <p><strong>Detalles de tu mensaje:</strong></p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p>Atentamente,<br>Equipo NVR Obraforma</p>
          `,
        })
      } catch (resendError) {
        console.error('Error con Resend:', resendError)
        // Continuar sin Resend si hay error
      }
    }

    // Log del mensaje (para desarrollo)
    console.log('Nuevo mensaje de contacto:', { name, email, phone, subject, message })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje recibido. Nos pondremos en contacto pronto.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en contacto:', error)
    return NextResponse.json(
      { error: 'Error al procesar tu mensaje. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
