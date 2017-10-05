var user = require('./userData.json')


// const routeHandler = "/api/users";
    
const routeHandler = (app) =>{

    app.get('/api/users', function(req, res, next) {
        console.log(typeof req.query.age)
        
        if(req.query.age) {
        var age = user.filter ( object => {
            return object.age < req.query.age
        })
        res.status(200).json(age) 

    } else if(req.query.lastname)  {
        var last_name = user.filter ( object => { 
            return object.last_name === req.query.lastname
        })
        res.status(200).json(last_name)

    } else if (req.query.email) { 
        var email = user.filter ( object => {
            return object.email === req.query.email
        })
        res.status(200).json(email)

     } else if (req.query.favorites) {
         var favorites = user.filter ( object => {
             return object.favorites.includes(req.query.favorites)
         })
        res.status(200).json(favorites)

    } else {res.status(200).json(user)}
})

     app.get('/api/users/:id', function(req, res, next) {
        //  var id = req.params.id;
        //  findUserById(id, function(error, user) {
        //      if (error) return next(error);
        //      return res.render('user', user);
        //  })
    //           for( i = 0; i < user.length; i++) {
    //          if(user[i].id === req.params.id){
    //              return (user[i].id == req.params.id)
    //          }
    //         }
    //        res.status(200).json(user[i].id)
    // })
                   console.log(req.params.id)
           id = user.filter ( value => { return ( value.id === Number(req.params.id))
            })  
            if(id.length > 0) {
               res.status(200).send(id[0])
           } else {
               res.status(404).json(null)
           }
        //    let match = user.filter(obj => obj.id === Number(req.params.id));
        // if (match.length > 0) {
        //     res.status(200).send(match[0]);
        //     return;
        // }
        // else {
        //     res.status(404).json(null);
        // }
                 
    })
      app.get('/api/admins', function(req, res, next) {
        
              var type = user.filter ( object => {
                  return object.type == "admin"
              })
                if(type.length) {
                    res.status(200).json(type)
                } else {
           res.status(404).json(null)
}
      })
     app.get('/api/nonadmins', function(req, res, next) {
         var type = user.filter ( object => {
             return object.type !== "admin"
         })
            if(type.length) {
                res.status(200).json(type)
            } else {
           res.status(404).json(null)
       }
}) 

 app.get('/api/user_type/:type', function(req, res, next) {
           type = user.filter ( value => {
            return value.type === req.params.type})  
           if(type.length) {
               res.status(200).json(type)
           } else {
               res.status(404).json(null)
           }  
    })

    app.put('/api/users/:id', function(req, res, next) {
            for( i = 0; i < user.length; i++) {
             if(user[i].id == req.params.id){
                 user.splice(i, 1, req.body)
             }
            }
           res.status(200).json(user)
    })

       app.post('/api/users', function(req, res, next) {
           req.body.id = user.length
           user.push(req.body);
        res.status(200).send(user)
    })

     app.delete('/api/users/:id', function(req, res, next) {
            for( i = 0; i < user.length; i++) {
             if(user[i].id == req.params.id){
                 user.splice(i, 1)
             }
            }
           res.status(200).json(user)
    })
       
}

module.exports = routeHandler;

