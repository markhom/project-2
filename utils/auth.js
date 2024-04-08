const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      console.log("User is not authenticated");
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  