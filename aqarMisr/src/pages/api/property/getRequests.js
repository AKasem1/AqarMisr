import Property from "@/pages/models/Property";
import mongoose from "mongoose";


const handler = async (req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);

  try {
    if (req.method === "GET") {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to MongoDB");

      const properties = await Property.find({"accepted": "accepted"})
        .populate("addedBy", "fullName phone")
        .exec();
        
      res.status(200).json({message: "properties requests retrieved successfully.", data: properties});
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  } finally {
    await mongoose.disconnect();
  }
};

export default handler;
