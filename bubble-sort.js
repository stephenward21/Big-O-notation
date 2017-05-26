Bubble Sort

-Start at the first element, and compare it to the one next to it(to the right)
-If the left is bigger, they are out of order, SWITCH!
-Go to the next one, REPEAT.
-Do the entire list (n number of elements), and the list must be sorted.

var unsorted = [5,2,6,3,1,3];

first time through
- check [0] and [1] ... 5 > 2? Yes, SWITCH.
2,5,6,3,1,3

- check [1] and [2]...5 > 6? No.
- check [2] and [3]...6 > 3? Yes. SWITCH.
2,5,3,6,1,3

-check [3] and [4]...6 > 1? Yes. SWITCH.
2,5,3,1,6,3

-check [4] and [5]...6 > 3? Yes. SWITCH.
2,5,3,1,3,6

...Go through the list again and again until it is sorted!

: THIS IS A O(N^2) APPROACH!

If n is list length, the biggest number is at n after 1 time.
If n is list length, the 2 biggest numbers are at the end after 2 times.
Run a loop that goes through the whole array and checks each one.

We only actually have to loop through the whole array minus the number of times already looped through. 
(n - 1, n - 2, etc).

Consider the cases...
List in reverse: Have to go through n elements, n times.
List in order: Have to go through n elements, n times. (Modified with bool to false ) from N^2 to 1N.

Modified bubble sort... set up a Boolean to false and if a switch is made, change to true.
at end of loop, if bool is still false, no switches took place.  List is in order. STOP 

