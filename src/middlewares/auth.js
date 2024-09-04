//* Le middleware auth vérifie que req.session.loggedIn est TRUE 
//* Si c'est le cas on appelle le middleware suivant


export  const auth=(req,res,next) => {
    
    if (req.session.loggedIn){
        return next();
    }
    
    req.status=403;
    return next(new Error('Forbidden'));

}