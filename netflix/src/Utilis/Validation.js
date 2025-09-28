function validateemailPassword(email, password) {
  const emailFlag = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordFlag =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  let errorMessage = {};
  if (!emailFlag && !passwordFlag) {
    errorMessage.Emsg = "Email Is Invalid";
    errorMessage.Pmsg = "Password is Invalid";
    errorMessage.errType = "B";
    return errorMessage;
  } else if (!emailFlag) {
    errorMessage.Emsg = "Email Is Invalid";
    errorMessage.errType = "E";
    return errorMessage;
  } else if (!passwordFlag) {
    errorMessage.Pmsg = "Password Is Invalid";
    errorMessage.errType = "P";
    return errorMessage;
  } else {
    errorMessage.errType = "S";
    return errorMessage;
  }
}
export { validateemailPassword };
