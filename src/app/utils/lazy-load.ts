import { Dom } from './dom';

export function lazyLoad(path: string) {
  return new Promise((resolve, reject) => {
    if (alreadyLoadScript(path)) {
      resolve(true);
    } else {
      const script: HTMLScriptElement = Dom.createTagElement('script', {type: 'text/javascript'});
      script.src = path;
      script.onerror = () => {
        reject(false);
      };
      script.onload = () => {
        resolve(true);
      };
      document.appendChild(script);
    }
  });
}

function alreadyLoadScript(path: string): boolean {
  const all: HTMLCollection = document.scripts;
  for (const one of all as any) {
    if (one.src === path) {
      return true;
    }
  }
  return false;
}
