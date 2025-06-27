(defn reverseList [nums]
  (letfn [(rev-helper [s]
            (when (seq s)
              (concat (rev-helper (rest s)) [(first s)])))]
    (rev-helper nums)))

(reverseList [1 2 3 4 5])