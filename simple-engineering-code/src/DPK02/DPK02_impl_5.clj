(defn reverseList [numbers]
  (reduce (fn [acc n] (cons n acc)) '() numbers))

(reverseList [1 2 3 4 5])