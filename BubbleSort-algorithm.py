unsorted = [5,2,6,3,1,3];

def sort_list(the_list):
	for i in xrange(0,len(unsorted)): 
		full_sort = False;
		loop_count = 1;
		for j in xrange(0,len(unsorted) - 1):
			if (the_list[j] > the_list[j+1]):
				temp = the_list[j];
				the_list[j] = the_list[j+1];
				the_list[j+1] = temp;

		loop_count += 1
		full_sort = False;


	return the_list;

print sort_list(unsorted)



	