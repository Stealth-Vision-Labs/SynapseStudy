export function main(): string {
  // Entry function for SynapseStudy (Node + TS)
  // Keep side effects minimal; print a ready message.
  console.log('SynapseStudy ready.');
  return 'ok';
}

if (require.main === module) {
  main();
}

