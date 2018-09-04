module.exports = function(app, Book){
    app.get('/api/books', (req, res) =>{
        Book.find((err, books) => {
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(books);
        })
    });

    app.get('/api/books/:books_id', (req,res) => {
        Book.findOne({_id: req.params.book_id}, (err, book)=>{
            if(err) return res.status(500).json({error:err});

            res.json(book);
        })
    });

    app.get('/api/books/author/:author', (req,res) =>{
        Book.find({author:req.params.author}, {_id:0, title:1, published_date:1}, (err, books)=>{
            if(err) return res.status(500).json({error:err});
            if(book.length ==0) return res.status(404).json({error:'book not found'});
            res.json(books);
        })
    });
    
    app.put('/api/books/:books_id', (req,res)=>{
        Book.findById(req.params.book_id, (err, book) =>{
            if(err) return res.status(500).json({error:err});
            if(!book) return res.status(404).json({error:'book not found'});

            if(req.body.title) book.title = req.body.title;
            if(req.body.author) book.author = req.body.author;
            if(req.body.published_date) book.published_date = req.body.published_date;

            book.save((err)=>{
                if(err) res.status(500).json({error:'failed to update'});
                res.json({message:'book updated'});
            });
        });
        app.put('/api/books/update/:book_id', (req, res)=>{
            Book.update({_id:req.params.book_id}, {$set:req.body}, (err, output)=>{
                if(err) res.status(500).json({error: 'database failure'});
                console.log(output);
                if(!output.n) return res.status(404).json({error: 'book not found'});
                res.json({message:'book updated'});
            })
        })

        app.post('/api/books', (req,res)=>{
            var book = new Book();
            book.title = req.body.title;
            book.author = req.body.author;
            book.published_date = new Date(req.body.published_date);
            
            book.save((err) =>{
                if(err){
                    console.log(err);
                    res.json({result:0});
                    return;
                }
                res.json({result:1});
            });
        });

        app.delete('/api/books/:book_id', (req, res) =>{
            Book.remove({_id:req.params.book_id}, (err, output) =>{
                if(err) return res.status(500).json({error:'database failure'});

                res.status(204).end();
            })
        })
    })
}