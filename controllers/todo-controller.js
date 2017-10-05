const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
  .then(todos => {
    res.render('todos/todo-index', {
      message: 'ok',
      data: todos,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todoController.show = (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    res.render('todos/todo-single', {
      message: 'ok',
      data: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todoController.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
    description: req.body.description,
  }).then(todo => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todoController.update = (req, res) => {
  Todo.update({
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
    description: req.body.description,
  }, req.params.id).then(todo => {
    res.redirect('/todos');

    // res.render('todos/todo-edit', {
    //   message: 'ok',
    //   data: todo,
    // });
    // console.log(req.body);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todoController.edit = (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    res.render('todos/todo-edit', {
      data: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};


// todoController.updateForm = (req, res) => {
//   Todo.findById(req.params.id)
//   .then(todo => {
//     res.render('todos/todo-edit', {
//       message: 'ok',
//       data: todo,
//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

todoController.delete = (req, res) => {
  Todo.destroy(req.params.id)
  .then(() => {
    res.redirect('/todos');
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = todoController;



























