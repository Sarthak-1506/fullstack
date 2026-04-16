#include <stdio.h>
#include <string.h>

int main() {
    char str[200];
    int i, words=0, len=0, maxLen=0, start=0, longestStart=0;

    printf("Enter a sentence: ");
    fgets(str, sizeof(str), stdin); // read sentence with spaces

    for(i=0; str[i]!='\0'; i++) {
        // Count words
        if(str[i]==' ' || str[i]=='\n' || str[i]=='\t') {
            if(len>0) {  // end of a word
                words++;
                if(len>maxLen) {  // check for longest word
                    maxLen = len;
                    longestStart = start;
                }
                len=0; // reset length for next word
            }
        }
        else {
            if(len==0) start=i; // start of a new word
            len++;
        }
    }

    // For last word if sentence doesn't end with space
    if(len>0) {
        words++;
        if(len>maxLen) longestStart = start;
        maxLen = len>maxLen ? len : maxLen;
    }

    printf("Number of words: %d\n", words);

    printf("Longest word: ");
    for(i=longestStart; i<longestStart+maxLen; i++)
        printf("%c", str[i]);
    printf("\n");

    return 0;
}
