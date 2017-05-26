# O(1)
# Means the size of the data set, is irrelevent. Number of steps/space will remain the same.

function first_element(the_list):
	return the_list[0];

a_list = [1,2,4,6,45,243,523,32435,334,566656,23,2,1414,7];
a_list = [1];
a_list = range(1,10000000000);

function first_element_minus_one(the_list):
	element = the_list[0] - 1;
	return element;



# O(N) - grows linearally. I.e. the number of steps increase proportionately to however many elements there are. This creates
# a straight, diagonal line.

def loop_through_me(list):
	for i in the_list:
		#do something
		pass;



#O(N^2) - represents an algorithm whose performance is directly proportional to the number of elements squared.
# VERY COMMON. I.e loop inside of loop

def oh_squared(the_list):
	for elem in the_list:
		for elem2 in the_list:
			# do something
			pass;

# for every new inside loop, you add a number to the big oh
# 3 nested loops  = O(N^3);
# 4 nested loops  = O(N^4);


# O(2^N) - represents an algorithm that doubles with each new element.  i.e. you add one new element, it takes twice as long.

def fib(num):
	if(num <= 1):
		return num;
	return fib(num - 2) + fib(num - 1);

fib(10);




