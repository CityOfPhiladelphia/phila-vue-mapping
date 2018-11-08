function generateUniqueId() {
  return 'id-' + Math.random().toString(36).substring(7);
}

export default generateUniqueId;
