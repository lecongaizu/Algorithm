#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here
    n = len(arr)
    positive, nagative, zero = 0, 0, 0
    for x in arr:
        if x > 0:
            positive = positive + 1
        elif x < 0:
            nagative =  nagative + 1
        else:
            zero = zero + 1
    print(f"{positive/n:.6f}\n{nagative/n:.6f}\n{zero/n:.6f}")

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
