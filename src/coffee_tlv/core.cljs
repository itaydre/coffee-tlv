(ns coffee-tlv.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [coffee-tlv.components.items-list :refer [items-list]]
    [devtools.core :as devtools]))


(devtools/install!)

;; -------------------------
;; Views

(defn home-page []
  [items-list])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
