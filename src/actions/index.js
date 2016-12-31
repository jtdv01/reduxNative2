export const EMAIL_CHANGED = "email_changed";
export const emailChanged = (text) => {
  return{
      type: EMAIL_CHANGED,
      payload: text
  };
}
export const PASSWORD_CHANGED = "password_changed";
export const passwordChanged = (text) => {
  return{
      type: PASSWORD_CHANGED,
      payload: text
  };
}
