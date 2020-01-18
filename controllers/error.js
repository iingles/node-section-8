// 404 Not Found
exports.notFound = (req, res, next)=>{
    res.status(404).render('404', {pageTitle: 'Not Found'})
}