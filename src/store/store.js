import Vue from 'vue';
import Vuex from 'vuex';
import {authRef, dbRef, gProvider, db } from './db.js';

Vue.use(Vuex); // vuex 사용

export const store = new Vuex.Store({ // store export
    state:{
        todoItems:[
            {
              title:'',
              contents:'',
              complete:false,
              favorite:false,
              date:'',
            }
          ],
		userAuth: {
            status: false,
            uid: ""
        },
          imgData:'',
          total:0,
          completenum:0,
          password:"",
          chartflag:false,
          treeflag:false,
          themacode:3,
          showHelpModal:false,
          themaBoxState:false,
          leaf:0,
          ////////////////////////
          showTodoModal:false, // Add 입력창 열기
          showListModal:false, // List 창 열기
          showModifyModal:false,
          showPasswordModal:false,
          showPasswordUnlockModal:false,
          showEPasswordModal:false,
          showHelpModal:false,
          idx:0,
          ////////////////////
          calData:[],
    },
    getters:{ // 여기서 if문으로 렌더링 가능 ??????????
        getTodos: state => {
            return state.todoItems;
        },
		  getAuth: state => {
            return state.userAuth;
        },

    },
    mutations:{ // 파라미터 2개뿐? state,value
        addTodo: (state, value) => {
            state.showTodoModal = false;
            if(value.title){
                state.total++;
            }
            var title = value.title;
            var contents = value.contents;
            var complete = value.complete;
            var favorite = value.favorite;
            if(complete){
                state.completenum++;
            }
            var date = value.date;//.toISOString().substring(0,10);
            state.todoItems.push({
                title,
                contents,
                complete,
                favorite,
                date
              });
        },
        removeTodo: (state, index) => {
            state.total--;
            state.todoItems.splice(index, 1);
        },
        clearAll: state => {
            state.todoItems = [];
            state.total = 0;
            state.completenum = 0;
        },
        ModifyTodo : (state, mTodo) => {
            state.showModifyModal = !state.showModifyModal;
            var title = mTodo.mTitle;
            var contents = mTodo.mContents;
            var date = mTodo.mDate;
            var complete = false;
            var favorite = false;
            var m={title,contents,complete,favorite,date};
            state.todoItems.splice(state.idx, 1,m);
           },
         confirmTodo: (state, index) => {
           state.todoItems[index].complete=!state.todoItems[index].complete
         },
         favoriteTodo: (state, index) => {
           state.todoItems[index].favorite = !state.todoItems[index].favorite
         },
         PasswordTodo: (state, pw) => {
            state.password=pw;
          },
         passwordUnlockTodo: (state, isCorrect) => {
            if(isCorrect){
                state.password="";
            }else{
                alert("비밀번호가 틀렸습니다! 다시입력해주세요")
            }
            state.showPasswordUnlockModal = false;

        },
        EPasswordTodo: (state, isCorrect) => { 
            if(isCorrect){
             state.showListModal=true;  
            }else{
              alert("비밀번호가 틀렸습니다! 다시입력해주세요");
            }
            state.showEPasswordModal = false;
         },
         setLeaf:(state, leaf) =>{
             state.leaf = leaf;
         },
		 userAuth: (state, uid) => {
            state.userAuth.status=true;
            state.userAuth.uid = uid;
        },
        getCanvas:(state,data)=>{
            state.imgData = data;
        },

        getCalData:(state,obj) => {
            
            var title = obj.title;
            var desc = obj.contents;
            var date = obj.date;
            state.calData.push({
               'date' : date,
               'title' : title,
               'desc' : desc
            })            
        },
        refresh(){
            history.go(0);
        }
    },
    actions: {
        signOut: (context) => {
            authRef
              .signOut()
              .then(() => {})
              .catch(error => console.log(error));
              context.commit('userAuth','');
          },
        getCalData:(context) => {
            db.collection(context.state.userAuth.uid).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    if(doc.data().title){
                       context.commit('getCalData',doc.data());
                    }
                });
            });
        },
        setCanvas:(context,data) => {
            db.collection(context.state.userAuth.uid).doc('canvas').set({ 'canvas' : data});
            db.collection(context.state.userAuth.uid).doc('canvas').get().then(function(doc){
                context.commit('getCanvas',doc.data().canvas);
            }); 
        },
        getCanvas:(context) => {
            db.collection(context.state.userAuth.uid).doc('canvas').get().then(function(doc){
                context.commit('getCanvas',doc.data().canvas);
            }); 
        },
		userAuth: (context) =>{
            authRef.signInWithPopup(gProvider)
            .then(result=>{
                context.commit('userAuth',result.user.uid);
            })
     
        },
        clearAll: (context) => { // 비동기 작업 수행 후 mutation commit
            context.commit('clearAll');
            db.collection(context.state.userAuth.uid).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    if(doc.data().title){
                        db.collection(context.state.userAuth.uid).doc(doc.data().title).delete();
                    }
                });
            });
        },
        getTodos: (context,userid) => {
            context.commit('userAuth',userid);
            db.collection(context.state.userAuth.uid).doc('PassWord').get().then(function(doc){
                if(doc.data()){
                    context.commit('PasswordTodo',doc.data().password);
                }
            }); 
            db.collection(context.state.userAuth.uid).doc('leaf').get().then(function(doc){
                if(doc.data()){
                    var leaf = doc.data().leaf;
                    context.commit('setLeaf',leaf);
                }
            });    
            db.collection(context.state.userAuth.uid).onSnapshot(query => {
                context.commit('clearAll');
                query.forEach(doc => { 
                    context.commit('addTodo', {
                        'id': doc.id,
                        'title': doc.data().title,
                        'contents': doc.data().contents,
                        'complete': doc.data().complete,
                        'favorite': doc.data().favorite,
                        'date': doc.data().date
                    });
                });        
            });
        },
        ModifyTodo: (context, value) => {
            db.collection(context.state.userAuth.uid).doc(value.id).delete();
            db.collection(context.state.userAuth.uid).doc(value.mTitle).set({
                'title' : value.mTitle,
                'contents' : value.mContents,
                'complete' : false,
                'favorite' : false,
                'date' : value.mDate,
            });
        },
        confirmTodo: (context, id) => {
            db.collection(context.state.userAuth.uid).doc(id).get().then(function(doc){
                db.collection(context.state.userAuth.uid).doc(id).update({'complete' : !doc.data().complete});
            });
        },
        favoriteTodo: (context, id) => {
            db.collection(context.state.userAuth.uid).doc(id).get().then(function(doc){
                db.collection(context.state.userAuth.uid).doc(id).update({'favorite' : !doc.data().favorite});
            });        
        },
        removeTodo: (context, payload) => {
            db.collection(context.state.userAuth.uid).doc(payload).delete();
        },
        PasswordTodo: (context, pw) => {
            db.collection(context.state.userAuth.uid).doc('PassWord').set({
                'password' : pw,
            });
        },
        passwordUnlockTodo:(context) =>{
            db.collection(context.state.userAuth.uid).doc('PassWord').delete();
        },
        addTodo: (context, value) => {
            db.collection(context.state.userAuth.uid).doc('leaf').get().then(function(doc){
                if(doc.data()){
                    var leaf = ++doc.data().leaf;
                    db.collection(context.state.userAuth.uid).doc('leaf').set({'leaf' : leaf});
                    context.commit('setLeaf',leaf);
                }else{
                    db.collection(context.state.userAuth.uid).doc('leaf').set({'leaf' : 1});
                    context.commit('setLeaf',1);
                }
            });                    
            let id = value.Title;
            var date = value.Date.toISOString().substring(0,4) + '/' + value.Date.toISOString().substring(5,7)
                        + '/' + value.Date.toISOString().substring(8,10);
                        db.collection(context.state.userAuth.uid).doc(id).set({
                        'title': value.Title, 
                      'contents' : value.Contents, 
                       'complete' : false,
                       'favorite' : false,
                       'date' : date, });            
        },
		
        reset:(context) => {
            context.commit('clearAll');
            if(db.collection(context.state.userAuth.uid).doc('leaf')){
                db.collection(context.state.userAuth.uid).doc('leaf').delete();
            }
            db.collection(context.state.userAuth.uid).doc('leaf').get().then(function(doc){
                context.commit('setLeaf',0)
            });
            if(db.collection(context.state.userAuth.uid).doc('PassWord')){
                db.collection(context.state.userAuth.uid).doc('PassWord').delete();
            }
            db.collection(context.state.userAuth.uid).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    db.collection(context.state.userAuth.uid).doc(doc.data().title).delete();
                });
            });
        }
    }
});
