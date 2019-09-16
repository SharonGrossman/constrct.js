import { join } from 'path';
import { copy, readdir, write, ensureDir, exists, emptyDir } from 'fs-extra';
import { name as pkgName } from '../package.json';

const PACKAGES_PATH = join(__dirname, '..', '..');
const DIST_PATH = join(__dirname, '..', '..', '..', 'dist');

// eslint-disable-next-line require-await
const getPackageNames = async () =>
  readdir(PACKAGES_PATH).then(files => files.filter(file => file !== pkgName));

// eslint-disable-next-line require-await
const copyPackageDists = async pkgs =>
  pkgs.map(async pkg => {
    const fullPath = join(PACKAGES_PATH, pkg, 'dist');
    const generatedDist = join(DIST_PATH, pkg);

    try {
      await exists(fullPath);
      await copy(fullPath, generatedDist);

      console.log(`Generated Distribution of ${pkg}`);
    } catch (error) {
      console.log(`Generating distribution for ${pkg} failed!`);
    }
  });

const createDistFolder = () => ensureDir(DIST_PATH);
const clean = async () => {
  try {
    await emptyDir(DIST_PATH);
  } catch (error) {
    console.log('Failed cleaning dist folder!');
  }
};

(async () => {
  await clean();
  await createDistFolder();
  const names = getPackageNames();

  await copyPackageDists(names);
})();
