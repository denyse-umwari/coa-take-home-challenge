function transformString( input )
{
    const length = input.length;

    // Check if the length is divisible by both 3 and 5
    if ( length % 3 === 0 && length % 5 === 0 )
    {
        input = input.split( '' ).reverse().map( char => char.charCodeAt( 0 ) ).join( ' ' );
    } else if ( length % 3 === 0 )//Check if the length divisible by 3 only
    {
        input = input.split( '' ).reverse().join( '' );
    } else if ( length % 5 === 0 )//Check if the length divisible by 3 only
    {
        input = input.split( '' ).map( char => char.charCodeAt( 0 ) ).join( ' ' );
    }

    return input;
}

// Example usage:
const example1 = "Hamburger";
const example2 = "Pizza";
const example3 = "Chocolate Chip Cookie";


console.log( transformString( example1 ) ); // Output: "regrubmaH"
console.log( transformString( example2 ) ); // Output: "80 105 122 122 97"
console.log( transformString( example3 ) ); // Output: "eikooC pihC etalocohC"

