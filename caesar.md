# Caesar Cipher

Write a function called `encrypt` that receives a string of lowercase letters and a number. It should return a new string with all the characters shifted to the right the times specified by the second argument.

```javascript
encrypt("abc", 1); // "bcd"
encrypt("defend", 1); // "efgfoe"
```

Now write a function called `decrypt` that does de opposite:

```javascript
decrypt("bcd", 1); // "abc"
decrypt("efgfoe", 1); // "defend"
```
