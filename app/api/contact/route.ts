import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongobd';
import ContactMessage from '@/models/ContactMessage';

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Campos incompletos' }, { status: 400 });
    }

    await connectToDB();

    const newMessage = await ContactMessage.create({ fullName, email, message });

    return NextResponse.json({ message: 'Mensaje guardado', data: newMessage }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al guardar el mensaje' }, { status: 500 });
  }
}
