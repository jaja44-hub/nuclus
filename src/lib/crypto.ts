import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16;
const SALT_LENGTH = 64;
const KEY_LENGTH = 32;
const AUTH_TAG_LENGTH = 16;

// Derives a key from a passphrase using scrypt
function getKey(passphrase: string, salt: Buffer): Buffer {
  return crypto.scryptSync(passphrase, salt, KEY_LENGTH);
}

// Encrypts a text string using a passphrase
export function encrypt(text: string, passphrase: string): string {
  const salt = crypto.randomBytes(SALT_LENGTH);
  const key = getKey(passphrase, salt);
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();

  // Combine salt, iv, tag, and encrypted data into a single hex string for easy storage
  return Buffer.concat([salt, iv, tag, encrypted]).toString("hex");
}

// Decrypts an encrypted hex string using a passphrase
export function decrypt(encryptedHex: string, passphrase: string): string {
  const data = Buffer.from(encryptedHex, "hex");

  // Extract parts from the combined buffer
  const salt = data.subarray(0, SALT_LENGTH);
  const iv = data.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
  const tag = data.subarray(
    SALT_LENGTH + IV_LENGTH,
    SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH
  );
  const encrypted = data.subarray(SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH);

  const key = getKey(passphrase, salt);
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}
