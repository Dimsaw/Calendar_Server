const namePattern = /^[\p{L}\s]+$/u; // only Latin or Cyrillic characters
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordPattern = /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/; // 6 characters, at lest one upperCase and one lowercase
const urlPattern =
  /^https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
const phonePattern = /^38 \(\d{3}\) \d{3} \d{2} \d{2}$/;

export const patterns = {
  namePattern,
  emailPattern,
  passwordPattern,
  urlPattern,
  phonePattern,
};
