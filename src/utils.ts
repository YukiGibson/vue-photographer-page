function getImages(context) {
  const fileList = context.keys();

  fileList.forEach((file, index, array) => {
    array[index] = file.replace('./', '');
  }, fileList);

  return fileList;
}

export function loadImages(path: string): string[] {
  const context = require.context(`${path}`, false, /(?:jpg|gif|png)/);
  return getImages(context);
}
