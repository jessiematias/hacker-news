export const formatDate = timestamp => {

    return new Date(timestamp).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
 })
}
