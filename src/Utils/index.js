export const checkUserIsAdmin = currentUser => {
  if (!currentUser || !Array.isArray(currentUser.roles)) return false;
  const userRoles = currentUser.roles;
  if (userRoles.includes('admin')) return true;

  return false;
};