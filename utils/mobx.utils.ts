import isEqual from "lodash/isEqual";

export function hasChangesByFields(
  oldEntity: any,
  newEntity: any,
  fields?: string[]
) {
  if (!oldEntity || !newEntity || !fields || !fields.length) {
    return true;
  }

  for (const field of fields) {
    if (!isEqual(oldEntity[field], newEntity[field])) {
      return true;
    }
  }

  return false;
}
