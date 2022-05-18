!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'renameFile' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING newName
#  2. STRING oldName
#

def renameFile(newName, oldName):
    newLength  = len(newName)
    oldLength  = len(oldName)
    dp = [1 for j in range(oldLength + 1)]
    for i in range(1, newLength + 1):
        dpp = [0 for _ in range(oldLength + 1)]
        for j in range(i, oldLength + 1):
            dpp[j] = dpp[j - 1]
            if newName[i - 1] == oldName[j - 1]:
                dpp[j] += dp[j - 1]
        dp = dpp
    return dp[-1] % (10**9 + 7)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    newName = input()

    oldName = input()

    result = renameFile(newName, oldName)

    fptr.write(str(result) + '\n')

    fptr.close()