const db = require('../config/database')
const TaskSchema = db.Schema({
  name: { type: "String" },
  status: { type: "String" },
  user: {
    type: db.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const TaskModel = db.model("Task", TaskSchema);

class Task {
  constructor() { }

  async getOne(id) {
    try {
      return await TaskModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  async create({ name, status }) {
    try {
      const task = new TaskModel({ name, status });

      return await task.save();
    } catch (error) {
      return error;
    }
  }

  async update(id, task) {
    try {
      const updatedTask = await TaskModel.findByIdAndUpdate(id, task, { new: true });
      let error = null;

      if (!updatedTask) { error = { status: 404, message: 'task not found' } }

      return [updatedTask, error];
    } catch (error) {
      return [null, error];
    }
  }

  async delete(id) {
    try {
      const task = await TaskModel.findByIdAndDelete(id);
      let error = null;

      if (!task) { error = { status: 404, message: 'task not found' } }

      return [task, error];
    } catch (error) {
      return [null, error];
    }
  }
}

const task = new Task();

module.exports = task;
