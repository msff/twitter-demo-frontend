export function fetchRequest() {
  return {
    type: 'FETCH_REQUEST',
  };
}

export function fetchSuccess(profile) {
  return {
    type: 'FETCH_SUCCESS',
    profile,
  };
}

export function fetchError() {
  return {
    type: 'FETCH_ERROR',
  };
}
