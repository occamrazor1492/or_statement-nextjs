export function generateSkuStrings(skuList: string[], chunkSize = 50): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < skuList.length; i += chunkSize) {
    const group = skuList.slice(i, i + chunkSize).join(' OR ');
    chunks.push(group);
  }
  return chunks;
}
