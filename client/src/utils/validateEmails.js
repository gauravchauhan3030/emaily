const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmails = (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  console.log("invalid Emails", invalidEmails);

  if (invalidEmails.length) {
    if (invalidEmails[0] == "") {
      return "";
    }
    return `These emails are invalid: ${invalidEmails}`;
  }
  return null;
};

export default validateEmails;
