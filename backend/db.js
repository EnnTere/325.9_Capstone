// import mongoose from "mongoose";

// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("DB issue:", error);
//   }
// }

// export default connectDB;

// Handles MongoDB Requests
// export const fetchItemData = async () => {
//   try {
//       const response = await fetch('https://your-mongodb-api.com/getItemData');
//       const data = await response.json();
//       return { x: data.x, y: data.y };
//   } catch (error) {
//       console.error('Error fetching data:', error);
//       return { x: 100, y: 100 }; // Default fallback position
//   }
// };

