const data = require("./data");

class Controller {
    // getting all Latest Stories
    async getTodos() {
        // return all Latest Stories
        return new Promise((resolve, _) => resolve(data));
    }

    // getting a single Latest Story
    async getTodo(id) {
        return new Promise((resolve, reject) => {
            // get the todo
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (todo) {
                // return the Latest Story
                resolve(todo);
            } else {
                // return an error
                reject(`Todo with id ${id} not found `);
            }
        });
    }
}
module.exports = Controller;