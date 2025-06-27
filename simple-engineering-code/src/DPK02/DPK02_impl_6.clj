(defn reverseList [numbers]
  (loop [nums numbers
         acc '()]
    (if (empty? nums)
      acc
      (recur (rest nums) (cons (first nums) acc)))))

(reverseList [1 2 3 4 5])