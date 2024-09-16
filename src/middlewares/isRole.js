//* Middlewares à passer pour authentifier les routes association/famille

export const isRole = {
    
    association(req,res,next){
        
        if (req.session.role==='association'){
            return next();
        }
        res.status(401);
        return next(new Error('Unauthorized'))
    },

    famille(req,res,next){
        
        if (req.session.role==='famille'){
            return next();
        }
        res.status(401);
        return next(new Error('Unauthorized'))
    }
}
