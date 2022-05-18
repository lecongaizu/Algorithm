#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'sortedSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

class Calculate:
    def __init__(self, size):
        self.size = size
        self.arr = [0 for _ in range(self.size)]
    
    def add(self, x, val):
        if x == 0:
            self.arr[0] += val
            return
        while x < self.size:
            self.arr[x] += val
            x += x & (-x)
    
    def rank(self, x):
        if x < 0:
            return 0
        res = self.arr[0]
        while x > 0:
            res += self.arr[x]
            x &= x - 1
        return res

def sortedSum(a):
    A_LIMIT = 10**6
    M = 10**9 + 7
    # pre.rank(x) := How many digits are before x.
    pre = Calculate(A_LIMIT + 1)
    # post.rank(x) := How much of the total sum is after x.
    post = Calculate(A_LIMIT + 1)
    cur_fn = ans = total = 0
    for i in range(len(a)):
        pos = pre.rank(a[i]) + 1
        # The part of f(n) which will also be added because
        # it gets shifted one to the right.
        greater = total - post.rank(a[i])
        cur_fn = (cur_fn + pos * a[i] + greater) % M
        ans = (ans + cur_fn) % M
        pre.add(a[i], 1)
        post.add(a[i], a[i])
        total += a[i]
    return ans

if __name__ == '__main__':
    