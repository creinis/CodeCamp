
function telephoneCheck(str) {
    var regex = new RegExp(/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g);
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");


/*   This regex validates the following format:

    (541) 754-3010 Domestic
    +1-541-754-3010 International
    1-541-754-3010 Dialed in the US
    001-541-754-3010 Dialed from Germany
    191 541 754 3010 Dialed from France

    This will validate any phone number of variable format:

\\(?\d{3}\\)? finds 3 digits enclosed by parenthesis or not.

([\-\s\.])? finds any of these separator characters or not

\d{3} finds 3 digits

\1 uses the first matched separator - this ensures that the separators are the same. So (000) 999-5555 will not validate here because there is a space and dash separator, so just remove the "\1" and replace with the separator sub-pattern (doing so will also validate non standard formats). You should however be format hinting for user input anyway.

\d{4} finds 4 digits

Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
Tests

Passed: telephoneCheck("555-555-5555") should return a boolean.
Passed: telephoneCheck("1 555-555-5555") should return true.
Passed: telephoneCheck("1 (555) 555-5555") should return true.
Passed: telephoneCheck("5555555555") should return true.
Passed: telephoneCheck("555-555-5555") should return true.
Passed: telephoneCheck("(555)555-5555") should return true.
Passed: telephoneCheck("1(555)555-5555") should return true.
Passed: telephoneCheck("555-5555") should return false.
Passed: telephoneCheck("5555555") should return false.
Passed: telephoneCheck("1 555)555-5555") should return false.
Passed: telephoneCheck("1 555 555 5555") should return true.
Passed: telephoneCheck("1 456 789 4444") should return true.
Passed: telephoneCheck("123**&!!asdf#") should return false.
Passed: telephoneCheck("55555555") should return false.
Passed: telephoneCheck("(6054756961)") should return false.
Passed: telephoneCheck("2 (757) 622-7382") should return false.
Passed: telephoneCheck("0 (757) 622-7382") should return false.
Passed: telephoneCheck("-1 (757) 622-7382") should return false.
Passed: telephoneCheck("2 757 622-7382") should return false.
Passed: telephoneCheck("10 (757) 622-7382") should return false.
Passed: telephoneCheck("27576227382") should return false.
Passed: telephoneCheck("(275)76227382") should return false.
Passed: telephoneCheck("2(757)6227382") should return false.
Passed: telephoneCheck("2(757)622-7382") should return false.
Passed: telephoneCheck("555)-555-5555") should return false.
Passed: telephoneCheck("(555-555-5555") should return false.
Passed: telephoneCheck("(555)5(55?)-5555") should return false.
Passed: telephoneCheck("55 55-55-555-5") should return false.
Passed: telephoneCheck("11 555-555-5555") should return false.
 */