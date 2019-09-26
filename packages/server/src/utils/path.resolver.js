import { join, dirname } from 'path';

export const getClientDistPath = () => {
  const clientRootDirectory = dirname(require.resolve('client/package.json'));
  const distDirectory = join(clientRootDirectory, 'dist');

  return distDirectory;
};

export const getClientIndexPath = () => join(getClientDistPath(), 'index.html');
