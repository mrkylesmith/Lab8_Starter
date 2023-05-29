// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// Unit tests for isPhoneNumber
test('[validPhoneNumber] checks when valid phone number is given', () => {
    const validPhoneNumber = "760-858-2903";
    expect(functions.isPhoneNumber(validPhoneNumber)).toBe(true);
  });
test('[validPhoneNumber] checks when valid phone number is given', () => {
    const validPhoneNumber = "666-499-3329";
    expect(functions.isPhoneNumber(validPhoneNumber)).toBe(true);
  });
test('[validPhoneNumber] checks phone number given with short area code', () => {
    // Phone number given with too short area code
    const shortPhoneNumber = "66-499-329";
    expect(functions.isPhoneNumber(shortPhoneNumber)).toBe(false);
  });
test('[validPhoneNumber] checks if invalid phone number given', () => {
    const invalidPhoneNumber = "666483329";
    expect(functions.isPhoneNumber(invalidPhoneNumber)).toBe(false);
  });

  // Unit tests for isEmail
test('[isEmail] checks when valid email is given', () => {
    const validEmail = "kyle@ucsd.edu";
    expect(functions.isEmail(validEmail)).toBe(true);
  });
test('[isEmail] checks when valid email is given', () => {
    const validEmail = "hikerboi@strava.com";
    expect(functions.isEmail(validEmail)).toBe(true);
  });
test('[isEmail] checks when invalid email given without @ symbol', () => {
    // Test invalid email that doesn't contain @ symbol
    const invalidEmail = "hikerboistrava.com";
    expect(functions.isEmail(invalidEmail)).toBe(false);
  });
test('[isEmail] checks when invalid email given without valid extension', () => {
    // Test invalid email without .com (or any . extension)
    const invalidEmail = "kyle@ucsd";
    expect(functions.isEmail(invalidEmail)).toBe(false);
  });

// Unit tests for isStrongPassword
test('[isStrongPassword] checks if too short password is given', () => {
    // Test too short password 
    const shortPassword = "Sam";
    expect(functions.isStrongPassword(shortPassword)).toBe(false);
  });
test('[isStrongPassword] checks if password that is too long is given', () => {
    // Test too long password
    const longPassword = "iLoveMyDogSammy123"
    expect(functions.isStrongPassword(longPassword)).toBe(false);
  });
test('[isStrongPassword] checks if password with invalid characters is given', () => {
    // Test password with invalid characters
    const invalidCharPassword = "$Sammy123"
    expect(functions.isStrongPassword(invalidCharPassword)).toBe(false);
  });
test('[isStrongPassword] checks if correct password is given', () => {
    // Test valid password
    const validPassword = "Sammy123";
    expect(functions.isStrongPassword(validPassword)).toBe(true);
  });
test('[isStrongPassword] checks if correct password is given', () => {
    // Test valid password, testing underscore
    const validPassword = "Sammy_123";
    expect(functions.isStrongPassword(validPassword)).toBe(true);
  });

// Unit tests for isDate
test('[isDate] tests invalid date with 2 digit year abbreviation', () => {
    // Test invalid date with 2 digits given for year
    const invalidDate = "05/28/23";
    expect(functions.isDate(invalidDate)).toBe(false);
  });
test('[isDate] tests invalid date format, without day given', () => {
    // Test invalid date with 2 digits given for year
    const invalidDate = "/28/23";
    expect(functions.isDate(invalidDate)).toBe(false);
  });
test('[isDate] tests valid date format given', () => {
    // Test valid date
    const validDate = "05/28/2023";
    expect(functions.isDate(validDate)).toBe(true);
  });
test('[isDate] tests valid date format given', () => {
    // Test valid date, 1 digit given for day
    const validDate = "5/28/2023";
    expect(functions.isDate(validDate)).toBe(true);
  });
// Unit tests for isHexColor
test('[isHexColor] tests invalid hex color, too short', () => {
    // Test invalid hex, only 5 digits given
    const invalidHex = "#FF573"
    expect(functions.isHexColor(invalidHex)).toBe(false);
  });
test('[isHexColor] tests invalid hex color, invalid hex character', () => {
    // Test invalid hex, invalid hex character
    const invalidHex = "$FF5733";
    expect(functions.isHexColor(invalidHex)).toBe(false);
  });
test('[isHexColor] tests valid hex color', () => {
    // Test valid hex
    const validHex = "#FF5733";
    expect(functions.isHexColor(validHex)).toBe(true);
  });
test('[isHexColor] tests invalid hex color, missing leading hashtag', () => {
    // Test valid hex
    const validHex = "#FF3744";
    expect(functions.isHexColor(validHex)).toBe(true);
  });