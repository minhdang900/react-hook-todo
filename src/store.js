import { useEffect } from "react";
import firebase from "./firebase";
import { LOAD_TODO } from "./constant";
export const useLoadTodo = (dispatch) => {
  const fetchTodo = (dispatch) => {
    (async () => {
      const db = firebase.firestore();
      const docRef = await db.collection("app").doc("eUNMb1JMNmQ6hyQRFnn0");
      const doc = await docRef.get();
      dispatch({
        type: LOAD_TODO,
        payload: {
          ...doc.data(),
          loaded:true
        }
      });
    })()
  }
  useEffect(() => {
    fetchTodo(dispatch)
  }, [dispatch]);
}
export const useStoreTodo = (state) => {
  useEffect(()=> {
    if(state.loaded){
      const db = firebase.firestore();
      db.collection("app").doc("eUNMb1JMNmQ6hyQRFnn0").set(state).then(function() {
      });
    }
  }, [state]);
}
