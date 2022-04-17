const db = require('../config/database')
const UserSchema = db.Schema({
  name: { type: "String" },
  tasks: [{
    type: db.Schema.Types.ObjectId,
    ref: 'Task'
  }]
});

const UserModel = db.model("User", UserSchema);

class User {
  constructor() { }

  async login(name) {
    try {
      const existentUser = await UserModel.findOne({ name: name }).populate('tasks');

      if (existentUser) { return existentUser; }
      else {
        const user = await new UserModel({ name: name }).save();
        return user
      }
    } catch (error) {
      return error;
    }
  }

  async getUserWithTasks(userId) {
    try {
      const existentUser = await UserModel.findById(userId).populate('tasks');
      let error = null;

      if (!existentUser) { error = 'User not found'; }

      return [existentUser, error];
    } catch (error) {
      return [null, error];
    }
  }

  async addTask(userId, taskId) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $push: { tasks: taskId } },
        { new: true }
      );
      let error = null;

      if (!updatedUser) { error = { status: 404, message: 'user not found' } }

      return [updatedUser, error];
    } catch (error) {
      return [null, error];
    }
  }
}

const user = new User();

module.exports = user;
