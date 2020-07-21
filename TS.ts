let ArrayOne = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
let ArrayTwo = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683];

function MergeSort(ArrayOne, ArrayTwo)
{
    let NewArray = [];

    let PositionOne = 0;

    let PositionTwo = 0;
	
    while (true)
    {				
		if ((ArrayOne[PositionOne] == undefined) && (ArrayTwo[PositionTwo] == undefined)) { break; } /* Break Condition */
		
		if (ArrayOne[PositionOne] == ArrayTwo[PositionTwo]) 
		{ 
			NewArray.push(ArrayOne[PositionOne]);
			
			NewArray.push(ArrayTwo[PositionTwo]);
			
			PositionOne++;
			
			PositionTwo++;
		}
		
		else if ((ArrayOne[PositionOne] > ArrayTwo[PositionTwo]) || ((ArrayOne[PositionOne] == undefined) && (ArrayTwo[PositionTwo] != undefined))) { NewArray.push(ArrayTwo[PositionTwo]); PositionTwo++; }

		else if ((ArrayOne[PositionOne] < ArrayTwo[PositionTwo]) || ((ArrayTwo[PositionTwo] == undefined) && (ArrayOne[PositionOne] != undefined))) { NewArray.push(ArrayOne[PositionOne]); PositionOne++; } 		
    }

    return NewArray;
}

console.log("Merge: " + MergeSort(ArrayOne, ArrayTwo));
