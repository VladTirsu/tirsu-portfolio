export const projectNumbers = [1, 2, 3, 4];
export const pagePaths = ['/works', '/about', '/cv', '/contact'];
export const projectPaths = projectNumbers.map((number) => `/projects/project-${number}`);

export function sitePath(path, base = '/') {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${base}${path.slice(1)}`;
}

export function routePath(pathname, base = '/') {
  if (pathname === base.slice(0, -1)) return '/';
  if (!pathname.startsWith(base)) return null;
  return `/${pathname.slice(base.length)}`.replace(/\/+$/, '') || '/';
}
