"use strict";
const Mongoose = require('mongoose');
// Connection string to the database
const uri = process.env.MONGODB_URI;
// Validate that the database connection string has been configured.
if (!uri) {
  throw new Error(
    'The MONGODB_URI environment variable must be configured with the connection string ' +
      'to the database.'
  );
}
// Cached connection promise
let db = null;
// Function for connecting to MongoDB, returning a new or cached database connection
module.exports = async function connectToDatabase(req, res, next) {
  if (!db) {
    // If no connection promise is cached, create a new one. We cache the promise instead
    // of the connection itself to prevent race conditions where connect is called more than
    // once. The promise will resolve only once.
    db = Mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        // Buffering means mongoose will queue up operations if it gets
        // disconnected from MongoDB and send them when it reconnects.
        // With serverless, better to fail fast if not connected.
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0 // and MongoDB driver buffering
      });
  }
  // await on the promise. This resolves only once.
  await db;
  next();
}