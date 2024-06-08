function hasSubArrayWithSum( arr, target )
{
    let start = 0;
    let end = 0;
    let currentSum = arr[ 0 ];

    if ( arr.length > 100000 || arr.length < 1 )
    {
        console.log( "Array length undefined" );
        return;
    }


    while ( start < arr.length )
    {

        if ( currentSum === target )
        {
            return true; // Found a subarray with the target sum
        } else if ( currentSum < target )
        {
            // Expand the subarray by moving the end pointer to the right
            end++;
            currentSum += arr[ end ];
        } else
        {
            // Shrink the subarray by moving the start pointer to the right
            currentSum -= arr[ start ];
            start++;
        }
    }

    return false; // No subarray found
}

//Example
const arr = [ 4, 2, 7, 1, 9, 5 ];
const target = 17;
const result = hasSubArrayWithSum( arr, target );
console.log( result ); // Output: true
