
function convertHTML(str) {
    var characters = [/&/g,/</g,/>/g,/"/g,/'/g];
    var HTMLentities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  
    for(var i=0; i < characters.length; i++){
      str = str.replace(characters[i], HTMLentities[i]);
    }
    return str;
  }
  
  convertHTML("Dolce & Gabbana");


/*   Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
Tests

Passed: convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Passed: convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Passed: convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Passed: convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Passed: convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Passed: convertHTML("<>") should return the string &lt;&gt;.
Passed: convertHTML("abc") should return the string abc.
 */