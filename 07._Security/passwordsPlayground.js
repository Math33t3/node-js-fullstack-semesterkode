import bcrupt from "bcrypt";

const passwordPlainText = "hunter42";
const passwordPlainText2 = "notHunter";
const hashedPassword = "$2b$12$soRV5xXzapgdQMzn.h9yUe6jEqBYWo9QlWIYoeIkKpTOJD4twoVRm";

const encryptedPassword = await bcrupt.hash(passwordPlainText, 12);
console.log(encryptedPassword);

const isSame = await bcrupt.compare(passwordPlainText2, hashedPassword);
console.log(isSame);