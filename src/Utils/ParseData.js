export const ParseRol = (is_empleador) => (is_empleador ? 1 : 2);

export const ROLESPATH = {
  ROL01: "company",
  ROL02: "applicant",
};

export const getRolePath = (rol) => {
  switch (rol) {
    case "1":
    case 1:
      return ROLESPATH.ROL01;
    case "2":
    case 2:
      return ROLESPATH.ROL02;
    default:
      break;
  }
};