const storageKeys = {
    contact: 'contact'
}

export function getContacts(key = storageKeys.contact) {
  return localStorage.getItem(key);
}

export function setContacts(contactList, key = storageKeys.contact) {
  localStorage.setItem(key, JSON.stringify(contactList));
}

