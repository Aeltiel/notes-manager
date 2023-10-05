export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Veuillez tapez au moins ${min} lettre(s)`;
    }
  }
  static max(value, max) {
    if (value.length > max) {
      return `Veuillez tapez au plus ${max} lettre(s)`;
    }
  }
}
