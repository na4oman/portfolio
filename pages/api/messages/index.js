import { MongoClient } from 'mongodb'

async function handler(req, res) {
  let client

  try {
    client = await MongoClient.connect(process.env.MONGO_URI)
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the DB failed!' })
  }

  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body

    if (
      !name ||
      name.trim().length === 0 ||
      !email ||
      !email.includes('@') ||
      !subject ||
      subject.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      res.status(442).json({ message: 'Invalid inputs' })
      client.close()
      return
    }

    const newMessage = {
      name,
      email,
      subject,
      message,
    }

    try {
      const db = client.db('portfolio')
      await db.collection('messages').insertOne(newMessage)
      res.status(201).json({ message: 'Added new message', data: newMessage })
    } catch (error) {
      res.status(500).json({ message: 'Sending message failed!' })
    }

    client.close()
  }
}

export default handler
