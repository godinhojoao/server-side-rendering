const TaskModel = require('./../config/Task');

class Task {
  constructor() { }

  async getAll() {
    try {
      return await TaskModel.find({});
    } catch (error) {
      return error;
    }
  }

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

      if (!updatedTask) { return { status: 404, message: 'task not found!' }; }

      return updatedTask;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      const task = await TaskModel.findByIdAndDelete(id);
      console.log('task', task)

      if (!task) { return { status: 404, message: 'task not found!' }; }

      return task;
    } catch (error) {
      return error;
    }
  }
}

const task = new Task();

module.exports = task;
