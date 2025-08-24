// Export/import credential vault as encrypted JSON

export function exportVault(vaultData: object): string {
  return JSON.stringify(vaultData, null, 2);
}

export function importVault(json: string): object {
  return JSON.parse(json);
}