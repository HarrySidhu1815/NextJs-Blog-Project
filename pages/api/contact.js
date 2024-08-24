import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client

    try {
      client = await MongoClient.connect(
        "mongodb+srv://harjobanpreet15:ckoQ2CKIA7PgnMOt@events.ta9v3.mongodb.net/messages?retryWrites=true&w=majority&appName=Events"
      );
    } catch (error) {
        res.status(500).json({message: 'Could not connect to database'})
        return
    }

    const db = client.db()

    try {
        const result = await db.collection('messages').insertOne(newMessage)
        newMessage.id = result.insertedId
    } catch (error) {
        client.close()
        res.status(500).json({message: 'Could not save the message to the database'})
        return
    }

    client.close()
    
    res
      .status(201)
      .json({
        message: "Successfully stored the message",
        messageContent: newMessage,
      });
  }
}
