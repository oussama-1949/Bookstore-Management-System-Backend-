const authors = require('../Modals/dataAuthors')

exports.getAllAuthors = (req,res) => {
    console.log("Getting all authors...");
    console.log("Authors data:", authors);

    res.json(authors)
}

exports.getAuthorById = (req,res) => {
    const {id} = req.params;
    const AuthorId = authors.filter (el => el.id == id)
    res.json(AuthorId)
}

exports.addNewAuthor = (req,res) => {
    const newAuthor = req.body 
    authors.push(newAuthor);
    res.json(authors)
}

exports.updateAuthorById = (req , res ) => {
    const {id} = req.params
    authors.forEach(author => {
        if (author.id == id){
            for (let [key, value] of Object.entries(req.body)) {
                author[key] = value
            }

        }
        
    })
    res.json(authors)
}

exports.deleteAuthorById = (req,res) => {
    console.log("delete book by id!!")

    const {id} = req.params
    const index = authors.findIndex(author => author.id == id)
    authors.splice(index, 1)
    console.log("delete book by id!!")
    res.json(authors)

}