const jwt = require('jsonwebtoken');
const S_KEY = "NOTESAPI";


const auth = (req,res,next) => {

    try {

        let token = req.headers.authorization;        
        if (token) {
            token = token.split(' ')[1];
            let user = jwt.verify(token,S_KEY);
            // console.log(user,"user");
            
            req.userId = user.id;

        }else{
            res.status(401).json({
                message:"unthorize user"
            })
        }
        next();
        
    } catch (error) {
        console.log(error);
        
        res.status(401).json({
            message:"unthorize user"
        })
    }

}


module.exports = auth;