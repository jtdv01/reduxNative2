export const EMAIL_CHANGED = "email_changed";
export const emailChanged = (text) => {
  return{
      type: EMAIL_CHANGED,
      payload: text
  };
}
