import express from 'express';

//require passport functionality
import passport from 'passport';

//require User Model
import User from '../models/user'

// import jwt function
import { GenerateToken } from '../Util';

/*Processing Function*/
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    passport.authenticate('local', function(err, user, info)
    {
        // are there server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // are there login errors?
        if(!user)
        {
            return res.json({success: false, message: 'ERROR: Authentication Failed'})
        }

        // no problems - we have a good username and password combination
        req.logIn(user, function(err)
        {
            // are there db errors?
            if(err)
            {
                console.error(err);
                res.end(err);
            }
            const authToken = GenerateToken(user);
            return res.json({success: true, message: 'User Logged in Successfully!', user: 
            {
                id:user._id,
                DisplayName: user.DisplayName,
                username: user.username,
                EmailAddress: user.EmailAddress,
                FirstName: user.FirstName,
                LastName: user.LastName,
                Mobile: user.Mobile,
                MemberType : user.MemberType
            },
        
                token : authToken});
        });
        return;
    })(req, res, next);
}

export function ProcessRegisterPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    // Instantiate a new User
    let newUser = new User
    ({
        username: req.body.username, //get the name attribute in the form
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.displayName,
        Mobile: req.body.mobile,
        MemberType : req.body.memberType
    });
    
    // Add the New User to the Database
    User.register(newUser, req.body.password,function(err){
    if(err)
    {
        if(err.name == "")
        {
            console.error('ERROR: User Already Exists!');
        }
        else
        {
            console.error(err.name);
        }
        return res.json({success:false, message:'ERROR: Registration Failed!'});
    }


    // if everything is ok - user has been registered

    // automatically login the user
    return res.json({success:true, message: 'User Register Successfully!'});
    });
    
}
export function ProcessLogoutPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    req.logOut(function(err)
    {
        if(err){
        console.log(err);
        res.end(err);
        }
    console.log('User Logged Out');
    })
    return res.json({success: true, message: 'User Logged Out Successfully!'});
}
