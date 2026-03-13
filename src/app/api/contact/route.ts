import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

/**
 * Utility to get the path of our JSON storage file.
 */
function getMessagesFilePath() {
  // Root of the project
  const dataDir = process.cwd();
  return join(dataDir, 'data', 'messages.json');
}

export async function GET() {
  try {
    const filePath = getMessagesFilePath();
    const content = await fs.readFile(filePath, 'utf-8');
    const messages = JSON.parse(content);
    return NextResponse.json(messages);
  } catch {
    console.error('Failed to read messages.json');
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const filePath = getMessagesFilePath();
    let messages: { name: string; email: string; message: string; date: string }[] = [];

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      messages = JSON.parse(content);
    } catch {
      // If file doesn't exist or is invalid, start fresh
      messages = [];
    }

    const newMessage = {
      name,
      email,
      message,
      date: new Date().toISOString(),
    };

    messages.push(newMessage);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch {
    console.error('POST /api/contact error');
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}