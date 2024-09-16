//* Le middleware auth vérifie que req.session.loggedIn est TRUE 
//* Si c'est le cas on appelle le middleware suivant


export  function auth(req,res,next) {

    if (req.session.loggedIn){
        return next();
    }
    const error = new Error("Accès non autorisé");
    res.status(403).render("403");
    error.status = 403;
    next(error);
}