(defn reverseList [nums]
  (if (vector? nums)
    (rseq nums)
    (reverse nums)))

(reverseList [1 2 3 4 5])