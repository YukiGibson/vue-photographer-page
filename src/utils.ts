function getImages(context): string[] {
  let fileList = context.keys() as string[];

  fileList.forEach((file, index, array) => {
    array[index] = file.replace('./', '');
  }, fileList);
  fileList = fileList.sort();
  return fileList;
}

export function getKiligImages(): string[] {
  const context = require.context('./assets/images/documental/kilig', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getQECImages(): string[] {
  const context = require.context('./assets/images/documental/quedate_en_casa', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getLleveFeriaImages(): string[] {
  const context = require.context('./assets/images/documental/lleve_feria', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getTropicoImages(): string[] {
  const context = require.context('./assets/images/documental/mi_tropico', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getMorfoImages(): string[] {
  const context = require.context('./assets/images/clients/morfo', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getTarotistImages(): string[] {
  const context = require.context('./assets/images/clients/tarotist', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getArianaJoyeriaImages(): string[] {
  const context = require.context('./assets/images/clients/ariana_joyeria', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getMarceBarritoImages(): string[] {
  const context = require.context('./assets/images/clients/barrito', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getBotanicaImages(): string[] {
  const context = require.context('./assets/images/clients/botanica', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getConciertosImages(): string[] {
  const context = require.context('./assets/images/lifestyle/conciertos', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getLifestyleImages(): string[] {
  const context = require.context('./assets/images/lifestyle/estilo_de_vida', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getFirstParejaImages(): string[] {
  const context = require.context('./assets/images/lifestyle/parejas/1_pareja', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getSecondParejaImages(): string[] {
  const context = require.context('./assets/images/lifestyle/parejas/2_pareja', false, /(?:jpg|gif|png)/);
  return getImages(context);
}

export function getThirdParejaImages(): string[] {
  const context = require.context('./assets/images/lifestyle/parejas/3_pareja', false, /(?:jpg|gif|png)/);
  return getImages(context);
}
