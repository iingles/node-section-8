exports.getIndex = (req, res, next)=>{
    res.render('index', {pageTitle: 'Home'})
}

exports.getAccount = (req, res, next)=>{
    res.render('shop/account', {pageTitle: 'Account'})
}

exports.getAbout = (req, res, next)=>{
    res.render('shop/about', {pageTitle: 'About'})
}