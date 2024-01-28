export let isAuthenticated = authenticate();
function authenticate() {
  // tutaj mozna dodac mechanizm (np. localStorage),
  // który sprawdza czy użytkownik jest zalogowany
  return false;
}

export function login(user, callback) {
  // tutaj powinnismy sprawdzic
  // czy dane przekazane w [user] sa poprawne
  setTimeout(() => {
    isAuthenticated = true;
    callback();
  }, Math.random() * 100); // imitacja asynchroniczności
}

export function logout(callback) {
  setTimeout(() => {
    isAuthenticated = false;
    callback();
  }, Math.random() * 100); // imitacja asynchronicznosci
}
