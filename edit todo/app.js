window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#newtaskinput");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});



 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,ref,set} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDhulWc34l9g7f1lNpsYbYDD_vw6Moaq1I",
   authDomain: "fmp-todo-app.firebaseapp.com",
   projectId: "fmp-todo-app",
   storageBucket: "fmp-todo-app.appspot.com",
   messagingSenderId: "615915335380",
   appId: "1:615915335380:web:d0e91c3cc1a01f58929541",
   measurementId: "G-G08CZRD5LG"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const database = getDatabase();

   
 var newtaskinput =document.getElementById('newtaskinput');
 var newtasksubmit = document.getElementById("newtasksubmit");

 

 window.add = function (){
    var obj = {
        newtaskinput: newtaskinput.value,
        newtasksubmit: newtasksubmit.value,
    };
    console.log(obj);
    obj.id = Math.random().toString().slice(2)
    const orderRef = ref(database, `search/${obj.id}/`);
    set(orderRef,obj);
};

function getData() {
    var dataList = []
    const orderRef = ref(database, "search/");
    onchildAdded(orderRef, function (dt){
        dataList.push(dt.val());
        console.log(dataList);
        // parent.innerHTML += '<li>${dataList[i].search}</li>'
    });
    
    getData();
}
    
    
