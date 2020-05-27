# Coding Drills: Faith McQueen
## 2019 J1: Winning Score
###Problem Description
You record all of the scoring activity at a basketball game. Points are scored by a 3-point shot, a
2-point field goal, or a 1-point free throw.
You know the number of each of these types of scoring for the two teams: the Apples and the
Bananas. Your job is to determine which team won, or if the game ended in a tie.
### Input Specification
The first three lines of input describe the scoring of the Apples, and the next three lines of input
describe the scoring of the Bananas. For each team, the first line contains the number of successful
3-point shots, the second line contains the number of successful 2-point field goals, and the third
line contains the number of successful 1-point free throws. Each number will be an integer between
0 and 100, inclusive.
### Output Specification
The output will be a single character. If the Apples scored more points than the Bananas, output
A. If the Bananas scored more points than the Apples, output B. Otherwise, output T, to indicate a
tie.
#### Sample Input 1
- 10
- 3
- 7
- 8
- 9
- 6
#### Output for Sample Input 1
- B
#### Explanation of Output for Sample Input 1
The Apples scored 10 · 3 + 3 · 2 + 7 · 1 = 43 points and the Bananas scored 8 · 3 + 9 · 2 + 6 · 1 = 48
points, and thus the Bananas won.
#### Input for Sample Input 2
- 7
- 3
- 0
- 6
- 4
- 1
#### Output for Sample Input 2
- T
#### Explanation of Output for Sample Input 2
The Apples scored 7 · 3 + 3 · 2 + 0 · 1 = 27 points and the Bananas scored 6 · 3 + 4 · 2 + 1 · 1 = 27
points, and thus it was a tie game.

## 2019 J2: Time to Decompress
### Problem Description
You and your friend have come up with a way to send messages back and forth.
Your friend can encode a message to you by writing down a positive integer N and a symbol. You
can decode that message by writing out that symbol N times in a row on one line.
Given a message that your friend has encoded, decode it.
### Input Specification
The first line of input contains L, the number of lines in the message.
The next L lines each contain one positive integer less than 80, followed by one space, followed
by a (non-space) character.
### Output Specification
The output should be L lines long. Each line should contain the decoding of the corresponding
line of the input. Specifically, if line i + 1 of the input contained N x, then line i of the output
should contain just the character x printed N times.
#### Sample Input
- 4
- 9 +
- 12 A
- 2 X
#### Output for Sample Input
- +++++++++
- AAAAAAAAAAAA
- XX

## 2011 J3: Sumac Sequences
### Problem Description
In a sumac sequence, t1, t2, .., tm, each term is an integer greater than or equal 0. Also, each term,
starting with the third, is the difference of the preceding two terms (that is, tn+2 = tn − tn+1 for
n ≥ 1). The sequence terminates at tm if tm−1 < tm.
For example, if we have 120 and 71, then the sumac sequence generated is as follows:
120, 71, 49, 22, 27.
This is a sumac sequence of length 5.
### Input Specification
The input will be two positive numbers t1 and t2, with 0 < t2 < t1 < 10000.
### Output Specification
The output will be the length of the sumac sequence given by the starting numbers t1 and t2.
#### Sample Input
- 120
- 71
#### Output for Sample Input
- 5

