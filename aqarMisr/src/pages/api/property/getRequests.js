import Property from "@/pages/models/Property";
import mongoose from "mongoose";


const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      await mongoose.connect(process.env.MONGO_URL);

      const properties = await Property.find({ "accepted": "pending" })
        .populate("addedBy", "fullName phone")
        .exec();
        
      console.log(properties)
      console.log("Properties requests retrieved successfully.");
      res.status(200).json(properties);
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
