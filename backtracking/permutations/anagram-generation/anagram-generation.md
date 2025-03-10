Decision Tree
```sh
                 "abc"
            /      |      \
        "bc"      "ac"     "ab"
        /   \     /   \    /   \
      "c"   "b" "c"   "a" "b"  "a"
       |     |   |     |   |    |
      abc   acb bac   bca  cab  cba

```

## Recursion Tree
```yml
generateAnagrams("abc")
    'a': generateAnagrams("bc")
        'b': generateAnagrams("c") -> ['c'] | anagrams=['bc']
    generateAnagrams("b") → ['b'] | anagrams=['cb']
return: anagrams=['bc', 'cb']
anagrams=["abc", "acb]
    "b": generateAnagrams("ac")
        "a": generateAnagrams("c") -> ["c"] | anagrams=["ac]
    generateAnagrams("c") → ['c'] | anagrams=['ca']
return: anagrams=["ac", "ca"]
anagrams=["abc", "acb", "bac", "bca"]

```