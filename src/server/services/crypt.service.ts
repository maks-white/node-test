import * as bcrypt from 'bcrypt';

/**
 * Service for encrypting and validation values
 */
export class CryptoService {
  private saltRounds = 10;

  constructor() { }

  /**
   * Encrypts value
   *
   * @param value - value to encryption
   */
  public async encryptValue(value: string): Promise<string> {
    if (!value) throw new Error('Value does not provided');
    return bcrypt.hash(value, this.saltRounds);
  }

  /**
   * Validates value with hash
   *
   * @param value - value to validate
   * @param hash - hash to validate
   */
  public async isValueValid(value: string, hash: string): Promise<boolean> {
    if (!value || !hash) throw new Error('Params does not provided');
    return bcrypt.compare(value, hash);
  }
}



