// lib/db.js
import dbConnect from './mongoose';
import Order from './models/Order';

// Export a db-like interface for compatibility with your existing code
export const db = {
  async collection(name) {
    await dbConnect();
    
    // Map collection names to Mongoose models
    const models = {
      'orders': Order,
      // Add other models as needed
    };
    
    if (!models[name]) {
      throw new Error(`Collection ${name} not found in models`);
    }
    
    // Return a MongoDB-like interface for the Mongoose model
    return {
      insertOne: async (doc) => {
        const model = new models[name](doc);
        await model.save();
        return { insertedId: model._id };
      },
      updateOne: async (filter, update) => {
        const result = await models[name].updateOne(filter, update);
        return { modifiedCount: result.modifiedCount };
      },
      findOne: async (filter) => {
        return await models[name].findOne(filter).lean();
      },
      find: (filter) => {
        const query = models[name].find(filter);
        return {
          limit: (limit) => {
            query.limit(limit);
            return {
              toArray: async () => {
                return await query.lean();
              }
            };
          },
          toArray: async () => {
            return await query.lean();
          }
        };
      }
    };
  }
};

export default dbConnect;
