const handleHttpError = (res, message = 'Algo sucedió', code = 401) => { 
    res.status(code); 
    res.send({error: message});
}


module.exports = {handleHttpError}; 