// AES-GCM encryption/decryption for credentials vault - CLIENT-SIDE

export async function encryptCredential(
  secret: string,
  passphrase: string
): Promise<string> {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("nuclear-builder-salt"), // Note: A unique salt per encryption is generally recommended
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(secret)
  );
  return JSON.stringify({
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(ciphertext)),
  });
}

export async function decryptCredential(
  encrypted: string,
  passphrase: string
): Promise<string> {
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const parsed = JSON.parse(encrypted);
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("nuclear-builder-salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
  const ciphertext = new Uint8Array(parsed.data);
  const iv = new Uint8Array(parsed.iv);
  const plaintext = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    ciphertext
  );
  return dec.decode(plaintext);
}
