exports.validateEmail = function (email){
    const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    regex.test(email);
};

