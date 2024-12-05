export function useLogout() {

  const handleLogout = async () => {
    try {
      // Perform your logout logic, e.g., API call or clearing tokens
      document.cookie = 'authToken' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      window.location.href = '';
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return handleLogout;
}