import React from "react";
import { PatternMail } from "../utils/PatternMail";

const useValidationMail = (email) => {
  const validateEmail = (value) => value.match(PatternMail);

  const isInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  return {};
};
